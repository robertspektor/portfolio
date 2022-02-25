#!/bin/sh

npm install
npm run build

chown root:www-data -R .

docker-compose up --build -d
