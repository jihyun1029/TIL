// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

let A = prompt("한 자리수 정수를 입력하세요.");
let B = prompt("한 자리수 정수를 입력하세요.");

if(A < 0 || A > 10) {
    alert("0 < A < 10");
    A = prompt("한 자리수 정수를 입력하세요.");
}
else if(B < 0 || B > 10) {
    alert("0 < B < 10");
    B = prompt("한 자리수 정수를 입력하세요.");
}

A = Number(A);
B = Number(B);

console.log(A-B);