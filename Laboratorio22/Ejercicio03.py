import requests
url = "https://httpbin.org/get"
r = requests.get(url)
data = r.json()

print("IP:", data["origin"])
print("Headers:", data["headers"])
print("Args:", data["args"])