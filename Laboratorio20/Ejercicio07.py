# Lista donde se almacenan todos los estudiantes
estudiantes = []
#Metodos para manejar estudiantes
def agregar_estudiante():
    nombre = input("Nombre: ").strip()
    edad = int(input("Edad: "))
    promedio = float(input("Promedio: "))

    estudiante = {
        "nombre": nombre,
        "edad": edad,
        "promedio": promedio
    }

    estudiantes.append(estudiante)
    print("Estudiante agregado correctamente.\n")


def mostrar_estudiantes():
    if not estudiantes:
        print("No hay estudiantes registrados.\n")
        return

    for e in estudiantes:
        print(f"Nombre: {e['nombre']}, Edad: {e['edad']}, Promedio: {e['promedio']}")
    print()


def mejor_promedio():
    if not estudiantes:
        print("No hay estudiantes registrados.\n")
        return

    mejor = estudiantes[0]
    for e in estudiantes:
        if e["promedio"] > mejor["promedio"]:
            mejor = e

    print("Estudiante con mejor promedio:")
    print(f"Nombre: {mejor['nombre']}, Edad: {mejor['edad']}, Promedio: {mejor['promedio']}\n")


def buscar_por_nombre():
    nombre = input("Ingrese el nombre a buscar: ").strip()
    encontrado = False

    for e in estudiantes:
        if e["nombre"].lower() == nombre.lower():
            print(f"Nombre: {e['nombre']}, Edad: {e['edad']}, Promedio: {e['promedio']}\n")
            encontrado = True
            break

    if not encontrado:
        print("Estudiante no encontrado.\n")


def eliminar_por_nombre():
    nombre = input("Ingrese el nombre a eliminar: ").strip()

    for e in estudiantes:
        if e["nombre"].lower() == nombre.lower():
            estudiantes.remove(e)
            print("Estudiante eliminado correctamente.\n")
            return

    print("Estudiante no encontrado.\n")


#Menu de opciones
while True:
    print("REGISTRO DE ESTUDIANTES")
    print("1. Agregar estudiante")
    print("2. Mostrar estudiantes")
    print("3. Mostrar estudiante con mejor promedio")
    print("4. Buscar por nombre")
    print("5. Eliminar por nombre")
    print("6. Salir")

    opcion = input("Seleccione una opción: ")

    if opcion == "1":
        agregar_estudiante()
    elif opcion == "2":
        mostrar_estudiantes()
    elif opcion == "3":
        mejor_promedio()
    elif opcion == "4":
        buscar_por_nombre()
    elif opcion == "5":
        eliminar_por_nombre()
    elif opcion == "6":
        print("Programa finalizado.")
        break
    else:
        print("Opción inválida.\n")
