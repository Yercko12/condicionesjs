function Verificar() {
    const sticker1 = parseInt(document.getElementById('sticker1').value) || 0;
    const sticker2 = parseInt(document.getElementById('sticker2').value) || 0;
    const sticker3 = parseInt(document.getElementById('sticker3').value) || 0;
    
    const total = sticker1 + sticker2 + sticker3;
    const texto = document.getElementById('texto');

    if (total <= 10) {
        texto.innerHTML = `Llevas ${total} stickers`;
    } else {
        texto.innerText = "Llevas demasiados stickers";
    }
}