import * as angular from 'angular';
import { StateProvider, Ng1StateDeclaration } from 'angular-ui-router';
import * as HomeComponent from './home';
import * as AboutComponent from './about';

var moduleName = 'app.testadmin';




export const moduleStates = {
    states: [
        <Ng1StateDeclaration>{
            name: 'app.testadmin',
            url: '/testadmin',
            abstract: true,
            template: '<div ui-view></div>',
        },
        <Ng1StateDeclaration>{
            name: 'app.testadmin.index',
            url: '',
            component: HomeComponent.Name
        },
        <Ng1StateDeclaration>{
            name: 'app.testadmin.about',
            url: '/about',
            component: AboutComponent.Name
        }
    ]
};

export default angular.module(moduleName, [])
.component(HomeComponent.Name, HomeComponent.Component)
.component(AboutComponent.Name, AboutComponent.Component);