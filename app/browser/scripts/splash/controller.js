'use strict';

class SplashCtrl {
	
	

    constructor() {
        this.electronVersion = process.versions['electron'];
    }

    doCrash(){
    	var ipc = require('ipc');
		ipc.send('crash', 'Something bad happened...');
    }

    openDevTools() {
    	var ipc = require('ipc');
		ipc.send('devTools', null);
    }


}
export {
    SplashCtrl
};