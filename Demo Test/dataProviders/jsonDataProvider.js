'use strict';

(function() {
    app.data.jsonDataProvider = function(cep){
        return 'https://viacep.com.br/ws/'+ cep + '/json/'
    }
}());

// START_CUSTOM_CODE_jsonDataProvider
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_jsonDataProvider