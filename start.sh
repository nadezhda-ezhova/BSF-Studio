#!/bin/bash

# turn on bash's job control
set -m

# Start the primary process and put it in the background
pm2-runtime start ecosystem.config.js &

# Start the helper process
nginx -g "daemon off;pid /tmp/nginx.pid;"

fg %1