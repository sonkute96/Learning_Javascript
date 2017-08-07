

// -- khai bao bien toan cuc

var comment = "noi dung comment ben ngoai.";

function add_comment(){
  var comment = "Noi dung comment";

  alert(comment); // comment da dc khai bao
}

//add_comment();

//alert(comment); // cau lenh nay sai boi vi comment la bien cuc bo. luc nay comment chua duoc khai bao.

//console.log(comment);


// ---- set timeOut cho mot function

// // ----
// var time_function = setTimeout(add_comment, 3000);
//
// clearTimeout(time_function);


// -- sau 3s thuc hien function mot lan


setInterval(add_comment,3000);
