import json
equipos = [
    {
        "nombre": "Real Madrid",
        "pais": "España",
        "nivelAtaque": 92,
        "nivelDefensa": 88
    },
    {
        "nombre": "Manchester City",
        "pais": "Inglaterra",
        "nivelAtaque": 95,
        "nivelDefensa": 90
    },
    {
        "nombre": "Bayern Munich",
        "pais": "Alemania",
        "nivelAtaque": 93,
        "nivelDefensa": 87
    },
    {
        "nombre": "PSG",
        "pais": "Francia",
        "nivelAtaque": 91,
        "nivelDefensa": 84
    },
]
# Convertir a JSON
json_equipos = json.dumps(equipos, indent=4, ensure_ascii=False)
print(json_equipos)

