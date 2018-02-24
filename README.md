# Simple-implementation-of-VUE
Simple realization and understanding of Vue mechanism

#### test

```javascript
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

```