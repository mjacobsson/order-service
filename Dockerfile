FROM node:carbon

WORKDIR /home/node

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
