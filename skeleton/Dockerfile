FROM node:latest

COPY app/ app/

WORKDIR app/

RUN npm i

ENTRYPOINT ["node", "index.js"]
