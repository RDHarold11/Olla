const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question__btn");

  btn.addEventListener("click", () => {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});

//active links when you click on them

const a_link = document.querySelectorAll(".nav__links li a");

a_link.forEach((item) => {
  item.addEventListener("click", () => {
    a_link.forEach((a) => {
      a.classList.remove("active-link");
    });
    item.classList.add("active-link");
  });
});

//fixed nav
const navbar = document.querySelector(".navbar");
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  const scrollH = window.pageYOffset;
  const nav = navbar.getBoundingClientRect().height;

  if (scrollH > nav) {
    navbar.classList.add("nav-fixed");
  } else {
    navbar.classList.remove("nav-fixed");
  }

  if (scrollH > 100) {
    topLink.classList.add("show-topLink");
  } else {
    topLink.classList.remove("show-topLink");
  }
});

const btns = document.querySelectorAll(".btn-card");
const price = document.querySelector(".price");
btns.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.dataset.id;
    if (id === "year") {
      price.innerHTML = "$20<span>/month</span>";
    } else {
      price.innerHTML = "$05<span>/month</span>";
    }
    btns.forEach(function (btns) {
      btns.classList.remove("active-btn");
    });

    button.classList.add("active-btn");
  });
});

/* Reviews */

const reviews = [
  {
    id: 1,
    name: "Steve Frank",
    description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
    placeat atque illum assumenda itaque quod fugiat culpa dolorem
    consequuntur minus.`,
    job: "CEO at Microsoft",
  },
  {
    id: 2,
    name: "Bob Frapples",
    description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
    placeat atque illum assumenda itaque quod fugiat culp.`,
    job: "CEO at Colorlin",
  },
  {
    id: 3,
    name: "Maria Frapples",
    description: ` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
    placeat atque il`,
    job: "CEO at Amazon",
  },
];
const description = document.getElementById("description");
const names = document.getElementById("name");
const job = document.getElementById("job");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const slideBtn = document.querySelectorAll(".slide-btn");
let currentItem = 0;

const showReviews = () => {
  let data = reviews[currentItem];
  description.textContent = data.description;
  names.textContent = data.name;
  job.textContent = data.job;
};

prevBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showReviews();
});

nextBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showReviews();
});

window.addEventListener("DOMContentLoaded", showReviews());

const toggle = document.querySelector(".btn__toggle");
const menu = document.querySelector(".nav__links");
toggle.addEventListener("click", () => {
  menu.classList.toggle("show-links");
});
