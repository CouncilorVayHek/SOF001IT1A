Tässä on suomenkielinen `README.md`-tiedosto projektillesi, perustuen toimintaan ja tiedostoihin, jotka annoit:  

---

# Tietovisapeli

Tämä projekti on yksinkertainen verkkopohjainen tietovisapeli, jossa käyttäjä valitsee kategorian ja vastaa siihen liittyviin kysymyksiin. Projekti hyödyntää HTML:ää, CSS:ää ja JavaScriptiä.

## Projektin rakenne

- **Etusivu (`index.html`)**  
  Käyttäjä valitsee haluamansa visakategorian (Eläimet, Suomi, Historia). Valinta tallennetaan `sessionStorageen`.

- **Visasivu (`quiz.html`)**  
  Kysymykset näytetään yksi kerrallaan. Käyttäjä saa välittömästi palautteen oikeasta/väärästä vastauksesta. Lopuksi näytetään pisteet ja mahdollisuus palata etusivulle.

- **Tyylit (`quizstyle.css` ja `home.css`)**  
  Ulkoasu on yhtenäistetty korteilla ja animaatioilla. Jokaisella sivulla on omaa CSS-tyyliä, mutta myös yhteisiä elementtejä.

- **Skriptit**  
  - `home.js` käsittelee kategorian valinnan ja siirtymisen visaan.
  - `script.js` lataa oikean kategorian kysymykset ja ohjaa visan etenemistä.
  - Kategoriakohtaiset kysymystiedostot (`eläimet.js`, `historia.js`, `suomi.js`) sisältävät taulukot kysymyksistä ja vastauksista.

## Toimintaperiaate

1. **Kategorian valinta**  
   Käyttäjän valinta tallennetaan `sessionStorageen`.

2. **Kategorian lataus**  
   `script.js` lataa dynaamisesti valitun kategorian kysymykset erillisestä JavaScript-tiedostosta.

3. **Pelin kulku**  
   - Kysymys ja vastausvaihtoehdot näytetään.
   - Vastaus valitaan ja tulos merkitään värein.
   - Siirrytään seuraavaan kysymykseen tai lopuksi näytetään pistemäärä.

4. **Pisteytys ja uusi peli**  
   Pelin lopuksi näytetään, montako vastausta meni oikein, ja käyttäjä voi palata takaisin etusivulle.


## Tekniset vaatimukset

- Selain, joka tukee JavaScriptiä ja HTML5-ominaisuuksia.

---