# 🚗 EV PAY

[← 메인으로 돌아가기](../README.md) | [에바 경력기술서](../career/evar.md)

<br/>

## 📋 프로젝트 개요

| | |
|---|---|
| **프로젝트 설명** | 전기차 전용 충전기 연동 앱 |
| **기술 스택** | Flutter, Riverpod |
| **참여도** | 프론트엔드 100% |
| **기간** | 2024.07 ~ 현재 |

<br/>

## ⭐ 주요 기능

- 🗺️ **네이버 지도 기반 충전소 찾기**
  - Flutter naver map 활용
  - 뷰포트 기반 로딩으로 성능 최적화
  - 마커 캐싱 적용

- 🔄 **아키텍처 전환**
  - MVVM → Clean Architecture 적용
  - GetX → Riverpod 마이그레이션
  - API 캐싱을 통한 서버 통신 최적화

- 🚀 **자동 배포 파이프라인**
  - Fastlane, Github Actions 활용
  - Android, iOS 자동 배포 구축
  - Xcode Cloud 연동

- 📱 **iOS Dynamic Island**
  - 충전 상태 실시간 표시
  - 사용자 편의성 극대화

<br/>

## 🛠 기술적 구현

### Clean Architecture 적용
```
lib/
├── data/           # 데이터 레이어
│   ├── models/
│   └── repositories/
├── domain/         # 도메인 레이어
│   ├── entities/
│   └── usecases/
└── presentation/   # 프레젠테이션 레이어
    ├── providers/
    └── screens/
```

### Riverpod 상태관리
- GetX의 암묵적 의존성 문제 해결
- 테스트 용이성 확보
- 컴파일 타임 안전성 향상

<br/>

## 💡 성과 및 배운점

- **아키텍처 전환 주도**: 레거시 코드를 현대적인 구조로 성공적 전환
- **배포 자동화**: 수동 배포 → 자동화로 배포 시간 대폭 단축
- **운영 고려 설계**: 변경 주기와 중요도를 고려한 기술 선택의 중요성 학습

<br/>

---

[← 메인으로 돌아가기](../README.md)
