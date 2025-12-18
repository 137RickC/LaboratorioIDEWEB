class OperadorInvalidoError(Exception):
    def __init__(self, operador):
        super().__init__(f"Operador inválido: '{operador}'. Usa + - * /")

def calcular(operacion: str):
    try:
        partes = operacion.split()

        if len(partes) != 3:
            raise ValueError("La operación debe tener el formato: numero operador numero")

        num1_str, operador, num2_str = partes
        num1 = float(num1_str)
        num2 = float(num2_str)

        if operador == "+":
            return num1 + num2
        elif operador == "-":
            return num1 - num2
        elif operador == "*":
            return num1 * num2
        elif operador == "/":
            if num2 == 0:
                raise ZeroDivisionError
            return num1 / num2
        else:
            raise OperadorInvalidoError(operador)

    except ZeroDivisionError:
        return "Error: no se puede dividir entre cero"
    except ValueError as e:
        return f"Error de valor: {e}"
    except OperadorInvalidoError as e:
        return e
# Pruebas
print(calcular("10 / 2"))    
print(calcular("8 * 3"))     
print(calcular("5 / 0"))     
print(calcular("a + 2"))     
print(calcular("4 ^ 2"))     
print(calcular("10 2"))      
