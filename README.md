# SOF001IT1A - Quiz app
Tiimityö tehdään soveltaen kurssin oppeja (HTML ja JavaScript) sekä tietysti CSS-taitoja toiselta kurssilta.
## Toimintaperiaate

1. **Kategorian valinta**  
   `sessionStorage` tallettaa käyttäjän valitseman kategorian, esim. `"historia"`.

2. **Skriptin lataus**  
   `script.js` muodostaa polun esim. `./js/kategories/historia.js` ja lisää `<script>`-elementin DOMiin.

3. **Kysymysten alustus**  
   Kun kategoria-tiedosto on ladattu, se tuo globaalin `questions`-taulukon, jonka perusteella `startQuiz()` piirtää visan.

4. **Pelin kulku**  
   - Näytä kysymys → käsittele vastaus → päivitä pisteet  
   - Kun kysymykset loppuvat, näytä tulos ja painike paluuseen etusivulle.