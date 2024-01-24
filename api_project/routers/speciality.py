from fastapi import Body, Depends,APIRouter
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
async def create_speciality(speciality:schemas.SpecialityCreate,db:Session=Depends(get_db)):
    return crud.register_specialities(db,speciality)




@routerSpeciality.get('/speciality_list')
async def get_speciality(db:Session=Depends(get_db)):
    specialities=crud.show_specialities
    return specialities