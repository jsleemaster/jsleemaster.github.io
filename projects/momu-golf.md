# ⛳ 모무 골프

[← 메인으로 돌아가기](../README.md) | [디벨로퍼그룹 경력기술서](../career/developer-group.md)

<br/>

## 📋 프로젝트 개요

| | |
|---|---|
| **프로젝트 설명** | 실내골프 예약을 할 수 있는 앱 |
| **기술 스택** | Vue3, React Native |
| **참여도** | 프론트엔드 100% |
| **기간** | 2022.02 ~ 2022.07 |

<br/>

## ⭐ 주요 기능

### 🗺️ 매장 찾기
- **geolocation**을 이용한 현재 위치 기반 매장 탐색
- 거리순 정렬
- 매장 상세 정보 제공

### 🔐 소셜 로그인
- **passport 라이브러리** 활용
- 카카오 로그인
- 네이버 로그인
- Apple 로그인

### 📅 예약 시스템
- 실내골프장 예약 기능
- 예약 현황 조회
- 예약 취소/변경

### 📱 모바일 앱 배포
- **React Native CLI** 활용
- WebView 기반 하이브리드 앱
- Android, iOS 동시 배포

<br/>

## 🛠 기술적 구현

### React Native WebView 구성
```javascript
// React Native에서 Vue3 웹앱을 WebView로 래핑
<WebView
  source={{ uri: 'https://momu-golf.com' }}
  onMessage={handleMessage}
  injectedJavaScript={injectedJS}
/>
```

### 소셜 로그인 플로우
```
1. 앱에서 소셜 로그인 버튼 클릭
2. passport 라이브러리로 OAuth 처리
3. 콜백 URL로 토큰 수신
4. 서버에서 JWT 발급
5. 앱 상태 업데이트
```

### Geolocation API 활용
```javascript
navigator.geolocation.getCurrentPosition(
  (position) => {
    const { latitude, longitude } = position.coords;
    // 현재 위치 기반 매장 검색
  },
  (error) => {
    // 위치 권한 거부 시 처리
  }
);
```

<br/>

## 🔧 트러블슈팅

### WebView ↔ Native 통신
- **문제**: 웹과 네이티브 간 데이터 전달 이슈
- **해결**: 
  - `postMessage` / `onMessage` 활용
  - 메시지 타입별 핸들러 분리

### iOS/Android UI 차이
- **문제**: 플랫폼별 UI 렌더링 차이
- **해결**:
  - Platform.OS 분기 처리
  - SafeAreaView 적용

### 앱 심사 대응
- **문제**: iOS 앱스토어 심사 리젝
- **해결**:
  - 리젝 사유 분석 및 수정
  - 가이드라인 준수 확인

<br/>

## 💡 성과

- **React Native 단독 앱 배포**: iOS, Android 스토어 등록
- **소셜 로그인 3종 구현**: 카카오, 네이버, Apple
- **하이브리드 앱 개발 경험**: WebView 기반 구조 설계

<br/>

---

[← 메인으로 돌아가기](../README.md)
