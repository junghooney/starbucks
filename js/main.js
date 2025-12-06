// serach 
const searchEl = document.querySelector('.search'); // 부모요소
const searchInputEl = searchEl.querySelector('input'); // 인풋요소

searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// badge (lodash, gsap 라이브러리 이용)
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if(window.scrollY > 500){
    gsap.to(badgeEl, .4, {
      opacity: 0,
      display: 'none'
    });
  }else {
    gsap.to(badgeEl, .4, {
      opacity: 1,
      display: 'block'
    });
  };
}, 300));

// lodash cdn 라이브러리 이용
// - 기술 : _.torottle(함수, 시간);
// - 기능 : 기능의 의미는 시간을 설정하여 설정한 시간만큼의 시간적 부하(제한, 딜레이)를 주는 기능이다.

// gsap cdn 라이브러리 이용 (애니메이션 기능의 라이브러리)
// - 기술 : gsap.to(요소, 지속시간, 옵션{객체데이터});
// - 기능 : 자바스크립트의 애니메이션 기능을 처리해주는 라이브러리 같다.

// 여기서 setAttribute();의 기능은 html 요소의 속성을 제어할 수 있도록 한다. set은 무엇인가를 지정한다는 의미로 이해하면 되고 Attribute는 html의 속성을 의미한다.
// 그렇게 때문에 ()소괄호 안에 들어오는 첫번째 인수는 'placeholder' 같은 html의 속성이 되겠고 두번째 인수는 그 요소를 어떻게 제어할 것인지 목적을 적용하면 된다.
// addEventListener();로 이벤트를 제어할 때 'blur'라는 키워드는 focus(텍스트를 작성하기 위해 인풋 같은 요소가 활성화 됐을 때)가 해제됐을 때를 의미한다.
// classList 프로퍼티는 js에서 문자형 데이터 입력을 통해 html 문서에 class 속성 텍스트를 추가 또는 삭제할 수 있는 명령이다.
// 이때 추가는 classList.add('텍스트'); 삭제는 classList.remove('텍스트'); 와 같은 형식으로 작성한다.
// 이 외에도 classList 뒤에 붙는 메소드를 통해서 여러가지 방식의 제어를 할 수 있을 것이다.
// 자바스크립트에서 window는 기초적인 레벨 수준의 설명으로 브라우저 화면 창 그 자체이다 라고 생각할 수 있다.
// badge에서 사용한 _.throttle(함수, 시간) 기능은 lodash 라이브러리로 사용한 기술이다. _.throttle(함수, 시간) 기능의 의미는 시간을 설정하여 설정한 시간만큼의 시간적 부하(제한, 딜레이)를 주는 기능이다.
// 주로 _.throttle(함수, 시간)은 스크롤을 사용하는 기능을 구현할 때 부하(제한)를 줄 목적으로 많이 사용한다.
// 자바스크립트 속성중에 .scrollY는 브라우저에서 스크롤 동작을 할때 현재 스크롤 된 위치를 픽셀 단위 숫자 정보로 반환한다.

// fade-in
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1,
  });
});

// forEach(); 반복문
// forEach(); 반복문과 gsap의 gsap.to(요소, 지속시간, 옵션{대체로 객체데이터를 사용한다}); 기능을 통해서 순차적인 이미지 표현을 구현한다.
// 여기서 forEach(); 반복문의 사용법을 반복 연습하여 숙달하도록 하자. 특히 반복문의 실행문에서 사용하는 매개변수 자리에 매개변수를 작성하는 방법과 gsap.to();의 기능 숙지 중요

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper', {
  direction:'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper', {
  // direction: 'horizontal', 원래는 가로 방향을 지정하려면 horizontal 을 입력해야 하지만 기본값으로 설정되어 있어 생략한다.
  slidesPerView: 3, // 한번에 보여지는 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이의 여백
  centeredSlides: true, // 첫번째 슬라이드가 가운데 보여지도록 하기
  loop: true,
  autoplay: {
    delay: 5000
  }, // 
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next'
  }
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, // 하나의 화면에 몇  개의 슬라이드를 보여줄 것 이냐
  navigation: {
    prevEl: 'awards .swiper-prev',
    nextEl: 'awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion){
    promotionEl.classList.add('hide');
  }else {
    promotionEl.classList.remove('hide');
  }
});

function floatingObject(selector){
  gsap.to(selector, 1, {
    y: 12,
    repeat: -1,
    yoyo: true,
    ease: "power1.out",
    delay: 3,
  });
}

floatingObject('.floating');

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소
      triggerHook: .8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});




