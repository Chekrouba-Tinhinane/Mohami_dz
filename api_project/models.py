from click import FLOAT
from sqlalchemy import Boolean, Column, ForeignKey, Integer, String,Date, Text,Time,Enum,Float, Integer, String,Date, func
from sqlalchemy.orm import relationship
from sqlalchemy import CheckConstraint
from datetime import date,time
from sqlalchemy.ext.hybrid import hybrid_property
from database import Base

class Client(Base):
    __tablename__ = "client"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)
    email = Column(String)
    telephone=Column(String)
    rdv_pris=relationship("Rdv_pris",back_populates="client")
    ratings = relationship("Rating", back_populates="client")

class Admin(Base):
    __tablename__ = "admin"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    password = Column(String)


class Avocat(Base):
    __tablename__ = "avocat"

    id = Column(Integer, primary_key=True, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    email = Column(String, index=True)
    telephone = Column(String, index=True, nullable=True)
    siteweb = Column(String, index=True, nullable=True)
    ville = Column(String, index=True, nullable=True)
    region = Column(String, index=True, nullable=True)
    codepostal = Column(String, index=True, nullable=True,)
    password = Column(String)
    langue=Column(Enum("french", "arabic","both"),index=True)
    latitude = Column(Float,nullable=True,index=True)
    longitude = Column(Float,nullable=True,index=True)
    photo = Column(String, nullable=True)
    verified=Column(Boolean, default=False)
    id_speciality = Column(Integer, ForeignKey("speciality.id"))
    speciality = relationship("Speciality", back_populates="avocats")
    competence = relationship("Competence", back_populates="avocat")
    interval_libre = relationship("Interval_libre",back_populates="avocat")
    rdv_pris=relationship("Rdv_pris",back_populates="avocat")
    ratings = relationship("Rating", back_populates="avocat")

class Speciality(Base):
    __tablename__ = "speciality"
    id = Column(Integer, primary_key=True, unique=True, index=True)
    name = Column(String)

    avocats = relationship("Avocat", back_populates="speciality")

class Competence(Base):
    __tablename__ = "competence"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description=Column(String,nullable=True)
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

    @hybrid_property
    def NbrMaxRdv(self):
        # Calculate the number of 30-minute intervals
        if self.HeureDebut and self.HeureFin:
            start_datetime = func.concat(self.DateInterval, ' ', self.HeureDebut)
            end_datetime = func.concat(self.DateInterval, ' ', self.HeureFin)
            duration_minutes = func.timestampdiff(func.MINUTE, start_datetime, end_datetime)
            return duration_minutes // 30
        else:
            return 0

class Rdv_pris(Base):
    __tablename__="rdv_pris"

    id = Column(Integer,primary_key=True,index=True)
    id_avocat=Column(Integer,ForeignKey("avocat.id"))
    id_client=Column(Integer,ForeignKey("client.id"))
    id_interval_libre=Column(Integer,ForeignKey("interval_libre.id"))
    client=relationship("Client",back_populates="rdv_pris")
    avocat=relationship("Avocat",back_populates="rdv_pris")
    interval_libre=relationship("Interval_libre",back_populates="rdv_pris")

class Rating(Base):
    __tablename__ = "rating"

    id = Column(Integer, primary_key=True, index=True)
    avocat_id = Column(Integer, ForeignKey("avocat.id"))
    client_id = Column(Integer, ForeignKey("client.id"))
    rating = Column(Float, CheckConstraint('rating >= 0 AND rating <= 5'))
    comment = Column(String, nullable=True)
    avocat = relationship("Avocat", back_populates="ratings")
    client = relationship("Client", back_populates="ratings")


""" class Experiences(Base):
    __tablename__ = "experiences"

    publication_id = Column(Integer, primary_key=True, index=True)
    avocat_id = Column(Integer, ForeignKey("avocat.id"))
    contenu = Column(Text)
    date_publication = Column(Date)

    avocat = relationship("Avocat", back_populates="experiences") """