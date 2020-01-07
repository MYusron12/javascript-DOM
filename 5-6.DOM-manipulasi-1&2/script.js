// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Muhammad Yusron</em>';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World!';

// const judul = document.querySelector('#judul');
// judul.style.backgroundColor = 'salmon';

// const judul = document.getElementsByTagName('h1')[0];
// // judul.setAttribute('name', 'yusron');
// const a = document.querySelector('section#a a');


//const p2 = document.querySelector('.p2');



// -Manipulasi Node
//buat element bru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
//simpan tulisan kedalam paragraf
pBaru.appendChild(teksPBaru);

// simpan pbaru di akhsir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



//sipapin pot nya
const liBaru = document.createElement('li');
//siapin bunganya
const teksLiBaru = document.createTextNode('Item Li Baru');
//masukan bunganya ke dalam pot
liBaru.appendChild(teksLiBaru);
//siapin temaptnya
const ul = document.querySelector('section#b ul');
//siapin posis tempat buat naruh nya
const li2 = ul.querySelector('li:nth-child(2)');
//taruh bunganya
ul.insertBefore(liBaru, li2);



//const sectionA sudah ada di atas
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');
h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);


pBaru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightblue';