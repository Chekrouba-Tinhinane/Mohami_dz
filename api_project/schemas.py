from datetime import date, time
from pydantic import BaseModel

class competenceBase(BaseModel):
    title:str
    description:str
class competenceCreate(competenceBase):
    pass

class competence(competenceBase):
    id:int
    id_avocat:int
    class config:
        orm_mode=True

class Interval_libreBase(BaseModel):
    DateInterval : date
    HeureDebut:time
    HeureFin:time
    NbrMaxRdv:int
    id_avocat:int

class Interval_libreCreate(Interval_libreBase):
    pass


class Rdv_prisBase(BaseModel):
    id_avocat:int
    id_client:int
    id_interval_libre:int

class Rdv_prisCreate(Rdv_prisBase):
    pass

class Rdv_pris(Rdv_prisBase):
    id:int

class Interval_libre(Interval_libreBase):
    id:int 
    rdv_pris:list[Rdv_pris]=[]
    class config:
        orm_mode=True

class AvocatBase(BaseModel):
    first_name:str
    last_name:str
    email:str
    telephone:str=None
    siteweb:str=None
    ville:str=None
    region:str=None
    codepostal:str=None
    photo:str=None
    latitude:float=None
    longitude:float=None
    langue:str

class AvocatCreate(AvocatBase):
    password:str

class Avocat(AvocatBase):
    id:int
    id_speciality:int
    verified:str=False
    competences: list[competence]=[]
    interval_libre: list[Interval_libre]=[]
    rdv_pris: list[Rdv_pris]=[]

    class config:
        orm_mode=True



class SpecialityBase(BaseModel):
    name:str

class SpecialityCreate(SpecialityBase):
    pass

class speciality(SpecialityBase):
    id:int
    avocats:list[Avocat]=[]
    class config:
        orm_mode=True

class ClientBase(BaseModel):
    username:str
    email:str

class ClientCreate(ClientBase):
    password:str

class Client(ClientBase):
    id:int
    rdv_pris:list[Rdv_pris]=[]
    class config:
        orm_mode=True
