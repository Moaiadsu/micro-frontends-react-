FROM node:20-alpine

WORKDIR /usr/src/app/nodeApi

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 1100

CMD ["npm", "start"]

