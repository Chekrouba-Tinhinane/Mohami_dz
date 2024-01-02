from datetime import datetime,date,time
from fastapi import Depends, FastAPI, HTTPException,Body
from sqlalchemy.orm import Session
from routers.creneau import routerCreneau
from routers.avocat import routerAvocat
from routers.clients import routerClient
from routers.competence import routerCompetence
from routers.rdv import routerRdv
from routers.speciality import routerSpeciality
from core.config import settings
import schemas,crud,models
from database import SessionLocal,engine 
models.Base.metadata.create_all(bind=engine)


#app = FastAPI(title=settings.PROJECT_NAME, version=settings.PROJECT_VERSION)
app=FastAPI()



app.include_router(routerAvocat)
app.include_router(routerClient)
app.include_router(routerSpeciality)
app.include_router(routerCompetence)
app.include_router(routerCreneau)
app.include_router(routerRdv)


