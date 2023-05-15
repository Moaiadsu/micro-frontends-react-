FROM node:20-alpine

WORKDIR /usr/src/app/hostApp

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm", "start"]