import angular from 'angular';

import {AppModule} from './app/app.module';

require('./app/app.scss');

angular.bootstrap(document, [AppModule], {strictDi: true});