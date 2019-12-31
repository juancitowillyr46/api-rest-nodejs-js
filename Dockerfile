FROM node:12

# WORKDIR /home/node/app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

# COPY . .

# EXPOSE 3001

CMD ["nodemon", "--legacy-watch", "/src/server.js" ]