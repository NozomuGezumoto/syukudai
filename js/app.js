let btn = document.getElementById('btn');
let action= document.getElementById('action');
 

let count=0
btn.addEventListener('click', people);
function people() {
count++
console.log(count)
if (count == 5){
  alert('1日５回までです！')
  location.href='uranai.html'
}
let changeImg = document.getElementById('change-img');
let changeImg_2 = document.getElementById('change-img_2');
let name = document.getElementById('name');
let name_2 = document.getElementById('name_2');
// let name_2 = document.getElementById('name_3');
let res = [
  ['kyojin', '巨人','sugano','沢村賞'],
  ['soft', 'Soft Bank','senga','最優秀防御率'],
  ['seibu', '西武','yamakawa','ホームラン王'],
  ['hirosima', 'カープ','suzuki','首位打者'],
  ['hansin', '阪神','chikamoto','盗塁王'],
];
//結果の配列

let randomNum = Math.random();
let num = Math.floor(randomNum * res.length);
action.style.display='flex';

changeImg.src = 'images/' + res[num][0] + '.jpg';
changeImg_2.src = 'images/' + res[num][2] + '.jpg';
name.textContent = 'チーム',res[num][1];
name_2.textContent = res[num][3];
}
// name_3.textContent = ''
// }