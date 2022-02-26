#!/bin/sh

npm install
npm run build

chown root:www-data -R .
