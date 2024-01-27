from datetime import datetime,date,time
from fastapi import Depends, FastAPI, HTTPException,Body
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from routers.creneau import routerCreneau
from routers.avocat import routerAvocat
from routers.clients import routerClient
from routers.competence import routerCompetence
from routers.rdv import routerRdv
from routers.speciality import routerSpeciality
from routers.admin import routerAdmin
from routers.ratings import routerRating
import models
from database import SessionLocal,engine 
models.Base.metadata.create_all(bind=engine)


#app = FastAPI(title=settings.PROJECT_NAME, version=settings.PROJECT_VERSION)
app=FastAPI()

origins = ["http://127.0.0.1:5174"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods
    allow_headers=["*"],  # Allow all headers
)
app.include_router(routerAvocat)
app.include_router(routerClient)
app.include_router(routerSpeciality)
app.include_router(routerCompetence)
app.include_router(routerCreneau)
app.include_router(routerRdv)
app.include_router(routerAdmin)
app.include_router(routerRating)