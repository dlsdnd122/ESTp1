// 햄버거 바 클릭 시 사이드바 바뀜
  document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const sidebar = document.getElementById('sidebar');
  const sidebar2 = document.querySelector('.sidebar2');

  menuBtn.addEventListener('click', function () {
  // toggle 사이드바 표시 상태
  const sidebarVisible = getComputedStyle(sidebar).display !== 'none';

  if (sidebarVisible) {
  sidebar.style.display = 'none';
  sidebar2.style.display = 'flex'; // flex로 설정해야 내부 버튼들이 세로로 정렬됨
} else {
  sidebar.style.display = 'block';
  sidebar2.style.display = 'none';
}
});
});

