// 문제
// 두 정수 A와 B를 입력받은 다음, A/B를 출력하는 프로그램을 작성하시오.
// 입력
// 첫째 줄에 A와 B가 주어진다.(0 < A, B < 10)
// 출력
// 첫째 줄에 A/B를 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10-9 이하이면 정답이다.

let A = Number(prompt("A : 정수를 입력하시오."));
let B = Number(prompt("B : 정수를 입력하시오."));

if(A < 0 || A > 10) {
    alert("0 < A < 10");
    A = Number(prompt("A : 정수를 입력하시오."));
}
else if(B < 0 || B > 10) {
    alert("0 < B < 10");
    B = Number(prompt("B : 정수를 입력하시오."));
}

console.log(A/B);