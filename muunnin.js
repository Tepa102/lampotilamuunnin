const muunnosInput = document.getElementById('muunnosInput');
const muunnaButton = document.getElementById('muunnaButton');
const tulos = document.getElementById('tulos');
const valikko = document.getElementById('valikko'); // Lisää valikko
const desimaalit = document.querySelectorAll('[name="desimaalit"]'); //Haetaan desimaalivalinnat

muunnaButton.addEventListener('click', function () {
    const arvo = parseFloat(muunnosInput.value);
    if (!isNaN(arvo)) {
        const muunnosValinta = valikko.value; // Käytä valikon arvoa
        const valittuDesimaali = getSelectedDesimaali(); // Haetaan valittu desimaali

        if (muunnosValinta === 'celsiusToFahrenheit') {
            const fahrenheit = (arvo * 1.8) + 32;
            tulos.value = `${fahrenheit.toFixed(valittuDesimaali)}`;
        }
        else if (muunnosValinta === 'fahrenheitToCelsius') {
            const celsius = (arvo - 32) * 1.8;
            tulos.value = `${celsius.toFixed(valittuDesimaali)}`;
        }
        else if (muunnosValinta === 'kelvinToFahrenheit') {
            const kelvin = (arvo * 1.8) - 459.67;
            tulos.value = `${kelvin.toFixed(valittuDesimaali)}`;
        }
        else if (muunnosValinta === 'fahrenheitToKelvin') {
            const fahrenheit = (arvo + 459.67)*1.8;
            tulos.value = `${fahrenheit.toFixed(valittuDesimaali)}`;
        }
        else if (muunnosValinta === 'kelvinToCelsius') {
            const celsius = arvo - 273.15;
            tulos.value = `${celsius.toFixed(valittuDesimaali)}`;
        }
        else if (muunnosValinta === 'celsiusToKelvin') {
            const kelvin = arvo + 273.15;
            tulos.value = `${kelvin.toFixed(valittuDesimaali)}`;
        }
        // Tarkistetaan, onko lämpötila pienempi kuin absoluuttinen nollapiste
        if (arvo < -273.15) {
            tulos.value += ' (Alle absoluuttisen nollapisteen)';
        }
    } else {
        tulos.value = 'Virheellinen syöte. Syötä kelvollinen luku.';
    }
});

// Funktio hakee valitun desimaalin
function getSelectedDesimaali() {
    for (const desimaali of desimaalit) {
        if (desimaali.checked) {
            return parseInt(desimaali.value);
        }
    }
    // Jos mitään ei ole valittu, palautetaan oletusarvo (esimerkiksi 2)
    return 2;
}