# selects the base image 
FROM python:3.12-slim
# sets the working dir inside the image 
WORKDIR /app  
# copy requirements only so that that layer is cached 
COPY requirements.txt . 
RUN pip install --no-cache-dir -r requirements.txt
COPY . . 
EXPOSE 8000
CMD ['uvicorn', "main:app", "--host", "0.0.0.0"]
