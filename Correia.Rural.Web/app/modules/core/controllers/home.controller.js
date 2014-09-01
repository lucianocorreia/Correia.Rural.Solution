'use strict';

(function () {
    angular.module('core').controller('homeController', homeController);

    homeController.$inject = [];

    function homeController() {
        var _this = this;

        _this.title = "Home";
    }
})();