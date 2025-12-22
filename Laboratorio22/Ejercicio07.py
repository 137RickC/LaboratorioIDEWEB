from wsgiref.simple_server import make_server

def app(environ, start_response):
    path = environ["PATH_INFO"]

    if path == "/":
        start_response("200 OK", [("Content-Type", "text/plain")])
        return [b"Inicio"]

    elif path == "/saludo":
        start_response("200 OK", [("Content-Type", "text/plain")])
        return [b"Hola mundo desde WSGI"]

    start_response("404 Not Found", [("Content-Type", "text/plain")])
    return [b"No encontrado"]

server = make_server("localhost", 8000, app)
server.serve_forever()
