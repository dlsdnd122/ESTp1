// ==================================
// 1. 프로필 드롭다운 로직(video)
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
// 2. 오버레이 로직
// ==================================
document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  menuBtn.addEventListener('click', () => {
    const isShown = sidebar.classList.contains('show');

    if (isShown) {
      sidebar.classList.remove('show');
      overlay.classList.remove('show');

      // transition 끝나면 display: none 적용
      setTimeout(() => {
        sidebar.style.display = 'none';
      }, 300);
    } else {
      sidebar.style.display = 'block'; // 먼저 보여주고
      // 한 프레임 뒤에 class 추가
      requestAnimationFrame(() => {
        sidebar.classList.add('show');
        overlay.classList.add('show');
      });
    }
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('show');
    overlay.classList.remove('show');

    setTimeout(() => {
      sidebar.style.display = 'none';
    }, 300);
  });
});


