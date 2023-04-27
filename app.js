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
