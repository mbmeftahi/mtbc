#!/bin/bash

string1="Hello"
string2="world!!"

echo "${string1} ${string2}"

string=''
while [ "$string" != "Good Day!" ]
do
    if [ -z "$string" ]
    then
        string="Good"
        else
        string="${string} Day!"
    fi

done
echo "$string"



STRING=''
while [ "$STRING" != "Hello World" ]
do
    if [ -z  "$STRING" ]
    then
      STRING="Hello"
    else
      STRING="${STRING} World"
    fi

    echo "$STRING"
    
done
