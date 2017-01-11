import angular from 'angular';
import { AppComponent } from './app.component';

export const AppModule = angular
  .module('app', [])
  .component('ng1App', AppComponent)
  .name;