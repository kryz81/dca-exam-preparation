FROM node:16-alpine

WORKDIR /app

ARG APP_PORT=4000
ARG NODE_ENV=development

ENV APP_PORT=$APP_PORT
ENV NODE_ENV=$NODE_ENV

EXPOSE $APP_PORT

COPY package*.json ./

RUN npm i

CMD ["node", "src/index"]

COPY src src

VOLUME ["/app/shared"]
