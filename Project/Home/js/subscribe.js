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

