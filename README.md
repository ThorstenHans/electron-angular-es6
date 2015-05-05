# Sample App for Electron

For more details see the post on my blog [http://www.dotnet-rocks.com/2015/05/04/writing-an-electron-atom-shell-app-using-angular-and-es6/](http://www.dotnet-rocks.com/2015/05/04/writing-an-electron-atom-shell-app-using-angular-and-es6/)

## Packaging the Electron App

You can  package your app by using `gulp transpile-app && gulp package`

The you can copy the `app.asar` file within the installed electron app by invoking

`cp dist/app.asar /Application/Electron.app/Contents/Resources`

Ensure that you've removed the default app within the `Resources folder` in order to make your app the main entry point
