# 🚬 전담GATE 무인24

[← 메인으로 돌아가기](../README.md) | [디벨로퍼그룹 경력기술서](../career/developer-group.md)

<br/>

## 📋 프로젝트 개요

| | |
|---|---|
| **프로젝트 설명** | 전자담배 키오스크와 상품 배출이 되는 자판기 프로그램 |
| **기술 스택** | Next.js, TypeScript, Koa, SCSS |
| **참여도** | 프론트엔드 100% |
| **기간** | 2023.07 ~ 2023.10 |

<br/>

## ⭐ 주요 기능

### 🎰 확률성 상품 시스템
- 룰렛 배열의 수에 따른 동적 당첨 기능
- 백엔드 검증 기반 공정한 당첨 로직

### ⌨️ 가상 키보드
- **hangul.js** 라이브러리 활용
- 한글/영문 전환 지원
- 키오스크 터치 최적화

### 📡 실시간 물품 관리
- **웹소켓** 기반 실시간 통신
- 권한 있는 사용자 배출 요청 → 서버 검증 → 웹 배출
- 재고 실시간 동기화

### 🔐 성인인증 시스템 (3종)

#### 1. 모바일 신분증
- QR 코드 기반 인증
- 모바일 신분증 앱 연동

#### 2. 신분증 스캐너
- C# ↔ Web 통신
- 실물 신분증 스캔 검증

#### 3. KCP 본인인증
- PHP 서버 경유 인증
- 휴대폰 본인인증

<br/>

## 🛠 기술적 구현

### react-transition-group 애니메이션
```tsx
const stepNode: { [key: string]: ReactNode } = {
  "LOGIN": <로그인 />,
  "JOIN": <회원가입 />,
  "COMPLETE": <완료 />,
};

return (
  <SwitchTransition mode="out-in">
    <CSSTransition timeout={200} classNames="slide" key={step}>
      {stepNode[step]}
    </CSSTransition>
  </SwitchTransition>
);
```

### zustand 상태관리
```typescript
export const kioskSet = create<KioskSetType>()(
  devtools((set) => ({
    info: { no: 0, info: null },
    setInfo: async ({ no }) => {
      const results = await Promise.allSettled([
        axios.get("/info", { no, mode: "info" })
      ]);
      // 상태 업데이트 로직
    }
  }))
);
```

### 사운드 Hook
```typescript
export const useAudio: AudioTypes = () => {
  const [audioSource, setAudioSource] = useState<AudioObject[]>();
  
  const playAudio: PlayAudioType = useCallback((type) => {
    const audioToPlay = audioSource?.find(source => source.type === type);
    if (audioToPlay?.audio.paused) {
      audioToPlay.audio.play();
    }
  }, [audioSource]);

  return [playing, playAudio];
};
```

<br/>

## 🔧 트러블슈팅

### 모달 내 결제 로직 복잡도
- **문제**: 모달창에서 결제에 대한 전체 로직이 진행됨
- **해결**: 
  1. 결제 상태 단계에 대한 hook을 만들어 관리
  2. Top level Components에서 상태관리

### 1+1 제품 이슈
- **문제**: 같은 상품이 아닐 경우 재고 체크 누락
- **해결**: 
  - 해당 상품에 재고 체크 로직 추가
  - 재고 부족 경우에 대한 예외 처리

<br/>

## 💡 성과

- 다양한 인증 방식 통합으로 **접근성 향상**
- 실시간 재고 관리로 **운영 효율성 개선**
- 커스텀 훅 기반 **코드 재사용성 극대화**

<br/>

---

[← 메인으로 돌아가기](../README.md)
