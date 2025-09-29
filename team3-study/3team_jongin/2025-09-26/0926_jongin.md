# 0926 공부내용 📖

## 매일매일 1일 면접 대비

### ES6에 대해서 아는 대로 설명해 주세요

**ES6(ECMAScript2015)는 자바스크립트의 최신버전**으로, 2015년에 공식 발표 되었다.
ES6는 코드의 가독성과 유지보수성을 높이고 현대 웹 애플리케이션의 요구를 반영하기 위한 여러 기능들을 제공한다. 주요 변경사항을 몇가지 설명하겠다.

1. **let과 const 키워드가 추가됐다.** let은 변수선언, const는 상수 선언에 사용된다. var와 달리 let과 const는 블록 스코프를 가지므로 코드의 안전성이 더 높다. 또한, 변수 선언 이전에 접근했을 때 ReferenceError가 발생한다는 점에서도 차이가 있다.

2. **화살표 함수(Arrow Function)이 도입되었다.** 기존의 함수 정의 방식보다 간결하고 가독성이 좋다. 또한 this의 바인딩을 호출 문맥과 일치시키기 때문에 함수 내부에서의 혼란이 줄었다.

3. **클래스 문법이 추가되었다** 이를 통해 객체 지향 프로그래밍의 핵심 개념인 생성자, 상속, 메서드 오버라이딩 등을 자바스크립트에서 활용할 수 있게 되었다.

4. **템플릿 리터럴이 추가되었다.** 문자열 내에 변수를 손쉽게 삽입할 수 있어 기존의 문자열 연결 방식보다 가독성과 유연성이 향상되었다.

이것들 외에도 구조 분해 할당, Spread Operator, Rest Parameter, Promise 등. 중요한 기능들이 ES6를 기점으로 추가되었다.

### 이제 ES6 이전 버전의 문법은 몰라도 될까?

ES6 이전 버전의 자바스크립트 문법과 특징을 이해하는 것이 여전히 중요하다고 생각한다.

1. 기존 **코드베이스와의 호환성** 때문이다. 많은 기존 자바스크립트 프로젝트와 라이브러리들은 ES6 이전 버전의 문법을 사용하고 있다. 이러한 코드를 유지보수하거나 활용하려면 ES6 이전 문법에 대한 이해가 필요하다.

2. 대규모 프로젝트의 경우 ES6도입을 위해서는 **점진적인 마이그레이션**이 필요한데, 이 과정에서 ES6 이전 문법과 ES6 문법이 혼재되어 사용될 수 있다. 따라서 이전 버전 문법에 대한 이해가 필요하다.

3. ES6 기능을 구형 브라우저에서 사용하려면 **폴리필이나 트랜스파일러를 활용**해야 하는데, 이때에도 ES6 이전 문법에 대한 기본적인 이해가 필요할 수 있다.

## 오늘의 알고리즘 문제

### 1번 문제

```js

```

### 2번 문제

```js

```

## 리액트 시리즈

## Adding Interactivity: Responding to Events

### 1. 이벤트 응답하기

- React에서 버튼, 입력창 같은 UI 요소에 **이벤트 핸들러(event handler)** 를 붙여서 상호작용을 처리함.
- HTML의 `onclick=""` 과 달리 React에서는 **camelCase** (`onClick`) 사용.

```jsx
export default function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

### 2. 이벤트 핸들러 함수

이벤트 핸들러는 일반적인 함수.

이벤트가 발생했을 때 React가 해당 함수를 호출.

함수 안에서 alert, console.log, 상태 변경 등을 수행.

### 3. 함수를 전달하기

이벤트 핸들러에 함수 호출 결과가 아닌 함수 자체를 전달해야 함.

잘못된 예시:

```jsx
<button onClick={handleClick()}>Click</button> // 함수가 즉시 실행됨
```

올바른 예시:

```jsx
<button onClick={handleClick}>Click</button> // 함수 참조만 전달
```

4. 이벤트 핸들러의 위치
   함수는 컴포넌트 내부에 정의하는 것이 일반적.

이유:

UI와 이벤트 로직을 가까이 둬서 가독성 ↑

컴포넌트마다 독립적인 이벤트 핸들러 사용 가능

### 5. 여러 개의 이벤트 핸들러

하나의 컴포넌트에 여러 이벤트 핸들러 부착 가능.

```jsx
export default function Toolbar() {
  function handlePlayClick() {
    alert("Playing!");
  }

  function handleUploadClick() {
    alert("Uploading!");
  }

  return (
    <div>
      <button onClick={handlePlayClick}>Play</button>
      <button onClick={handleUploadClick}>Upload</button>
    </div>
  );
}
```
