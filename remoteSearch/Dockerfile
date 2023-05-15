FROM node:20-alpine

WORKDIR /usr/src/app/remoteSearch

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4400

CMD ["npm", "start"]