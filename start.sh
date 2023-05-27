#!/bin/bash

if [ "$APP_ENV" = "production" ] ; then
    source .env.prod
elif [ "$APP_ENV" = "dev" ] ; then
    source .env.dev
else
    source .env.staging
fi

npm run serve