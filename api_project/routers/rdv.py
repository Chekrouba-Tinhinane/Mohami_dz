from fastapi import Body, Depends,APIRouter,Cookie
from sqlalchemy.orm import Session


import schemas,crud,models
from database import SessionLocal,engine 
import crud
from database import SessionLocal
import schemas

routerRdv=APIRouter(
    prefix="/rdv",
    tags=['RDV']
)

def get_db():
    db=SessionLocal()
    try: 
        yield db
    finally:
        db.close()



@routerRdv.post("/prendre_rdv")
async def prendre_rdv(rdv:schemas.Rdv_prisCreate,db:Session=Depends(get_db)):
    return crud.take_rdv(db,rdv)

@routerRdv.post("/afficher rdv_par_client")
async def afficher_rdv(client:int=Body(...),db:Session=Depends(get_db)):
    return crud.afficher_rdv_pris_par_client(db,client)

@routerRdv.post("/afficher rdv_par_avocat")
async def afficher_rdv(avocat:int=Body(...),db:Session=Depends(get_db)):
    return crud.afficher_rdv_pris_par_author(db,avocat)

