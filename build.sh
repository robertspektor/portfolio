#!/bin/sh

npm install --production
vite build

chown root:www-data -R .
