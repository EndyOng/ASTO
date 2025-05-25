
AOS.init();
// <!-- .darkmode and lightmode -->

const triggerTabList = document.querySelectorAll("#myTab button");
triggerTabList.forEach((triggerEl) => {
    const tabTrigger = new bootstrap.Tab(triggerEl);

    triggerEl.addEventListener("click", (event) => {
        event.preventDefault();
        tabTrigger.show();
    });
});

(() => {
    'use strict'

    const storedTheme = localStorage.getItem('theme')

    const getPreferredTheme = () => {
      if (storedTheme) {
        return storedTheme
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    }

    const setTheme = function (theme) {
      if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-bs-theme', 'dark')
      } else {
        document.documentElement.setAttribute('data-bs-theme', theme)
      }
    }

    setTheme(getPreferredTheme())

    const showActiveTheme = theme => {
      const activeThemeIcon = document.querySelector('.theme-icon-active')
      const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
      const iconOfActiveBtn = btnToActive.querySelector('i').dataset.themeIcon

      document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
        element.classList.remove('active')
      })

      btnToActive.classList.add('active')
      activeThemeIcon.classList.remove(activeThemeIcon.dataset.themeIconActive)
      activeThemeIcon.classList.add(iconOfActiveBtn)
      activeThemeIcon.dataset.iconActive = iconOfActiveBtn
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
      if (storedTheme !== 'light' || storedTheme !== 'dark') {
        setTheme(getPreferredTheme())
      }
    })

    window.addEventListener('DOMContentLoaded', () => {
      showActiveTheme(getPreferredTheme())

      document.querySelectorAll('[data-bs-theme-value]')
        .forEach(toggle => {
          toggle.addEventListener('click', () => {
            const theme = toggle.getAttribute('data-bs-theme-value')
            localStorage.setItem('theme', theme)
            setTheme(theme)
            showActiveTheme(theme, true)
          })
        })
    })
  })()

  $(".counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-countto");
    countDuration = parseInt($this.attr("data-duration"));
    $({ counter: $this.text() }).animate(
      {
        counter: countTo
      },
      {
        duration: countDuration,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.counter));
        },
        complete: function () {
          $this.text(this.counter);
        }
      }
    );
  });
  const myModal = document.getElementById('myModal')
  const myInput = document.getElementById('myInput')

  myModal.addEventListener('shown.bs.modal', () => {
    myInput.focus()
  })

  // change Image
  function changeImage(src) {
    document.getElementById('mainImage').src = src;
  }

  