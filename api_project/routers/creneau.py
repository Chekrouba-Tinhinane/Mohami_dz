from fastapi import Body, Depends,APIRouter,Cookie
from sqlalchemy.orm import Session


import schemas,crud,models
from database import SessionLocal,engine 
import crud
from database import SessionLocal
import schemas

routerCreneau=APIRouter(
    prefix="/creneau",
    tags=['creneau']
)

def get_db():
    db=SessionLocal()
    try: 
        yield db
    finally:
        db.close()

@routerCreneau.post("/add_creneau")
async def add_creneau(creneau:schemas.Interval_libreCreate,db:Session=Depends(get_db),jwt:str=Cookie(default=None)):
    return crud.ajout_creneau(db,creneau,jwt)

@routerCreneau.post("/afficher")
async def afficher_creneau(avocat:int=Body(...),db:Session=Depends(get_db),jwt:str=Cookie(default=None)):
    return crud.afficher_creneau(db,avocat)