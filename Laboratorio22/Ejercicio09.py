from wsgiref.simple_server import make_server
import json, os, mimetypes
from urllib.parse import unquote

equipos = []
contador = 1
STATIC_DIR = "static"

def servir_estatico(path):
    file_path = path.lstrip("/")
    full_path = os.path.join(STATIC_DIR, file_path.replace("static/", ""))

    if not os.path.isfile(full_path):
        return None, None

    tipo, _ = mimetypes.guess_type(full_path)
    if tipo is None:
        tipo = "application/octet-stream"

    with open(full_path, "rb") as f:
        return f.read(), tipo

def app(environ, start_response):
    global contador
    method = environ["REQUEST_METHOD"]
    path = unquote(environ["PATH_INFO"])

    # Estáticos
    if path.startswith("/static/"):
        contenido, tipo = servir_estatico(path)
        if contenido is None:
            start_response("404 Not Found", [])
            return [b"Archivo no encontrado"]
        start_response("200 OK", [("Content-Type", tipo)])
        return [contenido]

    if method == "GET" and path == "/":
        contenido, tipo = servir_estatico("/static/index.html")
        start_response("200 OK", [("Content-Type", tipo)])
        return [contenido]

    # API equipos
    if method == "GET" and path == "/equipos":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(equipos).encode()]

    if method == "POST" and path == "/equipos":
        length = int(environ["CONTENT_LENGTH"])
        data = json.loads(environ["wsgi.input"].read(length))

        equipo = {
            "id": contador,
            "nombre": data["nombre"],
            "ciudad": data["ciudad"],
            "nivelAtaque": data["nivelAtaque"],
            "nivelDefensa": data["nivelDefensa"]
        }
        
        equipos.append(equipo)
        contador += 1

        start_response("201 Created", [("Content-Type", "application/json")])
        return [json.dumps(equipo).encode()]

    if method == "GET" and path.startswith("/equipos/"):
        id_buscar = int(path.split("/")[-1])
        for e in equipos:
            if e["id"] == id_buscar:
                start_response("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(e).encode()]
        start_response("404 Not Found", [])
        return [b"Equipo no encontrado"]

    start_response("404 Not Found", [])
    return [b"Ruta no valida"]

server = make_server("localhost", 8000, app)
print("Servidor en http://localhost:8000")
server.serve_forever()
