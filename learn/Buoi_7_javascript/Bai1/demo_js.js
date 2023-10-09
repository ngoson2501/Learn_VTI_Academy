var class_vti = [
    {
        stt: 1,
        name: "Hoàng Văn Long",
        status: "Active",
        trang_thai: 'online',
    }, 
    {
        stt: 2,
        name: "Nguyễn Đức Việt",
        status: "Active",
        trang_thai: 'nghỉ',
    }, 
    {
        stt: 3,
        name: "Lại Như ý",
        status: "Active",
        trang_thai: 'offline',
    }, 
    {
        stt: 4,
        name: "Vũ Ngọc Đức",
        status: "Active",
        trang_thai: 'nghỉ',
    }, 
    {
        stt: 5,
        name: "Bùi Duy Thanh",
        status: "Active",
        trang_thai: 'nghỉ',
    }, 
    {
        stt: 6,
        name: "Nguyễn Ngọc Bá",
        status: "Active",
        trang_thai: 'offline',
    }, 
    {
        stt: 7,
        name: "Nguyễn Hải Yến",
        status: "Active",
        trang_thai: 'offline',
    },
    {
        stt: 8,
        name: "Nguyễn Thu Hiền",
        status: "Active",
        trang_thai: 'offline',
    },
    {
        stt: 9,
        name: "Uông Văn Công",
        status: "Active",
        trang_thai: 'nghỉ',
    },
    {
        stt: 10,
        name: "Lê Trung Kiên",
        status: "Active",
        trang_thai: 'offline',
    },
    {
        stt: 11,
        name: "Trần Bá Hải",
        status: "Active",
        trang_thai: 'nghỉ',
    },
    {
        stt: 12,
        name: "Nguyễn Ngọc Tiến",
        status: "Active",
        trang_thai: 'nghỉ',
    },
    {
        stt: 13,
        name: "Trần Văn Nguyễn",
        status: "Active",
        trang_thai: 'offline',
    },
    {
        stt: 14,
        name: "Ngô Thế Cao Sơn",
        status: "Active",
        trang_thai: 'offline',
    },
    {
        stt: 15,
        name: "Nguyễn Anh Quân",
        status: "Pending",
        trang_thai: 'nghỉ',
    },
    {
        stt: 16,
        name: "Lê Thị Giang",
        status: "Pending",
        trang_thai: 'nghỉ',
    }
]


/* console.log(class_vti.length)
var gia_tri = class_vti[class_vti.length -1].name
console.log(gia_tri) */
var dem_off = 0
var dem_onl = 0
var dem_nghi = 0
var new_array_1 = []
var new_array_2 = []
var new_array_3 = []
class_vti.forEach((item, key)=>{
    if(item.trang_thai === "offline"){
        dem_off +=1;
        new_array_1.push(item.stt +', '+ item.name +', '+ item.trang_thai)
    }
    
    else if(item.trang_thai === "online"){
        dem_onl +=1;
        new_array_2.push(item.stt +', '+ item.name +', '+ item.trang_thai)
        
    }
    else{
        dem_nghi +=1;
        new_array_3.push(item.stt +', '+ item.name +', '+ item.trang_thai)
    }
    
})
    console.log(new_array_1)
    console.log('Tổng có:' + dem_off + ' học offline')

    console.log(new_array_2)
    console.log('Tổng có:' + dem_onl + ' học online')

    console.log(new_array_3)
    console.log('Tổng có:' + dem_nghi + ' học nghỉ')

    var students = [{}]

/* var fun_name = prompt("Tên của bạn");
var age = prompt("Tuổi của bạn");
var sex = prompt("Giới tính của bạn");
var address = prompt("Địa chỉ của bạn");
var Class = prompt("Lớp học của bạn");

console.log("Tên của tôi là:" + fun_name );




















console.log("Tôi:" + age + "tuổi" );
console.log("tôi là:" + sex );
console.log("Tôi đến từ:" + address );
console.log("Tôi học lớp:" + Class );
 */

