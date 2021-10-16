let values = `
    WELCOME
    Lee
    lee
    dankthedust@gmail.com
    seoul
    https://github.com/8wallDawn
`;

// 정규 표현식을 이용한 검색
let reg = new RegExp('com','');
console.log(values.match(reg)) // Array(1) 단일 항목 반환

/* ---------- */
// 플래그를 활용한 검색
reg = new RegExp('com','g'); // 플래그 'g'
console.log(values.match(reg)) // Array(2) 전체 항목 반환
// 플래그 'g'(global)는 모든 항목을 반환한다.

reg = new RegExp('com','gi'); // 플래그 'g'와 'i'
console.log(values.match(reg)) // Array(3) 전체 항목 반환
// 플래그 'i'(ignoreCase)는 대소문자를 구분하지 않는다.

/* ---------- */
values = `
    Lee
    leee
    dankthedust@gmail.com
    https://github.com/8wallDawn
    http://github.com/8wallDawn
`
// 자주 사용하는 패턴(표현식)을 활용한 검색
// /abc$/ : 텍스트의 끝이 abc
console.log('find letters end m', values.match(/m$/gm));

// /^abc/ : 텍스트의 시작이 abc
console.log('find letters begin l', values.match(/^l/gim)); // null
/*
null 인 이유는 `` 사이에 줄바꿈 처리한 내용에 tab을 이용하여 생긴 공백또한 문자열의 일부로 인식하기 때문에 모든 줄의 tab공백을 지우면 정상적으로 검색이 된다.
*/
values = `
Lee
leee
dankthedust@gmail.com
https://github.com/8wallDawn
http://github.com/8wallDawn
`
console.log('find letters begin l', values.match(/^l/gim)); // ['L', 'l']

// /./ : 임의의 한 문자와 일치
console.log('two letter between gi and ub', values.match(/gi..ub/g)); // ['github', 'github']

// /a|b/ : a또는 b와 일치
console.log('lee or Lee', values.match(/lee|Lee/g)); // ['Lee','lee'] ,플래그 g가 없는 경우 Lee가 먼저 찾아져 ['Lee']만을 리턴

// /ab?/ : b가 존재하거나 존재하지 않은 경우와 일치
console.log('s is exist or not', values.match(/https?/g)); // ['https', 'http']

// /a{num}/ : num의 값 만큼 한 문자 a에 대한 연속 일치
// /a{numX,}/ : numX 이상 한 문자 a에 대한 연속 일치
// /a{numX,numY}/ : numX 이상 numY 이하 한 문자 a에 대한 연속 일치
console.log(
    values.match(/e{2}/), // ['ee']
    values.match(/e{3,}/), // ['ee']
    values.match(/e{2,3}/g), // ['ee', 'eee']
    // 2~5개 사이의 \b(특수문자, _제외) 사이의 \w(숫자나 문자, _)를 검색
    values.match(/\b\w{2,5}\b/g) // ['Lee', 'leee', 'gmail', 'com', 'https', 'com', 'http', 'com']
)

// [] 특정구간의 문자 찾기
let str = `aAbBcCdDeE01234가나다라!@#$%`;
// [abc] : a 또는 b또는 c
console.log(str.match(/[d3다!]/g)); // ['d', '3', '다', '!']
//[a-z] : a부터 z 사이의 문자 구간(소문자)
console.log(str.match(/[c-f]/g)); // ['c', 'd', 'e']
//[A-Z] : A부터 Z 사이의 문자 구간(대문자)
console.log(str.match(/[D-E]/g)); // ['D', 'E']
//[0-9] : 0부터 9 까지의 문자 구간(숫자)
console.log(str.match(/[2-5]/g)); // ['2', '3', '4']
//[가-힣] : 가부터 힣 까지의 문자 구간(한글)
console.log(str.match(/[다-라]/g)); // ['다', '라']

// 특정 문자 타입에 대한 일치
// \w : 63개의 문자(대소문자 52개 + 숫자 10개 + _ ) 에 일치
// \b : 63개 문자(`\w`) 를 제외하는 나머지 문자의 경계(Boundary)
// \d : 숫자(Digit)에 일치
// \s : 공백(Space, Tab, enter 등) 에 일치
str = `fire fox apple apple_fox fox_apple`
// 소문자 f로 시작하는 단어 찾기
console.log(str.match(/\bf\w{1,}\b/g)) // ['fire', 'fox', 'fox_apple']

// \s 를 활용한 공백 지우기
str = `   hel lo New W  or
l
d!!
`
console.log(str.replace(/\s/g, '')); //helloNewWorld!!

// (?=) 과 (?<=) : 앞쪽 일치와 뒤쪽 일치
str = `
dankthedust@gmail.com
`
console.log(
	str.match(/.{1,}(?=@)/g), // ['dankthedust']
	str.match(/(?<=@).{1,}/g) // ['gmail.com']
)

/* ---------- */
// 정규표현식을 활용하는 다양한 메소드 활용 예제.
const letters = `Lorem Ipsum is simply dummy text of the printing and typesetting indulettersy. Lorem Ipsum has been the indulettersy's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
const replaceText = `LOREM`;

reg = new RegExp('Lorem', 'gi'); 
console.log('1',reg.exec(letters)); // Array(1)
console.log('2',reg.test(letters)); // true
console.log('3',letters.match(reg)); // Array(4)
console.log('4',letters.search(reg)); // 0
console.log('5',letters.replace(reg, replaceText)); // LOREM Ipsum is simply dummy text of the printing ...
console.log('6',letters.split(reg)); // Array(5)
/*
0: ""
1: " Ipsum is simply dummy text of the printing and typesetting indulettersy. "
2: " Ipsum has been the indulettersy's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing "
3: " Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of "
4: " Ipsum."
length: 5
*/
console.log('7',reg.toString()); // /Lorem/gi