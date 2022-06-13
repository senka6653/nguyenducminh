/*function time(){
    var thoigian = new Date();
    var ngay = thoigian.getDate();
    var thang = thoigian.getMonth()+1;
    var nam = thoigian.getFullYear();
    var gio = thoigian.getHours();
    var phut = thoigian.getMinutes();
    var giay = thoigian.getSeconds();
    var str = `Bây Giờ Là ${ngay}/${thang}/${nam} ${gio}:${phut}:${giay}`;
    document.getElementById("time").innerHTML = str;
}*/
setInterval("time()",1000);
 /*let khoAnh = [];
                    const nAnh = 8;
                    let index = 0;

                    for (let i = 0; i < nAnh; i++) {
                        khoAnh[i] = new Image();
                        khoAnh[i].src = `img/slideshow/${i}.jpg`;
                    }
                    function previous() {
                        index--;
                        if (index < 0) {
                            index = nAnh - 1;
                        }
                        document.getElementById("anh").src = khoAnh[index].src;
                    }
                    function next() {
                        index++;
                        if (index >= nAnh) {
                            index = 0;
                        }
                        document.getElementById("anh").src = khoAnh[index].src;
                    }
                    function first() {
                        index = 0;
                        document.getElementById("anh").src = khoAnh[index].src;
                    }
                    function last() {
                        index = nAnh - 1;
                        document.getElementById("anh").src = khoAnh[index].src;
                    }
                    setInterval("next()", 2000);
                    */
                    function them(button){
                        var row = button.parentElement.parentElement.cloneNode(true);
                        var btnXoa = row.getElementsByTagName("button")[0];
                        btnXoa.innerText = "Xóa";
                        btnXoa.setAttribute('onclick', 'xoa(this)');
                        document.getElementById("cart").appendChild(row);
                        document.getElementById("cart").style.display="";
                        tinhtong();
                    }
                    function xoa(button){
                        var row = button.parentElement.parentElement;
                        document.getElementById("cart").removeChild(row);
                        tinhtong();
                    }
                    function tinhtong(){
                        var cart = document.getElementById("cart");
                        var row = cart.getElementsByTagName("tr");
                        var tong = 0;
                        for(var i=0; i<row.length; i++){
                            var price = row[i].children[2].innerText;
                            price =parseInt(price);
                            tong += price;
                        }
                        document.getElementById("tong").innerText = tong;
                    }
                    function daott(obj){
                        var row = obj.parentElement.parentElement;
                        var btn = row.getElementsByTagName("button")[0];
                        btn.disabled = !btn.disabled;
                    }