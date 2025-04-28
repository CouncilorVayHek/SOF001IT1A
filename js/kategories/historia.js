const questions = [
    {
        question: "Kuka oli Rooman valtakunnan ensimmäinen keisari?",
        answers: [
            { text: "Julius Caesar", correct: false },
            { text: "Nero", correct: false },
            { text: "Augustus", correct: true },
            { text: "Tiberius", correct: false },
        ]
    },
    {
        question: "Kuka allekirjoitti Yhdysvaltain itsenäisyysjulistuksen ensimmäisenä?",
        answers: [
            { text: "George Washington", correct: false },
            { text: "John Hancock", correct: true },
            { text: "Thomas Jefferson", correct: false },
            { text: "John Adams", correct: false },
        ]
    },
    {
        question: "Mikä oli Silkkitie?",
        answers: [
            { text: "Kauppareittien verkosto, joka yhdisti idän ja lännen.", correct: true },
            { text: "Muinainen merireitti Aasiaan.", correct: false },
            { text: "Kiinan keisarien rakentama puolustusmuuri.", correct: false },
            { text: "Roomalaisten rakentama tieverkosto Euroopassa.", correct: false },
        ]
    },
    {
        question: "Minä vuonna Kolumbus saapui Amerikkaan?",
        answers: [
            { text: "1488", correct: false },
            { text: "1501", correct: false },
            { text: "1519", correct: false },
            { text: "1492", correct: true },
        ]
    },
    {
        question: "Mikä oli Berliinin muuri ja milloin se murtui?",
        answers: [
            { text: "Muuri, joka erotti Itä- ja Länsi-Saksan toisen maailmansodan aikana, murtui 1949.", correct: false },
            { text: "Kylmän sodan aikainen raja-aita Berliinissä, murtui 1989.", correct: true },
            { text: "Muinainen puolustusmuuri Berliinin ympärillä, murtui 1871.", correct: false },
            { text: "Ensimmäisen maailmansodan aikainen rintamalinja, murtui 1918.", correct: false },
        ]
    },
    {
        question: "Minä vuonna alkoi toinen maailmansota?",
        answers: [
            { text: "1937", correct: false },
            { text: "1935", correct: false },
            { text: "1939", correct: true },
            { text: "1941", correct: false },
        ]
    },
    {
        question: "Kuka oli ensimmäinen Yhdysvaltain presidentti?",
        answers: [
            { text: "Thomas Jefferson", correct: false },
            { text: "George Washington", correct: true },
            { text: "Benjamin Franklin", correct: false },
            { text: "Abraham Lincoln", correct: false },
        ]
    },
    {
        question: "Mikä oli renessanssin keskeinen aate?",
        answers: [
            { text: "Humanismi", correct: true },
            { text: "Teokratia", correct: false },
            { text: "Asketismi", correct: false },
            { text: "Feodalismi", correct: false },
        ]
    },
    {
        question: "Kuka oli kuuluisa brittiläinen tiedemies, joka muotoili painovoimalain?",
        answers: [
            { text: "Albert Einstein", correct: false },
            { text: "Galileo Galilei", correct: false },
            { text: "Stephen Hawking", correct: false },
            { text: "Isaac Newton", correct: true },
        ]
    },
    {
        question: "Kuka oli antiikin Kreikan filosofi, joka opetti Aleksanteri Suurta?",
        answers: [
            { text: "Sokrates", correct: false },
            { text: "Platon", correct: false },
            { text: "Aristoteles", correct: true },
            { text: "Pythagoras", correct: false },
        ]
    },
    {
        question: "Mikä oli ensimmäinen ihmisen lähettämä satelliitti Maan kiertoradalle?",
        answers: [
            { text: "Explorer 1", correct: false },
            { text: "Apollo 11", correct: false },
            { text: "Sputnik 1", correct: true },
            { text: "Voyager 1", correct: false },
        ]
    },
    {
        question: "Kuka oli kuuluisa italialainen taiteilija ja keksijä renessanssin aikana?",
        answers: [
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false },
            { text: "Raffaello", correct: false },
            { text: "Donatello", correct: false },
        ]
    },
    {
        question: "Mikä oli Neuvostoliiton johtama sotilasliitto kylmän sodan aikana?",
        answers: [
            { text: "Nato", correct: false },
            { text: "SEATO", correct: false },
            { text: "Baltian liitto", correct: false },
            { text: "Varsovan liitto", correct: true },
        ]
    },
    {
        question: "Kuka oli kuuluisa saksalainen fyysikko, joka kehitti suhteellisuusteorian?",
        answers: [
            { text: "Werner Heisenberg", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Max Planck", correct: false },
            { text: "Erwin Schrödinger", correct: false },
        ]
    },
    {
        question: "Mikä maa isännöi ensimmäisiä moderneja olympialaisia?",
        answers: [
            { text: "Italia", correct: false },
            { text: "Kreikka", correct: true },
            { text: "Ranska", correct: false },
            { text: "Yhdysvallat", correct: false },
        ]
    },
    {
        question: "Ketkä olivat ”kylmän sodan” kaksi suurta vastustajaa?",
        answers: [
            { text: "Yhdysvallat ja Neuvostoliitto", correct: true },
            { text: "Saksa ja Ranska", correct: false },
            { text: "Iso-Britannia ja Japani", correct: false },
            { text: "Kiina ja Intia", correct: false },
        ]
    },
    {
        question: "Mitä tapahtui Titanicilla vuonna 1912?",
        answers: [
            { text: "Se syttyi tuleen Atlantilla", correct: false },
            { text: "Se saapui onnistuneesti New Yorkiin ennätysajassa", correct: false },
            { text: "Se joutui merirosvojen hyökkäyksen kohteeksi", correct: false },
            { text: "Se upposi törmättyään jäävuoreen", correct: true },
        ]
    },
    {
        question: "Mikä oli Suuri lama?",
        answers: [
            { text: "Pitkäaikainen nälänhätä Irlannissa.", correct: false },
            { text: "Vakava maailmanlaajuinen talouskriisi 1930-luvulla.", correct: true },
            { text: "Suuri tulipalo Lontoossa 1600-luvulla.", correct: false },
            { text: "Ranskan vallankumouksen jälkeinen epävakaa aika.", correct: false },
        ]
    },
    {
        question: "Kuka oli Leonardo da Vinci?",
        answers: [
            { text: "Kuuluisa italialainen kuvanveistäjä.", correct: false },
            { text: "Espanjalainen löytöretkeilijä.", correct: false },
            { text: "Italialainen taidemaalari", correct: true },
            { text: "Englantilainen kirjailija.", correct: false },
        ]
    },
    {
        question: "Kuka oli Marco Polo?",
        answers: [
            { text: "Venetsialainen tutkimusmatkailija", correct: true },
            { text: "Kreikkalainen filosofi.", correct: false },
            { text: "Roomalainen keisari.", correct: false },
            { text: " Portugalilainen merenkulkija.", correct: false },
        ]
    }
    {
        question: "Mikä oli Euroopan unionin perustamisen tarkoitus?",
        answers: [
            { text: "Palauttaa Euroopan siirtomaavalta.", correct: false },
            { text: "Aloittaa uusi maailmansota.", correct: false },
            { text: "Luoda yhtenäinen eurooppalainen armeija puolustamaan valtioita.", correct: false },
            { text: "Edistää taloudellista yhteistyötä Euroopan valtioiden välillä.", correct: true },
        ]
    },
    {
        question: "Mitä tapahtui suuressa palossa Lontoossa 1666?",
        answers: [
            { text: "Lontoo tuhoutui maanjäristyksessä.", correct: false },
            { text: "Viikingit hyökkäsivät Lontooseen.", correct: false },
            { text: "Suuri osa Lontoon keskustaa tuhoutui tulipalossa.", correct: true },
            { text: "Musta surma saapui Lontooseen.", correct: false },
        ]
    },
    {
        question: "Milloin holokausti, yksi historian kauheimmista tapahtumista, tapahtui?",
        answers: [
            { text: "Ensimmäisen maailmansodan aikana", correct: false },
            { text: "Toisen maailmansodan aikana", correct: true },
            { text: "Kylmän sodan aikana", correct: false },
            { text: "Napoleonin sotien aikana", correct: false },
        ]
    },
    {
        question: "Mikä oli Naton etunimi ennen sen nykyistä nimeä?",
        answers: [
            { text: "Pohjois-Atlantin sopimus", correct: true },
            { text: "Atlantin liitto", correct: false },
            { text: "Euroopan puolustusliitto", correct: false },
            { text: "Länsiliitto", correct: false },
        ]
    },
    {
        question: "Mitä dynastiaa pidettiin Kiinan historian kulta-ajana?",
        answers: [
            { text: "Han-dynastia", correct: false },
            { text: "Ming-dynastia", correct: false },
            { text: "Qing-dynastia", correct: false },
            { text: "Tang-dynastia", correct: true },
        ]
    },
    {
        question: "Kuka piti kuuluisan "Minulla on unelma" -puheen?",
        answers: [
            { text: "Abraham Lincoln", correct: false },
            { text: "Martin Luther King Jr.", correct: true },
            { text: "Nelson Mandela", correct: false },
            { text: "Barack Obama", correct: false },
        ]
    },
    {
        question: "Milloin Brexit tapahtui?",
        answers: [
            { text: "Kesäkuu 2016", correct: false },
            { text: "Maaliskuu 2019", correct: false },
            { text: "Tammikuu 2020", correct: true },
            { text: "Joulukuu 2020", correct: false },
        ]
    },
    {
        question: "Mistä Vapaudenpatsas on peräisin?",
        answers: [
            { text: "Ranska", correct: true },
            { text: "Iso-Britannia", correct: false },
            { text: "Yhdysvallat", correct: false },
            { text: "Italia", correct: false },
        ]
    },
    {
        question: "Minä vuonna Facebook perustettiin?",
        answers: [
            { text: "1998", correct: false },
            { text: "2001", correct: false },
            { text: "2007", correct: false },
            { text: "2004", correct: true },
        ]
    },
];
