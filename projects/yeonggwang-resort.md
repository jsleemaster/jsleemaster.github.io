# 🏊 영광리조트

[← 메인으로 돌아가기](../README.md) | [디벨로퍼그룹 경력기술서](../career/developer-group.md)

<br/>

## 📋 프로젝트 개요

| | |
|---|---|
| **프로젝트 설명** | 수영장 이용권 및 사물함, 평상 예약 키오스크 프로그램 |
| **기술 스택** | Next.js, TypeScript, Koa |
| **참여도** | 프론트엔드 100%, 백엔드 100% |
| **기간** | 2023.06 ~ 2023.07 |

<br/>

## ⭐ 주요 기능

### 🗺️ 시설 배치도 시스템
- 관리자/키오스크 각각 다른 뷰 제공
- 실시간 사용 현황 표시 (사용 가능 / 사용 중 / 사용 불가)
- 평상, 사물함 위치 시각화

### 🎫 이용권 시스템
- 입장권 (대인/소인)
- 물품 대여 (구명조끼, 보트, 튜브)
- 평상 대여 (2시간/종일권)
- 사물함 대여

### 💳 결제 시스템
- 카드 / 삼성페이 지원
- C# ↔ Web 결제모듈 연동
- 장바구니 기능

<br/>

## 🛠 기술적 구현

### C# 결제모듈 비동기 전환
```typescript
// 기존 콜백 방식 → async/await으로 변경
const promiseCall = async () => {
  return await new Promise((resolve) => {
    callBack = (method, data) => {
      resolve({ method, data });
    };
  });
};

// 활용
const { method, data } = await promiseCall();
```

### zustand 상태관리 도입
- **선택 이유**: redux, recoil보다 **적은 복잡성** 및 **적은 보일러플레이트**
- JWT 로직과 연계하여 인증 상태 관리
- AccessToken 검증 (요청), RefreshToken 검증 (응답)

### 모노레포 구조 설계
```
packages/
├── admin/          # 관리자 페이지
├── kiosk/          # 키오스크
└── shared/         # 공통 컴포넌트
```
- **Yarn workspace** 활용
- 공통 컴포넌트 재사용

### 커스텀 컴포넌트
- 로그인 폼, Modal, Table, Keypad, Toast 등 직접 구현
- MUI Table 커스텀하여 사용
- style-components 활용

<br/>

## 🔧 트러블슈팅

### MUI Table 범용성 이슈
- **문제**: 커스텀 테이블 사용 시 추가 기능 및 가독성 문제
- **해결**:
  - jsdoc, TypeScript를 활용하여 가독성 증가
  - 기능별 테이블 분리 (FilterTable, SortTable, PaymentTable 등)

### 관리자/키오스크 배치도 크기 차이
- **문제**: 관리자가 보는 배치도와 키오스크 배치도가 다른 이슈
- **해결**: `position`, `transform-origin`, `scale`을 활용하여 키오스크 사이즈에 맞게 조정

### 상품 목록 UI
- **문제**: 여러 상품 생성 시 정확하게 맞아떨어지지 않는 UI
- **해결**: `scrollSnapAlign: left`, `scrollSnapType`를 활용

### 현금 결제 버그
- **문제**: 현금 투입 후 취소 시 예약이 완료 처리되는 버그
- **해결**: C#에서 보내주는 데이터 검증 로직 추가

<br/>

## 💡 성과

- **모노레포 구조 설계**로 코드 재사용성 향상
- **결제모듈 현대화**: 콜백 → async/await 전환
- **디자이너 부재** 상황에서 MUI 활용한 UI 구현

<br/>

---

[← 메인으로 돌아가기](../README.md)
