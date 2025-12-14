import math
def normalizar(lista, modo):
    if not lista:
        raise ValueError("La lista no puede estar vacía")
    resultado = []
    
    if modo == "minmax":
        minimo = min(lista)
        maximo = max(lista)
        rango = maximo - minimo

        if rango == 0:
            raise ZeroDivisionError("No se puede normalizar: max - min = 0")

        for x in lista:
            resultado.append((x - minimo) / rango)

    elif modo == "zscore":
        n = len(lista)
        media = sum(lista) / n

        varianza = sum((x - media) ** 2 for x in lista) / n
        desviacion = math.sqrt(varianza)

        if desviacion == 0:
            raise ZeroDivisionError("No se puede normalizar: desviación estándar = 0")

        for x in lista:
            resultado.append((x - media) / desviacion)

    elif modo == "unit":
        norma = math.sqrt(sum(x ** 2 for x in lista))

        if norma == 0:
            raise ZeroDivisionError("No se puede normalizar: norma del vector = 0")

        for x in lista:
            resultado.append(x / norma)

    else:
        raise ValueError("Modo inválido. Use 'minmax', 'zscore' o 'unit'")

    return resultado


#Prueba
valores = [10, 20, 30]

print(normalizar(valores, "minmax"))
print(normalizar(valores, "zscore"))
print(normalizar(valores, "unit"))
print("Original:", valores)
