document.addEventListener('DOMContentLoaded', function () {

  // ==================================
  // 1. 사이드바 로직
  // ==================================
  const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.getElementById('sidebar');
  const sidebar2 = document.querySelector('.sidebar2');

  const updateSidebarUI = (isCollapsed) => {
    const allMains = document.querySelectorAll('main');

    if (isCollapsed) {
      sidebar.style.display = 'none';   // 숨기기
      sidebar2.style.display = 'block';   // 보이기
      allMains.forEach(main => {
        main.style.marginLeft = '80px';
        main.style.width = 'calc(100% - 80px)';
      });
    } else {
      sidebar.style.display = 'block';    // 보이기
      sidebar2.style.display = 'none';    // 숨기기
      allMains.forEach(main => {
        main.style.marginLeft = '240px';
        main.style.width = 'calc(100% - 240px)';
      });
    }
  };

// 새로고침해도 상태 유지
  let isSidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
  updateSidebarUI(isSidebarCollapsed);

  menuBtn.addEventListener('click', function () {
    isSidebarCollapsed = !isSidebarCollapsed;
    localStorage.setItem('sidebarCollapsed', isSidebarCollapsed);
    updateSidebarUI(isSidebarCollapsed);  // ui업데이트
  });

  // ==================================
  // 2. 프로필 드롭다운 로직
  // ==================================
  const profileImg = document.getElementById('profile-img');
  const dropdown = document.getElementById('dropdownMenu');
  if (profileImg && dropdown) {
    profileImg.addEventListener("click", () => {
      // 열려있으면 닫고 닫혀있으면 열기
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
      // 박스 밖 클릭시 박스 닫힘
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".profile-wrapper")) {
        dropdown.style.display = "none";
      }
    });
  }

  // ==================================
  // 3. 페이지 로드 공통 함수
  // ==================================
  // 페이지 전환 없이 콘텐츠를 바꾸는 SPA 방식
  const mainCache = {};  // 캐싱용 객체 { pageName: mainElement }

  function loadPage(pageName, url) {
    // 모든 main 숨김
    document.querySelectorAll("main").forEach(main => main.style.display = 'none');

    // 캐싱된 페이지가 있으면 바로 보여줌
    if (mainCache[pageName]) {
      mainCache[pageName].style.display = "flex";
      updateSidebarUI(localStorage.getItem('sidebarCollapsed') === 'true');
      return;
    }

    fetch(url)
      .then(response => response.text())
      .then(html => {
        const tempDiv = document.createElement("div");  //임시로 div에 넣기
        tempDiv.innerHTML = html;
        const fetchedMain = tempDiv.querySelector("main");  // main 추출

        if (fetchedMain) {
          mainCache[pageName] = fetchedMain;  // 추출한 main 캐시에 저장
          fetchedMain.style.display = "flex";
          document.body.appendChild(fetchedMain);
          updateSidebarUI(localStorage.getItem('sidebarCollapsed') === 'true'); //사이드바 동기화

          if (!document.getElementById(`script-${pageName}`)) {
            // subscribe.js 로드
            const script = document.createElement("script");
            script.id = `script-${pageName}`;
            script.src = `Project/Home/js/subscribe.js`;
            script.onload = () => {
              if (typeof initSubscribePage === "function") {
                initSubscribePage();
              } else {
              }
            };

            document.body.appendChild(script);
          }
        }
      });
  }

  // ==================================
  // 4. 버튼 이벤트 연결
  // ==================================
  const subBtn1 = document.getElementById("subscribe-btn1");
  const subBtn2 = document.getElementById("subscribe-btn2");
  // main 태그 불러오기
  if (subBtn1) subBtn1.addEventListener("click", () => loadPage('subscribe', 'subscribe.html'));
  if (subBtn2) subBtn2.addEventListener("click", () => loadPage('subscribe', 'subscribe.html'));

  const shortsBtn1 = document.getElementById("shorts-btn1");
  const shortsBtn2 = document.getElementById("shorts-btn2");
  if (shortsBtn1) shortsBtn1.addEventListener("click", () => loadPage('shorts', 'shorts.html'));
  if (shortsBtn2) shortsBtn2.addEventListener("click", () => loadPage('shorts', 'shorts.html'));

});

// 사이드바 active
const buttons = document.querySelectorAll('.sidebar button, .sidebar2-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // 모든 버튼에서 active 제거 (클릭한 버튼 제외)
    buttons.forEach(btn => btn.classList.remove('active'));
    // 클릭된 버튼에 active 추가
    button.classList.add('active');
  });
});


// ==================================
// 5. 썸네일 video.html과 연결
// ==================================
// 페이지가 모두 로드되면 실행
document.addEventListener('DOMContentLoaded', () => {
  // .content 요소 각각에 클릭하면
  document.querySelectorAll('.content').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id; // data-id 가져오기
      window.location.href = "Project/Video/page/video.html?videoid=" + id; // video.html 페이지로 이동하면서 videoid 파라미터에 id값 전달


    });
  });
});


// ==================================
// 6. 썸네일 미리보기 img태그 iframe으로 바꾸기
// ==================================

  document.querySelectorAll('.content').forEach(content => {
  const videoId = content.dataset.video;  // 유튜브 영상 아이디
  const container = content.querySelector('.video-container'); // 썸네일과 iframe이 들어갈 공간

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
  container.innerHTML = ''; // 내용 제거
  container.appendChild(iframe);  // iframe 넣기
  iframe.style.display = 'block';
});

  // mouseleave → 다시 썸네일로
  content.addEventListener('mouseleave', () => {
  container.innerHTML = ''; // 내용 제거
  container.appendChild(thumbnail); // 썸네일 넣기
});
});

