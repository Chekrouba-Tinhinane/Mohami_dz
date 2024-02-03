from fastapi import Body, Depends,APIRouter,Cookie,Query
from sqlalchemy.orm import Session


import schemas,crud,models
from database import SessionLocal,engine 
import crud
import recherche
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
    avocats=crud.register_avocat(db,avocat,id_speciality)
    return avocats
@routerAvocat.get('/avocat_list')
async def get_avocat(db:Session=Depends(get_db)):
    avocats=crud.show_avocats(db)
    return avocats

@routerAvocat.get('/avocat_pending')
async def get_pending_avocat(db:Session=Depends(get_db)):
    avocats=crud.show_pending_avocats(db)
    return avocats

@routerAvocat.get('/avocats')
async def get_approved_avocat(db:Session=Depends(get_db)):
    avocats=crud.show_approved_avocats(db)
    return avocats

@routerAvocat.post('/avocat_verify')
async def get_pending_avocat(avocat_id:int=Body(...),db:Session=Depends(get_db)):
    avocats=crud.verify_avocats(db,avocat_id)
    return avocats

@routerAvocat.post('/avocat_delete')
async def delete_avocat(avocat_id:int=Body(...),db:Session=Depends(get_db)):
    avocats=crud.delete_avocats(db,avocat_id)
    return avocats 
 
@routerAvocat.post('/avocat_update')
async def update_Avocat(avocat:schemas.AvocatCreate,avocat_id:int=Body(...),db:Session=Depends(get_db)):
    avocats=crud.update_avocat(db,avocat,avocat_id)
    return avocats

@routerAvocat.get("/recherche-basic")
async def perform_basic_search(
    keyword: str = Query(None),
    db: Session = Depends(get_db)
):
    # Perform the standard search
    standard_results = recherche.standard_search(db, keyword)
    return standard_results

@routerAvocat.get("/recherche-avec-filtre/")
async def perform_filtered_search(
    language: str = Query(None),
    speciality: str = Query(None),
    location: str = Query(None),
    db: Session = Depends(get_db)
):
    # Perform the standard search
    standard_results = recherche.filter_search_results(db, language=language,speciality=speciality,ville=location)
    return standard_results


@routerAvocat.post('/login')
async def login(email:str=Body(...),password:str=Body(...),db:Session=Depends(get_db)):
    avocat=crud.login_avocat(db,email,password)
    return avocat