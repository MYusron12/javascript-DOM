//gajah, semut, orang
//gunting, batu, kertas

function getPilihanKomputer() {
    const komputer = Math.random();
    if (komputer < 0.34) return 'gunting';
    if (komputer >= 0.34 && komputer < 0.67) return 'kertas';
    return 'batu';
}

function getHasil(komputer, pemain) {
    //menentukan rules
    if (pemain == komputer) return 'SERI';
    if (pemain == 'gunting') return (komputer == 'kertas') ? 'MENANG' : 'KALAH';
    if (pemain == 'kertas') return (komputer == 'gunting') ? 'KALAH' : 'MENANG';
    if (pemain == 'batu') return (komputer == 'kertas') ? 'KALAH' : 'MENANG';
}

function putar() {
    const gambarKomputer = document.querySelector('.img-komputer');
    const gambar = ['gunting', 'batu', 'kertas'];
    let g = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval;
            return;
        }
        gambarKomputer.setAttribute('src', 'img/' + gambar[g++] + '.png');
        if (g == gambar.length) g = 0;
    }, 100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPemain = pil.className;
        const hasil = getHasil(pilihanKomputer, pilihanPemain);

        putar();

        setTimeout(function () {
            const gambarKomputer = document.querySelector('.img-komputer');
            gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);

    });
});

// const pGunting = document.querySelector('.gunting');
// pGunting.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPemain = pGunting.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPemain);

//     const gambarKomputer = document.querySelector('.img-komputer');
//     gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPemain = pKertas.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPemain);

//     const gambarKomputer = document.querySelector('.img-komputer');
//     gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPemain = pBatu.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPemain);

//     const gambarKomputer = document.querySelector('.img-komputer');
//     gambarKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });