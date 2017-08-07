
function showMessage(message){

  message = message || "Khong co tin nhan";

  document.write(message);


}
//showMessage(); // ham ko truyen tham so, message = "Khong co tin nhan".


//showMessage("hello world");


function checkNamNhuan(year){

  year = year || "Khong co du lieu";

  if (year % 100 == 0){
    if (year % 400 == 0){
      document.write(year + " la nam nhuan.");
    }
    else{
      document.write(year + " khong phai la nam nhuan. ");
    }
  }
  else if (year % 4 == 0){
    document.write(year + " la nam nhuan.");
  }
  else{
    document.write(year + " khong la nam nhuan.")
  }
}


checkNamNhuan(2017);


// // khai báo hàm
// function kiem_tra_nam_nhuan(nam)
// {
//     // nếu năm chia hết cho 100
//     // thì kiểm tra nó có chia hết cho 400 hay không
//     if (nam % 100 == 0)
//     {
//         // nêu chia hết cho 400 thì là năm nhuận
//         if (nam % 400 == 0){
//             alert(nam + ' là năm nhuận');
//         }
//         else { // ngược lại không phải năm nhuận
//             alert(nam + ' không phải năm nhuận');
//         }
//     }
//     else if (nam % 4 == 0){ // trường hợp chia hết cho 4 thì là năm nhuận
//         alert(nam + ' là năm nhuận');
//     }
//     else { // cuối cùng trường hợp không phải năm nhuận
//         alert(nam + 'không phải là năm nhuận');
//     }
// }
// // sử dụng
// kiem_tra_nam_nhuan(2017);
