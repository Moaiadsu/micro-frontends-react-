FROM nginx:1.17.1-alpine

# copy the config file 
COPY nginx.conf /etc/nginx/nginx.conf