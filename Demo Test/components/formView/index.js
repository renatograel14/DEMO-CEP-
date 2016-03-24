'use strict';

app.formView = kendo.observable({
    onShow: function () {},
    afterShow: function () {}
});

// START_CUSTOM_CODE_formView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_formView
(function (parent) {
    var provider = app.data.jsonDataProvider(),
        formViewModel = kendo.observable({
            fields: {
                adress: '',
                cep: '',
            }
        });
    parent.set('onShow', function (e) {
        provider.read(e.view.params).then(function () {
            // var view = this.view();
            console.log('foo:');
            // formViewModel.fields.cep = result.cep;
            // formViewModel.fields.adress = result.logradouro;
            // kendo.bind($("#viewCEP"), formViewModel);
        });
    })
    parent.set('formViewModel', formViewModel);
})(app.formView);

// START_CUSTOM_CODE_formViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_formViewModel;