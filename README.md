TO Run a docker container of the CRUD Server, run the following commands:
```
docker build -t sahilmishra32/products:latest .
REGISTRY_URL="https://index.docker.io/v1/"
USERNAME="sahilmishra32"
PASSWORD="password"
docker login $REGISTRY_URL -u $USERNAME -p $PASSWORD
docker push sahilmishra32/products:latest
printf "\n\n\n\n"
docker run -p 3000:3000 sahilmishra32/products:latest
```
