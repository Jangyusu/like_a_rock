for (var k = 0; k < 12; k++) {
    arr[k] = k;
}
for (var k = 0; k < 12; k++) {
    arr[k + 12] = k;
} //배열에 0~23 숫자 입력
for (var i = 0; i < 24; i++) {
    var random = Math.floor(Math.random() * 24);
    var c = arr[i];
    arr[i] = arr[random];
    arr[random] = c;
} //0~23 섞기
