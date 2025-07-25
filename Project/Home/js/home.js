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
