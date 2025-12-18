def copiar_texto(origen, destino):
    try:
        with open(origen, "r", encoding="utf-8") as f_origen:
            contenido = f_origen.read()

        with open(destino, "w", encoding="utf-8") as f_destino:
            f_destino.write(contenido)

        print("Archivo de texto copiado correctamente")

    except FileNotFoundError:
        print("Error: el archivo de origen no existe")
    except PermissionError:
        print("Error: permisos insuficientes")
    except Exception as e:
        print(f"Error inesperado: {e}")

copiar_texto("texto.txt", "copia.txt")