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
You can also publish messages to this server using different language, for example in Laravel(PHP): https://github.com/ArnisLielturks/faye-client

3. Run the listener in NodeJS application. Make sure that the faye-service is up and running!
```NodeJS
nodejs faye-message-receiver.js
```

4. Run the listener in web app by opening listener.html in the web browser. Make sure that the faye-service is up and running!
