# ELL887 Azure Assignment

## What we do here?
- Create a NodeJS server which serves HTML pages to input product names and display them.
- Connect the server to the Azure CosmosDB for MongoDB Database Account to store the product names.
- A script `createCollection.js`  to create collection to store data.
- Dockerfile to create a docker image of the NodeJS Server with exposed port 3000. 

TO Run a docker container of the CRUD Server, run the following commands:
```
docker build -t sahilmishra32/products:latest .
REGISTRY_URL="https://index.docker.io/v1/"
USERNAME="sahilmishra32"
PASSWORD="password"
docker login $REGISTRY_URL -u $USERNAME -p $PASSWORD
docker push sahilmishra32/products:latest
docker run -p 3000:3000 sahilmishra32/products:latest
```

This docker image is deployed on Azure Web App Service at: https://products887.azurewebsites.net/
