from fastapi import Body, Depends,APIRouter,Cookie
from sqlalchemy.orm import Session


import schemas,crud,models
from database import SessionLocal,engine 
import crud
from database import SessionLocal
import schemas

routerSpeciality=APIRouter(
    prefix="/speciality",
    tags=['speciality']
)

def get_db():
    db=SessionLocal()
    try: 
        yield db
    finally:
        db.close()


  
@routerSpeciality.post('/create_speciality')
async def create_speciality(speciality:schemas.SpecialityCreate,db:Session=Depends(get_db),jwt:str=Cookie(default=None)):
    return crud.register_specialities(db,speciality,jwt)




@routerSpeciality.get('/speciality_list')
async def get_speciality(db:Session=Depends(get_db),jwt:str=Cookie(default=None)):
    specialities=crud.show_specialities(db)
    return specialities


@routerSpeciality.post('/speciality_update')
async def update_speciality(speciality:schemas.SpecialityCreate,id_speciality:int=Body(...),db:Session=Depends(get_db),jwt:str=Cookie(default=None)):
    data=crud.update_speciality(db,speciality,id_speciality,jwt)
    return data

@routerSpeciality.post('/speciality_delete')
async def delete_speciality(id_speciality:int=Body(...),db:Session=Depends(get_db),jwt:str=Cookie(default=None)):
    data=crud.delete_speciality(db,id_speciality,jwt)
    return data
