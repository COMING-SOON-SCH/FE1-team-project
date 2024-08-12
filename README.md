# 1. Project Overview (프로젝트 개요)
- 프로젝트 이름: 미정
- 프로젝트 설명: 전국 대학 동아리 일정관리 및 홍보 커뮤니티

<br/>

# 2. Team Members (팀원 및 팀 소개)
| 이동규 | 신유승 | 김나연 | 이승준 |
|:------:|:------:|:------:|:------:|
| <img src="https://github.com/user-attachments/assets/c1c2b1e3-656d-4712-98ab-a15e91efa2da" alt="이동규" width="150"> | <img src="https://github.com/user-attachments/assets/78ec4937-81bb-4637-975d-631eb3c4601e" alt="신유승" width="150"> | <img src="https://github.com/user-attachments/assets/78ce1062-80a0-4edb-bf6b-5efac9dd992e" alt="김나연" width="150"> | <img src="https://github.com/user-attachments/assets/beea8c64-19de-4d91-955f-ed24b813a638" alt="이승준" width="150"> |
| PL | FE | FE | FE |
| [GitHub](https://github.com/LDK1009) | [GitHub](https://github.com/SinYusi) | [GitHub](https://github.com/nay3on) | [GitHub](https://github.com/conconcc) |

<br/>

# 3. Technology Stack (기술 스택)

## Language
|  |  |
|-----------------|-----------------|
| HTML5    |<img src="https://github.com/user-attachments/assets/2e122e74-a28b-4ce7-aff6-382959216d31" alt="HTML5" width="100">| 
| CSS3    |   <img src="https://github.com/user-attachments/assets/c531b03d-55a3-40bf-9195-9ff8c4688f13" alt="CSS3" width="100">|
| Javascript    |  <img src="https://github.com/user-attachments/assets/4a7d7074-8c71-48b4-8652-7431477669d1" alt="Javascript" width="100"> | 


<br/>

## Frotend
|  |  |  |
|-----------------|-----------------|-----------------|
| React    |  <img src="https://github.com/user-attachments/assets/e3b49dbb-981b-4804-acf9-012c854a2fd2" alt="React" width="100"> | 18.3.1    |
| StyledComponents    |  <img src="https://github.com/user-attachments/assets/c9b26078-5d79-40cc-b120-69d9b3882786" alt="StyledComponents" width="100">| 6.1.12   |
| MaterialUI    |  <img src="https://github.com/user-attachments/assets/75a46fa7-ebc0-4a9d-b648-c589f87c4b55" alt="MUI" width="100">    | 5.0.0  |
| DayJs    |  <img src="https://github.com/user-attachments/assets/3632d7d6-8d43-4dd5-ba7a-501a2bc3a3e4" alt="DayJs" width="100">    | 1.11.12    |

## Backend
|  |  |  |
|-----------------|-----------------|-----------------|
| Firebase    |  <img src="https://github.com/user-attachments/assets/1694e458-9bb0-4a0b-8fe6-8efc6e675fa1" alt="Firebase" width="100">    | 10.12.5    |


<br/>

# 4. Project Structure (프로젝트 구조)
- 디렉토리 구조 설명
- 주요 파일 및 폴더 설명

<br/>

# 5. Key Features (주요 기능)
- 프로젝트의 주요 기능 설명

<br/>

# 6. Getting Started (시작하기)
- 설치 방법 (Installation)

<br/>

# 7. Development Workflow (개발 워크플로우)
- 브랜치 전략 (Branch Strategy)
- 커밋 메시지 규칙 (Commit Message Convention)

<br/>

# 8. Tasks & Responsibilities (작업 및 역할 분담)
- 주요 작업 및 담당자 (Major Tasks and Assigned Members)
  - 김나연: 홈, 로그인, 동아리 찾기, 동아리 프로필 페이지
  - 이승준: 회원가입 페이지, 마이페이지
  - 신유승: 메인페이지, 동아리 만들기 페이지
- 작업 진행 상황 확인 방법 (How to Track Task Progress)
- 협업 도구 (Collaboration Tools)

<br/>

# 9. Project Timeline (프로젝트 일정)
- 시작, 마감 기한 (Deadlines)

---

<br/>

# 폴더 구조
```
--src
  -- assets
    -- image1.png
    -- image2.png
  -- components
    -- signIn
    -- signUp
  -- pages
    -- Home.jsx
    -- SignIn.jsx
    -- SignUp.jsx
    -- Main.jsx 
  -- hooks
  -- app.js
  -- index.js
  ...
```

<br/>

# Coding Convention
## 문장 종료 - 세미콜론(;)
```
console.log("Hello World!");
```
## 명명 규칙
상수 - 영문 대문자 + 스네이크 케이스
```
const NAME_ROLE;
```
변수 & 함수 - 카멜케이스
```
// state
const [isLoading, setIsLoading] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const [errorMessage, setErrorMessage] = useState('');
const [currentUser, setCurrentUser] = useState(null);

// 배열 - 복수형 이름 사용
const datas = [];

// 정규표현식: 'r'로 시작
const = rName = /.*/;

// 이벤트 핸들러: 'on'으로 시작
const onClick = () => {};
const onChange = () => {};

// 반환 값이 불린인 경우: 'is'로 시작
const isLoading = false;

// Fetch함수: method(get, post, put, del)로 시작
const getEnginList = () => {...}
```
## 블록 구문
```
// 한 줄짜리 블록일 경우라도 {}를 생략하지 않고, 명확히 줄 바꿈 하여 사용한다
// good
if(true){
  return 'hello'
}

// bad
if(true) return 'hello'
```
## 함수
```
함수는 함수 표현식을 사용하며, 화살표 함수를 사용한다.
// Good
const fnName = () => {};

// Bad
function fnName() {};
```

## 태그 네이밍
Styled-component태그 생성 시 아래 네이밍 규칙을 준수하여 의미 전달을 명확하게 한다.
태그명이 길어지더라도 의미 전달의 명확성에 목적을 두어 작성한다.
전체 영역: Container
영역의 묶음: {Name}Area
의미없는 태그: <>
```
<Container>
  <ContentsArea>
    <Contents>...</Contents>
    <Contents>...</Contents>
  </ContentsArea>
</Container>
```
## 폴더 네이밍
카멜 케이스를 기본으로 하며, 컴포넌트 폴더일 경우에만 파스칼 케이스로 사용한다.
```
// 카멜 케이스
camelCase
// 파스칼 케이스
PascalCase
```
## 파일 네이밍
```
컴포넌트일 경우만 .jsx 확장자를 사용한다. (그 외에는 .js)
customHook을 사용하는 경우 : use + 함수명
```

<br/>

# 커밋 컨벤션
## 기본 구조
```
type : subject

body 
```
## type 종류
```
feat : 새로운 기능 추가
fix : 버그 수정
docs : 문서 수정
style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
refactor : 코드 리펙토링
test : 테스트 코드, 리펙토링 테스트 코드 추가
chore : 빌드 업무 수정, 패키지 매니저 수정
```

## 커밋 이모지
```
== 코드 관련
📝	코드 작성
🔥	코드 제거
🔨	코드 리팩토링
💄	UI / style 변경

== 문서&파일
📰	새 파일 생성
🔥	파일 제거
📚	문서 작성

== 버그
🐛	버그 리포트
🚑	버그를 고칠 때

== 기타
🐎	성능 향상
✨	새로운 기능 구현
💡	새로운 아이디어
🚀	배포
```

## 커밋 예시
```
== ex1
✨Feat: "회원 가입 기능 구현"

SMS, 이메일 중복확인 API 개발

== ex2
📚chore: styled-components 라이브러리 설치

UI개발을 위한 라이브러리 styled-components 설치
```
