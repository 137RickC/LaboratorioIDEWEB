from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/":
            self.send_response(200)
            self.send_header("Content-Type", "text/html")
            self.end_headers()
            self.wfile.write(b"<h1>Pagina principal</h1>")

        elif self.path == "/saludo":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"msg": "Hola"}).encode())

server = HTTPServer(("localhost", 8000), Handler)
print("Servidor en http://localhost:8000")
server.serve_forever()
