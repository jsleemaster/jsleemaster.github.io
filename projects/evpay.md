# 🚗 EV PAY

[← 메인으로 돌아가기](../README.md) | [에바 경력기술서](../career/evar.md)

<br/>

## 📋 프로젝트 개요

| | |
|---|---|
| **프로젝트 설명** | 전기차 충전 앱 및 EVPay+ 하이브리드 앱 |
| **기술 스택** | Flutter, Riverpod, React, TypeScript, WebView |
| **참여도** | 모바일 / 프론트엔드 |
| **기간** | 2024.07 ~ 현재 |

<br/>

## ⭐ 주요 기능

- 📱 **Flutter native shell**
  - 로그인, QR/카메라, 지도/위치, push notification, secure storage 등 native 기능 담당
  - Riverpod 기반 provider와 route guard로 앱 상태 관리

- 🌐 **React WebView 업무 화면**
  - React 19, TypeScript, Vite 기반 WebView 화면 구성
  - Web bundle을 S3/CloudFront로 독립 배포해 앱 심사 없이 UI 변경 가능

- 🔗 **Flutter ↔ WebView bridge**
  - Web에서 데이터 변경 후 Flutter Provider를 명시적으로 갱신
  - bottom navigation 표시/숨김, native dialog, openUrl, 본인인증 요청 등 native action 연결

- 🚀 **배포/운영 구조**
  - app-version metadata 기반 STG/PROD runtime switching
  - Fastlane, GitHub Actions, Xcode Cloud 등 앱 배포 경로 관리

<br/>

## 🛠 기술적 구현

### Hybrid Architecture
```
Flutter App
├── Native Features
│   ├── social login
│   ├── camera / QR
│   ├── map / location
│   └── push notification
└── WebView
    └── React business screens
```

### Bridge 설계

- React에서 발생한 mutation은 Flutter Provider가 자동으로 알 수 없으므로 bridge action으로 invalidation 처리
- 브라우저 단독 테스트와 실제 Flutter WebView 테스트의 차이를 문서화
- native/web 상태 불일치를 줄이기 위해 bridge action의 역할을 명확히 분리

<br/>

## 💡 성과 및 배운점

- **하이브리드 앱 구조 정리**: native 기능과 web 업무 화면의 경계를 나누고 bridge 계약으로 연결
- **배포 독립성 확보**: WebView bundle을 앱스토어 배포와 분리해 변경 주기와 운영 비용을 줄이는 방향으로 설계
- **운영 고려 설계**: 변경 주기, 앱 심사 비용, rollback 가능성을 함께 고려하는 설계 기준 확립

<br/>

---

[← 메인으로 돌아가기](../README.md)
