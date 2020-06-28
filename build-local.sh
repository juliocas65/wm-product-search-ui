#!/bin/sh

TAG="$1"
if [ -z "$TAG" ]; then
  TAG="local"
fi

docker build --no-cache -t wm-product-search-ui:$TAG -f ./dockerfiles/Dockerfile .
docker run --name wm-product-search-ui -d --rm -p 8080:80 wm-product-search-ui:$TAG