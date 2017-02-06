export class AppController {

  constructor(appService) {
    this.arq = 'Gauls';
    this.appService = appService;
  }

  $onInit() {
    this.gauls = this.appService.getData();
  }
}