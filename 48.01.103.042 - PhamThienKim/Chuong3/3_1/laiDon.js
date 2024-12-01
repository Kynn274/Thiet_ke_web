function laiDon(soTien, laiSuat, thoiGian){
    var tienLaiMotNam = soTien * laiSuat;
    return soTien + tienLaiMotNam * thoiGian;
}
console.log(laiDon(1000000, 0.05, 1));