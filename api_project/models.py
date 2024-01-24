from sqlalchemy import Float,Boolean, Column, ForeignKey, Integer, String,Date,Time
from sqlalchemy.orm import relationship
from datetime import date,time
from database import Base

class Client(Base):
    __tablename__ = "client"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)
    email = Column(String)

    rdv_pris=relationship("Rdv_pris",back_populates="client")

class Avocat(Base):
    __tablename__ = "avocat"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    telephone = Column(String, unique=True, index=True, nullable=True)
    siteweb = Column(String, unique=True, index=True, nullable=True)
    ville = Column(String, unique=True, index=True, nullable=True)
    region = Column(String, unique=True, index=True, nullable=True)
    codepostal = Column(String, unique=True, index=True, nullable=True)
    password = Column(String)
    latitude = Column(Float,nullable=True,index=True)
    longitude = Column(Float,nullable=True,index=True)
    photo = Column(String, nullable=True)
    verified=Column(Boolean, default=False)
    id_speciality = Column(Integer, ForeignKey("speciality.id"))
    speciality = relationship("Speciality", back_populates="avocats")
    competence = relationship("Competence", back_populates="avocat")
    interval_libre = relationship("Interval_libre",back_populates="avocat")
    rdv_pris=relationship("Rdv_pris",back_populates="avocat")

class Speciality(Base):
    __tablename__ = "speciality"
    id = Column(Integer, primary_key=True, unique=True, index=True)
    name = Column(String)

    avocats = relationship("Avocat", back_populates="speciality")

class Competence(Base):
    __tablename__ = "competence"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description=Column(String)
    id_avocat = Column(Integer, ForeignKey("avocat.id"))

    avocat = relationship("Avocat", back_populates="competence")

class Interval_libre(Base):
    __tablename__="interval_libre"


    id=Column(Integer,index=True,primary_key=True)
    id_avocat=Column(Integer,ForeignKey("avocat.id"))
    DateInterval = Column(Date,index=True)
    HeureDebut=Column(Time)
    HeureFin=Column(Time)
    NbrMaxRdv=Column(Integer)
    
    avocat=relationship("Avocat",back_populates="interval_libre")
    rdv_pris=relationship("Rdv_pris",back_populates="interval_libre")

class Rdv_pris(Base):
    __tablename__="rdv_pris"

    id = Column(Integer,primary_key=True,index=True)
    id_avocat=Column(Integer,ForeignKey("avocat.id"))
    id_client=Column(Integer,ForeignKey("client.id"))
    id_interval_libre=Column(Integer,ForeignKey("interval_libre.id"))

    client=relationship("Client",back_populates="rdv_pris")
    avocat=relationship("Avocat",back_populates="rdv_pris")
    interval_libre=relationship("Interval_libre",back_populates="rdv_pris")