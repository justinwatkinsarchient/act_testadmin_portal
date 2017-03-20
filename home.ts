import * as angular from 'angular';
import template from './about.html!text';



/**
 * 
 * 
 * @class HomeController
 * @implements {ng.IController}
 */
class HomeController implements ng.IController {   
    static $inject = [];
    /**
     * Creates an instance of HomeController.
     * 
     * @memberOf HomeController
     */
    constructor() {

    }
    
}

export var Component  = <angular.IComponentOptions> {
    controller: HomeController,
    template: '<h1>Home</h1><div ui-view></div>'
}

export var Name = 'testadmin.home';