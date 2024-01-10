console.log("Hello World");//in ra màn hình console
console.log("Xuân Nhất");
// 3 cách khai báo biến
var fullname = "Nguyễn Xuân Nhất";
let job = "Police";
const age = 40;
//in ra các biến đã khai báo
console.log(fullname);
console.log(job);
console.log(age);
//để người dùng có thể nhập vào ô input và in ra màn hình console
let answer = prompt("Mời mày nhập tên vào đây");
console.log(answer);
//cho người dùng nhập vào 2 số a và b và in ra tổng
let a = +prompt("Nhap so a");
let b = +prompt("Nhap so b");
let sum = a + b;
console.log("Tổng của 2 số là",sum);
//Khai báo chuỗi kí tự bằng 3 dấu: 1. "" ; 2. ' ; 3.``
console.log("TÔi đẹp troia quá");
console.log('Tôi vô cùng thông minh');
console.log(`Tôi 10 điểm`);
//
var fullname = "Nguyễn";
var fullname2 = 'Xuân';
var fullname3 = `Nhất`;
console.log(fullname + " " + fullname2 + " " + fullname3);
//Có thể thêm phần tử vào trong câu vào vị trí mình muốn bằng dấu $
var random = `lorem ${fullname} good`;
console.log(random);
// cách xuống dòng
var name = "Nguyễn Xuân\n Nhất"
var name2 = ` Nguyễn Xuân
Nhất `;
console.log(name);
console.log(name2);
//
var c = 5;
var d = 6;
console.log(c + d);// dấu cộng còn dùng để nối các chuỗi kí tự
console.log(c - d);
console.log(c * d);//số mũ
console.log(c / d);
console.log(c % d);
console.log(c ** d);