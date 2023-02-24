function f1 () {
    console.log('f1')
}
f1();

function f2 () {
    console.log('f2')
}
f2();

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return num 
}
rand(1000, 245)