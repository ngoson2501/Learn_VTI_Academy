// Lấy danh sách các mục menu trong phần header
var header                  = document.getElementById("header");
var change_text_color       = document.querySelectorAll("#header .header-link ul li a p");
var logo                    = document.querySelector("#header .logo a img");
var change_icon_search      = document.querySelector(".box .seacher a img");
var change_icon_menu        = document.querySelector(".box-2 a img");
var change_text_color_2     = document.querySelector(".box .language a p");

var my_box_menu             = document.querySelector(".menu");
var onButton                = document.querySelector('.box-2 a img');
var offButton               = document.querySelector('.icon-cross img');

// Bắt sự kiện scroll trang và thực hiện hành động khi scroll
window.addEventListener("scroll", function() {
    // Lấy vị trí cuộn (scroll) hiện tại của trang
    var scrollPosition = window.scrollY;

    // Thay đổi màu chữ của các mục menu dựa trên vị trí cuộn
    if (scrollPosition > 100) {
        // Khi cuộn qua một giá trị cụ thể (ở đây là 100), thay đổi màu chữ của các mục menu
        change_text_color.forEach(function(item) {
            item.style.color = "rgb(54, 46, 126)"; // Thay đổi màu chữ thành đỏ
        });
        header.style.backgroundColor = "white";
        logo.src = "./img/logo_vti_dark.svg";
        change_icon_search.src = "./img/search.png";
        change_icon_menu.src = "./img/menu-black.png";  
        change_text_color_2.style.color = "rgb(54, 46, 126)";


       
        
    } else {
        // Khi cuộn lên trên và không vượt qua 100, trở lại màu chữ ban đầu của các mục menu
        change_text_color.forEach(function(item) {
            item.style.color = "rgb(224, 224, 224)"; // Trở lại màu chữ mặc định
        });

        header.style.backgroundColor = "rgba(224, 224, 224, 0)";
        logo.src = "./img/logo_vti_light.svg"; 

        change_icon_search.src = "./img/icon-search-removebg-preview.png";
        change_icon_menu.src = "./img/menu.png";
        change_text_color_2.style.color = "rgb(224, 224, 224)";
    }

});




    // Thêm sự kiện cho nút "On"
    onButton.addEventListener('click', function() {
        // Hiển thị khối "div"
        my_box_menu.style.display = 'block';
    });

// Thêm sự kiện cho nút "Off"
    offButton.addEventListener('click', function() {
    // Ẩn khối "div"
        my_box_menu.style.display = 'none';
    });
