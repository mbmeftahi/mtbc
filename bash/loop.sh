#!/bin/bash
Test=Yes

# A list of service commands
printf "\t\n"
COMMANDS=( reload restart )

for COMMAND in "${COMMANDS[@]}"
do
    printf "\t $COMMAND \n"
done
printf "\t\n"

VHOST_PATH=/etc/apache2/sites-available/*.conf

for fileName in $VHOST_PATH
do
    printf "\t $fileName \n"
    [ "$Test" == "Yes" ] && ( printf "\t echo for testing  $fileName \n")
done
printf "\t\n"

