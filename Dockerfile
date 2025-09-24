# Étape 1 : Build Angular
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build -- --configuration production

# Étape 2 : Servir avec NGINX
FROM nginx:1.25-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/<nom-du-projet> /usr/share/nginx/html
