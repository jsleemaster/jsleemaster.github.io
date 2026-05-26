# 🔌 에바 EVAR (경력기술서)

[← 메인으로 돌아가기](../README.md)

| | |
|---|---|
| **담당업무** | Frontend / Mobile / AI Platform |
| **재직 기간** | 2024.07 ~ 현재 |
| **기술 스택** | Flutter, Riverpod, React, TypeScript, FastAPI, GitHub Actions |

<br/>

## 🏢 회사 소개

- 삼성전자 사내벤처 프로그램 C-Lab 스핀오프
- 전기차 충전 솔루션 기업

<br/>

## 📋 업무 요약

- **EV 충전 운영 백오피스(NOVA)**에서 React 19/TypeScript 기반 관리자 SPA를 개발했습니다. 충전소, 충전기, 회원, 요금제, 매출, 결제, 로밍, 앱 관리 등 운영 도메인 화면을 다루며 KPI summary, Excel export, AG Grid 정렬, refresh/loading UX, API 연동 패턴을 정리했습니다.

- **EVPay+ / FlowEv / 에너넷 / 롯데건설** 등 Flutter 기반 전기차 충전 앱을 유지보수했습니다. QR/connector 충전 진입, 결제, push, Branch deep link, secure storage, WebView bridge, Android/iOS 배포 이슈를 처리했습니다.

- **EVPay+ 하이브리드 앱 구조**에서 Flutter native shell과 React WebView 업무 화면을 연결했습니다. React에서 발생한 데이터 변경이 Flutter Provider 상태와 어긋나지 않도록 bridge invalidation, bottom navigation visibility, dialog/openUrl/verification action 등을 정리했습니다.

- **AI Predictor**에서 충전 이력 기반 출차/점유 예측 API와 평가 파이프라인을 다뤘습니다. 운영 DB → 분석 DB sync, FastAPI 예측, backtest/evaluation, KTR 시험용 데이터 추출/가명처리/평가 CLI를 구성했습니다.

- **NOVA MCP**에서 내부 AI 클라이언트들이 동일한 프로젝트 맥락을 조회할 수 있도록 FastMCP/NetworkX 기반 context server를 구성했습니다. Monday webhook, graph rebootstrap, access allowlist, daily brief, tool-routing evaluation 같은 운영 자동화 요소를 다뤘습니다.

<br/>

## 🧩 주요 프로젝트

### 1. NOVA Backoffice

> EV 충전 운영자를 위한 관리자 백오피스

**기술 스택**: React 19, TypeScript, Vite, TanStack Query, Zustand, AG Grid, shadcn/ui

**주요 작업**

- FSD 구조(`pages → widgets → features → entities → shared`)를 기준으로 대규모 운영 화면을 관리했습니다.
- 매출/결제/로밍/충전소 화면에서 KPI summary card, refresh button, loading overlay, Excel export, table sorting 등 반복되는 운영 UX를 공통 패턴으로 정리했습니다.
- BE Swagger와 FE 모델의 semantic gap을 문서화하고, 도메인 작업이 생길 때 generated SDK type을 함께 적용하는 점진 마이그레이션 전략을 사용했습니다.
- Figma sparse metadata로 인한 UI 불일치, refresh 동작 차이, 요청 범위 임의 확장 같은 반복 문제를 rule/document로 남겨 재발을 줄였습니다.

**문제 해결 사례**

- 충전소별 매출 화면에서 mock 기반 KPI/차트/리스트를 실제 API 계약으로 전환할 때, 각 지표의 출처와 계산식을 먼저 분리했습니다.
- 총매출, 크레딧 차감액, 당사 부담금, 순매출, 카드 결제금액, 충전량, 가동률처럼 비슷해 보이지만 의미가 다른 값을 FE에서 임의 계산하지 않고 BE 계약과 맞춰 정리했습니다.
- refresh 버튼은 단순 버튼 UI가 아니라 query invalidation, 버튼 상태, global loading overlay가 함께 있어야 사용자가 동작을 인지한다는 점을 확인하고 공통 패턴으로 만들었습니다.

<br/>

### 2. EVPay+ Hybrid App

> Flutter native shell + React WebView 기반 전기차 충전 앱

**기술 스택**: Flutter, Riverpod, React 19, TypeScript, Vite, TanStack Query, Zustand, WebView

**주요 작업**

- Flutter는 social login, camera/QR, map/location, push notification, secure storage 같은 native 기능을 담당하고, React WebView는 업무 화면을 담당하는 구조를 정리했습니다.
- React WebView bundle을 S3/CloudFront로 독립 배포하고, Flutter 앱스토어 배포와 분리하는 구조를 문서화했습니다.
- React에서 데이터 변경 후 Flutter Provider가 자동으로 갱신되지 않는 문제를 bridge action으로 명시적으로 해결했습니다.
- app-version metadata 기반 STG/PROD runtime switching 구조를 정리해 QA/운영 전환과 rollback 시나리오를 명확히 했습니다.

**문제 해결 사례**

- WebView 초기화 중복 메시지, SafeArea, keyboard input, bottom navigation 표시/숨김, 차량/결제카드 API schema 변경처럼 native/web 경계에서 발생하는 작은 불일치를 bridge 계약으로 정리했습니다.
- 결제카드 API가 `cardNo`에서 `creditIdx` 중심으로 바뀌는 migration을 Flutter/Web 양쪽 흐름에 맞춰 처리했습니다.

<br/>

### 3. FlowEv

> Guam/US 시장용 전기차 충전 앱

**기술 스택**: Flutter, Riverpod, GoRouter, Firebase/FCM, Branch, Stripe, mobile_scanner

**주요 작업**

- QR URL에 connectorId가 포함된 경우 connector 선택 과정을 줄이고 바로 충전으로 진입할 수 있는 흐름을 구현했습니다.
- connector selector bottom sheet, camera permission, secure storage 복호화 실패, SafeArea/overflow 등 모바일 운영 이슈를 개선했습니다.
- Android 15+ 16KB page-size 요구사항에 대응해 native dependency와 release validation 관점을 정리했습니다.

**문제 해결 사례**

- Guam/NANP 전화번호의 dial code 공백 처리로 OTP가 실패할 수 있는 케이스를 수정했습니다.
- 기존 deploy workflow가 실제 릴리즈 경로와 맞지 않는 점을 확인하고, Android는 test/analyze/16KB alignment gate를 포함한 release pipeline 방향으로 정리했습니다.

<br/>

### 4. AI Predictor

> EV 충전 세션 출차/점유 예측 API와 평가 파이프라인

**기술 스택**: Python, FastAPI, PostgreSQL, Pandas, GitHub Actions

**주요 작업**

- 운영 DB에서 충전 이력을 분석 DB로 sync하고, FastAPI prediction endpoint와 backtest/evaluation 흐름을 유지했습니다.
- 현재 v4 계열에서는 LightGBM이 아니라 statistical cascade 기반으로 동작한다는 점을 문서와 코드 기준으로 정리했습니다.
- KTR 시험용 데이터 추출, 예측 실행, 결과 평가, 가명처리, 신뢰성 검증 CLI를 구성했습니다.

**문제 해결 사례**

- 분석 DB의 transaction 적재량이 운영 DB보다 현저히 적은 문제를 추적했습니다.
- OCPP `transactionIdx`가 전역 고유키가 아니라 charger별 일련번호라는 점을 확인하고, `(chargerId, transactionIdx)` 복합키 기준으로 sync/join/conflict 처리를 수정했습니다.
- gap, endReason, timezone, Q10/buffer, survival analysis 등 여러 예측 개선 후보를 실험하고, 성능 게이트를 넘지 못한 접근은 폐기 기록까지 남겼습니다.

<br/>

### 5. NOVA MCP

> 내부 AI 클라이언트용 프로젝트 context server

**기술 스택**: FastAPI, FastMCP, NetworkX, Docker, GitHub Actions

**주요 작업**

- Claude, Gemini, Codex 등 여러 AI 클라이언트가 동일한 EVAR 프로젝트 맥락을 조회할 수 있도록 MCP server와 graph 기반 context layer를 구성했습니다.
- Monday board/subitem/webhook 이벤트를 graph node/edge로 정규화하고, webhook upsert와 daily rebootstrap으로 context drift를 줄였습니다.
- tool allowlist, request access, admin rebootstrap, daily brief, routing evaluation을 통해 내부 도구를 운영 가능한 형태로 만들었습니다.

**문제 해결 사례**

- Monday webhook의 event name 불일치, subitem parent board routing, URL-level circuit breaker 같은 문서화되지 않은 동작을 운영 gotcha로 남기고 registration/handler 로직에 반영했습니다.
- MCP tool description 변경이 실제 routing 품질을 개선하는지 eval harness와 baseline ratchet으로 검증하는 흐름을 구성했습니다.

<br/>

### 6. Enernet / Lotte Construction Charging Apps

> 화이트라벨 EV 충전 앱 유지보수와 정책 대응

**기술 스택**: Flutter, GetX, Firebase, Branch, Bootpay, mobile_scanner

**주요 작업**

- QR scanning, charger connection, payment, push notification, WebView/terms/notice 화면 등 충전 앱의 공통 운영 기능을 유지보수했습니다.
- Bootpay 결제, Branch/dynamic link, QR 인식 방식, Android/Flutter SDK 업그레이드 관련 이슈를 처리했습니다.
- Google Play 계정 삭제 정책 대응을 위해 white-label 앱별 metadata 기반 정적 페이지 생성/배포 구조를 구성했습니다.

<br/>

## 🪴 경험 및 배운점

### 운영 문제는 한 번 고치는 것보다 다시 안 생기게 만드는 것이 중요했습니다.

EVAR에서의 작업은 단순한 화면 구현보다 운영 중 반복되는 문제를 구조화하는 일이 많았습니다. 새로고침 버튼 하나도 버튼 UI만 맞추면 끝나는 문제가 아니라, 실제 query invalidation, loading feedback, timestamp update가 함께 맞아야 사용자에게 정상 동작으로 보였습니다.

그래서 문제를 발견하면 다음 작업자가 같은 함정에 빠지지 않도록 rule, checklist, shared component, evaluation, runbook 형태로 남기는 방식을 중요하게 생각하게 되었습니다.

### AI/데이터 작업은 "그럴듯한 신호"보다 검증 가능한 결과가 중요했습니다.

AI Predictor에서는 retrospective하게 강해 보이는 신호라도 prediction 시점에 사용할 수 없으면 가치가 없다는 것을 여러 번 확인했습니다. endReason, timezone, Q10, survival analysis처럼 좋아 보이는 접근도 수치로 검증하고, 기준을 넘지 못하면 폐기했습니다.

이 경험을 통해 모델/데이터 작업에서는 "무엇을 썼는가"보다 "왜 채택했고 왜 버렸는가"를 설명할 수 있어야 한다는 기준을 갖게 되었습니다.

### 모바일 앱은 기능 구현보다 배포와 정책까지 이어져야 완성입니다.

FlowEv와 EVPay+를 다루며 앱 심사, WebView 배포, runtime environment switching, Android 16KB page-size 같은 운영 조건이 실제 제품 속도를 좌우한다는 것을 경험했습니다. 이후에는 기능의 변경 주기, 심사 비용, rollback 가능성까지 고려해 native와 web의 경계를 나누는 쪽으로 설계하게 되었습니다.

<br/>

---

[← 메인으로 돌아가기](../README.md)
