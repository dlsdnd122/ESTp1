// ==================================
// 1. 구독 페이지 썸네일 video.html과 연결
// ==================================
console.log("subscribe.js loaded");

function initSubscribePage() {
  console.log("initSubscribePage 실행됨");

  document.querySelectorAll('.content').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      window.location.href = "Project/Video/page/video.html?videoid=" + id;
    });
  });
}

// ==================================
// 2. 썸네일 미리보기 img태그 iframe으로 바꾸기
// ==================================

document.querySelectorAll('.content').forEach(content => {
  const videoId = content.dataset.video;
  const container = content.querySelector('.video-container');

  // 썸네일 이미지
  const thumbnail = container.querySelector('.thumbnail');

  // iframe 생성
  const iframe = document.createElement('iframe');
  iframe.className = 'video-iframe';
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  iframe.allow = "autoplay; encrypted-media";
  iframe.allowFullscreen = true;
  iframe.style.border = 'none';

  // 썸네일 hover → iframe 전환
  content.addEventListener('mouseenter', () => {
    container.innerHTML = '';
    container.appendChild(iframe);
    iframe.style.display = 'block';
  });

  // mouseleave → 다시 썸네일로
  content.addEventListener('mouseleave', () => {
    container.innerHTML = '';
    container.appendChild(thumbnail);
  });
});
