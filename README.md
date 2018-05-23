# vue-webpack-template

vue webpack template

## Build Setup
``` bash
# install dependencies
$npm install
# serve with hot reload at localhost:8080
$npm run dev
# build for production with minification
$npm run build
```

## Create and run Docker
``` bash
# build for production with minification
$npm run build
# create image
$docker build -t vue-webpack-template .
# run container at localhost:8080
$docker run --name some-vue-webpack-template -d -p 8080:80 vue-webpack-template
```