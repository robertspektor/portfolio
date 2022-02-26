#!/bin/sh
npm install -g vue-cli

npm install --production
npm run build

chown root:www-data -R .
