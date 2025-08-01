# 🎬 CloneTube - 유튜브 클론코딩

<img width="869" height="831" alt="스크린샷 2025-07-29 오후 3 13 50" src="https://github.com/user-attachments/assets/1348b411-8902-45fb-a7b1-712f08a19a49" />


- 기초 웹 프론트엔드 기술을 기반으로 제작한 유튜브 클론 웹사이트입니다. 
- 실제 유튜브의 주요 UI 요소와 반응형 레이아웃을 HTML/CSS/JavaScript만으로 구현하였습니다.

---

## 📅 개발 기간
- 2025.07.21 ~ 2025.08.06 

---
# 📌 요구사항

### 1. 프로젝트 일정

- 프로젝트 일정: 7/21(월) ~ 8/6(수) 11:50
- 프로젝트 발표: 8/6(수)

### 2. 주제 및 요구사항

### 2-1. 주제

<aside>
💡유튜브 영상 클론 및 인터랙션 구현

</aside>

### 2-2. 요구사항

1단계
가. 메인 화면

- 상단 네비게이션 바 (로고, 검색창, 사용자 아이콘)
a. 로고 클릭시 홈페이지 상단 리로드
b. 검색창에서 키워드로 해당 검색 가능 (추가 구현 사항으로, 검색 기능은 구현되지 않아도 됨)
c. 사용자 아이콘 클릭시 계정 정보 (표시된 UI 전부 구현, 사용자 <정보 UI 클릭시 특정 링크로의 연결은 구현되지 않아도 됨)
- 좌측 사이드바 (홈, 구독 아이콘 포함)
    1. 홈 클릭시 홈페이지 상단 리로드
    2. 구독 아이콘 클릭시 구독 관련 페이지 (실제 유투브상의 구독 페이지와 같은 UI 로 구현)
- 영상 썸네일 카드 영역 카드 8개 이상
- 썸네일, 영상 제목, 채널명, 조회수, 업로드 날짜 표시
- 마우스 호버 시 카드 애니메이션 (확대 등)

2단계
가. 영상 상세 페이지 구현 및 URL 구조 설계

- 각 영상 클릭 시 video.html?videoId=1 형식의 페이지로 이동
- JS로 videoId 파라미터 읽기
- 상세 페이지에는 다음 정보 표시
a. 영상 iframe (YouTube 임베드)
b. 제목, 채널명, 조회수, 업로드일
c. 설명 영역

3단계
가. 사용자 인터랙션 (아래 기능 중 2가지 이상 구현)

1. 댓글 작성 기능 (로컬 저장 하지 않아도 괜찮음. ex. 댓글 작성해서 등록이 가능하지만, 해당 페이지에 다시 들어왔을 때는 해당 댓글이 남아있지 않아도 됩니다.)
2. 좋아요 / 싫어요 버튼 상태 반영
3. 우측 재생 목록 반응형 디자인

추가 요구사항

- 코드는 Github Repository를 생성하여 작업합니다.
- 인텔리제이에서 코드 작업 후, 1~3일에 한번씩 commit, push 합니다.
- 구현한 결과물을 배포합니다.

### 2-3. 결과물 배포하기

구현 완료한 결과물을 GitHub Pages로 배포합니다. 

배포가 성공적으로 이루어졌다면 **`https://{Github 계정}.github.io/{프로젝트명}`** 경로로 접속이 가능합니다.


---
## 👩‍💻 프로젝트 개요

- 목표
    - 웹 표준을 지키며 HTML/CSS/JS로 UI를 구현
    - YouTube의 핵심 기능과 UI를 모방하여 구조적 사고력 훈련
    - 추후 백엔드 연동을 위한 웹 컴포넌트 설계 이해
    - 모바일 대응 반응형 레이아웃 적용 실습

---

## 🗂️ 프로젝트 구조

```bash
📁 EST_project-root/
├── index.html               # 🏠 메인 페이지
├── subscribe.html           # 📰 구독 페이지
├── shorts.html              # 🎬 숏츠 페이지
│
├── Home/                    # 🧩 홈 관련 리소스
│   ├── css/
│   │   ├── home.css         # 홈 스타일
│   │   ├── subscribe.css    # 구독 스타일
│   │   └── shorts.css       # 숏츠 스타일
│   └── js/
│       └── home.js          # 홈 기능 스크립트
│
└── Video/                   # 📺 영상 관련 리소스
    ├── page/
    │   └── video.html       # 📺영상 페이지
    ├── css/
    │   └── video.css        # 영상 페이지 스타일
    └── js/
        ├── video.js         # 영상 페이지 로직
        └── video_2.js       # 추가 기능 스크립트

```
---

## 🛠 기술 스택

### 🎨 Frontend  
<p>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
</p>

### 🎨 디자인 도구  
<p>
  <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"/>
</p>

### 🤝 협업 도구  
<p>
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white"/>
</p>

### 💻 개발 환경  
<p>
  <img src="https://img.shields.io/badge/IntelliJ_IDEA-000000?style=for-the-badge&logo=intellijidea&logoColor=white"/>
  <img src="https://img.shields.io/badge/Live_Server-FFD700?style=for-the-badge&logo=visualstudiocode&logoColor=black"/>
</p>


---

## 🔍 주요 기능

<table border="1" cellspacing="0" cellpadding="8">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>기능</th>
      <th>설명</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>홈 화면</td>
      <td>썸네일, 제목, 채널명, 영상 미리보기, 조회수 표시</td>
    </tr>
    <tr>
      <td>구독 페이지</td>
      <td>구독 영상 썸네일, 제목, 채널명, 조회수 표시</td>
    </tr>
    <tr>
      <td>쇼츠 페이지</td>
      <td>쇼츠 영상 재생 페이지 구현</td>
    </tr>
    <tr>
      <td>사이드바</td>
      <td>사이드바 v1, 사이드바 v2 구현</td>
    </tr>
    <tr>
      <td>프로필 DropDown</td>
      <td>프로필 클릭 시 Dropdown 메뉴 노출</td>
    </tr>
    <tr>
      <td>영상 상세</td>
      <td>videoId 쿼리로 이동, iframe 임베딩</td>
    </tr>
    <tr>
      <td>영상 목록</td>
      <td>현재 영상 제외, 나머지 목록 표시 및 반응형 UI</td>
    </tr>
    <tr>
      <td>반응형 메뉴</td>
      <td>햄버거 아이콘 클릭 시 메뉴 토글, 아이콘 전환</td>
    </tr>
  </tbody>
</table>


---

##✅ 실행 방법
```bash
# 배포 주소
https://dlsdnd122.github.io/ESTp1/

# 로컬에 클론
git clone https://github.com/dlsdnd122/ESTp1.git

# 라이브 서버 실행 (VS Code Live Server 확장 추천)
open index.html
```
---

## 📅 7/22 (화) - 개발 현황

### 📸 개발 화면
<img src="https://github.com/user-attachments/assets/6e329525-3143-4236-b83e-0150b407570b" width="600" />
<img src="https://github.com/user-attachments/assets/ee0cbf5a-52c4-44a4-9606-ce619caebdf6" width="600" />

### ✅ 진행된 작업 목록
- [x] 상단바 제작
- [x] 사이드바 v1, v2 제작
- [x] 햄버거 버튼 클릭 시 v1 → v2 전환 (JavaScript로 구현)
- [x] 사이드바 스크롤 및 스크롤바 스타일 적용 (CSS 커스터마이징)

---

## ❗ 어려웠던 점 및 느낀 점

- 유튜브처럼 CSS/HTML을 정교하게 구현하려다 보니 초반에 너무 많은 에너지 소모
- 기능 구현이 외형보다 더 중요하다는 생각이 강해짐
- 문제 상황에 빠르게 대처하기가 아직 익숙하지 않음
- JavaScript가 특히 어렵게 느껴짐
  - 주말에 JavaScript 집중 공부 예정
- 내일부터는 기능 구현에 더 집중

---

## 🎯 다음 목표

- 기능 중심의 개발 진행
- 자바스크립트 이벤트 및 동적 조작 연습
- 구조적이고 유지보수 가능한 코드 작성

<br>
<br>
<br>

---

## 📅 7/23 (수) - 개발 현황

### 📸 개발 화면
<img width="1875" height="866" alt="스크린샷 2025-07-23 오후 5 24 03" src="https://github.com/user-attachments/assets/9af70190-3bca-419d-9151-70a9da7967d5" />
<img width="1873" height="864" alt="스크린샷 2025-07-23 오후 5 24 19" src="https://github.com/user-attachments/assets/e6b554c0-6c90-4ff6-bc59-5461ea322647" />


### ✅ 진행된 작업 목록
- [x] main태그 조정
- [x] 영상 고르고 썸네일 카드형식으로 구현
- [x] 우상단 프로필 메뉴드롭바 구현
- [x] video.html 파일 생성 및 작업

---

## ❗ 어려웠던 점 및 느낀 점

- 만들었던 상단바를 다른 html에서 fetch함수로 가져오기 위하여 header.html을 만들어 분리했다.
- 이 과정에서 JS와 CSS가 동작하지 않는 것을 발견하였다.
- 알고보니 경로를 상대경로로 적어주지 않았기에 생긴 문제였다.
- 근데 JS는 작동하지 않았는데 이유는 HTML안에 스크립트가 있어도 innerHTML로 넣는 순간 script 태그는 DOM에 삽입되지만,
- 브라우저에서는 실행하지 않는 문제가 생긴다고 한다.
- 그렇기에 JS를 따로 import 해주었다.
- 그런데 또 안된다. 이유를 찾기 위하여 JS파일들을 한참동안 찾아보고, 콘솔로도 찍어 보았다.
- 그 결과 햄버거 버튼과 사이드 바 사이에 있던 JS코드가 html파일을 옮기면서 엄청나게 꼬인것이다.
- 그래서 document로 받는 html요소들을 정리한 다음에 실행을 해볼려고 했다.
- 근데 너무 많이 꼬여서 머리가 터질꺼같았다.
- 내일 다시 시도해보고 정 안될거 같으면 어쩔수 없이 상단바와 사이드바 코드를 복사해서 video.html 파일에 붙여서 해야할 것 같다.
- 요번에 느낀건데 상단바처럼 html에서 고정으로 들어가는 것들을 따로 html파일로 만들고 다른 파일들을 만들어야겠다는 것을 느꼈다.
- 원래 그렇게 했엇는데 오랜만에 클론코딩을 하다보니 감각을 잃은거 같다. 분발해야겠다.

---

## 🎯 다음 목표

- 꼬인 자바스크립트 코드 내일 다시 확인
- video.html파일 코딩
- 구조적이고 유지보수 가능한 코드 작성

<br>
<br>
<br>

---

## 📅 7/24 (목) - 개발 현황

### 📸 개발 화면
<img width="1796" height="866" alt="스크린샷 2025-07-24 오후 5 03 11" src="https://github.com/user-attachments/assets/52a10de3-859c-4a73-b102-92120bee98c9" />
<img width="1780" height="863" alt="스크린샷 2025-07-24 오후 5 03 24" src="https://github.com/user-attachments/assets/81aae2d5-881d-4aa3-9a08-63a66a17c22d" />


### ✅ 진행된 작업 목록
- [x] 사이드바 버튼 이벤트 구현
- [x] 로고, 사이드바 onclick home 구현
- [x] 사이드바 호버 스타일 수정
- [x] 사이드바 shorts 페이지 구현 후 연결
- [x] 사이드바 구독 페이지 구현 후 연결
- [x] JS 코드 전체적으로 수정
- [x] video.html파일 생성 후 home과 연결


---

## ❗ 어려웠던 점 및 느낀 점

- href 속성을 절대경로로 설정하자 404에러 발생 -> 상대경로를 써서 해결(서버 없이 그냥 파일을 브라우저에 열 경우는 상대경로를 사용해야함)
- fetch 함수는 css까지 읽지 못하여 기존 css파일들을 다 링크시켜줌 -> video페이지 구현할때는 좀 다른 방법을 모색해보고 할 예정
- fetch 함수로 받아온 html이 이벤트를 줄때마다 추가되는 현상 발견 -> js에 전역변수 추가 후 가져온 main을 저장하고 재사용
- subscribe.html을 받아올때 스타일에 문제 생김 -> 받으면서 올때 display:block 명령어를 사용함을 찾음 -> flex로 변경
- 사이드바 홈버튼에 호버가 지속적으로 작동하지 않는다는 것을 찾음 -> home.html에 상단,사이드바와 홈의 main을 넣어버려 로딩되면서 초기화됨을 확인 -> 나중에 시간나면 main을 분리할 생각
- 자바스크립트 파일들이 너무나도 꼬여버려서 결국 ai를 이용하여 코드들을 정리함 -> 이해가 안되는 부분이 너무 많아 주말을 이용하여 코드 이해할 예정

---

## 🎯 다음 목표

- video.html 페이지 고도화
- 시간될때까지 video 페이지 구현
- 구조적이고 유지보수 가능한 코드 작성

<br>
<br>
<br>

---

## 📅 7/25 (금) - 개발 현황

### 📸 개발 화면
<img width="1751" height="875" alt="스크린샷 2025-07-25 오후 5 17 23" src="https://github.com/user-attachments/assets/a47fc2ea-cda5-4e95-a99a-83381702e9eb" />
<img width="1751" height="877" alt="스크린샷 2025-07-25 오후 5 17 32" src="https://github.com/user-attachments/assets/c2471a7a-f90b-46db-945d-be213396a010" />


### ✅ 진행된 작업 목록
- [x] home페이지 부분 파일들 폴더 만들어서 정리
- [x] video페이지 상단바 고정, 사이드바 오버레이 처리
- [x] video페이지 영상, 영상정보, 재생목록을 main태그와 css로 구분
- [x] video페이지 영상 스타일 조정
- [x] video페이지 영상제목, 버튼들, 영상 설명 페이지 제작



---

## ❗ 어려웠던 점 및 느낀 점

- video.html파일을 만들었는데 home.html과 스타일을 다른걸 발견 -> css, js파일 싹다 비교
- link로 부트스트랩뭐시기를 받아온것을 찾음 -> 부트스트랩이 제공하는 세련되고 반응형인 디자인 태그
- 해당 링크태그가 스타일을 건드리는것을 확인 후 link태그 다른 파일들도 넣어줌
- 오늘은 페이지 제작만 해서 css 우선순위로 애먹은거 말고는 어려웠던 점이 없었음
- 참고사항 (CSS 우선순위)
- 1. 인라인 스타일
  2. id선택자
  3. 클래스, 속성, 가상클래스
  4. 태그 선택자
  5. 스타일 선언 순서

---

## 🎯 다음 목표

- video페이지 댓글, 재생목록 구현
- video페이지 반응형으로 어떤식으로 구성할지 생각
- home.html페이지 코드 점검

<br>
<br>
<br>

---

## 📅 7/28 (월) - 개발 현황

### 📸 개발 화면
<img width="1674" height="902" alt="스크린샷 2025-07-28 오후 5 00 52" src="https://github.com/user-attachments/assets/f1a1a49f-eaf6-4479-8583-c27dbd535b32" />
<img width="1675" height="900" alt="스크린샷 2025-07-28 오후 5 01 09" src="https://github.com/user-attachments/assets/978f78cd-bfc3-4233-85f3-781e5fd3ff66" />


### ✅ 진행된 작업 목록
- [x] 더보기/간략히 구현
- [x] 좋아요/싫어요 버튼 구현
- [x] 전체 크기 반응형(%)로 수정
- [x] 댓글 구현
- [x] 구독/구독중 버튼 구현
- [x] 댓글(정렬/기준)버튼 구현
- [x] 1~8 썸네일 html 제작
- [x] home과 썸네일 링크 연결
- [x] 댓글 간단하게 태그들로 구현(기능X)



---

## ❗ 어려웠던 점 및 느낀 점

- 좋아요/싫어요 버튼 active가 안됨 -> 스타일 우선순위 문제. 해결완료
- 오늘은 css조정, html파일들 수정&제작을 해서 어려운점은 크게 없었음

---

## 🎯 다음 목표

- 재생목록part 구현
- 재생목록 반응형 구현
- 페이지마다의 자잘한 문제가 있으면 해결

<br>
<br>
<br>

---

## 📅 7/29 (화) - 개발 현황

### 📸 개발 화면
<img width="1717" height="896" alt="스크린샷 2025-07-29 오후 5 03 06" src="https://github.com/user-attachments/assets/ff44bcb7-c9ac-4895-9ef0-9f11cf4c3b84" />
<img width="899" height="902" alt="스크린샷 2025-07-29 오후 5 03 19" src="https://github.com/user-attachments/assets/a34cc2ea-103d-479e-9078-09ebf97dd09d" />


### ✅ 진행된 작업 목록
- [x] 페이지 로딩 오류 해결
- [x] 메인페이지 썸네일 호버 적용
- [x] 재생목록(playlist) 구현
- [x] 버튼 스타일 등 여러 스타일 수정
- [x] video.html 버튼 반응형 적용
- [x] 재생목록(playlist) 반응형 구현
- [x] index.html 썸네일 반응형 구현


---

## ❗ 어려웠던 점 및 느낀 점

- 어제 있었던 페이지 로딩 오류를 확인해보니 페이지는 정상적으로 작동하는 것 확인 -> js 문제로 추정
- 경로가 문제인것 같아 root파일로 페이지를 옮기니 정상 작동 -> 경로가 문제였음 해결
- a태그가 크기를 차지하고 있어 썸네일 크기를 반응형으로 만들어도 먹질 않았음 -> a태그 제거 후 해결
- 페이지마다 영상과 정보 등을 다 구현을 했는데 js로 파라미터값을 할당 후 받아오는 식으로 해야함을 깨달음
- 눈문을 머금고 그동안 만들었던 페이지들을 두고 아이디를 할당하고 js안에 정보를 넣어주기로 결정
- 내일 video.html를 제작하고 연결해주는거 까지 목표

---

## 🎯 다음 목표

- 디자인한 페이지들 id 할당해주고 정보 입력해주기
- video.html 완성하기
- Readme 프로젝트 최종 작성하기

<br>
<br>
<br>

---

## 📅 7/30 (수) - 개발 현황

### 📸 개발 화면
<img width="1845" height="898" alt="스크린샷 2025-07-30 오후 5 00 02" src="https://github.com/user-attachments/assets/b0fecf40-3c6c-4c25-8f88-e21ca11dfa1e" />
<img width="1843" height="899" alt="스크린샷 2025-07-30 오후 5 00 26" src="https://github.com/user-attachments/assets/9e0161f1-94f6-4b83-b6b6-d0d1ddc846a2" />



### ✅ 진행된 작업 목록
- [x] 댓글, 좋아요 숫자 카운트 효과 넣기
- [x] video.html id값 설정 후 js에 값 넣어줘서 불러오기
- [x] 재생목록 링크 조정, 현재 있는 id값에 따라 안보이게 none 처리

---

## ❗ 어려웠던 점 및 느낀 점

- head태그에 있는 title을 영상제목으로 바꿔주고싶었다. -> 해드테그에 js를 넣어줘야 했는데 바로 document.title로 불러올 수 있엇음
- video.html에서 쿼리 파라미터를 제대로 받아오지 못하는 문제가 생김 -> index.html에서 누르면 404로 넘어감
- 404로 넘어가는거면 js상에 있는 경로 문제일 것으로 판단 -> 절대 경로, 상대 경로 다 해봤는데 안됨
- gpt에 물어보니 인텔 내장서버는 /절대경로를 프로젝트 루트 바로 밑으로 인식하지 않는다.
- 빼주니 바로 해결됨 


---

## 🎯 다음 목표

- 전체적인 코드 리펙토링하면서 빠져있는 부분있나 확인
- 코드 정리
- 도전과제 확인해보고 해볼만한거 찾기

<br>
<br>
<br>

---

## 📅 7/31 (목) - 개발 현황

### 📸 개발 화면
<img width="1608" height="861" alt="스크린샷 2025-07-31 오후 5 01 17" src="https://github.com/user-attachments/assets/f08ef88f-1f53-45a7-b7e1-6ab358c22b1d" />
<img width="1599" height="872" alt="스크린샷 2025-07-31 오후 5 01 50" src="https://github.com/user-attachments/assets/2d341ea0-579b-432a-937f-f5b5d054d5ad" />
<img width="1599" height="871" alt="스크린샷 2025-07-31 오후 5 01 42" src="https://github.com/user-attachments/assets/ac5a69d7-9896-4120-8670-99b05b1058fd" />



### ✅ 진행된 작업 목록
- [x] index.html 디자인 오류 수정
- [x] 사이드바v1 버튼 추가
- [x] video.html 경로, css 수정
- [x] 구독 페이지 구현
- [x] 재생목록에 구독 영상들 등록

---

## ❗ 어려웠던 점 및 느낀 점

- 기존에 있던 subscribe.html 파일을 이용할려고 하였는데 loadPage 함수에서 subscribe.js파일을 못 읽는 것을 확인
- 그래서 subscribe.html을 삭제하고 기존의 index.html 파일에 추가해서 display none을 활용해볼까 했는데 시간이 너무 많이 걸릴꺼같아서 포기
- gpt와 구글링을 활용하여 알아보니 subscribe.html의 main을 index.html로 동적으로 받아오는 과정에서 js파일 안의 함수는 자동으로 실행되지 않는 문제인걸 확인
- 그래서 subscribe.js에 있던 함수를 home.js에서 subscribe.html을 받아오는 함수에 호출을 함으로써 해결
- 썸네일 영상 클릭시 video.html로 넘어가면서 영상을 자동으로 재생되게 할려고 해봄
- 크롬, 사파리는 정책상 음소거를 해야 자동재생이 가능하게 만들어서 포기


---

## 🎯 다음 목표

- 전체적인 코드 리펙토링하면서 빠져있는 부분있나 확인
- 코드 정리
- 썸네일 미리보기 영상 두기(시간이 될지 모르겠지만 일단 어떻게 할지 구상중)
- 깃허브 리드미 작성 
