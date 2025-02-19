document.addEventListener("DOMContentLoaded", function () {
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");

    // section1 활성화 후, 일정 시간 후 section2 활성화
    setTimeout(function () {
        section1.classList.add("active");
        console.log('section1 active:', section1.classList);
    }, 500);  // 0.5초 후 section1 활성화

    setTimeout(function () {
        section2.classList.add("active");
        console.log('section2 active:', section2.classList);
    }, 3500);  // 3.5초 후 section2 활성화 (section1 애니메이션 후)
});
