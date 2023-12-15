function print() {
    console.log('hello world');
}

function higherOrder(fn) {
    fn();
}

function higherOrder2() {
    return function(){
        return 'do something';
    }
}

let x = higherOrder2();
console.log(x());
