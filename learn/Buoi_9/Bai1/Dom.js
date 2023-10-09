function display(){

   
    
    
}

/* function display() {
    
    

    var text = prompt("mời bạn nhập:")
    console.log(text)
  }
 */

  function display() {
    var text = prompt("Mời bạn nhập:");
    
    // Kiểm tra xem người dùng đã nhập giá trị hay chưa
    if (text !== null) {
      console.log("Giá trị bạn nhập là: " + text);
      // Sau đây, bạn có thể thực hiện các thao tác khác với giá trị này
    } else {
      console.log("Bạn đã hủy nhập giá trị.");
    }
  }

  function goToWebsite() {
    var url = prompt("Nhập địa chỉ trang web:");
    
    if (url !== null) {
      // Kiểm tra xem URL bắt đầu bằng "http://" hoặc "https://"
      if (url.startsWith("http://") || url.startsWith("https://")) {
        // Nếu đã nhập đúng URL, chuyển hướng đến trang web
        window.location.href = url;
      } else {
        alert("Địa chỉ không hợp lệ. Vui lòng nhập đúng định dạng URL.");
      }
    } else {
      alert("Bạn đã hủy nhập địa chỉ.");
    }
  }


  function goToWebsitee() {
    var userInput = prompt("Nhập địa chỉ trang web:");
    
    if (userInput !== null) {
      // Kiểm tra xem người dùng đã nhập gì hay không
      if (userInput.trim() !== "") {
        // Sử dụng giá trị mà người dùng nhập hoặc mặc định là "https://www.w3schools.com/"
        window.location.href = userInput;
      } else {
        alert("Vui lòng nhập một giá trị.");
      }
    } else {
      alert("Bạn đã hủy nhập địa chỉ.");
    }
  }
  
  

  





