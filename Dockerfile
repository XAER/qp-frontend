FROM node:17-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]