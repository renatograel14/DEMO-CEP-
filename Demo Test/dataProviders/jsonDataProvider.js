'use strict';

(function() {
    app.data.jsonDataProvider = function(){
        var dataSouce = new kendo.data.DataSource({
            transport: {
                read: {
                    type: 'jsonp',
                    url: function(options) {
                    	return 'https://viacep.com.br/ws/'+ options.cep + '/json/' 
                    }
                }
            },
            schema: {
                data: function(data){
                	console.log(data);
                    return data;
                },
                
            }
        });
        return dataSouce;
    }
}());

// START_CUSTOM_CODE_jsonDataProvider
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_jsonDataProvider