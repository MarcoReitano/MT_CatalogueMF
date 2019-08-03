FROM nginx:alpine
MAINTAINER Marco Reitano <marcoreitano@th-koeln.de>

COPY ./build/es5 /usr/share/nginx/html/es5
COPY ./build/es2015 /usr/share/nginx/html/es2015

COPY ./build/es2015/resources /usr/share/nginx/html/resources
