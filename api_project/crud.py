from datetime import date
from operator import or_
from sqlalchemy import func
from sqlalchemy.orm import Session
import models, schemas
from auth.JWThandler import signJWT,decodeJWT,signJWT_client,signJWT_admin,signJWT_avocat
from fastapi import HTTPException,status,Body
def show_client(db:Session):
    clients=db.query(models.Client).all()
    return clients

def register_client(db:Session,client:schemas.ClientCreate):
    db_client= models.Client(**client.model_dump())
    db.add(db_client)
    db.commit()
    db.refresh(db_client)
    response=signJWT_client(db_client.id)
    return response

def show_avocats(db:Session):
    query = (
        db.query(models.Avocat, models.Speciality)
        .join(models.Speciality, models.Avocat.id_speciality == models.Speciality.id)
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

def register_avocat(db:Session,avocat:schemas.AvocatCreate,id_speciality:models.Speciality.id):
        try:
            print(avocat)
            db_avocat= models.Avocat(**avocat.model_dump(),id_speciality=id_speciality)
            db.add(db_avocat)
            db.commit()
            db.refresh(db_avocat)
            response=signJWT_avocat(db_avocat.id)
            return response
        except ValueError as e:
        # Handle validation errors
            print(e)
            raise HTTPException(
                status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
                detail=f"Validation error: {e}",
                
            )
            


def update_avocat(db:Session,new_avocat:schemas.AvocatCreate,id_avocat:int):   
        db_old_avocat = db.query(models.Avocat).filter(models.Avocat.id == id_avocat).one_or_none()
        if db_old_avocat is None:
            return {"erreur":"avocat non existant"}
        for field, value in new_avocat.model_dump(exclude_unset=True).items():
            setattr(db_old_avocat, field, value)
        
        db.commit()
        db.refresh(db_old_avocat)
        return {"success":f"avocat '{db_old_avocat.id}' has been updated"}


def show_pending_avocats(db:Session):
        avocats=db.query(models.Avocat).filter(models.Avocat.verified==False).all()
        return avocats

def verify_avocats(db:Session,id_avocat:int):
        db_old_avocat = db.query(models.Avocat).filter(models.Avocat.id == id_avocat).one_or_none()
        if db_old_avocat is None:
            return {"erreur":"avocat non existante"}
    
        setattr(db_old_avocat, "verified", True)
    
        db.commit()
        db.refresh(db_old_avocat)
        return {"success":f"avocat '{db_old_avocat.id}' has been approved"}
def delete_avocats(db:Session,id_avocat:int):
        db_old_avocat = db.query(models.Avocat).filter(models.Avocat.id == id_avocat).one_or_none()
        if db_old_avocat is None:
            return {"error":"avocat not found"}
        
        db.delete(db_old_avocat)
        db.commit()
        return {"success":f"avocat '{db_old_avocat.id}' has been deleted"}

def show_approved_avocats(db:Session):
    avocats=db.query(models.Avocat).filter(models.Avocat.verified==True).all()
    return avocats

def show_specialities(db:Session):
    specialities=db.query(models.Speciality).all()
    return specialities

def register_specialities(db:Session,speciality:schemas.speciality):
        db_speciality= models.Speciality(**speciality.model_dump())
        db.add(db_speciality)
        db.commit()
        db.refresh(db_speciality)
        return {"success":f"speciality '{db_speciality.id}' has been created"}

def update_speciality(db:Session,speciality:schemas.speciality,id_speciality:models.Speciality.id):
        db_old_speciality = db.query(models.Speciality).filter(models.Speciality.id == id_speciality).one_or_none()
        if db_old_speciality is None:
            return {"erreur":"speciality non existante"}
        for field, value in speciality.model_dump(exclude_unset=True).items():
            setattr(db_old_speciality, field, value)
        
        db.commit()
        db.refresh(db_old_speciality)
        return {"success":f"speciality '{db_old_speciality.id}' has been updated"}

def delete_speciality(db:Session,id_speciality:int): 
        db_speciality = db.query(models.Speciality).filter(models.Speciality.id == id_speciality).first()
        if db_speciality is None:
            return {"erreur":"speciality non existante"}
        db.delete(db_speciality)
        db.commit()
        return {"success":f"speciality '{id_speciality}' has been deleted"}



def show_competence(db:Session):
    competences=db.query(models.Competence).all()
    return competences

def register_competence(db:Session,competence:schemas.competenceCreate,id_avocat:int):
        db_competence= models.Competence(**competence.model_dump(),id_avocat=id_avocat)
        db.add(db_competence)
        db.commit()
        db.refresh(db_competence)
        return {"success":f"competence '{db_competence.id}' has been created"}

def update_competence(db:Session,new_competence:schemas.competenceCreate,id_avocat:int,id_competence:int):
        db_old_competence = db.query(models.Competence).filter(models.Competence.id == id_competence).filter(models.Competence.id_avocat==id_avocat).one_or_none()
        if db_old_competence is None:
            return {"erreur":"compentece non existante"}
        for field, value in new_competence.model_dump(exclude_unset=True).items():
            setattr(db_old_competence, field, value)
        
        db.commit()
        db.refresh(db_old_competence)
        return {"success":f"competence '{db_old_competence.id}' has been updated"}

def delete_competence(db:Session,id_competence:int,id_avocat:int):
        db_competence = db.query(models.Competence).filter(models.Competence.id == id_competence).filter(models.Competence.id_avocat==id_avocat).first()
        if db_competence is None:
            return {"erreur":"competence non existante"}
        db.delete(db_competence)
        db.commit()
        return {"success":f"competence '{id_competence}' has been deleted"}


def show_competence(db:Session):
    competences=db.query(models.Competence).all()
    return competences

def get_avocat_competence(db:Session,id_avocat:int):
    avocat = db.query(models.Avocat).filter(models.Avocat.id==id_avocat).first()
    return avocat.competence

def take_rdv(db:Session,rdv_pris:schemas.Rdv_pris):
        rdv=db.query(models.Interval_libre).filter(models.Interval_libre.id==rdv_pris.id_interval_libre).filter(models.Interval_libre.id_avocat==rdv_pris.id_avocat).first()
        if rdv==None:
            return {"error":"schedule not found"}
        nbrMax=rdv.NbrMaxRdv
        nbr_rdv_deja_pris=db.query(models.Rdv_pris).filter(models.Rdv_pris.id_interval_libre==rdv_pris.id_interval_libre).count()
        if nbrMax>nbr_rdv_deja_pris:
            db_rdv= models.Rdv_pris(**rdv_pris.model_dump())
            db.add(db_rdv)
            db.commit()
            db.refresh(db_rdv)
            return {"message":"rendez vous pris"}
        return {"erreur":"nombre max de rdv pour ce creneau atteint"}


def ajout_creneau(db:Session,creneau:schemas.Interval_libreCreate):
        print(str(creneau.model_dump()))
        db_creneau= models.Interval_libre(**creneau.model_dump())
        db.add(db_creneau)
        db.commit()
        db.refresh(db_creneau)
        return {"message":f"creneau id={db_creneau.id} added"}

def afficher_creneau(db:Session,avocat:int):
    creneaux=db.query(models.Interval_libre).filter(models.Interval_libre.id_avocat==avocat).filter(models.Interval_libre.DateInterval>=date.today()).all()
    return creneaux

def afficher_rdv_pris_par_client(db:Session,client:int):
    query = (
        db.query(models.Avocat, models.Rdv_pris)
        .join(models.Rdv_pris, models.Avocat.id == models.Rdv_pris.id_avocat)
        .filter(models.Rdv_pris.id_client==client)
        .all()
    )
    formatted_result = [
        {
            "rdv": rdv,
            "avocat": avocat,
        }
        for avocat, rdv in query
    ]

    return formatted_result

def afficher_rdv_pris_par_author(db:Session,author:int):
    query = (
        db.query(models.Client, models.Rdv_pris)
        .join(models.Rdv_pris, models.Client.id == models.Rdv_pris.id_client)
        .filter(models.Rdv_pris.id_avocat==author)
        .all()
    )
    formatted_result = [
        {
            "rdv": rdv,
            "client": client,
        }
        for client, rdv in query
    ]

    return formatted_result

def rate_avocat(db: Session, client_id: int, avocat_id: int, rating: float, comment: str = None):
        rating_entry = models.Rating(client_id=client_id, avocat_id=avocat_id, rating=rating, comment=comment)
        db.add(rating_entry)
        db.commit()
        db.refresh(rating_entry)
        return {"success":f"rating {rating_entry.id} published"}

def get_top_rated_avocats(db: Session, limit: int = 5):
    top_rated_avocats = (
        db.query(models.Avocat,models.Rating.rating)
        .join(models.Rating, models.Rating.avocat_id == models.Avocat.id)
        .order_by(models.Rating.rating.desc())
        .limit(limit)
        .all()
    )
    print(top_rated_avocats)
    return top_rated_avocats

def get_rating_and_comments_by_avocats(db:Session,id_avocat:int):
    query = (
        db.query(models.Rating, models.Client)
        .join(models.Client, models.Rating.client_id == models.Client.id)
        .filter(id_avocat==models.Rating.avocat_id)
        .all()
    )
    formatted_result = [
        {
            "client": client,
            "rating": rating,
        }
        for rating, client in query
    ]

    return formatted_result

def show_client_by_id(db:Session,id:int):
    return db.query(models.Client).filter(models.Client.id==id).first()


""" def get_avocat_experiences(db: Session, avocat_id: int):
    avocat = db.query(models.Avocat).filter(models.Avocat.id == avocat_id).first()
    if avocat:
        return avocat.experiences
    return None
 """



def login_client(db:Session,username:str,password:str):
    client=db.query(models.Client).filter(models.Client.username==username).filter(models.Client.password==password).first()
    if client==None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="wrong credentials"
        )
    response=signJWT_client(client.id)
    return response

def login_avocat(db:Session,email:str,password:str):
    avocat=db.query(models.Avocat).filter(models.Avocat.email==email).filter(models.Avocat.password==password).first()
    if avocat==None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="wrong credentials"
        )
    response=signJWT_avocat(avocat.id)
    return response

def login_admin(db:Session,username:str,password:str):
    Admin=db.query(models.Admin).filter(models.Admin.username==username).filter(models.Admin.password==password).first()
    if Admin==None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="wrong credentials"
        )
    response=signJWT_admin(Admin.id)
    return response