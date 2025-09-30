# 0930 공부내용 📖

## 매일매일 1일 면접 대비

### **Promise의 resolve()와 fulfilled에 대해서 설명해주세요.**

reslove()와 fulfilled는 Promise에서 비동기 처리시 사용되는 값들이지만 차이점이 존재한다. resolve()는 Promise를 **완료**시키는 함수이고 fulfilled는 해당 Promise가 **완료된 상태**를 뜻한다.

resolve()는 Promise가 성공적으로 끝났을 때 결과 값을 넘겨주는 함수이다. 예를 들어 어떤 비동기 작업이 잘 끝났을 때, reslove()를 호출해서 "이 작업이 끝났고 결과는 이것이다"라고 전달하게 된다. 이렇게 reslove()가 호출되면 Promise의 상태는 '이행됨' 상태로 바뀌는데, 이를 fulfilled라고 부른다.

예를 들어 new Promise((reslove, reject) => { reslove('완료'); })처럼 reslove()를 호출하면 이 Promise의 상태는 fulfilled로 변경된다. 이처럼 resolve()는 fulfilled 상태로 전환시키는 역할을 한다.

따라서 resolve()는 Promise를 성공적으로 **마무리 짓는 행위**라고 볼 수 있고, fulfilled는 그 결과로 발생하는 **완료된 상태**를 의미한다.

### resolve에서 작업이 실패할 수도 있나요?

resolve()가 실패하는 상황은 없다. resolve()는 Promise를 이행(fulfilled)으로 만드는 함수이기 때문에 성공적인 결과를 전달할 때 사용되며 실패 자체와는 관련이 없다. 만약 Promise가 실패한다면 reolve()가 호출조차 되지 않고 reject()가 호출된다.

비동기 작업이 성공적으로 완료되면 resolve()가 호출되어 fulfilled 상태가 되고, 오류나 실패가 발생하면 resolve()가 아닌 reject()가 호출되어 rejected 상태가 된다.

추가로 then()은 resolve()된 값을 처리하고, catch()는 reject() 된 오류를 처리하는 식으로 Promise의 결과를 다루게 된다.

## 오늘의 알고리즘 문제

### 1번 문제

```js

```

### 2번 문제

```js

```

## 리액트 시리즈

## React의 Render와 Commit 단계

### 개요

React는 UI 업데이트 과정에서 **Render 단계**와 **Commit 단계**라는 두 가지 주요 단계를 거친다.

- Render 단계: 무엇을 어떻게 그려야 할지 계산하는 과정
- Commit 단계: 실제 DOM에 반영하는 과정

---

### Render 단계

- React가 컴포넌트를 호출하고 반환된 JSX를 비교(diff)하는 과정.
- 결과적으로 **변경된 UI 트리(React Element Tree)** 를 계산한다.
- Render 단계는 **순수 계산 과정**이므로 화면에는 아무 변화가 없다.
- 특징:
  - **동기 또는 중단 가능(Interruptible)** → React 18부터는 Concurrent Rendering이 도입되어, 작업이 오래 걸리면 중단되었다가 다시 이어질 수 있음.
  - **Side Effect** 는 실행하지 않음 → `useEffect` 같은 훅은 실행되지 않고, 오직 JSX 반환만 한다.

---

### Commit 단계

- Render 단계에서 계산된 변경 사항을 실제 DOM에 반영한다.
- UI 업데이트가 실제로 화면에 표시되는 시점.
- 특징:
  - **중단 불가능(Non-interruptible)** → Commit이 시작되면 반드시 끝까지 실행됨.
  - React는 DOM 업데이트 후 `useEffect` 같은 훅을 실행한다.
  - 화면에 유저가 즉시 변화를 볼 수 있음.

---

### 단계별 흐름

1. **트리 생성(Render)**  
   React가 컴포넌트를 호출하고 새로운 React 요소 트리를 만든다.
2. **비교(Diffing)**  
   이전 트리와 새로운 트리를 비교하여 변경 사항을 계산한다.
3. **DOM 반영(Commit)**  
   변경된 부분만 실제 DOM에 반영한다.
4. **Effect 실행**  
   Commit 후 `useEffect` 등의 부수효과 실행.

---

### 요약

| 단계   | 설명                              | 특징                        |
| ------ | --------------------------------- | --------------------------- |
| Render | JSX를 계산하고 변경할 부분을 찾음 | 화면 변화 없음, 중단 가능   |
| Commit | DOM에 실제 변경 사항 반영         | 화면 변화 발생, 중단 불가능 |

---

## 핵심 요약

- Render: 무엇을 어떻게 바꿀지 계산 → **화면 변화 없음**
- Commit: 실제 DOM 반영 및 Effect 실행 → **화면 변화 발생**
