FROM node:20-alpine

WORKDIR /usr/src/app/reactHost

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]