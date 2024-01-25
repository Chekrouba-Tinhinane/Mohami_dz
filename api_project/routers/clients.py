from fastapi import Body, Depends,APIRouter,Cookie,HTTPException, status
from sqlalchemy.orm import Session


import schemas,crud,models
from database import SessionLocal,engine 
import crud
from database import SessionLocal
import schemas

routerClient=APIRouter(
    prefix="/client",
    tags=['client']
)

def get_db():
    db=SessionLocal()
    try: 
        yield db
    finally:
        db.close()


@routerClient.post('/register_client')
async def register_client(client:schemas.ClientCreate,db:Session=Depends(get_db)):
    return crud.register_client(db,client)

@routerClient.get('/client_list')
async def get_clients(db:Session=Depends(get_db)):
    clients=crud.show_client(db)
    return clients
