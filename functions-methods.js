// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
const getEmailDomain = emailAdress => {
    for (let i = 0; i < emailAdress.length; i++) {
        if(emailAdress.charAt(i) === "@") {
            return emailAdress.substring(i);
        }
    }
}
const outcome1 = getEmailDomain("robbert.ijpelaar@novi-education.nl");

console.log(outcome1);


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

const typeOfEmail = emailAdress => {

const email = emailAdress.substring(emailAdress.indexOf("@"));

    switch (email) {
        case "@novi-education.nl":
            return "Student";
            break;
        case "@novi.nl":
            return "Medewerker";
            break;
        default:
            return "Extern";
    }
}

const outcome2a = typeOfEmail("robbert.ijpelaar@novi-education.nl");
const outcome2b = typeOfEmail("robbert.ijpelaar@novi.nl");
const outcome2c = typeOfEmail("robbertijpelaar93@gmail.com");
console.log(outcome2a);
console.log(outcome2b);
console.log(outcome2c);


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

const checkEmailValidity = emailAdres => {
    const lastIndex = emailAdres.length - 1;

    return !!(emailAdres.includes("@") && !emailAdres.includes(",") && !(emailAdres.charAt(lastIndex) === "."));
}

console.log(checkEmailValidity("robbertijpelaar93@gmail.com"));
console.log(checkEmailValidity("robbertijpelaar93gmail.com")); // mist de @
console.log(checkEmailValidity("robbertijpelaar93@gmail.com.")); // punt op het einde

