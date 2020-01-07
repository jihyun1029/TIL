// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

let A = prompt("한 자리수 정수를 입력하세요.");
let B = prompt("한 자리수 정수를 입력하세요.");

if(0 > A || A > 10 ) {
    alert("양수를 입력하세요.");
    A = prompt("한 자리수 정수를 입력하세요.");
}
else if (0 > B || B > 10) {
    alert("10보다 작은 수를 입력하세요.");
    B = prompt("한 자리수 정수를 입력하세요.");
}

A = Number(A);
B = Number(B);

console.log(A+B);