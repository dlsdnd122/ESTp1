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
const likeCountSpan = document.getElementById('like-count');

likeBtn.addEventListener('click', () => {
  likeBtn.classList.toggle('active');

  let count = parseInt(likeCountSpan.textContent);

  if (likeBtn.classList.contains('active')) {
    unlikeBtn.classList.remove('active');
    likeCountSpan.textContent = count + 1;
  } else {
    likeCountSpan.textContent = count - 1;
  }

});

unlikeBtn.addEventListener('click', () => {
  unlikeBtn.classList.toggle('active');
  if (unlikeBtn.classList.contains('active')) {

    likeCountSpan.textContent = count = 500; // 싫어요 버튼 누르면 눌렀던 좋아요 초기화
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



// ==================================
// 7. 특정 width이하일때 버튼 안보이게하기
// ==================================
function toggleButtonsByWindowWidth() {
  const windowWidth = window.innerWidth;

  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById(`none-icon${i}`);
    if (el) {
      if (windowWidth < 960) {
        el.style.display = "none";
      } else {
        el.style.display = "block"; // 다시 보이게
      }
    }
  }
}
// 처음 로딩 시 체크
toggleButtonsByWindowWidth();
// 창 크기 변경 시 체크
window.addEventListener("resize", toggleButtonsByWindowWidth);



// ==================================
// 8. playlist 반응형 구현
// ==================================
const playlist = document.querySelector('.playlist');
const mainContainer = document.querySelector('.main-container');
const content = document.querySelector('.content');
const commentTop = document.querySelector('.comment-top'); // 댓글 위쪽 요소
const commentBottom = document.querySelector('.comment-bottom'); // 댓글 입력창

function rearrangeLayout() {
  if (window.innerWidth <= 960) {
    // 960 이하: playlist를 댓글 위로 이동
    if (playlist && commentTop && playlist.parentNode !== commentTop.parentNode) {
      commentTop.parentNode.insertBefore(playlist, commentTop);
      // 스타일 변경
      content.style.width = '100%';
      playlist.style.width = '100%';
    }
  } else {
    // 960 초과: playlist를 main-container 바로 아래 content 옆에 원래대로 복구
    if (playlist && mainContainer && content && playlist.parentNode !== mainContainer) {
      mainContainer.appendChild(playlist);
      // 스타일 복구
      content.style.width = '76%';
      playlist.style.width = '24%';
    }
  }
}

// 이벤트 등록 및 초기 실행
window.addEventListener('resize', rearrangeLayout);
rearrangeLayout();



// ==================================
// 9. 댓글 기능
// ==================================
const commentBtn = document.querySelector('.comment-bottom');
const list = [];

function commentBtnHandler(e) {
  e.preventDefault();
  // console.log(e.target);
  // console.log(e.target[0]);
  // console.log(e.target[0].value);
  // console.log(e.target.content.value);

  // 댓글 내용이 없을시 alert 창
  const input = e.target.content;
  if (input.value=== "") {
    alert("내용을 입력하고 버튼을 눌러주세요.");
    return;
  }

  const commentText = input.value.trim();
  list.push(commentText);

  addCommentToDOM(commentText); // 화면에 댓글 추가
  // 댓글 input 초기화
  e.target.reset();
}

// 댓글을 html에 추가
function addCommentToDOM(comment) {
  const commentList = document.getElementById("comment-list");

  const commentDiv = document.createElement("div");
  commentDiv.className = "comment-bottom";

  //프로필 이미지
  const img = document.createElement("img");
  img.src = "../video_img/profile.png";
  img.alt = "프로필";
  img.className = "i-video_profile";

  // 댓글 텍스트
  const textP = document.createElement("p");
  textP.textContent = comment;
  textP.className = "comment-display"; //스타일 추가시 사용

  commentDiv.appendChild(img);
  commentDiv.appendChild(textP);
  commentList.appendChild(commentDiv);
}
commentBtn.addEventListener("submit", commentBtnHandler);

