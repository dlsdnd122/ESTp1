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

// ==================================
// 3. 더보기/간략히 로직
// ==================================

  const toggleBtn = document.getElementById("toggle-btn");
  const fullDesc = document.getElementById("full-desc");

  toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fullDesc.classList.toggle("expanded");
  fullDesc.classList.toggle("collapsed");

  toggleBtn.textContent = fullDesc.classList.contains("expanded") ? "간략히" : "더보기";
});

// ==================================
// 4. 좋아요/싫어요 버튼 호버로직
// ==================================
const likeBtn = document.getElementById('like');
const unlikeBtn = document.getElementById('unlike');

likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('active');
  if (likeBtn.classList.contains('active')) {
    unlikeBtn.classList.remove('active');
  }
});

unlikeBtn.addEventListener('click', () => {
  unlikeBtn.classList.toggle('active');
  if (unlikeBtn.classList.contains('active')) {
    likeBtn.classList.remove('active');
  }
});


// ==================================
// 5. 구독/구독중 버튼 로직
// ==================================
const btn1 = document.getElementById('sub1');
const btn2 = document.getElementById('sub2');

btn1.addEventListener('click', () => {
  btn1.style.display = 'none';
  btn2.style.display = 'inline-block'; // 또는 'block' 도 가능
  alert('구독 하였습니다.')
});

btn2.addEventListener('click', () => {
  btn2.style.display = 'none';
  btn1.style.display = 'inline-block';
  alert('구독을 취소하였습니다.')
});


// ==================================
// 6. 정렬 기준 드롭박스 로직
// ==================================
const dropdownBtn = document.getElementById('comment-array');
const dropdownContent = document.getElementById('comment-dropbar');

dropdownBtn.addEventListener('click', () => {
  dropdownContent.style.display =
    dropdownContent.style.display === 'block' ? 'none' : 'block';
});

