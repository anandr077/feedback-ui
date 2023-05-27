#!/bin/bash
npm install --save-dev env-cmd
npm run build:$APP_ENV
npm run serve:$APP_ENV