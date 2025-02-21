document.querySelectorAll('.slider-container').forEach(container => {
    const slider = container.querySelector('.slider');
    const slides = slider.querySelectorAll('a');
    const dotsContainer = container.querySelector('.dots');
    const prevButton = container.querySelector('.prev');
    const nextButton = container.querySelector('.next');
    
    let currentSlide = 0;
    let autoSlideInterval;

    // 슬라이드가 1개일 때 화살표 숨기기
    if (slides.length <= 1) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'none';
    }

    // 도트 생성
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    // 슬라이드 이동 함수
    function goToSlide(index) {
        currentSlide = index;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
        resetAutoSlide();
    }

    // 도트 업데이트
    function updateDots() {
        container.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    // 다음 슬라이드
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }

    // 이전 슬라이드
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    }

    // 자동 슬라이드 설정
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 3000); // 3초마다 슬라이드 변경
    }

    // 자동 슬라이드 리셋
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // 이벤트 리스너 설정
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // 마우스 호버 시 자동 슬라이드 멈춤
    container.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
    container.addEventListener('mouseleave', startAutoSlide);

    // 자동 슬라이드 시작
    startAutoSlide();
});