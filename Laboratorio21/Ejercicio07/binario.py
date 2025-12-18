def copiar_binario(origen, destino):
    try:
        with open(origen, "rb") as f_origen:
            with open(destino, "wb") as f_destino:
                while True:
                    bloque = f_origen.read(4096)
                    if not bloque:
                        break
                    f_destino.write(bloque)

        print("Archivo binario copiado correctamente")

    except FileNotFoundError:
        print("Error: el archivo de origen no existe")
    except PermissionError:
        print("Error: permisos insuficientes")
    except Exception as e:
        print(f"Error inesperado: {e}")

copiar_binario("awd.jpg", "foto_copia.jpg")

