export const Chunk3Component = {
  template: `
        <div>
          <h1>This is Chunk numner {{$ctrl.number}}</h1>
        </div>
    `,
  controller: function () {
    this.number = '3';
  }
}