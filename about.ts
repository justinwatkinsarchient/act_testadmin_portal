import * as angular from 'angular';

export var Component  = <angular.IComponentOptions> {
    controller: AboutController,
    template: '<h1>About</h1><div ui-view></div>'
}

class AboutController implements ng.IComponentController {
    static $inject = [];
    constructor() {
        console.log('about me');
    }
}

export var Name = 'about';