from wsgiref.simple_server import make_server
import json, os, mimetypes
from urllib.parse import unquote

ARCHIVO_EQUIPOS = "equipos.json"
STATIC_DIR = "static"

if os.path.exists(ARCHIVO_EQUIPOS):
    with open(ARCHIVO_EQUIPOS, "r", encoding="utf-8") as f:
        equipos = json.load(f)
else:
    equipos = []

contador = max((e["id"] for e in equipos), default=0) + 1

def guardar_equipos():
    with open(ARCHIVO_EQUIPOS, "w", encoding="utf-8") as f:
        json.dump(equipos, f, indent=4, ensure_ascii=False)

def servir_estatico(path):
    ruta = path.lstrip("/")
    ruta_completa = os.path.join(STATIC_DIR, ruta.replace("static/", ""))

    if not os.path.isfile(ruta_completa):
        return None, None

    tipo, _ = mimetypes.guess_type(ruta_completa)
    if tipo is None:
        tipo = "application/octet-stream"

    with open(ruta_completa, "rb") as f:
        return f.read(), tipo

def app(environ, start_response):
    global contador

    metodo = environ["REQUEST_METHOD"]
    path = unquote(environ["PATH_INFO"])

    if path.startswith("/static/"):
        contenido, tipo = servir_estatico(path)
        if contenido is None:
            start_response("404 Not Found", [("Content-Type", "text/plain")])
            return [b"Archivo no encontrado"]

        start_response("200 OK", [("Content-Type", tipo)])
        return [contenido]

    if metodo == "GET" and path == "/":
        contenido, tipo = servir_estatico("/static/index.html")
        start_response("200 OK", [("Content-Type", tipo)])
        return [contenido]

    if metodo == "GET" and path == "/equipos":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(equipos).encode("utf-8")]

    if metodo == "POST" and path == "/equipos":
        length = int(environ.get("CONTENT_LENGTH", 0))
        body = environ["wsgi.input"].read(length)
        data = json.loads(body)

        equipo = {
            "id": contador,
            "nombre": data["nombre"],
            "ciudad": data["ciudad"],
            "nivelAtaque": data["nivelAtaque"],
            "nivelDefensa": data["nivelDefensa"]
        }

        equipos.append(equipo)
        contador += 1
        guardar_equipos()

        start_response("201 Created", [("Content-Type", "application/json")])
        return [json.dumps(equipo).encode("utf-8")]

    if metodo == "GET" and path.startswith("/equipos/"):
        try:
            equipo_id = int(path.split("/")[-1])
        except ValueError:
            start_response("400 Bad Request", [("Content-Type", "text/plain")])
            return [b"ID invalido"]

        for equipo in equipos:
            if equipo["id"] == equipo_id:
                start_response("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(equipo).encode("utf-8")]

        start_response("404 Not Found", [("Content-Type", "text/plain")])
        return [b"Equipo no encontrado"]

    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"Ruta no valida"]

server = make_server("localhost", 8000, app)
print("Servidor WSGI en http://localhost:8000")
server.serve_forever()
