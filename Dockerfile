# imagem
FROM node:18-alpine

# dir de trabalho
WORKDIR /app

# cop de todos os package*.json para o dir de trabalho
COPY package*.json .

# instalação de dependencias dos package*.json´s
RUN npm install
