FROM node:21.6.1
 
WORKDIR /app
 
COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install -g npm@10.5.0
RUN npm install
 
COPY . .

EXPOSE 3000

CMD [ "node", "app.js" ]