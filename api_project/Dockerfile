FROM python:3.9-slim

WORKDIR /app

COPY ./api_project /app

RUN pip install --no-cache-dir -r requirements.txt

RUN pip install uvicorn

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
