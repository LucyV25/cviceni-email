const jmeno = "Lucie Volemanová";

function goodbye(name) {
    const closingElement = document.querySelector('.email__closing');
    if (closingElement) {
        closingElement.textContent = `Na shledanou, ${name}`;
    }
}

function fillSubject(subject) {
    const subjectElement = document.querySelector('.email__subject');
    if (subjectElement) {
        subjectElement.textContent = subject;
    }
}

function fillBody(body, name) {
    const bodyElement = document.querySelector('.email__body');
    if (bodyElement) {
        bodyElement.textContent = body;
    }
    goodbye(name); 
}
fillSubject('Důležité informace k projektu');
fillBody('Test změny těla emailu', jmeno);


function convertToCZK (amount, currencyCode) {
    const exchangeRates = {
        EUR: 24.47,
        GBP: 28.09,
        USD: 24.81,
        BTC: 478637
    };
    return exchangeRates[currencyCode] ? Math.round(amount * exchangeRates[currencyCode]) : null;
}
document.body.innerHTML += "<p>"+ convertToCZK(25, 'EUR')+"</p>";
document.body.innerHTML += "<p>"+ convertToCZK(25, 'GBP')+"</p>";
document.body.innerHTML += "<p>"+ convertToCZK(25, 'USD')+"</p>";
document.body.innerHTML += "<p>"+ convertToCZK(25, 'BTC')+"</p>";
document.body.innerHTML += "<p>"+ convertToCZK(25, 'ZL')+"</p>";