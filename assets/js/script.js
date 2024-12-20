{
  let hambuger = document.getElementById("hamburger");
  let mainMenu = document.getElementById("main-menu");
  let closeMenu = document.getElementById("close-menu");
  hambuger.addEventListener("click", () => {
    mainMenu.classList.toggle("active");
  });
  closeMenu.addEventListener("click", () => {
    hambuger.classList.toggle("active");
    mainMenu.classList.toggle("active");
  });
  
  let dropdownWrap = document.querySelectorAll(".dropdown-wrap");

  dropdownWrap.forEach((wrap) => {
    wrap.addEventListener("click", () => {
      let menu = wrap.querySelector(".sub-menu");

      dropdownWrap.forEach((otherWrap) => {
        if (otherWrap !== wrap) {
          let otherMenu = otherWrap.querySelector(".sub-menu");
          otherMenu.style.maxHeight = null;
          otherMenu.classList.remove("open");
          otherWrap.classList.remove("open");
        }
      });

      if (!menu.classList.contains("open")) {
        menu.style.maxHeight = menu.scrollHeight + "px";
        menu.classList.add("open");
        wrap.classList.add("open");
      } else {
        menu.style.maxHeight = null;
        menu.classList.remove("open");
        wrap.classList.remove("open");
      }
      body.addEventListener("click", (e) => {
        if (e.target.classList.value === "backdrop") {
          menu.style.maxHeight = null;
          menu.classList.remove("open");
          wrap.classList.remove("open");
        }
      });
    });
  });

}


{
  let swiper = new Swiper(".serviceSlider", {
    slidesPerView: 1,
    spaceBetween: 36,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      
      0: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      
      767.98: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
     
      991.98: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

{
  let swiper = new Swiper(".projectSlider", {
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      
      767.98: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
     
      991.98: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
    },
  });
}
{
  let swiper = new Swiper(".partnerSlider1", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      767.98: {
        slidesPerView: 3,
      },
      991.98: {
        slidesPerView: 4,
      },
    },
  });
}
{
  let swiper = new Swiper(".partnerSlider2", {
    slidesPerView: 2,
    spaceBetween: 24,
    loop: true,    
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      767.98: {
        slidesPerView: 3,
      },
      991.98: {
        slidesPerView: 4,
      },
    },
  });
}

{
  let swiper = new Swiper(".testimonialSlider", {
    slidesPerView: 3,
    spaceBetween: 36,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      
      767.98: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
     
      991.98: {
        slidesPerView:3,
        spaceBetween: 30,
      },
    },
  });
}
{
  let swiper = new Swiper(".newsSlider", {
    slidesPerView: 3,
    loop: true,
    breakpoints: {
      
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      
      767.98: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
     
      991.98: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}
{
  let swiper = new Swiper(".projectDetailsSlider", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

{
  const atBtns = document.querySelectorAll(".at-btn");
    const atContents = document.querySelectorAll(".at-content");

    atBtns.forEach(atBtn => {
      atBtn.addEventListener("click", () => {
        const targetTab = atBtn.getAttribute("target-tab");

        atBtns.forEach(btn => btn.classList.remove("active"));
        atContents.forEach(atContent => atContent.classList.remove("active"));

        atBtn.classList.add("active");
        document.getElementById(targetTab).classList.add("active");
      });
    });
}

{
  const gtBtns = document.querySelectorAll(".gt-btn");
    const gtContents = document.querySelectorAll(".gt-content");

    gtBtns.forEach(gtBtn => {
      gtBtn.addEventListener("click", () => {
        const targetTab2 = gtBtn.getAttribute("target-price");

        gtBtns.forEach(btn => btn.classList.remove("active"));
        gtContents.forEach(gtContent => gtContent.classList.remove("active"));

        gtBtn.classList.add("active");
        document.getElementById(targetTab2).classList.add("active");
      });
    });
}

{
  const languageButton = document.getElementById('languageButton');
  const languageDropdown = document.getElementById('languageDropdown');
  const currentLanguage = document.getElementById('currentLanguage');

  languageButton.addEventListener('click', () => {
    languageDropdown.classList.toggle('active');
  });
  languageDropdown.addEventListener('click', (event) => {
    if (event.target.classList.contains('language-item')) {
      const selectedLang = event.target.getAttribute('data-lang');
      currentLanguage.textContent = selectedLang;
      languageDropdown.classList.remove('active');
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.language-selector')) {
      languageDropdown.classList.remove('active');
    }
  });
}

AOS.init({
  duration: 1500,
});