import multiprocessing
import time
import random
def consulta_bd(nombre):
    tiempo = random.randint(1, 5)
    print(f"Iniciando consulta {nombre} ({tiempo}s)")
    time.sleep(tiempo)
    print(f"Finalizó consulta {nombre}")

if __name__ == "__main__":
    inicio = time.time()
    procesos = []
    for i in range(1, 4):
        p = multiprocessing.Process(target=consulta_bd, args=(f"Q{i}",))
        p.start()
        procesos.append(p)
    for p in procesos:
        p.join()
    print("Tiempo total con procesos:", round(time.time() - inicio, 2), "s")
