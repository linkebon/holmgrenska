#! /bin/bash
APP_NAME=holmgrenska
PID=`ps ax --width=1000 | grep node | grep holmgrenska | awk '{print $1}'`
if [ "$PID"null == "null" ]; then
    echo "$APP_NAME is not running"
else
    echo "Killing $APP_NAME process with pid=$PID"
    kill $PID
    echo "Waiting for application to exit..."
fi

PID=`ps ax --width=1000 | grep node | grep holmgrenska | awk '{print $1}'`
while [ "$PID"null != "null" ]; do
    sleep 3
    echo "..."
    PID=`ps ax --width=1000 | grep node | grep holmgrenska | awk '{print $1}'`
done