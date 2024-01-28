from datetime import date
from operator import or_
from sqlalchemy import func
from sqlalchemy.orm import Session
import models, schemas
from auth.JWThandler import signJWT,decodeJWT,signJWT_client,signJWT_admin,signJWT_avocat
from fastapi import HTTPException,status,Body


#ajout de filter(models.Avocat.verified==True)
def standard_search(db: Session, keyword: str):
    query = (
        db.query(models.Avocat, models.Speciality)
        .join(models.Speciality, models.Avocat.id_speciality == models.Speciality.id)
        .filter(models.Avocat.verified==True)
        .filter(
                models.Speciality.name.ilike(f"%{keyword}%")|
                models.Avocat.last_name.ilike(f"%{keyword}%") | 
                models.Avocat.first_name.ilike(f"%{keyword}%") |
                models.Avocat.ville.ilike(f"%{keyword}%") |
                models.Avocat.region.ilike(f"%{keyword}%") 
                )
        .all()
    )
    formatted_result = [
        {
            "avocat": avocat,
            "speciality_name": speciality.name,
        }
        for avocat, speciality in query
    ]

    return formatted_result

def filter_search_results(db:Session,language=None, speciality=None, ville=None):

    query = (
        db.query(models.Avocat, models.Speciality)
        .join(models.Speciality, models.Avocat.id_speciality == models.Speciality.id)
        .filter(models.Speciality.name==speciality if speciality else 1)
        .filter(models.Avocat.langue==language if speciality else 1)
        .filter(models.Avocat.ville==ville if speciality else 1)
        .filter(models.Avocat.verified==True)
        .all()
    )
    formatted_result = [
        {
            "avocat": avocat,
            "speciality_name": speciality.name,
        }
        for avocat, speciality in query
    ]

    return formatted_result