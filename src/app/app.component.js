export const AppComponent = {
  template: `
        <div>
          <i class="fa fa-hand-peace-o" aria-hidden="true"></i>
          My {{$ctrl.arq}} App
        </div>
    `,
  controller: function () {
    this.arq = 'Angular 1';
  }
}