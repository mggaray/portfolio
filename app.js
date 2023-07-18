// hide unseen objects
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//blur other projects
let projects = document.querySelectorAll(".projects__item__image");

const blurProjects = (project) => {
  let i = project.id;
  projects.forEach((p) => {
    if (i !== p.id) p.classList.toggle("blurred");
  });
};

const unblur = () => {
  projects.forEach((p) => p.classList.remove("blurred"));
};

projects.forEach((project, i) => {
  project.setAttribute("id", i);
  project.addEventListener("mouseover", () => blurProjects(project));
  project.addEventListener("mouseout", () => unblur());
});

//function for dropdown
const dropdown = (list, style)=>{
  list.classList.toggle(style)
}

//show dropdown for languages
const languages=document.querySelectorAll(".language")
const languageList= document.querySelector(".languages")
languages.forEach((el)=>{el.addEventListener("click", ()=>dropdown(languageList, 'show-lang'))})
const langbtn =document.querySelector(".lang-button")
langbtn.addEventListener("click", ()=>dropdown(languageList,'show-lang'))
languageList.addEventListener("mouseout", ()=>dropdown(languageList,'show-lang'))

//show dropdown for links
const links=document.querySelectorAll(".link")
const linkList= document.querySelector(".horizontal")
links.forEach((el)=>{el.addEventListener("click", ()=>dropdown(linkList, 'show-navbar'))})
const linkbtn =document.querySelector(".nav-bar-hidden")
linkbtn.addEventListener("click", ()=>dropdown(linkList, 'show-navbar'))
linkList.addEventListener("mouseout", ()=>dropdown(linkList,'show-navbar'))