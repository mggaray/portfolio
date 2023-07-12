const translatePage = (preferedLanguage) => {
    return fetch(`./public/languages/${preferedLanguage}.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let translations = data;
            document.querySelectorAll('[localization]').forEach((element) => {
            let key = element.getAttribute('localization');
            let translation = translations[key];
            element.innerText = translation;
        });
    });
};

const getUserLanguage = () => {
    let preferedLanguage =navigator.language.toString()
    preferedLanguage.includes('es')? preferedLanguage='es': preferedLanguage='en'
    translatePage(preferedLanguage)
    }

getUserLanguage();
