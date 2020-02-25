// var title = "cybersoft";

// console.log(`Hello ${title}`);

// title ="xyz";

// // dom đến mảng button để định nghĩa sự kiện click cho button
// let mangButton = document.getElementsByTagName("button");

// for(var i = 0; i<mangButton.length; i++){
//     var button = mangButton[i];
//     // định nghĩa sự kiện click cho từng button 
//     button.onclick = function(){
//         alert(i);
//     }
// };

// let num: number = 5;
// let title: string = "hoaiAn";

// // cach 1: khoi tao mang
// let mangSo: number[] = [1, 2, 3];
// let mangChuoi: string[] = ["a", "b", "c"];
// // cach 2: tao mang
// let mangSo2: Array<number> = new Array<number>();

// // tuple
// let hocSinh: [number, string] = [101, "chuoi"];

// // enum
// enum config {
//     domain = "http://movie0706.cybersoft.edu.vn/api",
//     accessToken = "accessToken", userLogin = "userLogin"
// };
// console.log(config.accessToken);

// // han che dung any: any dung cho bat ki kieu du lieu nao cung dc => kdl any DE DAI
// let x: any = "6";
// x = 1;
// x = { prop1: "hello xyz" };

// ngữ cảnh con trỏ deep
const hocSinh = {
    hoTen: 'le thi banana',
    lop: 'frontend32',
    hienThiThongTinHocSinh: function () {
        // trong phuong thuc hienThiThongTinHocSinh
        let thongTinHocSinh = () => {
            console.log(`họ tên: ${this.hoTen} - lớp: ${this.lop}`);
        }
        thongTinHocSinh();
    }
}
hocSinh.hienThiThongTinHocSinh();

// thân hàm có 1 lệnh return về object => { return <=> ()
const mapSateToProps = (state: string = "") =>
    ({
        danhSachPhim: ["phim1", "phim2"]
    });


let danhSachPhim = mapSateToProps();

console.log(danhSachPhim);

function xuLyMang(...restParam){
    // in tham so khi nguoi dung truyen 1 tham so
    switch (restParam.length) {
        case 1:{
            // in mang ra
            console.log(restParam);
        };
        break;
        case 2:{
            // push vao 1 so sau do in mang
            restParam[0].push(restParam[1])
            console.log(restParam[0]);
        };
        break;

    }
}

// xuly in mag
xuLyMang([1,2,3,4]);
// xu ly them va in mang
xuLyMang([1,2,3,4],5);

// boc tach phan tu trong mang
let student={
    ma:1,
    ten:'tran van apple',
    lop:'fe32'
}

function xuatThongTinHocSinh({ma,...propHS}){
    console.log(ma,propHS.ten, propHS.lop) ;
}
xuatThongTinHocSinh(student);

// boc tach phan tu string template
let [state, setState] =[{hocSinh:{}}, function(newState){
    state= newState;
}];

// let date=["31","12","2019"];
// let day = date[0];
// let month = date[1];
// let year = date[2];

let [day,month,year]:[string,string,string] =["31","12","2019"];
console.log([day,month,year]);

// for in
let arrHocVien ={
    'hocVien1': {ma:1, ten:'A'},
    'hocVien2': {ma:2, ten:'B'},
    'hocVien3': {ma:3, ten:'C'},
}

// Object.entries(arrHocVien);

// for in: muc duc dung de duyet Object chu khong phai duyet mang, thuong dc use o co so du lieu firebase cua google(CSDL JSON- NO SQL)
for (let key in arrHocVien){
    console.log("hoc vien: ", arrHocVien[key]);
};
// for of dùng để duyệt mảng [] (array)


