/*
 * - 변수 지정하기
 * - 문서의 높이를 계산하고 원하는 부분이 상단에서 얼마큼 떨어져 있는지 offset 값을 계산하기
 * - 스크롤과 클릭 이벤트 작성하기
 */

// 문서 높이 계산하기

// 스크롤 이벤트 추가

// 클릭 이벤트 추가

var btt = document.getElementById("back-to-top"),
    docElem = document.documentElement,
    offset,
    scrollPos,
    docHeight;

docHeight = Math.max(docElem.offsetHeight, docElem.scrollHeight);

if (docHeight !== "") {
    offset = docHeight / 4;
}

window.addEventListener("scroll", function() {
    scrollPos = docElem.scrollTop;

    btt.className = scrollPos > offset ? "visible" : "";
});

btt.addEventListener("click", function(e) {
    e.preventDefault(); // 링크의 본연의 기능을 막는다.
    // docElem.scrollTop = 0;
    scrollToTop();
});
function scrollToTop() {
    // 일정시간 마다 할일
    // var scrollInterval = setInterval(할일, 시간);
    // 0.0015초 = 15ms
    // 할일 = function() { 실제로 할일 }
    // 윈도우 스크롤이 0이 아닐 때 실제로 할일 = window.scrollBy(0(x),-55(y));
    // 스크롤이 0이면 setInterval 멈춰라. clearInterval(이름);

    var scrollInterval = setInterval(function() {
        if (scrollPos != 0) {
            window.scrollBy(0, -500);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}

/*
 * - 변수 지정하기
 * - 문서의 높이를 계산하고 원하는 부분이 상단에서 얼마큼 떨어져 있는지 offset 값을 계산하기
 * - 스크롤과 클릭 이벤트 작성하기
 */

// 문서 높이 계산하기
// 스크롤 이벤트 추가
// 클릭 이벤트 추가
// html에 "back-to-top" id값을 가진 Element를 불러온다.
// console.log(document);
// console.log(docElem);
// html 높이의 25%
// 상단부터의 스크롤 양
// html 높이
// Math.max(a, b) a와 b중 큰 값을 불러온다.
// Math.min(a, b) a와 b중 작은 값을 불러온다.
// html의 높이가 0이 아닐경우
// offset 스크롤 양은 html 높이의 25%이다.
// 상단부터의 스크롤 양
// 상단부터의 스크롤 양이 html 높이의 25%보다 크면 버튼의 클래스 네임은
// 스크롤 될 때 실행하라.

// 링크의 본연의 기능을 막는다.
// docElem.scrollTop = 0;
// scrollToTop 함수를 실행한다.

// 일정시간 마다 할일

// 0.0015초 = 15ms
// 할일 = function() { 실제로 할일 }
// 윈도우 스크롤이 0이 아닐 때 실제로 할일 =
// 스크롤이 0이면 setInterval 멈춰라.

// 상단부터의 스크롤 양이 0이 아니면
// 스크롤을 Y축으로 50만큼 뺀다.

// 상단부터의 스크롤 양이 0이면
// 변수의 반복 정지
// 15ms마다 함수 실행

//
// docElem = document.documentElement; document의 Element를 가져온다.
// Math.max(a,b); a와 b중 큰값을 출력
// docElem.offsetHeight 와 docElem.scrollHeight, 둘 중 큰 값을 사용한다.
// var scrollInterval = setInterval(할일, 시간(ms)); 시간(ms)마다 할일을 실행
// window.scrollBy(x,y); 스크롤의 x축을 x만큼 y축을 y만큼 움직인다.
// clearInterval(변수명); 변수의 반복 정지
