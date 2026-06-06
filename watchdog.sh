#!/bin/bash
while true; do
  cd /home/z/my-project
  node .next/standalone/server.js
  echo "Server crashed at $(date), restarting in 2s..." >> /tmp/watchdog.log
  sleep 2
done
