from fastapi import Body, Depends,APIRouter
from sqlalchemy.orm import Session


import schemas,crud,models
from database import SessionLocal,engine 
import crud
from database import SessionLocal
import schemas

routerCompetence=APIRouter(
    prefix="/competence",
    tags=['competence']
)

def get_db():
    db=SessionLocal()
    try: 
        yield db
    finally:
        db.close()

@routerCompetence.get('/competence_list')
async def get_competence(db:Session=Depends(get_db)):
    competence=crud.show_competence(db)
    return competence



@routerCompetence.get('/get_competence_by_avocat')
async def get_competence(db:Session=Depends(get_db),id_avocat:int=None):
    competence=crud.get_avocat_competence(db,id_avocat=id_avocat)
    return competence


@routerCompetence.post("/create_competence")
async def create_competence(competence:schemas.competenceCreate,id_avocat:int=Body(...),db:Session=Depends(get_db)):
    return crud.register_competence(db,competence,id_avocat=id_avocat)
