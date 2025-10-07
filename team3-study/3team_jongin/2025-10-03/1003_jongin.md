# 1003 공부내용 📖

## 매일매일 1일 면접 대비

### 리액트에서 컴포넌트가 불필요하게 리렌더링되는 상황을 방지하기 위한 방법을 설명해 주세요.

1. **React.memo**를 활용하여 컴포넌트를 메모이제이션할 수 있다. 이는 컴포넌트의 props가 변경되지 않으면 컴포넌트를 리렌더링하지 않도록 한다. 특히 부모 컴포넌트가 자주 업데이트되는 상황에서 유용하다
```jsx
const MemoizedComponent = React.memo(MyComponent);
```

2. **useMemo**와 **useCallback**훅을 사용하여 각각 값과 함수를 메모이제이션할 수 있다.
```useMemo```는 계산 비용이 많이 드는 연산 결과를 ```useCallback```은 자식 컴포넌트에 전달되는 콜백 함수를 메모이제이션한다.
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a, b), [a, b]);
```

3. **React DevTools의 Profiler**를 활용하여 불필요한 리렌더링이 발생하는 컴포넌트를 식별하고 최적화할 수 있다.
이러한 최적화는 성능 문제가 실제로 발생할 때 적용하는 것이 좋으며 과도한 최적화는 코드의 복잡석을 증가시킬 수 있다는 점을 항상 고려해야 한다.

### useCallback과 useMemo와 같은 메모이제이션은 되도록 많은 곳에 적용할수록 성능이 좋아지나요?

아니다. 메모이제이션을 무분별하게 적용하는 것은 오히려 성능에 부정적인 영향을 미칠 수 있다. 메모이제이션도 결국 또 다른 비용이 발생하는 작업이기 때문이다. React는 이전 값을 메모리에 저장해야 하므로 메모리 비용이 발생하고 의존성 배열의 각 항목을 비교하는 작업을 수행해야 하기도 한다.

```jsx
// 이런 간단한 함수의 경우 메모이제이션이 오히려 불필요합니다.
const handleClick = useCallback(() => {
  console.log('clicked');
}, []);

// 반면, 복잡한 연산의 경우 메모이제이션이 효율적입니다.
const expensiveValue = useMemo(() => {
  return complexCalculation(items);
}, [items]);
```

복잡한 계산이 필요한경우 컴포넌트가 자주 리렌더링되는 경우 등 성능 최적화가 필요한 경우에만 메모이제이션이 성능에 도움이 된다. 따라서 성능 최적화는 실제 병목이 발생하는 지점을 React DevTools Profiler로 확인하고, 선별적으로 적용하는 것이 바람직하다.
## 오늘의 알고리즘 문제

### 1번 문제

```js

```

### 2번 문제

```js

```

## 리액트 시리즈
