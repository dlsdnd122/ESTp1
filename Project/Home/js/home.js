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
      sidebar.style.display = 'none';
      sidebar2.style.display = 'block';
      allMains.forEach(main => {
        main.style.marginLeft = '80px';
        main.style.width = 'calc(100% - 80px)';
      });
    } else {
      sidebar.style.display = 'block';
      sidebar2.style.display = 'none';
      allMains.forEach(main => {
        main.style.marginLeft = '240px';
        main.style.width = 'calc(100% - 240px)';
      });
    }
  };

  let isSidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
  updateSidebarUI(isSidebarCollapsed);

  menuBtn.addEventListener('click', function () {
    isSidebarCollapsed = !isSidebarCollapsed;
    localStorage.setItem('sidebarCollapsed', isSidebarCollapsed);
    updateSidebarUI(isSidebarCollapsed);
  });

  // ==================================
  // 2. 프로필 드롭다운 로직
  // ==================================
  const profileImg = document.getElementById('profile-img');
  const dropdown = document.getElementById('dropdownMenu');
  if (profileImg && dropdown) {
    profileImg.addEventListener("click", () => {
      dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".profile-wrapper")) {
        dropdown.style.display = "none";
      }
    });
  }

  // ==================================
  // 3. 페이지 로드 공통 함수
  // ==================================
  const mainCache = {};  // 캐싱용 객체 { pageName: mainElement }

  function loadPage(pageName, url) {
    // 모든 main 숨김
    document.querySelectorAll("main").forEach(main => main.style.display = 'none');

    if (mainCache[pageName]) {
      mainCache[pageName].style.display = "flex";
      updateSidebarUI(localStorage.getItem('sidebarCollapsed') === 'true');
      return;
    }

    fetch(url)
      .then(response => response.text())
      .then(html => {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = html;
        const fetchedMain = tempDiv.querySelector("main");

        if (fetchedMain) {
          mainCache[pageName] = fetchedMain;
          fetchedMain.style.display = "flex";
          document.body.appendChild(fetchedMain);
          updateSidebarUI(localStorage.getItem('sidebarCollapsed') === 'true');

          if (!document.getElementById(`script-${pageName}`)) {
            const script = document.createElement("script");
            script.id = `script-${pageName}`;
            script.src = `Project/Home/js/subscribe.js`;
            script.onload = () => {
              console.log(`${pageName}.js loaded`);
              if (typeof initSubscribePage === "function") {
                console.log("함수 발견됨");
                initSubscribePage();
              } else {
                console.warn(" 함수가 없음");
              }
            };

            script.onerror = () => console.error(`Failed to load ${pageName}.js`);
            document.body.appendChild(script);
          }

          // if (!document.getElementById(`script-${pageName}`)) {
          //   const script = document.createElement("script");
          //   script.id = `script-${pageName}`;
          //   script.src = `Project/Home/js/subscribe.js`;  // 예: subscribe.js
          //   script.type = "text/javascript";
          //   script.defer = true;  // DOM 로딩 후 실행
          //   document.body.appendChild(script);
          // }
          // const script = document.createElement("script");
          // script.src = `Project/Home/js/subscribe.js`;  // 예: pageName이 'subscribe'이면 'subscribe.js'를 불러옴
          // script.type = "text/javascript";
          // document.body.appendChild(script);
        }
      });
  }

  // ==================================
  // 4. 버튼 이벤트 연결
  // ==================================
  const subBtn1 = document.getElementById("subscribe-btn1");
  const subBtn2 = document.getElementById("subscribe-btn2");
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
    // 모든 버튼에서 active 제거
    buttons.forEach(btn => btn.classList.remove('active'));
    // 클릭된 버튼에 active 추가
    button.classList.add('active');
  });
});


// ==================================
// 5. 썸네일 video.html과 연결
// ==================================

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.content').forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.id;
      window.location.href = "Project/Video/page/video.html?videoid=" + id;


    });
  });
});


// // ==================================
// // 6. 구독 페이지 관리버튼 로직
// // ==================================
//
//   const manageBtn = document.getElementById('manage-btn');
//   const maintop1 = document.getElementById('maintop1');
//   const maintop2 = document.getElementById('maintop2');
//   const subcontent = document.getElementById('subcontent');
//   const subcontent2 = document.getElementById('subcontent2');
//
//   let manageMode = false;
//
//   manageBtn.addEventListener('click', () => {
//   manageMode = !manageMode;
//
//   if (manageMode) {
//   // 관리 모드 ON
//   maintop1.style.display = 'none';
//   subcontent.style.display = 'none';
//
//   maintop2.style.display = 'block';
//   subcontent2.style.display = 'block';
// } else {
//   // 일반 모드 ON
//   maintop1.style.display = 'block';
//   subcontent.style.display = 'block';
//
//   maintop2.style.display = 'none';
//   subcontent2.style.display = 'none';
// }
// });

// ==================================
// 6. 썸네일 미리보기 img태그 iframe으로 바꾸기
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

