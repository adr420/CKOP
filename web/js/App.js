import {AutoLogin} from './AutoLoad.js';

const App ={
    init: async function(){
        await AutoLogin.init();
        await AutoLogin.login();
    },

};

