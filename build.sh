#!/bin/sh

npm install --only=prod
npm run build

chown root:www-data -R .

docker-compose --build -d
