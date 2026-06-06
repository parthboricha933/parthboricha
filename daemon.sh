#!/bin/bash
cd /home/z/my-project

# Double-fork to fully detach from parent
( setsid node .next/standalone/server.js > /tmp/server.log 2>&1 & ) &

echo "Daemon started"
