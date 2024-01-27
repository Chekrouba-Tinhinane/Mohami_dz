from datetime import date, time
from pydantic import BaseModel
from typing import Optional

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
    telephone:str=Optional[str]
    siteweb:str=Optional[str]
    ville:str=Optional[str]
    region:str=Optional[str]
    codepostal:str=Optional[str]
    photo:str=Optional[str]
    latitude:float=Optional[float]
    longitude:float=Optional[float]
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
    telephone:str

class ClientCreate(ClientBase):
    password:str

class Client(ClientBase):
    id:int
    rdv_pris:list[Rdv_pris]=[]
    class config:
        orm_mode=True

class AdminBase(BaseModel):
    username:str

class AdminCreate(AdminBase):
    password:str

class Admin(AdminBase):
    id:int
    class config:
        orm_mode=True
