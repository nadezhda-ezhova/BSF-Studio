FROM keymetrics/pm2:latest-alpine

# Install app dependencies
WORKDIR /var/www
# ENV NPM_CONFIG_LOGLEVEL warn

COPY package.json /var/www/
RUN npm install

# Bundle APP files
COPY . /var/www

RUN npm run build:server

# Expose the listening port of your app
# EXPOSE 3001

RUN apk add nginx bash
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
	&& ln -sf /dev/stderr /var/log/nginx/error.log

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD [ "./start.sh" ]