
// 햄버거바 클릭 이벤트 (사이드바 변경, main margin값 변경)
  document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.getElementById('sidebar');
  const sidebar2 = document.querySelector('.sidebar2');
  const main = document.querySelector('main');

  menuBtn.addEventListener('click', function () {
  // toggle 사이드바 표시 상태
  const sidebarVisible = getComputedStyle(sidebar).display !== 'none';

  if (sidebarVisible) {
  sidebar.style.display = 'none';
  sidebar2.style.display = 'flex'; // flex로 설정해야 내부 버튼들이 세로로 정렬됨
    main.style.marginLeft = '80px';
    main.style.width = 'calc(100% - 80px)';
} else {
  sidebar.style.display = 'block';
  sidebar2.style.display = 'none';
  main.style.marginLeft = '240px';
}
});
});


// 프로필 드롭다운 이벤트
const profileImg = document.getElementById('profile-img');
const dropdown = document.getElementById('dropdownMenu');
profileImg.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});
// 바깥 클릭 시 드롭다운 닫기
document.addEventListener("click", (event) => {
  if (!event.target.closest(".profile-wrapper")) {
    dropdown.style.display = "none";
  }
});

