from Ejercicio03 import Rectangulo, Triangulo, Circulo
#Ejercicio3 = Geometria 
figuras = [
    Rectangulo(4, 8),
    Triangulo(4, 5, 6),
    Circulo(2)
]
for figura in figuras:
    print(f"Figura: {figura.__class__.__name__}")
    print(f"Área: {figura.area():.2f}")
    print(f"Perímetro: {figura.perimetro():.2f}")
    print()