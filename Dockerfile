FROM node:16

WORKDIR /app

COPY . .

RUN npm install

RUN npm run client-install


EXPOSE 3000 3001

CMD ["npm", "run", "dev"]
