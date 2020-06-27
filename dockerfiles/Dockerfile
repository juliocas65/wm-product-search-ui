FROM hub.fif.tech/base/nginx-fif:1.17.3-latest

ARG ENVIRONMENT

COPY nginx/$ENVIRONMENT.conf /etc/nginx/default.conf

COPY dist/ /usr/share/nginx/html

EXPOSE 3010

USER nginx