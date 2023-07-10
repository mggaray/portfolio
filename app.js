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


//show dropdown for languages
const dropdown = (list, style)=>{
  list.classList.toggle(style)
}

let list= document.querySelector(".languages")
let langbtn =document.querySelector(".lang-button")
langbtn.addEventListener("click", ()=>dropdown(list,'show-lang'))


//show dropdown for links
let linkList= document.querySelector(".horizontal")
let linkbtn =document.querySelector(".nav-bar-hidden")
linkbtn.addEventListener("click", ()=>dropdown(linkList, 'show-navbar'))

const isOverflown = ({ clientWidth, clientHeight, scrollWidth, scrollHeight }) => {
    return scrollHeight > clientHeight || scrollWidth > clientWidth;
}