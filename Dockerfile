FROM node:latest as node
WORKDIR /app
COPY package.json /app/
RUN npm install --silent
COPY . .
RUN npm run build


FROM nginx:alpine
VOLUME /var/cache/nginx
COPY --from=node app/dist/bar_cao /usr/share/nginx/html
COPY ./config/nginx.conf etc/nginx/conf.d/default.conf

#docker  build -t barcao_front .
#docker run -p 8089:80 barcao_front
