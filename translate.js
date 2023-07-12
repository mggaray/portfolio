const translatePage = (preferedLanguage) => {
    return fetch(`./public/languages/${preferedLanguage}.json`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            let translations = data;
            downloadLink.setAttribute("href",`./public/MatiasGaray-${preferedLanguage}.pdf`)
            document.querySelectorAll('[localization]').forEach((element) => {
            let key = element.getAttribute('localization');
            let translation = translations[key];
            element.innerText = translation;
        });
    });
};

const downloadLink=document.getElementById("downloadLink")
const getUserLanguage = () => {
    let preferedLanguage =navigator.language.toString()
    preferedLanguage.includes('es')? preferedLanguage='es': preferedLanguage='en'
    translatePage(preferedLanguage)
    }

getUserLanguage();
const esButton=document.getElementById("es")
const enButton=document.getElementById("en")
esButton.addEventListener("click", ()=> translatePage("es"))
enButton.addEventListener("click", ()=> translatePage("en"))