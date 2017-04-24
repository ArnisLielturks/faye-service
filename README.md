# faye-service

This repo helps to set up Faye service locally in NodeJS

1. Run the Faye service. This will run Faye service locally on port 8000
```NodeJS
nodejs faye-service.js
```

2. Start the message broadcasting in NodeJS application. This will publish message to /test channel each 2 seconds
```NodeJS
nodejs faye-message-broadcaster.js
```
You can also publish messages to this server using different language, for example PHP: https://github.com/ArnisLielturks/faye-client

3. Run the listener in NodeJS application
```NodeJS
nodejs faye-message-receiver.js
```
