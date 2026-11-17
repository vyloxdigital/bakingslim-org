/* BakingSlim — bakingslim-org.vercel.app */
(function () {
  "use strict";

  /* Mobile navigation */
  var btn = document.querySelector(".nav-btn");
  var list = document.getElementById("nav-list");
  if (btn && list) {
    btn.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("open")) {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    });
  }

  /* Order dock: lifts once the hero buttons leave the viewport,
     drops again across the pricing cards so it never masks them. */
  var dock = document.querySelector(".dock");
  if (dock && "IntersectionObserver" in window) {
    var past = false;
    var onPacks = false;
    function sync() {
      dock.classList.toggle("up", past && !onPacks);
    }
    var heroCtas = document.getElementById("hero-ctas");
    if (heroCtas) {
      new IntersectionObserver(
        function (entries) {
          past =
            !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
          sync();
        },
        { threshold: 0 }
      ).observe(heroCtas);
    }
    var packs = document.getElementById("packs");
    if (packs) {
      new IntersectionObserver(
        function (entries) {
          onPacks = entries[0].isIntersecting;
          sync();
        },
        { threshold: 0 }
      ).observe(packs);
    }
  }
})();
