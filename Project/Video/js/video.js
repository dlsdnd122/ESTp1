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

    if (isShown) {  // 사이드바가 있을때
      sidebar.classList.remove('show');
      overlay.classList.remove('show');

      // 사이드바 닫히는 애니메이션이 끝난 뒤에 완전히 숨김
      // transition 끝나면 display: none 적용
      setTimeout(() => {
        sidebar.style.display = 'none';
      }, 300);
    } else {  // 사이드바가 없을때
      sidebar.style.display = 'block'; // 먼저 보여주고
      // 한 프레임 뒤에 class 추가
      requestAnimationFrame(() => {
        sidebar.classList.add('show');
        overlay.classList.add('show');
      });
    }
  });
  // 뒤에 배경 클릭 시
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

  const toggleBtn = document.getElementById("toggle-btn");  // 더보기/간략히
  const fullDesc = document.getElementById("full-desc");  // 영상설명

  toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // 두 상태를 토글
  fullDesc.classList.toggle("expanded");
  fullDesc.classList.toggle("collapsed");

  // 상태에 따라 버튼 간략히/더보기로 변경
  toggleBtn.textContent = fullDesc.classList.contains("expanded") ? "간략히" : "더보기";
});

// ==================================
// 4. 좋아요/싫어요 버튼 호버로직
// ==================================
const likeBtn = document.getElementById('like');
const unlikeBtn = document.getElementById('unlike');
const likeCountSpan = document.getElementById('like-count');

likeBtn.addEventListener('click', () => {
  // active : 계속 호버인거처럼 보이게 위한 스타일
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

    count = 500;
    likeCountSpan.textContent = 500; // 싫어요 버튼 누르면 눌렀던 좋아요 초기화
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
  btn2.style.display = 'inline-block';
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
    // block -> none, none -> block
    dropdownContent.style.display === 'block' ? 'none' : 'block';
});



// ==================================
// 7. 특정 width이하일때 버튼 안보이게하기
// ==================================
function toggleButtonsByWindowWidth() {
  // 현재 width를 windowWidth에 저장
  const windowWidth = window.innerWidth;

  // none-icon1~4
  for (let i = 1; i <= 4; i++) {
    const el = document.getElementById(`none-icon${i}`);
    if (el) {
      // width = 960 미만일때
      if (windowWidth < 960) {
        el.style.display = "none";
      } else {
        el.style.display = "block"; // 다시 보이게
      }
    }
  }
}
// 처음 로딩 시 width 확인후 버튼 상태 결정
toggleButtonsByWindowWidth();
// 창 크기 변경 시 버튼 상태 결정
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
    // 초기에는 부모태그가 다르기 때문에 무조건 참이다.  commentTop = main, playlist는 다른 main태그
    if (playlist && commentTop && playlist.parentNode !== commentTop.parentNode) {
      commentTop.parentNode.insertBefore(playlist, commentTop);
      // 영상 가로 100%
      content.style.width = '100%';
      // 재생목록 가로 100%
      playlist.style.width = '100%';
    }
  } else {
    // 960 초과: playlist를 main-container 바로 아래 content 옆에 원래대로 복구
    if (playlist && mainContainer && content && playlist.parentNode !== mainContainer) {
      // 재생목록 다시 오른쪽에 추가
      mainContainer.appendChild(playlist);
      // 영상 가로 76%
      content.style.width = '76%';
      // 재생목록 가로 24%
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
  // trim -> 앞뒤 공백 제거
  // 변수에 넣고 List배열에 push
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

  // 이름 + 댓글 텍스트 묶는 div
  const textWrapper = document.createElement("div");
  textWrapper.className = "comment-text-wrapper";

  // 사용자 이름
  const nameP = document.createElement("p");
  nameP.className = "comment-name";
  nameP.textContent = "@dlsdnd122";

  // 댓글 텍스트
  const textP = document.createElement("p");
  textP.textContent = comment;
  textP.className = "comment-display";
  textP.style.margin = "0";
  textP.style.padding = "0";

  // 좋아요 + 싫어요 묶는 div
  const commentlikeBtn = document.createElement("div");
  commentlikeBtn.className = "comment-like-btn";

  // 댓글 좋아요 싫어요
  const commentLike = document.createElement("button");
  const likeIcon = document.createElement("i");
  likeIcon.className = "fa-regular fa-thumbs-up";
  commentLike.appendChild(likeIcon);

  const commentUnlike = document.createElement("button");
  const unlikeIcon = document.createElement("i");
  unlikeIcon.className = "fa-regular fa-thumbs-down";
  commentUnlike.appendChild(unlikeIcon);

  // 좋아요 싫어요 묶기
  commentlikeBtn.appendChild(commentLike);
  commentlikeBtn.appendChild(commentUnlike);

  // 이름과 댓글, 좋아요 싫어요 묶기
  textWrapper.appendChild(nameP);
  textWrapper.appendChild(textP);
  textWrapper.appendChild(commentlikeBtn);

  commentDiv.appendChild(img);
  commentDiv.appendChild(textWrapper);
  commentList.appendChild(commentDiv);

}
commentBtn.addEventListener("submit", commentBtnHandler);

