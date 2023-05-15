FROM node:20-alpine

WORKDIR /usr/src/app/remoteLogin

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3330

CMD ["npm", "start"]
