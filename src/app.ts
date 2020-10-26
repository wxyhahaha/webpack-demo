import DemoCompoent from './component/demo.component';

const component = [
  DemoCompoent
];

export default class App {
  constructor() {
    this.init();
  }

  init() {
    component.forEach(com => {
      new com().init();
    });
  }
}

