const values = `
    WELCOME
    Lee
    dankthedust@gmail.com
    seoul
    https://github.com/8wallDawn
`;

// 정규 표현식을 이용한 검색
let reg = new RegExp('com','');
console.log(values.match(reg)) // Array(1) 단일 항목 반환

reg = new RegExp('com','g'); // 플래그 'g'
console.log(values.match(reg)) // Array(2) 전체 항목 반환
// 플래그 'g'(global)는 모든 항목을 반환한다.

reg = new RegExp('com','gi'); // 플래그 'g'와 'i'
console.log(values.match(reg)) // Array(3) 전체 항목 반환
// 플래그 'i'(ignoreCase)는 대소문자를 구분하지 않는다.



// 정규표현식을 활용하는 다양한 메소드 활용 예제.
const str = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
const replaceText = `LOREM`;

reg = new RegExp('Lorem', 'gi');
console.log('1',reg.exec(str));
console.log('2',reg.test(str));
console.log('3',str.match(reg));
console.log('4',str.search(reg));
console.log('5',str.replace(reg, replaceText));
console.log('6',str.split(reg));
console.log('7',reg.toString());