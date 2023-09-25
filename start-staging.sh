#!/bin/bash
rm -rf .parcel-cache
npm run build:staging
npm run serve