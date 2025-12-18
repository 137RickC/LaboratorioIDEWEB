import math
class figura:
    def perimetro(self):
        pass 
    def area(self):
        pass
class Rectangulo():
    def __init__(self, base, altura):
        self.base = base
        self.altura= altura
    def area(self):
        return self.base*self.altura
    def  perimetro (self):
        return 2*(self.base+self.altura)
class Triangulo:
    def __init__(self,lado1,lado2,lado3):
        self.lado1=lado1
        self.lado2=lado2
        self.lado3=lado3
    def area(self):
        s=(self.lado1+self.lado2+self.lado3)/2
        return math.sqrt(s*(s-self.lado1)*(s-self.lado2)*(s-self.lado3))
    def perimetro(self):
        return self.lado1+self.lado2+self.lado3
class Circulo:
    def __init__(self,radio):
        self.radio=radio
    def area (self):
        return math.pi*self.radio**2
    def perimetro (self):
        return 2*math.pi*self.radio
#Pruebas
'''
figuras=[
     Rectangulo(5,5),
     Triangulo(6,6,6),
     Circulo(4)
]
for figura in figuras:
    print(f"Figura: {figura.__class__.__name__}")
    print(f"Area: {figura.area():.2f}")
    print(f"Perimetro: {figura.perimetro():.2f}")
    print()
'''
