FROM nginx:alpine
MAINTAINER Marco Reitano <marcoreitano@th-koeln.de>

COPY ./build/es5/catalogue.js /usr/share/nginx/html/catalogue-es5.js
COPY ./build/es2015/catalogue.js /usr/share/nginx/html/catalogue-es2015.js
COPY ./build/es2015/service-worker.js /usr/share/nginx/html/service-worker.js

COPY ./build/es2015/resources /usr/share/nginx/html/resources
