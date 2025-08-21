# 08.08 공부 내용


## css flex와 grid 박스에 대해서

- flex와 grid의 차이점 -> flex는 한 방향 레이아웃이지만 grid는 두 방향(가로-세로) 레이아웃 시스템이다.


### 1. css grid란

기본적으로 grid 레이아웃을 만들기 위한 기본 html 구조는 
```
<div class="grid-container">
  <div class="grid-item"> 안녕하세요. </div>
  <div class="grid-item"> grid-box 입니다. </div>
  <div class="grid-item"> 안녕히가세요. </div>
  <div class="grid-item"> 어서오세요 </div>
  <div class="grid-item"> grid 입니다. </div>
  <div class="grid-item"> 안녕히가세요. </div>
</div>


```


grid-container가 영향을 받는 박스이고, 설정된 속성에 따라 각각의 아이템들이 배치가 된다. 


gird 속성들은 __container에 적용하는 속성__ 과 __item에 적용하는 속성__ 이렇게  두가지로 나뉜다.



#### 1. grid의 속성


grid 속성

- display


```
.grid-container {display: grid;}
를 적용하면 기본적으로 부모 요소에 grid가 설정이 된다.

```

- __gird-tempalte-rows(columns)__


```
.grid-container {
  grid-templates-rows(columns):200px 200px 500px;
  grid-templates-rows(columns):repeat(3, 1fr);
  grid-templates-rows(columns):repeat(3, minamx(100px, auto));
  grid-templates-rows(columns):repeat(auto-fill, minmax(20%, auto));
  }

grid-templates-rows는 행 배치 column은 열 배치를 결정한다.
grid-templates-rows와 column에는 여러가지 값들을 작성할 수 있는데
비교를 해보자면


1. grid-templates-rows(columns):200px 200px 500px; -> 각 칸을 200px 200px 500px로 크기를 맞추겠다는 뜻이다.

2. grid-templates-rows(columns):repeat(3, 1fr); -> repeat은 괄호안의 숫자대로 (횟수, 크기)를 뜻하며 본 예시는 1fr의 크기로 3번 반복하겠다는 뜻이다.

1fr은 비율을 생각하면 된다. 고정 크기와 가변 크기를 섞어 쓸수있다.

3. grid-templates-rows(columns):repeat(3, minamx(100px, auto)); -> 
minamx는 최소한 100px, 최대는 자동으로 늘어난다는 뜻이다. 즉 아무리 요소의 양이 적더라도 최소한의 크기는 100px만큼 확보하고, 내용이 너무 많아 100px 넘어가면 알아서 늘어나도록 처리해준다.

4. justify-content: between; -> 각 끝의 아이템들을 끝으로 붙이고 아이템들의 간격을 균등하게 만들어준다.
5. justify-content: space-around; -> 아이템의 양쪽 끝을 균등하게 간격을 준다.
```

- __align-items__
align-items는 수직축 방향으로 아이템들을 정렬하는 속성이다. justify-content와 수직방향의 정렬이라고 생각하자.

```
.flex-container {align-items: center;}


1. align-items: strtch; -> align-items 의 기본값, 아이템들이 세로로 끝까지 늘어난다.
2. align-items: flex-start; -> 아이템들을 시작점으로 정렬합니다. flex-direction이 row일때는 왼쪽, column일때는 왼쪽.
3. align-items: flex-end; -> 아이템들을 끝으로 정렬합니다. row일때는 아래쪽, column일때는 오른쪽.
4. align-items: center; -> 아이템들을 기본축을 기준으로 가운데 정렬합니다.
5. align-items: baseline; -> 아이템들을 텍스트 베이스라인 기준으로 정렬합니다.

TIP: flexbox안에 있는 아이템들을 박스안에서 정 가운데에 정렬하고 싶다면
.flex-container {
  algin-items: center;
  justify-content: center;
}
를 하면 가운데에 정렬하기 매우 쉽다.

```


- __align-content__
flex-wrap: wrap;이 설정된 상태에서, 아이템들의 행이 2줄 이상이 되었을 때 수직축 방향 정렬을 결정하는 속성이다.

```
.flex-container {
  flex-wrap: wrap;
  align-content: stretch;
}

align-content도 align-items나 justify-content와 비슷한 부분이 많아서 자세한 설명은 생략.

```


### 2.flex item의 속성
유연한 박스의 기본영역

-__flex-basis__
```
flex-basis는 flex 아이템의 기본 크기를 설정한다.

flex-basis: auto; (기본값)

flex-basis의 값으로는 %, px, rem, content 등 모든 단위를 사용할 수 있다.
```

-__flex-grow__
```
flex-grow는 아이템의 flex-basis의 값보다 커질 수 있는지를 결정하는 속성이다.
보통 빈 공간을 채우고 싶을때 쓰는 속성, 1은 상대적인 값이고 기본값은 0이다.
```

-__flex-shrink__
```
flex-shrink는 flex-grwo와 쌍을 이루는 속성으로, 아이템이 felx-basis의 값보다 작아질 수 있는지를 결정한다.

숫자가 커질수록 작아지고 기본값은1, 요소의 크기를 원하는대로 고정하고 싶을때는 flex-shrink:0;을 사용하면 된다.
```
