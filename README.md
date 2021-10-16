## 개념

---

정규표현식이란 **문자열에 나타나는 특정 문자의 조합을 패턴을 통해 대응**하기 위한 식으로 자바스크립트에서 정규표현식은 **객체**다.

간단한 문자 검색부터 이메일, 패스워드 검사 등의 복잡한 문자 일치 기능 등을 정규식 패턴으로 빠르게 수행할 수 있다.

정규표현식은 인스턴스 속성(플래그의 역할)을 통해 탐색의 추가적인 기준을 잡고 메서드를 통해서 검색을 수행하며,크게 다음과 같은 역할을 수행한다.

1. 문자 검색(search)
2. 문자 대체(replace)
3. 문자 추출(extract)

## 정규표현식 테스트 사이트

---

다음의 사이트는 정규표현식을 명확히 명시하였는지를 확인할 때에 도움이 되는 사이트이나 각 사이트의 설정된 환경이 다르기 때문에 일부 작동하지 않거나 자바스크립트에서 다루는 정규식과 다르게 작동할 수 있다.

확인 후 실제 적용하는 코드 내에서의 정상 작동 여부 또한 확인하는 것이 비교적 안전한 방법이겠다.

- [https://regex101.com/](https://regex101.com/)
- [https://regexr.com/](https://regexr.com/)
- [https://regexper.com/](https://regexper.com/)

## 정규표현식 생성

---

정규표현식은 생성자 함수 방식과 리터럴 방식으로 나누어 생성할 수 있다.

보통은 리터럴 방식이 더욱 편리하여 자주 사용하지만 생성자 함수 방식을 써야만 하는 경우도 있다.

1. 생성자 함수 방식

   `RegExp` 생성자 함수를 호출하여 사용한다.

   ```jsx
   // new RegExp(표현식)
   var regExp1 = new RegExp("^abc");

   // new RegExp(표현식, 플래그)
   var regExp2 = new RegExp("^abc", "gi");
   ```

1. 리터럴 방식

   ```jsx
   // /표현식/
   var regExp1 = /^abc/;

   // /표현식/플래그
   var regExp2 = /^abc/gi;
   ```

### 생성자 함수와 리터럴 방식을 통한 정규표현식의 생성의 차이

**생성자 함수**를 통한 방식은 **정규식 실행 시점에 컴파일**된다. 즉, 정규식의 패턴이 변경될 수 있는 경우나 사용자 입력과 같이 다른 출처로부터 패턴을 가져와야 하는 경우에 사용하는 것이 좋다.

**정규식 리터럴**은 **스크립트가 불러와질 때 컴파일**된다. 정규식이 상수일 경우 다음과 같이 사용하는 것이 성능을 향상 시킬 수 있다.

## 정규표현식의 플래그

---

플래그는 정규표현식의 optional 값이며, 표현식을 통해 추출해내는 패턴에 부여하는 추가적인 옵션이다.

- `g` (global) : 전역 검색
- `i` (ignoreCase) : 대소문자 미구분
- `m` (multi-line) : 다중행 검색
  `g`와 비슷하게 해석될 수 있겠으나, 다중행인 문자열의 전체를 검색하는 것이 아닌 행을 기준으로 검색한다라고 생각할 수 있다.
  즉, 행으로 나누어진 문자열마다 각각의 검색을 시도한다라고 해석하면 된다.
  단, 다중행의 문자열을 tab 키를 이용하여 구분하였을 때, tab으로 인한 공백또한 문자열의 일부로 인식함을 주의 하여야 한다.

  ```jsx
  let person = `
      Lee
      dankthedust@gmail.com
      https://github.com/8wallDawn
  `;
  console.log(values.match(/^l/gm)); // null

  person = `
  Lee
  dankthedust@gmail.com
  https://github.com/8wallDawn
  `;
  console.log(values.match(/^l/gm)); // ['L']
  ```

- `s` : `.` 이 개행 문자 `\n` 도 포함하도록 'dotAll' 모드를 활성화한다.
  다소 이해가 안될 수 있겠으며, 코드를 보면서 이해해 본다.

  ```jsx
  var str1 = "bar\nexample foo example";
  var regex1 = new RegExp("bar.example", "s");

  console.log(regex1.dotAll); // Output: true
  console.log(str1.replace(regex1, "")); // Output: foo example

  var str2 = "bar\nexample foo example";
  var regex2 = new RegExp("bar.example");

  console.log(regex2.dotAll); // Output: false
  console.log(str2.replace(regex2, "")); // Output: bar
  //         example foo example
  ```

  코드에서 보듯 `str1` 에 존재하는 개행문자 `\n` 의 값을 인식하는 지 확인 하는 역할이 바로 `RegExp.prototype.dotAll;` 이며, 이를 활성화하는 것이 `s`이다.

- `u` (unicode) : 유니코드
- `y` (sticky) : "sticky" 검색을 통해 문자열의 특정 위치부터 검색을 수행한다.

## 패턴(표현)

---

### [패턴(표현식) 모음](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Regular_Expressions#.ed.8c.a8.ed.84.b4.ed.99.94.eb.90.9c_.eb.b6.80.eb.b6.84_.eb.ac.b8.ec.9e.90.ec.97.b4_.ec.9d.bc.ec.b9.98_.ec.82.ac.ec.9a.a9.ed.95.98.ea.b8.b0)

### 자주 사용하는 패턴

- `^`와 `$` : 캐럿 기호 ^는 텍스트의 시작, 달러 기호 $는 텍스트의 끝
  ```jsx
  let str = `
  Kim A
  Park B
  Lee C
  `;
  console.log(str.match(/^kim/gim)); // ['Kim']
  console.log(str.match(/b$/gim)); // ['B']
  ```
- `.` : 임의의 한 문자와 일치
  ```jsx
  let str = `
  abcd
  a12d
  a!@d
  `;
  console.log(str.match(/a..d/gm)); // ['abcd', 'a12d', 'a!@d']
  ```
- `a|b` : a 또는 b
  ```jsx
  let str = `
  Kim A
  Park B
  Lee C
  `;
  console.log(str.match(/kim|park/gi)); // ['Kim', 'Park']
  console.log(str.match(/kim|choi|lee/i)); // ['Kim']
  ```
- `ab?` : 문자 b가 있거나 없는 경우
  ```jsx
  let str = `
  http://github.com/8wallDawn
  https://github.com/8wallDawn
  `;
  console.log(str.match(/https?/g));
  ["http", "https"];
  ```
- `{numX*[, numY]*}` : 한 문자의 numX 만큼의 연속 일치
  ```jsx
  let str = `
  010-1134-56667
  dankthedust@gmail.com
  https://github.com/8wallDawn
  `;
  console.log(str.match(/1{2}/g)); // ['11']
  console.log(str.match(/\d{2,}/g)); // ['010', '1134', '56667']
  console.log(str.match(/\b\w{3,5}\b/g)); // ['010', '1134', '56667', 'gmail', 'com', 'https', 'com']
  ```
- `[]` : 특정 구간의 문자 찾기
  ```jsx
  str = `aAbBcCdDeE01234가나다라!@#$%`;
  ```
  - `[abc]` : a 또는 b또는 c
    ```jsx
    console.log(str.match(/[d3다!]/g)); // ['d', '3', '다', '!']
    ```
  - `[a-z]` : a부터 z 사이의 문자 구간(소문자)
    ```jsx
    console.log(str.match(/[c-f]/g)); // ['c', 'd', 'e']
    ```
  - `[A-Z]` : A부터 Z 사이의 문자 구간(대문자)
    ```jsx
    console.log(str.match(/[D-E]/g)); // ['D', 'E']
    ```
  - `[0-9]` : 0부터 9 까지의 문자 구간(숫자)
    ```jsx
    console.log(str.match(/[2-5]/g)); // ['2', '3', '4']
    ```
  - `[가-힣]` : 가부터 힣 까지의 문자 구간(한글)
    ```jsx
    console.log(str.match(/[다-라]/g)); // ['다', '라']
    ```
- `\w` : 63개의 문자(대소문자 52개 + 숫자 10개 + \_ ) 에 일치
- `\b` : 63개 문자(`\w`) 를 제외하는 나머지 문자의 경계(Boundary)
- `\d` : 숫자(Digit)에 일치
- `\s` : 공백(Space, Tab, enter 등) 에 일치

```jsx
let str = `fire fox apple apple_fox fox_apple`;
// 소문자 f로 시작하는 단어 찾기
console.log(str.match(/\bf\w{1,}\b/g)); // ['fire', 'fox', 'fox_apple']

// \s 를 활용한 공백 지우기
let str = `   hel lo New W  or
l
d!!
`;
console.log(str.replace(/\s/g, "")); //helloNewWorld!!
```

- `(?=)` 와 `(?<=)` : 앞쪽 일치와 뒤쪽 일치
  ```jsx
  str = `
  dankthedust@gmail.com
  `;
  console.log(
    str.match(/.{1,}(?=@)/g), // ['dankthedust']
    str.match(/(?<=@).{1,}/g) // ['gmail.com']
  );
  ```

## 정규식을 활용하는 다양한 메소드

---

정규식은 광범위한 범위의 문자열을 검색하는데 유용하며, 이를 활용하기 위한 다양한 메소드들이 존재한다.

그 중에서 자주 사용될 methods를 알아본다.

```jsx
const str = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
const replaceText = `LOREM`;

const reg = new RegExp("Lorem", "gi");
```

1. `[정규식].exec([문자열])` : 일치하는 하나의 정보를 배열(Array)로 반환

   ```jsx
   console.log(reg.exec(str)); // Array(1)
   ```

2. `[정규식].test([문자열])` : 일치 여부를 Boolean 값으로 반환

   ```jsx
   console.log(reg.test(str)); // true
   ```

3. `[문자열].match([정규식])` : 일치하는 문자열을 배열(Array)로 반환

   ```jsx
   console.log(str.match(reg)); // Array(4)
   ```

4. `[문자열].search([정규식])` : 일치하는 첫번째 문자열의 인덱스값을 반환

   ```jsx
   console.log(str.search(reg)); // 0
   ```

5. `[문자열].replace([정규식],[대체문자])` : 일치하는 문자열을 대체하고 대체된 문자열을 반환

   ```jsx
   console.log(str.replace(reg, replaceText)); // LOREM Ipsum is simply dummy text of the printing and typesetting industry. LOREM Ipsum...
   ```

6. `[문자열].split([정규식])` : 일치하는 문자열을 기준으로 분할하여 배열(Array)로 반환

   ```jsx
   console.log(str.split(reg)); // Array(5)
   /*
   0: ""
   1: " Ipsum is simply dummy text of the printing and typesetting industry. "
   2: " Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing "
   3: " Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of "
   4: " Ipsum."
   length: 5
   */
   ```

7. `[생성자 정규식].toString()` : 생성자 함수 방식의 정규식을 리터럴 방식으로 전환하여 문자열로 반환

   ```jsx
   console.log(reg.toString()); // /Lorem/gi
   ```
