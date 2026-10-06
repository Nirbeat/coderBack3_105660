FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

# imitar instalacion productiva:
  # RUN npm ci --omit=dev
RUN npm install

COPY src ./src

EXPOSE 8080

CMD ["npm", "start"]