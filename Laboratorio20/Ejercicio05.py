n=0
while True:
    N=int(input("Ingrese un numero mayor o igual a 3: "))
    if N>=3: break
    print("Numero invalido")
matriz=[[0]*N for _ in range(N) ]
arriba = 0
abajo = N - 1
izquierda = 0
derecha = N - 1
num = 1  # Número a insertar

# Llenar la matriz 
while num <= N * N:
    # De izquierda a derecha
    for j in range(izquierda, derecha + 1):
        matriz[arriba][j] = num
        num += 1
    arriba += 1
    # De arriba a abajo
    for i in range(arriba, abajo + 1):
        matriz[i][derecha] = num
        num += 1
    derecha -= 1
    # De derecha a izquierda
    for j in range(derecha, izquierda - 1, -1):
        matriz[abajo][j] = num
        num += 1
    abajo -= 1
    # De abajo a arriba
    for i in range(abajo, arriba - 1, -1):
        matriz[i][izquierda] = num
        num += 1
    izquierda += 1

print("\nMatriz espiral:")
for fila in matriz:
    print(" ".join(f"{x:3}" for x in fila)) 
