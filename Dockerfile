FROM node:14.1-alpine
WORKDIR /app
COPY / /app
RUN npm install -g serve
RUN npm install
RUN npm run build : .env
CMD serve -s build -l 8087