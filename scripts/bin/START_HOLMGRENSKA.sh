#! /bin/bash
APP_NAME=holmgrenska
APP_HOME=/home/pi/web/${APP_NAME}
PID=`ps ax --width=1000 | grep node | grep holmgrenska | awk '{print $1}'`
if [ "$PID"null == "null" ]; then
        echo "Starting holmgrenska"
        cd ${APP_HOME}
        /usr/bin/serve -s holmgrenska > /dev/null 2>&1 &
        sleep 5
        PID=`ps ax --width=1000 | grep node | grep holmgrenska | awk '{print $1}'`
        echo "$APP_NAME now running with PID $PID"
        exit 0
else
        echo "$APP_NAME is already running with PID $PID"
        exit 1
fi