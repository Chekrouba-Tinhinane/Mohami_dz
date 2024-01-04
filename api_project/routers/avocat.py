from fastapi import Body, Depends,APIRouter, Query
from sqlalchemy.orm import Session


import schemas,crud,models
from database import SessionLocal,engine 
import crud
from database import SessionLocal
import schemas

routerAvocat=APIRouter(
    prefix="/avocat",
    tags=['avocat']
)

def get_db():
    db=SessionLocal()
    try: 
        yield db
    finally:
        db.close()


@routerAvocat.post("/register_avocat")
async def register_avocat(avocat:schemas.AvocatCreate,id_speciality:int=Body(...),db:Session=Depends(get_db)):
    return crud.register_avocat(db,avocat,id_speciality=id_speciality)


@routerAvocat.get('/avocat_list')
async def get_avocat(db:Session=Depends(get_db)):
    avocats=crud.show_avocats(db)
    return avocats

@routerAvocat.get("/filtered-search/")
async def perform_filtered_search(
    keywords: str = Query(None),
    language: str = Query(None),
    speciality: str = Query(None),
    location: str = Query(None),
    db: Session = Depends(get_db)
):
    # Perform the standard search
    standard_results = crud.standard_search(db, keywords)

    # Filter the standard search results
    filtered_results = crud.filter_search_results(standard_results, language, speciality, location)

    return filtered_results

