from wsgiref.simple_server import make_server
import json
import os

ARCHIVO_LIBROS = "libros.json"

if os.path.exists(ARCHIVO_LIBROS):
    with open(ARCHIVO_LIBROS, "r", encoding="utf-8") as f:
        libros = json.load(f)
else:
    libros = []

contador = max((libro["id"] for libro in libros), default=0) + 1

def guardar_libros():
    with open(ARCHIVO_LIBROS, "w", encoding="utf-8") as f:
        json.dump(libros, f, indent=4, ensure_ascii=False)

def app(environ, start_response):
    global contador
    metodo = environ["REQUEST_METHOD"]
    path = environ["PATH_INFO"]

    if metodo == "GET" and path == "/libros":
        start_response("200 OK", [("Content-Type", "application/json")])
        return [json.dumps(libros).encode("utf-8")]

    if metodo == "POST" and path == "/libros":
        length = int(environ.get("CONTENT_LENGTH", 0))
        body = environ["wsgi.input"].read(length)
        data = json.loads(body)

        libro = {
            "id": contador,
            "titulo": data["titulo"],
            "autor": data["autor"],
            "anio": data["anio"]
        }

        libros.append(libro)
        contador += 1
        guardar_libros()
        start_response("201 Created", [("Content-Type", "application/json")])
        return [json.dumps(libro).encode("utf-8")]

    if metodo == "GET" and path.startswith("/libros/"):
        try:
            libro_id = int(path.split("/")[-1])
        except ValueError:
            start_response("400 Bad Request", [("Content-Type", "text/plain")])
            return [b"ID invalido"]
        for libro in libros:
            if libro["id"] == libro_id:
                start_response("200 OK", [("Content-Type", "application/json")])
                return [json.dumps(libro).encode("utf-8")]   
        start_response("404 Not Found", [("Content-Type", "text/plain")])
        return [b"Libro no encontrado"]

    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"Ruta no valida"]


server = make_server("localhost", 8000, app)
print("Servidor WSGI corriendo en http://localhost:8000")
server.serve_forever()
