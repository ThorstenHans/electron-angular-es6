# Sample App for Electron

For more details see the post on my blog [http://www.dotnet-rocks.com/2015/05/04/writing-an-electron-atom-shell-app-using-angular-and-es6/](http://www.dotnet-rocks.com/2015/05/04/writing-an-electron-atom-shell-app-using-angular-and-es6/)


## PreConditions

Ensure that the following node packages are installed on your system

 * jspm

you can install it using `npm i jspm -g` 


## Install dependencies

After cloning the repo execute `npm i` to install all dependencies. `jspm install` will be invoked automatically as `npm postinstall` script!

## Creating the Electorn App package

Execute `gulp` in order to build the electron app.

The final electron app will be located as a zip file within the `dist` subfolder. Extract the ZIP file and start the electron app.

