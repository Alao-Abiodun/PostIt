FROM node:14

EXPOSE 1213

WORKDIR /app/src

RUN yarn install 

COPY package.json .babelrc .eslintrc yarn.lock ./

COPY . .

CMD ["yarn", "dev"]



