#!/bin/sh

npm install --production
npm run build

chown root:www-data -R .
