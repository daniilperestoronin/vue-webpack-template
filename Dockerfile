FROM nginx
COPY template/index.html /usr/share/nginx/html/
COPY template/dist /usr/share/nginx/html/dist/
EXPOSE 80