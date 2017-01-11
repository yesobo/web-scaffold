export const AppComponent = {
    template: `
        <div>My {{$ctrl.arq}} App</div>
    `,
    controller: function () {
        this.arq = 'Angular 1'; 
    }
}