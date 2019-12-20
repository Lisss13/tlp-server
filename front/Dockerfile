FROM node:10-alpine

RUN mkdir -p /opt/app
RUN apk add --no-cache libc6-compat
EXPOSE 3000

WORKDIR /opt/app
COPY . /opt/app

RUN npm install typescript @types/node
RUN npm install && npm run build

CMD [ "npm", "start" ]
