import { Init } from '../interface';

export default class DemoCompoent implements Init {
  init() {
    const n = 'test';
    import(`../json/${n}.json`).then(res => {
      console.log(res);
    });
  }

  with() {
    const a = 1;
    with() {
      
    }
  }
}