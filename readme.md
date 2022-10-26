# The curl used was:
 
curl --location --request POST 'http://localhost:3000/run' \
--header 'Content-Type: application/json' \
--data-raw '{
    "cmd": "process.exit()"
}'
