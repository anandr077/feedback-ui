#!/bin/bash
rm -rf .parcel-cache
npm install --save-dev parcel-bundler
npm install --save-dev env-cmd
npm run build:$APP_ENV
npm run serve:$APP_ENV