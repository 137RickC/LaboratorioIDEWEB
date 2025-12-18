import threading
import time
import random

def consulta_bd(nombre):
    tiempo = random.randint(1, 5)
    print(f"Iniciando consulta {nombre} ({tiempo}s)")
    time.sleep(tiempo)
    print(f"Finalizó consulta {nombre}")

inicio = time.time()
hilos = []
for i in range(1, 4):
    h = threading.Thread(target=consulta_bd, args=(f"Q{i}",))
    h.start()
    hilos.append(h)
for h in hilos:
    h.join()

print("Tiempo total con hilos:", round(time.time() - inicio, 2), "s")
