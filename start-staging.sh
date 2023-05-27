#!/bin/bash
npm install --save-dev parcel-bundler
npm install --save-dev env-cmd
npm run build:staging
npm run serve:staging