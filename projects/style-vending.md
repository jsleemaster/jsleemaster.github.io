# 🛒 스타일자판기

[← 메인으로 돌아가기](../README.md) | [디벨로퍼그룹 경력기술서](../career/developer-group.md)

<br/>

## 📋 프로젝트 개요

| | |
|---|---|
| **프로젝트 설명** | 자판기, 키오스크 제품 판매 프로그램 |
| **기술 스택** | Vue2/3, Express |
| **참여도** | 프론트엔드 100% |
| **기간** | 2021.08 ~ 2022.05 |

<br/>

## ⭐ 주요 기능

### 🛍️ 상품 판매 시스템
- 키오스크 기반 상품 선택
- 장바구니 기능
- 결제 연동

### 📦 자판기 연동
- 물품 배출 시스템
- 재고 관리
- 실시간 상태 모니터링

### 👆 터치 슬라이드 UX
- **WebAPI touch event** 활용
- 키오스크 환경 최적화
- 부드러운 스와이프 제스처

<br/>

## 🛠 기술적 구현

### webpack4 → Vite 전환
```javascript
// 기존 webpack.config.js
module.exports = {
  entry: './src/main.js',
  // 복잡한 설정...
};

// vite.config.js
export default defineConfig({
  plugins: [vue()],
  // 간결한 설정
});
```

**성과**: 빌드 속도 **50% 개선**

### GitLab Runner 자동배포
```yaml
# .gitlab-ci.yml
stages:
  - build
  - deploy

build:
  stage: build
  script:
    - npm install
    - npm run build

deploy:
  stage: deploy
  script:
    - scp -r dist/* user@server:/var/www/
```

### 터치 슬라이드 구현
```javascript
// WebAPI touch event 활용
element.addEventListener('touchstart', handleTouchStart);
element.addEventListener('touchmove', handleTouchMove);
element.addEventListener('touchend', handleTouchEnd);

function handleTouchMove(e) {
  const touch = e.touches[0];
  const diff = touch.clientX - startX;
  // 슬라이드 로직
}
```

<br/>

## 🔧 트러블슈팅

### 빌드 속도 문제
- **문제**: webpack4 기반 빌드 시간 과다 소요
- **분석**: 
  - 번들 크기 분석
  - HMR 속도 측정
- **해결**: 
  - Vite로 마이그레이션
  - ESM 기반 빌드로 전환
  - **빌드 속도 50% 개선**

### 수동 배포 반복 작업
- **문제**: 매번 수동으로 빌드 후 서버 배포
- **해결**:
  - GitLab Runner CI 구축
  - AWS EC2 CD 파이프라인 연동
  - push 시 자동 배포

### 키오스크 터치 UX
- **문제**: 사용자들의 터치 슬라이드 불편 피드백
- **해결**:
  - WebAPI touch event 활용
  - 제스처 인식 로직 개선
  - 애니메이션 부드럽게 조정

<br/>

## 💡 성과

- **빌드 속도 50% 개선**: webpack → Vite 전환
- **자동배포 파이프라인 구축**: GitLab Runner + AWS EC2
- **UX 개선**: 터치 슬라이드 사용성 향상
- **ESLint 컨벤션 구축**: 팀 코드 품질 표준화

<br/>

---

[← 메인으로 돌아가기](../README.md)
