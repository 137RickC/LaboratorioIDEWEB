class Libro:
    def __init__(self, titulo, autor, fecha, disponibilidad=True):
        self.titulo = titulo
        self._autor = autor 
        self.fecha = fecha
        self.disponibilidad = disponibilidad
    @property
    def autor(self):
        return self._autor
    def prestar(self):
        if self.disponibilidad:
            self.disponibilidad = False
            print("Libro prestado")
        else:
            print("El libro no se encuentra disponible")
    def devolver(self):
        self.disponibilidad = True
        print("Libro devuelto")
    def __str__(self):
        estado = "Disponible" if self.disponibilidad else "No disponible"
        return f"{self.titulo} - {self.autor} - {self.fecha} - {estado}"

class LibroDigital(Libro):
    def __init__(self, titulo, autor, fecha, disponibilidad=True):
        super().__init__(titulo, autor, fecha, disponibilidad)
    def prestar(self):
        print("Libro digital prestado")

class Biblioteca:
    def __init__(self):
        self.libros = []
    def agregarLibro(self, libro):
        self.libros.append(libro)
        print("Libro agregado")
    def listarLibros(self):
        print("\nLISTA DE LIBROS")
        if not self.libros:
            print("No hay libros en la biblioteca")
            return
        for libro in self.libros:
            print(f"- {libro}")
    def buscarPorAutor(self, autorB):
        print(f"\nLibros del autor {autorB}:")
        encontrado = False
        for libro in self.libros:
            if autorB.lower() == libro.autor.lower():
                print(libro)
                encontrado = True
        if not encontrado:
            print("No se encontraron libros de ese autor")
    def prestarLibro(self, titulo):
        for libro in self.libros:
            if libro.titulo.lower() == titulo.lower():
                libro.prestar()
                return
        print(f"No se encontró el libro '{titulo}'")

# Pruebas
biblio = Biblioteca()
# Libros físicos
biblio.agregarLibro(Libro("Cien Años de Soledad", "Gabriel García Márquez", 1967))
biblio.agregarLibro(Libro("El Principito", "Antoine de Saint-Exupéry", 1943))
biblio.agregarLibro(Libro("1984", "George Orwell", 1949))
# Libros digitales
biblio.agregarLibro(LibroDigital("Libro digital 1", "Autor 1", 2015))
biblio.agregarLibro(LibroDigital("Libro digital 2", "Autor 2", 1955))
biblio.agregarLibro(LibroDigital("Libro digital 3", "Autor 3", 1999))

biblio.listarLibros()
biblio.buscarPorAutor("george orwell")
biblio.prestarLibro("1984")
biblio.prestarLibro("1984")
biblio.prestarLibro("Libro digital 1")
biblio.prestarLibro("Libro digital 1")

