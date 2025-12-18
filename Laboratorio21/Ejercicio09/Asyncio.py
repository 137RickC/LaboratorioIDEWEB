import asyncio
import time
import random

async def consulta_bd(nombre):
    tiempo = random.randint(1, 5)
    print(f"Iniciando consulta {nombre} ({tiempo}s)")
    await asyncio.sleep(tiempo)
    print(f"Finalizó consulta {nombre}")

async def main():
    inicio = time.time()
    await asyncio.gather(
        consulta_bd("Q1"),
        consulta_bd("Q2"),
        consulta_bd("Q3")
    )
    print("Tiempo total con asyncio:", round(time.time() - inicio, 2), "s")

asyncio.run(main())
