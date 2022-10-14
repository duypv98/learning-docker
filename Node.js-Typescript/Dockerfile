FROM node:14-alpine as base

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json ./
COPY yarn.lock ./
COPY .env.production ./

RUN yarn
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

FROM base as production

ARG content

ENV NODE_PATH=./build
ENV NODE_ENV=production
ENV BUILD_ARG=$content
RUN yarn build

EXPOSE 8080
CMD ["yarn", "start"]