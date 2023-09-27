#!/bin/bash
rm -rf .parcel-cache
npm run build:staging-cr
npm run serve