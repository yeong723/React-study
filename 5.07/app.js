//익명 함수
const 함수 = function() {
    console.log("함수 내부 코드입니다...")
    console.log("함수 내부 코드입니다...")
    console.log("함수 내부 코드입니다...")
}
함수();
console.log(typeof(함수()));
console.log(함수());

//선언적 함수
function 함수1(){
    console.log("함수1 입니다ㅑ...")
}
함수1();

//매개변수와 리턴값을 가지는 함수
function 함수2(매개변수) {
    console.log(매개변수);
    return 매개변수
}

function f(x) {
    return x * x
}
console.log(f(3));

//함수 예시 최솟값을 구하는 함수
function min(array){
    let output = array[0];
    for (const item of array){
        if (output > item){
            (output = item)
        }
    }
    return output
}

const testArray = [55,32,11,103,275,330,9];
console.log(`${testArray} 중에서`);
console.log(`최솟값은 = ${min(testArray)}입니다.`);

