function analogSaatGuncelle() {
    var saat = new Date();
    var saatEl = document.querySelector(".saat-ekseni");
    var dakikaEl = document.querySelector(".dakika-ekseni");
    var saniyeEl = document.querySelector(".saniye-ekseni");
    var saatDerece = (saat.getHours() + saat.getMinutes() / 60) * 30;
    var dakikaDerece = saat.getMinutes() * 6;
    var saniyeDerece = saat.getSeconds() * 6;

    saatEl.style.transform = "rotate(" + saatDerece + "deg)";
    dakikaEl.style.transform = "rotate(" + dakikaDerece + "deg)";
    saniyeEl.style.transform = "rotate(" + saniyeDerece + "deg)";
  }

  analogSaatGuncelle();
  setInterval(analogSaatGuncelle, 1000);