FROM nginx:alpine

RUN mkdir /etc/nginx/templates

COPY docker/40-envsubst-on-main.sh /docker-entrypoint.d
RUN chmod 775 /docker-entrypoint.d/40-envsubst-on-main.sh

COPY docker/default.conf.template /etc/nginx/templates
COPY build /usr/share/nginx/html

EXPOSE 80