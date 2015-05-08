var App = (function () {
    'use strict';
    function App() {
        this.registerEvents();
    }
    App.prototype.onDeviceReady = function () {
        window.alert('Device Ready');
        FastClick.attach(document.body);
    };
    App.prototype.registerEvents = function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    };
    return App;
}());

var mobileApp = new App();