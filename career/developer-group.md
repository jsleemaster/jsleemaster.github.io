# ⭐ 디벨로퍼그룹 (경력기술서)

[← 메인으로 돌아가기](../README.md)

| | |
|---|---|
| **담당업무** | 솔루션 개발, 키오스크 플랫폼 개발 |
| **재직 기간** | 2021.08 ~ 2023.10 (2년 2개월) |
| **기술 스택** | Koa, Next.js, React, React Native, Vue, Vuex |

<br/>

## 🏢 회사 소개

- **국내 스터디카페 키오스크 점유율 30% 1위**
- 스터디카페 수 1,000개 이상
- **264만 유저** 보유

<br/>

## ⭐ 서비스 앱

| 프로젝트 | 설명 |
|---------|------|
| [🚬 전담GATE 무인24](../projects/jeondam-gate.md) | 전자담배 키오스크 & 자판기 |
| [🎁 IFA 2023](../projects/ifa-2023.md) | 삼성 독일 경품 이벤트 |
| [🏊 영광리조트](../projects/yeonggwang-resort.md) | 수영장 이용권 예약 키오스크 |
| [💆 테라피](../projects/therapy.md) | 강사-고객 예약 매칭 시스템 |
| [⛳ 모무 골프](../projects/momu-golf.md) | 실내골프 예약 앱 |
| [🛒 스타일자판기](../projects/style-vending.md) | 자판기 키오스크 |

<br/>

## 📋 업무 요약

- Next.js, Scss, Style Components, Vue, Express, React Native를 이용한 **관리자, 키오스크, 모바일 앱 개발 및 배포**
- 번들러 **webpack4 → vite 변경**으로 빌드속도 개선
- 개발환경 **컨벤션 구축** (eslint)
- **gitlab-runner(CI), AWS EC2(CD) 자동배포** 구현

<br/>

## 👨‍💻 개발 내용

### 프론트엔드
- 프론트(Next.js, Vue), 백엔드(Node.js, Express, Koa, MySQL)를 이용한 구성
- 자주 이용되는 Dialog, Modal, Pagination를 리팩토링하여 **재사용성 개선**
- zustand, vuex를 이용한 로그인, 장바구니, 키패드 ON/OFF 상태 관리
- dayjs, bootstrap, fullcalendar, tanstack table, ApexChart 등 라이브러리 활용

### 인증 & 로그인
- 카카오, 네이버, Apple passport 라이브러리를 통한 **소셜로그인 개발**
- 관리자 **JWT 로그인** 구현

### 앱 개발
- **React Native**를 이용한 Webview 페이지 구성 및 **Android, iOS 배포**
- 모무 골프 모바일 전체 페이지 퍼블리싱 및 라우팅 개발

### 실시간 통신
- **웹소켓**을 활용한 직원호출, 결제알림, 물품 배출 기능 개발

### DevOps
- svn 프로젝트 → **git-flow**를 활용한 버전 관리
- **gitlab-runner(CI), AWS EC2(CD) 자동배포** 구현
- **pm2** 활용한 프로세스 관리

### 기타
- base64 이미지 데이터를 Buffer, fs, ftp를 이용하여 **문자전송 첨부기능** 개발
- C#과 통신하는 **카드, 현금 결제 모듈** 생성
- 모바일 신분증, 신분증 스캐너, **KCP 본인인증** 서비스를 통한 성인인증 구현
- **hangul.js**를 활용한 가상키보드 개발
- **Yarn berry**를 활용한 모노레포 구조 설계

<br/>

## 🪴 경험 및 배운점

### 기술적 성장
- redux, zustand, vuex를 이용한 상태관리 숙달
- 사용자들의 불편한 점을 보완하기 위해 WebAPI touch event를 활용하여 키오스크 내 터치 슬라이드 개발
- gitflow를 이용한 버전관리를 이용했을 때 버전별 관리에 용이함을 경험

### JWT 인증
- 관리자 페이지에서 JWT 토큰을 이용한 AccessToken, RefreshToken 발급 후 데이터 요청 시마다 RefreshToken 토큰 여부를 확인하여 응답을 하는 개발 경험
- header, payload, signature로 이루어진 구조 이해

### 운영 경험
- 서버에서 pm2를 활용하여 무중단 배포를 하고 있다는 것을 학습
- 키오스크 UX 개선을 위해 로그인 시 다음 버튼을 없앴고 그로 인한 사이드이펙트를 해결
- 계속 반복되는 빌드 후 반복 작업 최소화를 위하여 자동배포를 구현

### 개선 필요 사항
- iOS와 Android의 UI를 생각하지 못하고 개발한 경험에서 배움
- 더 좋은 성능, 가독성을 위한 리팩토링을 꾸준히 공부해야 함
- 구조 개선을 통한 유지보수 향상 필요

<br/>

---

[← 메인으로 돌아가기](../README.md)
