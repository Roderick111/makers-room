#!/bin/bash
set -e

SERVER="root@188.34.196.228"
REMOTE_DIR="/opt/makers-room"

echo "→ syncing files to server..."
rsync -avz --delete \
  --exclude '.DS_Store' \
  --exclude 'ascii/' \
  --exclude 'node_modules/' \
  -e ssh \
  "$(dirname "$0")/" "$SERVER:$REMOTE_DIR/"

echo "→ building and starting on server..."
ssh "$SERVER" "cd $REMOTE_DIR && docker compose up -d --build"

echo "→ done. https://makers-room.beautiful-apps.com/"
