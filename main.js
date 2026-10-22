const API_URL = 'https://retoolapi.dev/OzLu24/data';

async function init() {
    const response = await (fetch(API_URL));

    const adatok = await response.json();
    const table = document.getElementById('tablazat')
    for (const autok of adatok) {
        const tr = document.createElement('tr')
        const modell = document.createElement('td');
        const szin = document.createElement('td');
        const evjarat = document.createElement('td');

        modell.textContent = autok.modell;
        szin.textContent = autok.szin;
        evjarat.textContent = autok.evjarat;

        tr.appendChild(modell)
        tr.appendChild(szin)
        tr.appendChild(evjarat)
        table.appendChild(tr)

        if(autok.szin == "fekete")
        {
            tr.style.backgroundColor = "#000000";
            modell.style.color = "#ffffff"
            szin.style.color = "#ffffff"
            evjarat.style.color = "#ffffff"
        }
        else if(autok.szin == "zöld")
        {
            tr.style.backgroundColor = "#69d169";
        }
        else
        {
            tr.style.backgroundColor = "#add8e6";
        }
    }
}
init();
