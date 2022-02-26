#!/bin/sh
npm install -g vue-tsc

npm install --production
npm run build

chown root:www-data -R .
