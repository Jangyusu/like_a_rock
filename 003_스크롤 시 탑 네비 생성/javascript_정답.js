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
