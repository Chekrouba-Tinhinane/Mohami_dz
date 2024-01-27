from fastapi import Body, Depends,APIRouter,Cookie,HTTPException, status
from sqlalchemy.orm import Session


import schemas,crud,models
from database import SessionLocal,engine 
import crud
from database import SessionLocal
import schemas

routerRating=APIRouter(
    prefix="/ratings",
    tags=['ratings']
)

def get_db():
    db=SessionLocal()
    try: 
        yield db
    finally:
        db.close()


@routerRating.post('/register_rating')
async def register_client(client_id: int, avocat_id: int, rating: float, comment: str = None,db:Session=Depends(get_db)):
    return crud.rate_avocat(db,client_id,avocat_id, rating, comment)

@routerRating.get('/top_rated')
async def get_clients(db:Session=Depends(get_db),limit: int = 5):
    clients=crud.get_top_rated_avocats(db,limit)
    return clients

@routerRating.get('/avocat_rating')
async def get_clients(id:int,db:Session=Depends(get_db)):
    return crud.get_rating_and_comments_by_avocats(db,id)


