import numpy as np

def normalizar(lista, modo):
    if not lista:
        raise ValueError("La lista no puede estar vacía")
    v = np.array(lista, dtype=float)

    if modo == "minmax":
        minimo = v.min()
        maximo = v.max()
        rango = maximo - minimo

        if rango == 0:
            raise ZeroDivisionError("No se puede normalizar: max - min = 0")

        return list((v - minimo) / rango)

    elif modo == "zscore":
        desviacion = v.std()

        if desviacion == 0:
            raise ZeroDivisionError("No se puede normalizar: desviación estándar = 0")

        return list((v - v.mean()) / desviacion)

    elif modo == "unit":
        norma = np.linalg.norm(v)

        if norma == 0:
            raise ZeroDivisionError("No se puede normalizar: norma del vector = 0")

        return list(v / norma)

    else:
        raise ValueError("Modo inválido. Use 'minmax', 'zscore' o 'unit'")


#Prueba
valores = [10, 20, 30]

print(normalizar(valores, "minmax"))
print(normalizar(valores, "zscore"))
print(normalizar(valores, "unit"))
print("Original:", valores)
