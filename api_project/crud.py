from datetime import date
from sqlalchemy.orm import Session
import models, schemas

def show_client(db:Session):
    clients=db.query(models.Client).all()
    return clients

def register_client(db:Session,client:schemas.ClientCreate):
    db_client= models.Client(**client.model_dump())
    db.add(db_client)
    db.commit()
    db.refresh(db_client)
    return {"success":f"client '{db_client.id}' has been created"}

def show_avocats(db:Session):
    avocats=db.query(models.Avocat).all()
    return avocats

def register_avocat(db:Session,avocat:schemas.AvocatCreate,id_speciality:models.Speciality.id):
    db_avocat= models.Avocat(**avocat.model_dump(),id_speciality=id_speciality)
    db.add(db_avocat)
    db.commit()
    db.refresh(db_avocat)
    return {"success":f"avocat '{db_avocat.id}' has been created"}

def show_specialities(db:Session):
    specialities=db.query(models.Speciality).all()
    return specialities

def register_specialities(db:Session,speciality:schemas.speciality):
    db_speciality= models.Speciality(**speciality.model_dump())
    db.add(db_speciality)
    db.commit()
    db.refresh(db_speciality)
    return {"success":f"speciality '{db_speciality.id}' has been created"}

def show_competence(db:Session):
    competences=db.query(models.Competence).all()
    return competences

def register_competence(db:Session,competence:schemas.competenceCreate,id_avocat:models.Avocat.id):
    db_competence= models.Competence(**competence.model_dump(),id_avocat=id_avocat)
    db.add(db_competence)
    db.commit()
    db.refresh(db_competence)
    return {"success":f"competence '{db_competence.id}' has been created"}

def show_competence(db:Session):
    competences=db.query(models.Competence).all()
    return competences

def get_avocat_competence(db:Session,id_avocat:int):
    avocat = db.query(models.Avocat).filter(models.Avocat.id==id_avocat).first()
    return avocat.competence

def take_rdv(db:Session,rdv_pris:schemas.Rdv_pris):
    nbrMax=db.query(models.Interval_libre).filter(models.Interval_libre.id==rdv_pris.id_interval_libre).first().NbrMaxRdv
    nbr_rdv_deja_pris=db.query(models.Rdv_pris).filter(models.Rdv_pris.id_interval_libre==rdv_pris.id_interval_libre).count()
    if nbrMax>nbr_rdv_deja_pris:
        db_rdv= models.Rdv_pris(**rdv_pris.model_dump())
        db.add(db_rdv)
        db.commit()
        db.refresh(db_rdv)
        return {"message":"rendez vous pris"}
    return {"erreur":"nombre max de rdv pour ce creneau atteint"}


def ajout_creneau(db:Session,creneau:schemas.Interval_libreCreate):
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
