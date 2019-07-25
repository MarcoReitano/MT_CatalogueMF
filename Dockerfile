FROM nginx:alpine
MAINTAINER Marco Reitano <marcoreitano@th-koeln.de>

COPY ./build/default /usr/share/nginx/html
