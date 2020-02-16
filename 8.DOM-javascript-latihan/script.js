//tangkap tombolnya dan tangkap elemet g akan kita tuju (body)
const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function () {
    // document.body.style.backgroundColor = 'lightblue';
    // document.body.setAttribute('class','biru-muda');
    document.body.classList.toggle('biru-muda');
}

//bikin tombolnya
const tAcakWarna = document.createElement('button');
//bikin tulisannya
const teksTombol = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(teksTombol);
tAcakWarna.setAttribute('type', 'button');
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');

sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', 100)';
});
sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', 100)';
});


