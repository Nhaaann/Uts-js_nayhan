
class Mobil{
    constructor(merkA,rodaA,jamA ,hargaA) {
        this.merk = merkA;
        this.jam = jamA;
        this.roda = rodaA;
        this.harga = hargaA;
    }
    nyalakan() {
        return this.merk + " ini telah dinyalakan selama " + this.jam + " jam dengan harga " + this.harga 
    }
    berangkat(tempat) {
        return "miko berangkat ke " + tempat + " menggunakan " + this.merk 
    }
}
var mobilMiko = new Mobil('ferrari', 2, 4, 2000000);
console.log(mobilMiko.merk);
console.log(mobilMiko.jam);
console.log(mobilMiko.roda);
console.log(mobilMiko.harga);

console.log(mobilMiko.nyalakan());
console.log(mobilMiko.berangkat("sekolah"));


const btn1 = document.querySelector(".btn2");
const body = document.body;
const btn2 = document.getElementById("btn1");

const textBaru = document.createElement("h1");
textBaru.textContent = "Berhasil!";


const textBaru2 = document.createElement("h2");
textBaru2.textContent = "X RPl";

function klik1(){
    body.append(textBaru);
}

function masuk(){
    body.append(textBaru2);
    textBaru2.style.color = "red";
}

function keluar(){
    textBaru2.style.color = "green";
}

const btnremove = document.getElementById("removebtn").addEventListener("click", function(){
    document.body.remove(body)
});



