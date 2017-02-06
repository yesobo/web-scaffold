import { AppController } from './app.controller';

export const AppComponent = {
  template: `
      <div>
        <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
        My {{$ctrl.arq}} App
      </div>
      <ul>
        <li ng-repeat="gaul in $ctrl.gauls">{{ gaul.name }}</li>
      </ul>
  `,
  controller: AppController
}