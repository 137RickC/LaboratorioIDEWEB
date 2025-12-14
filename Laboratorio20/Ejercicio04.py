# Definimos las tasas y rangos
RANGO1_LIMITE = 20000
RANGO2_LIMITE = 50000
RANGO3_LIMITE = 100000
TASA1 = 0.00  
TASA2 = 0.10 
TASA3 = 0.20
TASA4 = 0.30
#
print("Calculadora de Impuestos Progresivos")
ingreso_mensual = float(input("Ingrese el ingreso mensual: "))

ingreso_anual = ingreso_mensual * 14

# Inicializamos variables
impuesto_total = 0
monto_imponible = ingreso_anual

print(f"\nIngreso Anual Total: ${ingreso_anual:,.2f}")
print("Impuesto por tramo:")

# Tramo 4: Mayor a 100000
if monto_imponible > RANGO3_LIMITE:
    base_tramo = monto_imponible - RANGO3_LIMITE
    impuesto_tramo = base_tramo * TASA4
    impuesto_total += impuesto_tramo
    monto_imponible -= base_tramo
    print(f"  Rango > {RANGO3_LIMITE}: ${base_tramo:,.2f} * {int(TASA4*100)}% = ${impuesto_tramo:,.2f}")
# Tramo 3: 50000-100000
if monto_imponible > RANGO2_LIMITE:
    base_tramo = monto_imponible - RANGO2_LIMITE
    impuesto_tramo = base_tramo * TASA3
    impuesto_total += impuesto_tramo
    monto_imponible -= base_tramo
    print(f"  Rango [{RANGO2_LIMITE}-{RANGO3_LIMITE}]: ${base_tramo:,.2f} * {int(TASA3*100)}% = ${impuesto_tramo:,.2f}")

# Tramo 2: 20000-50000
if monto_imponible > RANGO1_LIMITE:
    base_tramo = monto_imponible - RANGO1_LIMITE
    impuesto_tramo = base_tramo * TASA2
    impuesto_total += impuesto_tramo
    monto_imponible -= base_tramo
    print(f"  Rango [{RANGO1_LIMITE}-{RANGO2_LIMITE}]: ${base_tramo:,.2f} * {int(TASA2*100)}% = ${impuesto_tramo:,.2f}")
# Tramo 1: 0-20000
if monto_imponible > 0:
    base_tramo = monto_imponible
    impuesto_tramo = base_tramo* TASA1
    impuesto_total += impuesto_tramo
    print(f"  Rango [0-{RANGO1_LIMITE}]: ${base_tramo:,.2f} * {int(TASA1*100)}% = ${impuesto_tramo:,.2f}")

# Resultados
tasa_efectiva = (impuesto_total / ingreso_anual) * 100 if ingreso_anual > 0 else 0
print(f"Total de impuestos a pagar: ${impuesto_total:,.2f}")
print(f"Tasa efectiva real: {tasa_efectiva:.2f}%")

