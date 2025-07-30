// ==================================
// 썸네일 데이터
// ==================================
const videoData = {
    "1": {
        videoUrl: "https://www.youtube.com/embed/Nf5TvCCoUAs?si=7E0vVE-LnKlJrhmi",
        title: "배말랭 옥천 집에 흑염소 풀기ㅋㅋㅋ",
        producerImg: "../video_img/1-c.jpg",
        producerName: "핫소스",
        producerSubs: "구독자 98만명",
        viewsAndData: "조회수 621,148회 2025. 7. 13.",
        description:
            `음뫄 핫소스!

배말랭 옥천 집에 흠염소 풀기ㅋㅋㅋ

좋아요&구독&알림설정!

인스타주소
@apnalchangchangkimseoneung 김선응
@hyoja94 송형주

비즈니스 문의 - elzksms222@naver.com`
    }
}

// ==================================
// URL에서 videoId 추출하는 함수
// ==================================
function getVideoIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('videoid');
}

// ==================================
// DOM에 데이터 넣기
// ==================================
window.addEventListener('DOMContentLoaded', () => {
    const videoId = getVideoIdFromURL();
    const data = videoData[videoId];

    if (!data) {
        console.error("유효하지 않은 videoid입니다.");
        return;
    }

    document.title = data.title;
    document.getElementById('video-frame').src = data.videoUrl;
    document.getElementById('video-title').textContent = data.title;
    document.getElementById('producer-img').src = data.producerImg;
    document.getElementById('producer-name').textContent = data.producerName;
    document.getElementById('producer-subs').textContent = data.producerSubs;

    document.getElementById('video-stats').textContent = data.viewsAndData;
    document.getElementById('video-desc').textContent = data.description;
    document.getElementById('desc-producer-img').src = data.producerImg;
    document.getElementById('desc-producer-name').textContent = data.producerName;
    document.getElementById('desc-producer-subs').textContent = data.producerSubs;
});
