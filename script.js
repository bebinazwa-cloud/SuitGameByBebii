let tombolBatu = document.querySelector(".batu-gunting-kertas");
let tombolGajah = document.querySelector(".gajah-orang-semut");
let tombolJari = document.querySelector(".suit-jari");
let gameWindow = document.querySelector(".game-window");


tombolBatu.addEventListener("click", function(){
    gameWindow.style.display = "block";
    gameWindow.innerHTML = "<h2>Batu Gunting Kertas</h2>";
    let pilihanUser = prompt("Masukkan pilihan kamu (batu/gunting/kertas)");

    if (
        pilihanUser != "batu" &&
        pilihanUser != "gunting" &&
        pilihanUser != "kertas"
    ) {
        gameWindow.innerHTML += `<p>Pilihan tidak tersedia</p>`;
    }
    else {
        let pilihanKomputer;
        let angkaAcak = Math.random();
        if (angkaAcak <= 0.33) {
            pilihanKomputer = "batu";
        }
        else if (angkaAcak <= 0.66) {
            pilihanKomputer = "gunting";
        }
        else {
            pilihanKomputer = "kertas";
        }

        gameWindow.innerHTML += `<p>Kamu memilih: ${pilihanUser}</p>`;
        gameWindow.innerHTML += `<p>Komputer memilih: ${pilihanKomputer}</p>`;

        if (pilihanUser == pilihanKomputer) {
            gameWindow.innerHTML += `<p>Hasil: Seri</p>`;
        }
        else if (
            (pilihanUser == "batu" && pilihanKomputer == "gunting") ||
            (pilihanUser == "gunting" && pilihanKomputer == "kertas") ||
            (pilihanUser == "kertas" && pilihanKomputer == "batu")
        ) {
            gameWindow.innerHTML += `<p>Hasil: Kamu Menang 🎉</p>`;
        }
        else {
            gameWindow.innerHTML += `<p>Hasil: Kamu Kalah 😭</p>`;
        }
    }
});


tombolGajah.addEventListener("click", function(){
    gameWindow.style.display = "block";
    gameWindow.innerHTML = "<h2>Gajah Orang Semut</h2>";
    let pilihanUser = prompt("Masukkan pilihan kamu (gajah/orang/semut)");
    if (
        pilihanUser != "gajah" &&
        pilihanUser != "orang" &&
        pilihanUser != "semut"
    ) {
        gameWindow.innerHTML += `<p>Pilihan tidak tersedia</p>`;
    }
    else {
        let pilihanKomputer;
        let angkaAcak = Math.random();
        if (angkaAcak <= 0.33) {
            pilihanKomputer = "gajah";
        }
        else if (angkaAcak <= 0.66) {
            pilihanKomputer = "orang";
        }
        else {
            pilihanKomputer = "semut";
        }

        gameWindow.innerHTML += `<p>Kamu memilih: ${pilihanUser}</p>`;
        gameWindow.innerHTML += `<p>Komputer memilih: ${pilihanKomputer}</p>`;

        if (pilihanUser == pilihanKomputer) {
            gameWindow.innerHTML += `<p>Hasil: Seri</p>`;
        }

        else if (
            (pilihanUser == "gajah" && pilihanKomputer == "orang") ||
            (pilihanUser == "orang" && pilihanKomputer == "semut") ||
            (pilihanUser == "semut" && pilihanKomputer == "gajah")
        ) {
            gameWindow.innerHTML += `<p>Hasil: Kamu Menang 🎉</p>`;
        }
        else {
            gameWindow.innerHTML += `<p>Hasil: Kamu Kalah 😭</p>`;
        }
    }
});


tombolJari.addEventListener("click", function(){
    gameWindow.style.display = "block";
    gameWindow.innerHTML = "<h2>Suit Jari</h2>";
    let pilihanUser = prompt("Masukkan pilihan kamu (jempol/telunjuk/kelingking)");

    if (
        pilihanUser != "jempol" &&
        pilihanUser != "telunjuk" &&
        pilihanUser != "kelingking"
    ) {
        gameWindow.innerHTML += `<p>Pilihan tidak tersedia</p>`;
    }
    else {
        let pilihanKomputer;
        let angkaAcak = Math.random();
        if (angkaAcak <= 0.33) {
            pilihanKomputer = "jempol";
        }
        else if (angkaAcak <= 0.66) {
            pilihanKomputer = "telunjuk";
        }
        else {
            pilihanKomputer = "kelingking";
        }

        gameWindow.innerHTML += `<p>Kamu memilih: ${pilihanUser}</p>`;
        gameWindow.innerHTML += `<p>Komputer memilih: ${pilihanKomputer}</p>`;

        if (pilihanUser == pilihanKomputer) {
            gameWindow.innerHTML += `<p>Hasil: Seri</p>`;
        }
        else if (
            (pilihanUser == "jempol" && pilihanKomputer == "telunjuk") ||
            (pilihanUser == "telunjuk" && pilihanKomputer == "kelingking") ||
            (pilihanUser == "kelingking" && pilihanKomputer == "jempol")
        ) {
            gameWindow.innerHTML += `<p>Hasil: Kamu Menang 🎉</p>`;
        }
        else {
            gameWindow.innerHTML += `<p>Hasil: Kamu Kalah 😭</p>`;
        }
    }
});