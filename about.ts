import * as angular from 'angular';
import template from './about.html!text';

/**
 * 
 * 
 * @class AboutController
 * @implements {ng.IComponentController}
 */
class AboutController implements ng.IComponentController {
    static $inject = [];
    constructor() {
        console.log('about me');
    }
}


/**
 * Main Component reference
 */
export var Component  = <angular.IComponentOptions> {
    controller: AboutController,
    template: template
}

export var Name = 'testadmin.about';