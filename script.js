  const navBg = document.getElementById("nav-bg");
  const navbar = document.getElementById("navbar");

  const items = document.querySelectorAll(".nav-item");
  const activeBg = document.getElementById("active-bg");

  /* NAVBAR SCROLL */
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.remove("max-w-5xl");
      navbar.classList.add("max-w-7xl");

      navBg.classList.remove("md:w-[60%]");
      navBg.classList.add("w-full");

      navBg.classList.add(
        "shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
        "bg-white/15"
      );
    } else {
      navbar.classList.remove("max-w-7xl");
      navbar.classList.add("max-w-5xl");

      navBg.classList.remove(
        "w-full",
        "shadow-[0_8px_30px_rgba(0,0,0,0.25)]",
        "bg-white/15"
      );

      navBg.classList.add("md:w-[60%]");
    }
  });

  /* ACTIVE MENU */
  function moveBg(el) {
    const rect = el.getBoundingClientRect();
    const parent = el.parentElement.getBoundingClientRect();

    const x = rect.left - parent.left;

    activeBg.style.width = rect.width + "px";

    activeBg.style.transform = `translateX(${x}px) scale(1.08)`;

    setTimeout(() => {
      activeBg.style.transform = `translateX(${x}px) scale(1)`;
    }, 220);
  }

  window.addEventListener("load", () => {
    moveBg(items[0]);
  });

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      moveBg(item);
    });
  });

  document
    .getElementById("menu")
    .addEventListener("mouseleave", () => {
      moveBg(items[0]);
    });

  /* AOS */
  AOS.init({
    duration: 1200,
    once: true,
    offset: 100,
    easing: "ease-in-out",
  });

  /* TYPED JS animasi tulisan */
  document.addEventListener("DOMContentLoaded", function () {
    new Typed("#element", {
      strings: ["Developer."],
      loop: true,
      typeSpeed: 100,
      backSpeed: 200,
      backDelay: 1000,
    });

    new Typed("#gerakan", {
      strings: ["HI! I'M ZHAFIRA"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 200,
      backDelay: 1000,
      showCursor: false,
    });
  });

  /* PROGRESS BAR */
  const bars = document.querySelectorAll(".progress-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const value = parseInt(
            bar.getAttribute("data-progress")
          );

          let start = 0;

          const animate = () => {
            start += 2;

            if (start <= value) {
              bar.style.width = start + "%";
              requestAnimationFrame(animate);
            }
          };

          animate();
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.4 }
  );

  bars.forEach((bar) => observer.observe(bar));
  /* COUNTER */
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      const speed = 200;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);

        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCount();
  });

  /* TAB */
  function showTab(tabId, event) {
    const tabs = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab-btn");

    tabs.forEach((tab) => tab.classList.add("hidden"));

    buttons.forEach((btn) =>
      btn.classList.remove("active-btn")
    );

    document
      .getElementById(tabId)
      .classList.remove("hidden");

    event.target.classList.add("active-btn");

    const title = document.getElementById("tab-title");

    if (tabId === "projects") {
      title.innerHTML = `
        <h5 class="text-2 text-2xl text-purple-300 uppercase mb-2">
          My Portfolio
        </h5>

        <h2 class="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          PORTFOLIO
        </h2>
      `;
    } else {
      title.innerHTML = `
        <h5 class="text-2 text-2xl text-purple-300 uppercase mb-2">
          My Services
        </h5>

        <h2 class="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          SERVICES
        </h2>
      `;
    }

    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }
 
  
