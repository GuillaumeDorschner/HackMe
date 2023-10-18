FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

RUN npm run client-install

COPY . .

EXPOSE 3000 3001

CMD ["npm", "run", "dev"]
