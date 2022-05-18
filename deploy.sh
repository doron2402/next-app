#!/bin/bash

echo "Starting deployment"
cd /home/devop/app
echo pwd
echo "Setting node version"
nvm use
echo "Install node modules"
npm install
echo "Building the app"
npm run build
echo "Starting the server"
npm start