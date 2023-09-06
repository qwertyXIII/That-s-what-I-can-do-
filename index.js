import { googler, googlerButtonFirst, googlerButtonSecond, googlerFirstCard, googlerSecondCard, notification, result, skills, skillsButton, skillsContent, starter, starterButton } from "./utils/constants.js";

starterButton.addEventListener('click', () => {
  starter.classList.add('starter_anim')
  googler.classList.remove('googler_hidden')
  setTimeout(() => {
    googlerFirstCard.classList.remove('googler__card_hidden')
  }, 500);
});


googlerButtonFirst.addEventListener('click', () => {
  googlerSecondCard.classList.remove('googler__card_hidden')
  googlerButtonFirst.classList.add('googler__button_hidden')
});

googlerButtonSecond.addEventListener('click', () => {
  googler.classList.add('googler_hidden')
  googlerFirstCard.classList.add('googler__card_hidden')
  googlerSecondCard.classList.add('googler__card_hidden')
  setTimeout(() => {
    skills.classList.remove('skills_hidden')
    setTimeout(() => {
      skills.classList.add('skills_opened')
      notification.classList.add('notification_hidden')
      setTimeout(() => {
        skillsContent.classList.remove('skills__content_hidden')
      }, 1000);
    }, 2000);
  }, 1000);
});

skillsButton.addEventListener('click', () => {
  skillsContent.classList.add('skills__content_hidden')
  result.classList.remove('results__hidden')
});