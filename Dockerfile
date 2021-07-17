FROM node:14-alpine

COPY . /code/

WORKDIR /code

RUN yarn install

ENV NODE_ENV=production

RUN yarn build

CMD ["npm", "start"]