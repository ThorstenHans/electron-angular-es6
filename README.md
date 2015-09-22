# App Boilerplate for Electron

This is a fork of the work of Thorsten Hans (original README below), corrected, completed, updated and adapted to my needs.

## Caveat
Whenever you ran 'jspm init' correct line 2 of browser/config.js to:

``baseURL: __dirname + "/",``


----------------
original README (at time of fork):
----------------
# Sample App for Electron

For more details see the post on my blog [http://www.dotnet-rocks.com/2015/05/04/writing-an-electron-atom-shell-app-using-angular-and-es6/](http://www.dotnet-rocks.com/2015/05/04/writing-an-electron-atom-shell-app-using-angular-and-es6/)


## PreConditions for client

Ensure that the following node packages are installed on your system

 * jspm

you can install it using `npm i jspm -g`


## Install dependencies

After cloning the repo execute `npm i` in both subdirectories `app` and `server` to install all dependencies. For the client, `jspm install` will be invoked automatically as `npm postinstall` script!

## Creating the Electorn App package

Execute `gulp` in order to build the electron app.

The final electron app will be located as a zip file within the `dist` subfolder. Extract the ZIP file and start the electron app.

## Demonstrating CrashReporter

For demonstrating the `crash-reporter` you've to start the little `express` server from the `server` subfolder by invoking `node server.js` before crashing the app using the button...
