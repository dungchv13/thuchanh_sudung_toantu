let inputWidth;
let inputHeight;
inputWidth=prompt("nhap chieu dai");
inputHeight=prompt("nhap chieu cao");

let width = parseInt(inputWidth);
let height = parseInt(inputHeight);

let area=width*height;
document.write('Enter width:'+'<br>'+width+'<br>')
document.write('Enter Height'+ '<br/>'+height+'<br/>')
document.write("dien tich hinh chua nhat la:"+area);