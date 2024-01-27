from fastapi import Body, Depends,APIRouter,Cookie,Query
from sqlalchemy.orm import Session


import schemas,crud,models
from database import SessionLocal,engine 
import crud
from database import SessionLocal
import schemas

routerAdmin=APIRouter(
    prefix="/admin",
    tags=['admin']
)

def get_db():
    db=SessionLocal()
    try: 
        yield db
    finally:
        db.close()

@routerAdmin.post('/login')
async def login(username:str=Body(...),password:str=Body(...),db:Session=Depends(get_db)):
    admin=crud.login_admin(db,username,password)
    return admin