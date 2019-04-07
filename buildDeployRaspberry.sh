#!/bin/bash
WEB_HOME=/home/pi/web
APP_NAME=holmgrenska
APP_HOME=${WEB_HOME}/${APP_NAME}
APP_SCRIPTS_HOME=${APP_HOME}/bin
TARGET_SERVER=raspberryhost

./build.sh
echo '########### Deploying to prod ###########'
echo 'Stopping and removing old app'
ssh pi@${TARGET_SERVER} "sudo ${APP_SCRIPTS_HOME}/STOP_HOLMGRENSKA.sh;rm -rf ${APP_HOME}/${APP_NAME};"

echo 'Uploading new version'
scp -rp build/holmgrenska pi@${TARGET_SERVER}:${APP_HOME}
echo 'Upload done'
ssh pi@${TARGET_SERVER} "sudo ${APP_SCRIPTS_HOME}/START_HOLMGRENSKA.sh;"
echo '########### Deploying complete ###########'


