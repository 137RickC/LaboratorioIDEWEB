#entrada de datos
salario_base = float(input("Ingrese el salario base: "))
horas_extras = float(input("Ingrese la cantidad de horas extras trabajadas: "))
pago_hora_extra = float(input("Ingrese el pago por hora extra: "))
bono = float(input("Ingrese el bono adicional: "))
afp = float(input("Ingrese el porcentaje de descuento para AFP: "))
salud = float(input("Ingrese el porcentaje de descuento para Salud: "))
#calculos
salrioneto= salario_base + (horas_extras * pago_hora_extra) + bono - (salario_base * afp/100) - (salario_base * salud/100)
salariobruto= salario_base + (horas_extras * pago_hora_extra)
descuentostotales= (salario_base * afp/100) + (salario_base * salud/100)
#prints
print("Salario Bruto: ", salariobruto)
print("Descuentos Totales: ", descuentostotales)
print("Salario Neto: ", salrioneto)
