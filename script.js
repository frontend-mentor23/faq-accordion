const faqItems = document.querySelectorAll(".faq-item");

const playAnimationTimout = (timeout = 200, element, classes) => {
  setTimeout(() => {
    element.classList.remove(...classes);
  }, timeout);
}

const handleShowAnswer = (e) => {
  const answerEl = e.currentTarget.querySelector(".faq-answer");
  const plusEl = e.currentTarget.querySelector(".plus-icon");

  if (answerEl.classList.contains("show")) {
    answerEl.classList.add("hide-anim");
    plusEl.src = "./assets/images/icon-plus.svg"
    playAnimationTimout(200, answerEl, ["show", "hide-anim"])
  } else {
    answerEl.classList.add("show", "show-anim");
    plusEl.src = "./assets/images/icon-minus.svg"
    playAnimationTimout(200, answerEl, ["show-anim"])
  }
}

faqItems.forEach(item => {
  item.addEventListener("click", handleShowAnswer);
})