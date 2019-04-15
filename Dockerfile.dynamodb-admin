FROM node:10.15-alpine

ENV APP_ROOT=/app
WORKDIR $APP_ROOT

COPY package.json $APP_ROOT
COPY package-lock.json $APP_ROOT

RUN npm install

EXPOSE 8001

CMD ["npm", "start"]
