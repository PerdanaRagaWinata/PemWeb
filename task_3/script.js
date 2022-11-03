const judul = document.getElementById('judul');
judul.innerHTML = "Jangan Tekan Tombol ini!";

function klik (){
    const elementH2 = document.createElement('h2');
    const isiTeksH2 = document.createTextNode('DUARR!!!');

    elementH2.append(isiTeksH2);

    const cetak = document.getElementById('bapak');
    cetak.append(elementH2);
}