FROM node:20-alpine

WORKDIR /usr/src/app/remoteNotes

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3220

CMD ["npm", "start"]