import json
import random
import requests

# Specify the path to your JSON file
json_file_path = "./data.json"

with open(json_file_path, 'r') as json_file:
    specialities=set()
    data = json.load(json_file)

for i in data:
        s=i['categories'][0].split(',')
        for speciality in s:
            specialities.add(speciality.strip())

specialities=list(specialities)
specialities.remove('')
admin_jwt='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOjEsInJvbGUiOiJhZG1pbiJ9.8Uh_Dz9GzqMOrZuWIH1a_WFlcLGXB-eCXlKnwIR0Yps'

# Specify the target URL




def adding_specialities():
    url = "http://localhost:8000/speciality/create_speciality"
    cookies = {"jwt": admin_jwt}
    for name in specialities:
        payload = {"name": name}
        response = requests.post(url, json=payload, cookies=cookies)

        if response.status_code == 200:
            print(response.content)
        else:
            print(f"Request failed with status code {response.status_code}")
            print("Response content:", response.text)

def adding_avocat():
     Tel=669234123
     for avocat in data:
          first_name=avocat['full_name'].strip().split(' ')[0]
          last_name=' '.join(avocat['full_name'].strip().split(' ')[1:])
          if avocat['email']==None:
               email=first_name+str(Tel)+'@gmail.com'
          if avocat['Tel']==None:
              telephone=str(Tel)
              Tel+=1
          ville=random.choice(['alger','jijel','blida'])
          region= ville
          codepostal= "18000"
          photo= "string"
          latitude= 0
          longitude= 0
          langue= random.choice(["french",'arabic'])
          password= "password"
          avocat_spe=avocat['categories'][0].strip().split(',')
          id_speciality=specialities.index(random.choice(avocat_spe).strip())
          
          payload={
            "avocat": {
            "first_name": first_name,
            "last_name": last_name,
            "email": email,
            "telephone": telephone,
            "siteweb": "google.com",
            "ville": ville,
            "region": region,
            "codepostal": codepostal,
            "photo": photo,
            "latitude": latitude,
            "longitude": longitude,
            "langue": langue,
            "password": password
            },
            "id_speciality": id_speciality
        }
          url = "http://127.0.0.1:8000/avocat/register_avocat"
          response = requests.post(url, json=payload)
          if response.status_code == 200:
                print(response.content)
          else:
                print(f"Request failed with status code {response.status_code}")
                print("Response content:", response.text)


def approve_all():
     url = "http://127.0.0.1:8000/avocat/avocat_verify"
     for i in range(1,200):
          response = requests.post(url, data=str(i))
          if response.status_code == 200:
                print(response.content)
          else:
                print(f"Request failed with status code {response.status_code}")
                print("Response content:", response.text)


approve_all()

