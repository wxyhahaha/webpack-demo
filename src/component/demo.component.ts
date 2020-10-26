import { Init } from '../interface';

export default class DemoCompoent implements Init {
  a = {
    b: 1
  };
  init() {
    setTimeout(() => {
      this.a.b++;
    }, 3000);
  }

  with() {
    const a = 1;
  }
}