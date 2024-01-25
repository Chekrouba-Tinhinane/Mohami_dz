from datetime import date
from sqlalchemy.orm import Session
import models, schemas
from auth.JWThandler import signJWT,decodeJWT,signJWT_client,signJWT_admin,signJWT_avocat
from fastapi import HTTPException,status
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
    avocats=db.query(models.Avocat).all()
    return avocats

def register_avocat(db:Session,avocat:schemas.AvocatCreate,id_speciality:models.Speciality.id):
        db_avocat= models.Avocat(**avocat.model_dump(),id_speciality=id_speciality)
        db.add(db_avocat)
        db.commit()
        db.refresh(db_avocat)
        response=signJWT_avocat(db_avocat.id)
        return response
def update_avocat(db:Session,new_avocat:schemas.AvocatCreate,id_avocat:int,token:str):
    avocat_data=decodeJWT(token)
    if avocat_data["role"]!="avocat" or avocat_data["userID"]!=id_avocat:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="unauthorized action"
        )
    else:      
        db_old_avocat = db.query(models.Avocat).filter(models.Avocat.id == id_avocat).one_or_none()
        if db_old_avocat is None:
            return {"erreur":"avocat non existant"}
        for field, value in new_avocat.model_dump(exclude_unset=True).items():
            setattr(db_old_avocat, field, value)
        
        db.commit()
        db.refresh(db_old_avocat)
        return {"success":f"avocat '{db_old_avocat.id}' has been updated"}


def show_pending_avocats(db:Session,token:str):
    admin_data=decodeJWT(token)
    if admin_data["role"]!="admin":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="unauthorized action"
        )
    else: 
        avocats=db.query(models.Avocat).filter(models.Avocat.verified==False).all()
        return avocats

def verify_avocats(db:Session,id_avocat:int,token:str):
    admin_data=decodeJWT(token)
    if admin_data["role"]!="admin":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="unauthorized action"
        )
    else: 
        db_old_avocat = db.query(models.Avocat).filter(models.Avocat.id == id_avocat).one_or_none()
        if db_old_avocat is None:
            return {"erreur":"avocat non existante"}
    
        setattr(db_old_avocat, "verified", True)
    
        db.commit()
        db.refresh(db_old_avocat)
        return {"success":f"avocat '{db_old_avocat.id}' has been approved"}

def delete_avocats(db:Session,id_avocat:int,token:str):
    admin_data=decodeJWT(token)
    if admin_data["role"]!="admin":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="unauthorized action"
        )
    else: 
        db_old_avocat = db.query(models.Avocat).filter(models.Avocat.id == id_avocat).one_or_none()
        if db_old_avocat is None:
            return {"erreur":"avocat non existante"}
        
        db.delete(db_old_avocat)
        db.commit()
        return {"success":f"avocat '{db_old_avocat.id}' has been deleted"}

def show_approved_avocats(db:Session):
    avocats=db.query(models.Avocat).filter(models.Avocat.verified==True).all()
    return avocats

def show_specialities(db:Session):
    specialities=db.query(models.Speciality).all()
    print(specialities)
    return specialities

def register_specialities(db:Session,speciality:schemas.speciality,token:str):
    admin_data=decodeJWT(token)
    if admin_data["role"]!="admin":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="unauthorized action"
        )
    else: 
        db_speciality= models.Speciality(**speciality.model_dump())
        db.add(db_speciality)
        db.commit()
        db.refresh(db_speciality)
        return {"success":f"speciality '{db_speciality.id}' has been created"}

def update_speciality(db:Session,speciality:schemas.speciality,id_speciality:models.Speciality.id,token:str):
    admin_data=decodeJWT(token)
    if admin_data["role"]!="admin":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="unauthorized action"
        )
    else: 
        db_old_speciality = db.query(models.Speciality).filter(models.Speciality.id == id_speciality).one_or_none()
        if db_old_speciality is None:
            return {"erreur":"speciality non existante"}
        for field, value in speciality.model_dump(exclude_unset=True).items():
            setattr(db_old_speciality, field, value)
        
        db.commit()
        db.refresh(db_old_speciality)
        return {"success":f"speciality '{db_old_speciality.id}' has been updated"}

def delete_speciality(db:Session,id_speciality:int,token:str):
    admin_data=decodeJWT(token)
    if admin_data["role"]!="admin":
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="unauthorized action"
        )
    else: 
        db_speciality = db.query(models.Speciality).filter(models.Speciality.id == id_speciality).first()
        if db_speciality is None:
            return {"erreur":"speciality non existante"}
        db.delete(db_speciality)
        db.commit()
        return {"success":f"speciality '{id_speciality}' has been deleted"}



def show_competence(db:Session):
    competences=db.query(models.Competence).all()
    return competences

def register_competence(db:Session,competence:schemas.competenceCreate,id_avocat:int,token:str):
    avocat_data=decodeJWT(token)
    if avocat_data["role"]!="avocat"or avocat_data['userID']!=id_avocat:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="unauthorized action"
        )
    else: 
        db_competence= models.Competence(**competence.model_dump(),id_avocat=id_avocat)
        db.add(db_competence)
        db.commit()
        db.refresh(db_competence)
        return {"success":f"competence '{db_competence.id}' has been created"}

def update_competence(db:Session,new_competence:schemas.competenceCreate,id_avocat:int,id_competence:int,token:str):
    avocat_data=decodeJWT(token)
    if avocat_data["role"]!="avocat" or avocat_data['userID']!=id_avocat:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="unauthorized action"
        )
    else: 
        db_old_competence = db.query(models.Competence).filter(models.Competence.id == id_competence).filter(models.Competence.id_avocat==id_avocat).one_or_none()
        if db_old_competence is None:
            return {"erreur":"compentece non existante"}
        for field, value in new_competence.model_dump(exclude_unset=True).items():
            setattr(db_old_competence, field, value)
        
        db.commit()
        db.refresh(db_old_competence)
        return {"success":f"competence '{db_old_competence.id}' has been updated"}

def delete_competence(db:Session,id_competence:int,id_avocat:int,token:str):
    avocat_data=decodeJWT(token)
    if avocat_data["role"]!="avocat"or avocat_data['userID']!=id_avocat:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="unauthorized action"
        )
    else: 
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

def take_rdv(db:Session,rdv_pris:schemas.Rdv_pris,token:str):
    client_data=decodeJWT(token)
    if client_data["role"]!="client"or client_data['userID']!=rdv_pris.id_client:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="unauthorized action"
        )
    else: 
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


def ajout_creneau(db:Session,creneau:schemas.Interval_libreCreate,token:str):
    avocat_data=decodeJWT(token)
    if avocat_data["role"]!="avocat"or avocat_data['userID']!=creneau.id_avocat:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="unauthorized action"
        )
    else: 
        db_creneau= models.Interval_libre(**creneau.model_dump())
        db.add(db_creneau)
        db.commit()
        db.refresh(db_creneau)
        return {"message":f"creneau id={db_creneau.id} added"}

def afficher_creneau(db:Session,avocat:int):
    creneaux=db.query(models.Interval_libre).filter(models.Interval_libre.id_avocat==avocat).filter(models.Interval_libre.DateInterval>=date.today()).all()
    return creneaux

def afficher_rdv_pris_par_client(db:Session,client:int):
    return db.query(models.Rdv_pris).filter(models.Rdv_pris.id_client==client).all()

def afficher_rdv_pris_par_author(db:Session,author:int):
    return db.query(models.Rdv_pris).filter(models.Rdv_pris.id_avocat==author).all()
