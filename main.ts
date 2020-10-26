import App from './src/app';

const app = new App ();

app.register.forEach(Com => {
  const com = new Com();
  observe(com);
  com.init();
});

function observe(com: any) {
  const obj: any = {};
  Object.keys(com).forEach(key => {
    obj[key] = (com as any)[key];
    let value = obj[key];
    Object.defineProperty(com, key, {
      get() {
        console.log(key, com ,'我获取值', value);
        return value;
      },
      set(newValue) {
        value = newValue;
        console.log(key, com ,'我更新了', newValue);
      }
    });
    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
      observe(obj[key]);
    }
  });
}
