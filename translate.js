const getUserLanguage = () => {
    let preferedLanguage =navigator.language.toString()
    if (preferedLanguage.includes('es')) {
    return fetch('./public/languages/es.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            translations = data;
            translatePage();
        });
    }
};

getUserLanguage();

const translatePage = () => {
    let link=document.getElementById("downloadLink")
    link.setAttribute("href", "./public/MatiasGarayCV.pdf")
    document.querySelectorAll('[localization]').forEach((element) => {
        let key = element.getAttribute('localization');
        let translation = translations[key];
        element.innerText = translation;
    });

};