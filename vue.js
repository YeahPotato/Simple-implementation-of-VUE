import { cb, defineReactive, observer } from './src/utils';


class Vue {
    constructor(options) {
        this.data = options.data;
        this.el = options.el;
        observer(this.data);
    }
}


var vm = new Vue({
    el: "#app",
    data: {
        "msg": "Hello world"
    }
})

console.log(vm)
setTimeout(() => {
    vm.data.msg = 'Hello Vue';
}, 1000)