// callback
export function cb(val) {
    console.log(`新值是：${val},需要更新视图`);
}

// define reactive
export function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function reactiveGetter() {
            return val;
        },
        set: function reactiveSetter(newVal) {
            if (newVal === val) return;
            cb(newVal);
        }
    })
}

// observer
export function observer(obj) {
    if (!obj || (typeof obj !== 'object')) return;

    Object.keys(obj).forEach((key) => {
        defineReactive(obj, key, obj[key]);
    })
}
