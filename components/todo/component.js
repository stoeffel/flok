var config = {
    registerRouter: false,
    registerLocale: true,
    registerAngularModule: true,
    registerPublicFiles: true,
    jsFiles: [
        // TODO: how to make sure these vendors are only loaded once? Also: should we have a bower.json in every component?
        'vendor/bower/jquery-ui/jquery-ui.js',
        'vendor/bower/angular-ui-sortable/sortable.js',
        'app/todo/flokTodoModule.js',
        'app/todo/TodoCtrl.js'
    ]
};

module.exports = config;
