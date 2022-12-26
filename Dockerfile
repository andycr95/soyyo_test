FROM node:lts-alpine
WORKDIR /usr/app
COPY . .
RUN npm install
RUN npm run build

## this is stage two , where the app actually runs
FROM node:lts-alpine
WORKDIR /usr/app
COPY package.json ./
RUN ls -a
RUN npm install ci
COPY --from=0 /usr/app/build .
RUN npm install pm2 -g
RUN ls -a
RUN echo "API_URL=https://awovcw7p76.execute-api.us-east-1.amazonaws.com/dev/entity/v2.1" >> ./.env
EXPOSE 5000
CMD ["pm2-runtime","index.js"]