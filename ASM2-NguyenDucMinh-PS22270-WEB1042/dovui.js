function random(){
    var a = Math.round(Math.random()*10);
    document.getElementById("a").value = a;
    var b = Math.round(Math.random()*10);
    document.getElementById("b").value = b;
    var c = Math.round(Math.random()*10);
    document.getElementById("c").value = c;

}
function lockbutton(check){
    document.getElementById("giaipt").disabled = check;
}

var solangiai=0;
function dem(){
    solangiai++;
    document.getElementById("solangiai").innerHTML = solangiai;
}

function time(){
    var thoigian = new Date();
    var ngay = thoigian.getDate();
    var thang = thoigian.getMonth()+1;
    var nam = thoigian.getFullYear();
    var gio = thoigian.getHours();
    var phut = thoigian.getMinutes();
    var giay = thoigian.getSeconds();
    var str = `Bây Giờ Là ${ngay}/${thang}/${nam} ${gio}:${phut}:${giay}`;
    document.getElementById("time").innerHTML = str;
}
setInterval("time()",1000);

function giai(){
    var a  = document.getElementById("a").value;
    var b  = document.getElementById("b").value;
    var c  = document.getElementById("c").value;

    if(a==0){
        if(b==0){
            if(c==0){
                document.getElementById("ketqua").innerHTML = `PT Vô Số Nghiệm`;
            }else{
                document.getElementById("ketqua").innerHTML = `PT Vô Nghiệm`;
            }
        }else{
            var x = -c/b;
            document.getElementById("ketqua").innerHTML = ` PTB1<br> x = ${x.toFixed(2)} `;
        }
    }else{
        var delta = Math.pow(b,2) - 4*a*c;
        if(delta < 0){
            document.getElementById("ketqua").innerHTML = `PT Vô Nghiệm`;
        }else if(delta == 0){
            document.getElementById("ketqua").innerHTML = `PT Có Nghiệm kép<br> x1=x2=${x.toFixed(2)}`;
        }else{
            var x1 = (-b - Math.sqrt(delta))/(2*a);
            var x2 = (-b + Math.sqrt(delta))/(2*a);
            document.getElementById("ketqua").innerHTML = `PT Có 2 Nghiệm<br> x1=${x1.toFixed(2)}<br> x2=${x2.toFixed(2)}`;
        }
    }
}