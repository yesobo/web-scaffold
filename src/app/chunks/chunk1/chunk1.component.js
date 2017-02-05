export const Chunk1Component = {
  template: `
        <div>
          <h1>This is Chunk numner {{$ctrl.number}}</h1>
        </div>
    `,
  controller: function () {
    this.number = '1';
  }
}