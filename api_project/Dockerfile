# backend/Dockerfile
FROM python:3.8-slim

WORKDIR /app

COPY ./api_project /app
RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 80

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
