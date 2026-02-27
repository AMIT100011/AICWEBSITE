/**
 * AIC-SOA Foundation - Logic Layer
 * Organized by section-specific data controllers and interaction handlers.
 */

//
// 1. DATA CONTROLLERS (Content Management)
//

//
// 1. DATA CONTROLLERS (Content Management)
//

// Content for: Expert Reviews
const expertData = [
  {
    name: "Dr. Bijay Kumar Sahu",
    org: "Govt of India",
    designation: "HEAD-NRDC OUTREACH OFFICE",
    quote:
      "Connecting <span>research lab technology</span> to practical use, uniting stakeholders to foster entrepreneurship, innovation for societal benefits, aligns with India's vision and values for impactful collaborative ecosystems.",
    pic: "./assets/expert-review/bksahu-BnY5GmXA.jpg",
    video: "https://www.youtube.com/embed/s88RZ7Yfmuw",
  },
  {
    name: "Shri Manmath K Badapanda",
    org: "RRCAT (DAE), Indore",
    designation: "SENIOR SCIENTIST",
    quote:
      "Startups are <span>innovators and risk-takers</span> and as you grow and expand, you must ensure that there is proper financial management and a proper audit.",
    pic: "./assets/expert-review/mkbadapanda-CmlpdCua.jpg",
    video: "https://www.youtube.com/embed/eUPTLa5GSx0",
  },
  {
    name: "Prof. Narayana P Padhy",
    org: "Malavya National Institute of Technology(MNIT),Jaipur",
    designation: "DIRECTOR",
    quote:
      "The government's only idea is to be a catalyst in Startup promotion. We are hoping that via this, it becomes easier for Startups to operate worldwide.",
    pic: "./assets/expert-review/nppadhy-DOd2QGIa.jpg",
    video: "https://www.youtube.com/embed/jqWlHUfXaRc",
  },
  {
    name: "Mr. Chandan Samantaray",
    org: "Faculty in Department Of Engineering,Virginia State University",
    designation: "PROFESSOR",
    quote:
      "Technology should be accessible to everyone. Our goal is to bridge the digital divide and empower communities.",
    pic: "./assets/expert-review/chandansamantaray-BV628n7n.jpg",
    video: "https://www.youtube.com/embed/QuHnH88M2mI",
  },
  {
    name: "Mr. Mrutyunjaya Mohapatra",
    org: "India Meteorological Department, Government Of India",
    designation: "DIRECTOR GENERAL OF METEORLOGY",
    quote:
      " I appreciate the rapid development and high standards of the AIC-SOA Foundation for its supportive environment for budding entrepreneurs and startups. The AIC-SOA Foundation is marching a ahead for continued success in fostering knowledge, expertise, and industrial growth in India.",
    pic: "./assets/expert-review/mmohapatra-_IzG5hrZ.jpg",
    video: "https://www.youtube.com/embed/_xYLJ07x0_I",
  },
  {
    name: "H.E.Mr.Fernando Xavier Bucheli Vargas",
    org: "Ecuador",
    designation: "AMBASSADOR OF ECUADOR TO INDIA",
    quote:
      "The future is now there is urgent need to act in the present to advance sustainable development goals.Sustainable practices are not an option but a necessity for long-term economic and environmental health.",
    pic: "./assets/expert-review/fernando-C24TBo3b.jpg",
    video: "https://www.youtube.com/embed/_6tP_DKmIHU",
  },
  {
    name: "H.E.Mr.Omar Lisandro Castaneda Solares",
    org: "Guatemala",
    designation: "AMBASSADOR OF Guatemala TO INDIA",
    quote:
      "The AIC-SOA Foundation successfully fosters an environment for rich creativity and provides the crucial support needed to  build successful startups for the disruptive  technology in force.",
    pic: "./assets/expert-review/omar-D5L5ivtV.jpg",
    video: "https://www.youtube.com/embed/awQYOoPdqYE",
  },
  {
    name: "Prof.Ujjwal Maulik",
    org: "Kolkata",
    designation: "Jadavpur University",
    quote:
      "This center is so good, well-planned. Young generations are really trying hard; I believe many startups from here will do very well in the future.",
    pic: "./assets/expert-review/Ujjwal-BOHyuDBS.jpg",
    video: "https://www.youtube.com/embed/n_q1tyhIiqg",
  },
  {
    name: "Prof.Bijaya Ketan Panigrahi",
    org: "",
    designation: "IIT,DELHI",
    quote:
      "The AIC-SOA Foundation is the perfect platform for encouraging young minds from diverse domains to collaborate and innovate. It’s an excellent initiative for building deep-tech startups, aligning perfectly with the vision of 'Viksit Bharat'",
    pic: "./assets/expert-review/panigrahi-CTgwxTGS.jpg",
    video: "https://www.youtube.com/embed/TKWOgCGhcgI",
  },
  {
    name: "Dr.Debi Prasad Tripathy",
    org: "Northern Ontario School Of Medicine Univeristy, Canada",
    designation: "Jadavpur University",
    quote:
      "The AIC-SOA’s incubation in medtech, agritech, and deep tech, highlighting an AI device for rapid cervical cancer diagnosis and its broader impact on food security and Odisha.",
    pic: "./assets/expert-review/debiprasad-DTdjJ6Yi.jpg",
    video: "https://www.youtube.com/embed/48s-n2Z3fvw",
  },
];

//
// 2. COUNTER ANIMATIONS
//
const initCounters = () => {
  const counters = document.querySelectorAll(".counter");
  const countObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        counters.forEach((counter) => {
          const target = +counter.getAttribute("data-target");
          let count = 0;
          const update = () => {
            const inc = target / 100;
            if (count < target) {
              count += inc;
              counter.innerText = Math.ceil(count);
              setTimeout(update, 20);
            } else {
              counter.innerText = target;
            }
          };
          update();
        });
        countObserver.unobserve(entries[0].target);
      }
    },
    { threshold: 0.5 },
  );

  const innovationSection = document.querySelector(".innovation-section");
  if (innovationSection) countObserver.observe(innovationSection);
};

//
// 3. SAGA SLIDER
//
let sagaIdx = 0;
const initSagaSlider = () => {
  const sagaImgs = Array.from(document.querySelectorAll("#sagaSlides img"));
  if (sagaImgs.length === 0) return;

  // Ensure images are display:block and begin preloading
  sagaImgs.forEach((img) => {
    img.style.display = "block";
    img.style.visibility = "hidden";
    img.style.opacity = "0";
    img.style.zIndex = "2";
    // prompt browser to fetch
    const pre = new Image();
    pre.src = img.src;
    if (img.complete) img.style.visibility = "visible";
    else img.addEventListener("load", () => (img.style.visibility = "visible"));
  });

  const showImage = (idx) => {
    sagaImgs.forEach((img, i) => {
      if (i === idx) {
        img.classList.add("active");
        img.style.opacity = "1";
        img.style.visibility = "visible";
        img.style.zIndex = "3";
      } else {
        img.classList.remove("active");
        img.style.opacity = "0";
        img.style.zIndex = "2";
      }
    });
  };

  sagaIdx = 0;

  // Show first image ASAP
  requestAnimationFrame(() => showImage(sagaIdx));

  // Fallback creation (only if images never paint): creates background layers + preloader
  const container = document.querySelector(".saga-slider-container");
  let mobileBg = null;
  const createMobileBgFallback = (initialIdx = 0) => {
    if (!container || mobileBg) return;
    const pre = document.createElement("div");
    pre.className = "saga-preloader";
    pre.innerHTML = '<div class="spinner"></div>';
    container.appendChild(pre);

    // hide images so fallback is authoritative
    sagaImgs.forEach((img) => {
      img.style.display = "none";
    });

    const layerA = document.createElement("div");
    const layerB = document.createElement("div");
    layerA.className = "saga-mobile-bg";
    layerB.className = "saga-mobile-bg";
    container.appendChild(layerA);
    container.appendChild(layerB);

    const tmp = new Image();
    tmp.onload = () => {
      layerA.style.backgroundImage = `url('${sagaImgs[initialIdx].src}')`;
      layerA.classList.add("active");
      if (pre.parentNode) pre.parentNode.removeChild(pre);
    };
    tmp.onerror = () => {
      if (pre.parentNode) pre.parentNode.removeChild(pre);
    };
    tmp.src = sagaImgs[initialIdx].src;

    mobileBg = { active: layerA, inactive: layerB };
  };

  // Check painting; if images don't appear, use the fallback (checks twice)
  const areImagesPainted = () =>
    sagaImgs.some((img) => {
      try {
        const cs = window.getComputedStyle(img);
        return (
          img.naturalWidth > 0 &&
          cs.display !== "none" &&
          cs.visibility !== "hidden" &&
          parseFloat(cs.opacity) > 0
        );
      } catch (e) {
        return false;
      }
    });

  // Try to repair common deployment path/case issues before falling back
  const tryFixBrokenSagaSrcs = async () => {
    const broken = sagaImgs.filter((img) => img.naturalWidth === 0);
    if (broken.length === 0) return;

    await Promise.all(
      broken.map(
        (img) =>
          new Promise((res) => {
            try {
              const src = img.src || "";
              // common variant: lowercase the folder name (Saga -> saga)
              const alt = src.replace("/Saga/", "/saga/");
              if (alt === src) return res(false);

              const tmp = new Image();
              tmp.onload = () => {
                img.src = alt;
                img.style.visibility = "visible";
                res(true);
              };
              tmp.onerror = () => res(false);
              tmp.src = alt;
            } catch (e) {
              res(false);
            }
          }),
      ),
    );
  };

  setTimeout(async () => {
    await tryFixBrokenSagaSrcs();
    if (!areImagesPainted()) createMobileBgFallback(0);
  }, 600);
  setTimeout(async () => {
    await tryFixBrokenSagaSrcs();
    if (!areImagesPainted()) createMobileBgFallback(0);
  }, 1200);

  const changeSaga = (n) => {
    const next = (sagaIdx + n + sagaImgs.length) % sagaImgs.length;

    if (mobileBg) {
      const { active, inactive } = mobileBg;
      inactive.style.backgroundImage = `url('${sagaImgs[next].src}')`;
      requestAnimationFrame(() => {
        inactive.classList.add("active");
        active.classList.remove("active");
        mobileBg.active = inactive;
        mobileBg.inactive = active;
      });
      sagaIdx = next;
      return;
    }

    // Make sure next image is visible before transition
    sagaImgs[next].style.visibility = "visible";
    requestAnimationFrame(() => {
      showImage(next);
      sagaIdx = next;
    });
  };

  // Auto-advance
  const intervalId = setInterval(() => changeSaga(1), 5000);

  // Expose navigation
  window.changeSaga = (n) => {
    clearInterval(intervalId);
    changeSaga(n);
  };
};

//
// //
// 4. EXPERT REVIEWS (Enhanced Template + Video Support)
//

let expertIdx = 0;
let isExpertAnimating = false;
let expertInterval = null;

const showExpert = (n) => {
  if (isExpertAnimating) return;
  isExpertAnimating = true;

  const card = document.getElementById("expertCard");
  if (!card) return;

  card.style.opacity = "0";
  card.style.transform = "translateY(10px)";

  setTimeout(() => {
    expertIdx = n;
    const data = expertData[n];

    // Update expert content
    document.getElementById("expertName").innerText = data.name;
    document.getElementById("expertOrg").innerText = data.org;
    document.getElementById("expertQuote").innerHTML = data.quote;
    document.getElementById("expertPic").src = data.pic;

    const designationEl = document.querySelector(
      ".expert-profile-side .designation",
    );
    if (designationEl) designationEl.innerText = data.designation;

    // ✅ Update video button dynamically
    const videoBtn = document.querySelector(".expert-video-btn");
    if (videoBtn) {
      if (data.video) {
        videoBtn.style.display = "flex";
        videoBtn.setAttribute("data-video", data.video);
      } else {
        videoBtn.style.display = "none";
        videoBtn.removeAttribute("data-video");
      }
    }

    // Update navigation dots
    document.querySelectorAll(".nav-dot").forEach((dot, i) => {
      dot.className = i === n ? "nav-dot active" : "nav-dot";
    });

    card.style.opacity = "1";
    card.style.transform = "translateY(0)";

    setTimeout(() => (isExpertAnimating = false), 500);
  }, 400);
};

const initExpertSlider = () => {
  const expertDotBox = document.getElementById("expertDots");
  if (!expertDotBox) return;

  expertDotBox.innerHTML = "";

  expertData.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = i === 0 ? "nav-dot active" : "nav-dot";
    dot.onclick = () => {
      if (!isExpertAnimating && expertIdx !== i) {
        restartExpertAuto();
        showExpert(i);
      }
    };
    expertDotBox.appendChild(dot);
  });

  const stepExpert = (delta) => {
    if (isExpertAnimating) return;
    const next = (expertIdx + delta + expertData.length) % expertData.length;
    showExpert(next);
  };

  const restartExpertAuto = () => {
    if (expertInterval) clearInterval(expertInterval);
    expertInterval = setInterval(() => stepExpert(1), 8000);
  };

  // Expose navigation controls for prev/next buttons
  window.changeExpert = (n) => {
    restartExpertAuto();
    stepExpert(n);
  };

  // Load first expert properly (important) and start auto-rotation
  showExpert(0);
  restartExpertAuto();

  // Pause auto-scroll on hover over the expert card/area
  const expertSection =
    document.querySelector(".expert-slider-outer") ||
    document.querySelector(".expert-reviews-section");
  if (expertSection) {
    expertSection.addEventListener("mouseenter", () => {
      if (expertInterval) clearInterval(expertInterval);
    });
    expertSection.addEventListener("mouseleave", () => {
      restartExpertAuto();
    });
  }
};

//
// 4.1 EXPERT VIDEO MODAL
//
const initExpertVideoModal = () => {
  const modal = document.getElementById("expertVideoModal");
  const iframe = document.getElementById("expertVideoFrame");
  const closeBtn = document.querySelector(".expert-video-close");
  const overlay = document.querySelector(".expert-video-overlay");
  const videoBtns = document.querySelectorAll(".expert-video-btn");

  if (!modal || !iframe || !closeBtn || !overlay) return;

  videoBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const videoURL = btn.getAttribute("data-video");
      if (!videoURL) return;

      iframe.src = videoURL + "?autoplay=1";
      modal.classList.add("active");
    });
  });

  const closeModal = () => {
    modal.classList.remove("active");
    iframe.src = "";
  };

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
};

//
// 5. TESTIMONIAL SLIDER (Infinite Round)
//
let testiIdx = 0;
let isTestiJumping = false;

const initTestimonials = () => {
  const testiTrack = document.getElementById("testiTrack");
  if (!testiTrack) return;

  // Setup Infinite Loop Clones
  const cards = Array.from(testiTrack.children);
  if (cards.length === 0) return;
  cards.forEach((card) => testiTrack.appendChild(card.cloneNode(true)));

  const moveTesti = (n) => {
    if (isTestiJumping) return;

    const originalCount = cards.length;
    const cardWidth = testiTrack.children[0].offsetWidth + 20;

    testiIdx += n;
    testiTrack.style.transition =
      "transform 0.6s cubic-bezier(0.45, 0.05, 0.55, 0.95)";
    testiTrack.style.transform = `translateX(-${testiIdx * cardWidth}px)`;

    // Reset logic for seamless loop
    if (testiIdx >= originalCount) {
      isTestiJumping = true;
      setTimeout(() => {
        testiTrack.style.transition = "none";
        testiIdx = 0;
        testiTrack.style.transform = `translateX(0px)`;
        setTimeout(() => (isTestiJumping = false), 50);
      }, 600);
    } else if (testiIdx < 0) {
      isTestiJumping = true;
      testiTrack.style.transition = "none";
      testiIdx = originalCount - 1;
      testiTrack.style.transform = `translateX(-${testiIdx * cardWidth}px)`;
      setTimeout(() => {
        isTestiJumping = false;
        moveTesti(-1);
      }, 50);
    }
  };

  window.moveTesti = moveTesti;
  let testiInterval = setInterval(() => moveTesti(1), 6000);

  const testiWrapper = document.querySelector(".testi-wrapper");
  if (testiWrapper) {
    testiWrapper.onmouseenter = () => clearInterval(testiInterval);
    testiWrapper.onmouseleave = () =>
      (testiInterval = setInterval(() => moveTesti(1), 6000));
  }
};

//
// 6. NAVBAR SCROLL BEHAVIOR
//
const initNavbarScroll = () => {
  const navbar = document.querySelector(".navbar");
  const headerTop = document.querySelector(".header-top");
  // Look for either class
  const alertBar =
    document.querySelector(".alert-bar") ||
    document.querySelector(".alert-row");
  if (!navbar || !headerTop) return;

  const updateNavbarState = () => {
    if (window.scrollY <= 5) {
      navbar.classList.remove("navbar--scrolled"); // top: gradient background
      headerTop.classList.remove("header-top--scrolled");
      if (alertBar) {
        alertBar.classList.remove("alert-bar--hidden"); // show alert at top
        alertBar.classList.remove("hidden"); // Also remove 'hidden' for compatibility
      }
    } else {
      navbar.classList.add("navbar--scrolled"); // scrolled: white translucent
      headerTop.classList.add("header-top--scrolled");
      if (alertBar) {
        alertBar.classList.add("alert-bar--hidden"); // hide alert when scrolling
        alertBar.classList.add("hidden"); // Also add 'hidden' for compatibility
      }
    }
  };

  window.addEventListener("scroll", updateNavbarState, { passive: true });
  updateNavbarState(); // run once on load
};

// Desktop dropdown click/hover behavior + multi-column detection
const initDropdownBehavior = () => {
  const navItems = document.querySelectorAll(".nav-item");
  if (!navItems || navItems.length === 0) return;

  const closeAll = () => navItems.forEach((i) => i.classList.remove("open"));

  navItems.forEach((item) => {
    const link = item.querySelector(".nav-link");
    const dropdown = item.querySelector(".dropdown-menu");
    if (!link || !dropdown) return;

    // accessibility
    link.setAttribute("aria-haspopup", "true");
    link.setAttribute("aria-expanded", "false");

    // toggle on click for desktop (prevents default for non-navigable '#')
    link.addEventListener("click", (e) => {
      if (window.innerWidth <= 768) return; // mobile handled separately
      e.preventDefault();
      const opened = item.classList.toggle("open");
      link.setAttribute("aria-expanded", opened ? "true" : "false");
      if (opened)
        navItems.forEach((i) => {
          if (i !== item) i.classList.remove("open");
        });
    });
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-item")) closeAll();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAll();
  });

  // Add multi-column class to dropdowns with many links
  document.querySelectorAll(".dropdown-menu").forEach((drop) => {
    const count = drop.querySelectorAll("a").length;
    if (count >= 6) drop.classList.add("dropdown--cols");
  });
};

//
// 6.5 ALERT TICKER (Continuous Loop)
//
const initAlertTicker = () => {
  const ticker = document.querySelector(".alert-ticker");
  if (!ticker) return;

  const original = ticker.innerHTML.trim();
  if (ticker.dataset.loopInitialized === "true") return;

  ticker.innerHTML = `${original} • ${original}`;
  ticker.dataset.loopInitialized = "true";
};

// 6.55 ALERT POPUP MODAL (popup.jpeg)
const initAlertPopupModal = () => {
  const alertBar = document.querySelector(".alert-bar");
  if (!alertBar) return;

  // Create modal structure once
  let modal = document.querySelector(".alert-image-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.className = "alert-image-modal";
    modal.innerHTML = `
            <div class="alert-image-overlay"></div>
            <div class="alert-image-box">
                <button class="alert-image-close" aria-label="Close alert image">&times;</button>
                <img src="./popup.jpeg" alt="Important announcement" />
            </div>
        `;
    document.body.appendChild(modal);
  }

  const overlay = modal.querySelector(".alert-image-overlay");
  const closeBtn = modal.querySelector(".alert-image-close");

  const openModal = () => {
    modal.classList.add("active");
  };

  const closeModal = () => {
    modal.classList.remove("active");
  };

  // Open only on click/tap of the alert bar
  alertBar.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });
  // Ensure it works on touch devices as well
  alertBar.addEventListener(
    "touchstart",
    (e) => {
      e.preventDefault();
      openModal();
    },
    { passive: false },
  );

  // Close interactions
  if (overlay) overlay.addEventListener("click", closeModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
};

//
// 6.6 ALERT HOVER CONTROL
// Only controls the alert ticker, not the logo marquees
const initHoverPauseControls = () => {
  const ticker = document.querySelector(".alert-ticker");
  if (!ticker) return;

  ticker.addEventListener("mouseenter", () => {
    ticker.style.animationPlayState = "paused";
  });
  ticker.addEventListener("mouseleave", () => {
    ticker.style.animationPlayState = "running";
  });
};

// 6.7 SCROLL-TO-TOP FLOATING BUTTON
const initScrollTopButton = () => {
  // Create button once for the whole site
  let btn = document.querySelector(".scroll-top-btn");
  if (!btn) {
    btn = document.createElement("button");
    btn.className = "scroll-top-btn";
    btn.setAttribute("aria-label", "Scroll to top");
    btn.innerHTML = '<i class="fas fa-angles-up"></i>';
    document.body.appendChild(btn);
  }

  const toggleVisibility = () => {
    if (window.scrollY > 300) btn.classList.add("show");
    else btn.classList.remove("show");
  };

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

//
// 7. MOBILE MENU (RESPONSIVE)
//
const initMobileMenu = () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  // Avoid double-initialization if markup already present
  if (document.querySelector(".mobile-menu")) return;

  // Create toggle button (if not already present)
  let btn = document.querySelector(".menu-toggle");
  if (!btn) {
    btn = document.createElement("button");
    btn.className = "menu-toggle";
    btn.setAttribute("aria-label", "Toggle menu");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = '<i class="fas fa-bars"></i>';
    navbar.appendChild(btn);
  }

  // Create overlay and panel
  const overlay = document.createElement("div");
  overlay.className = "mobile-menu-overlay";
  document.body.appendChild(overlay);

  const panel = document.createElement("aside");
  panel.className = "mobile-menu";
  panel.setAttribute("aria-hidden", "true");
  panel.innerHTML =
    '<nav class="mobile-nav" aria-label="Mobile Navigation"></nav>';
  document.body.appendChild(panel);

  const mobileNav = panel.querySelector(".mobile-nav");
  const navLinks = document.querySelector(".nav-links");
  if (navLinks) {
    const items = Array.from(navLinks.querySelectorAll(".nav-item"));
    items.forEach((item) => {
      const trigger = item.querySelector(".nav-link");
      const dropdown = item.querySelector(".dropdown-menu");
      const label = trigger ? trigger.textContent.trim() : "";

      if (dropdown) {
        // Accordion header
        const header = document.createElement("button");
        header.className = "mobile-accordion-header";
        header.type = "button";
        header.setAttribute("aria-expanded", "false");
        header.innerHTML = `<span class="mobile-accordion-label">${label}</span><span class="chev">▸</span>`;
        mobileNav.appendChild(header);

        // Panel containing sublinks
        const panelDiv = document.createElement("div");
        panelDiv.className = "mobile-accordion-panel";
        dropdown.querySelectorAll("a").forEach((sa) => {
          const subLink = sa.cloneNode(true);
          subLink.classList.add("mobile-sublink");
          panelDiv.appendChild(subLink);
        });
        mobileNav.appendChild(panelDiv);

        header.addEventListener("click", () => {
          const expanded = header.classList.toggle("expanded");
          header.setAttribute("aria-expanded", expanded ? "true" : "false");
          if (expanded) panelDiv.classList.add("open");
          else panelDiv.classList.remove("open");
        });
      } else if (trigger) {
        // plain link
        const a = trigger.cloneNode(true);
        a.classList.remove("nav-link");
        mobileNav.appendChild(a);
      }
    });
  }

  const openMenu = () => {
    btn.classList.add("open");
    btn.setAttribute("aria-expanded", "true");
    btn.innerHTML = '<i class="fas fa-times"></i>';
    panel.classList.add("open");
    overlay.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    btn.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = '<i class="fas fa-bars"></i>';
    panel.classList.remove("open");
    overlay.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  };

  btn.addEventListener("click", (e) => {
    const opened = panel.classList.contains("open");
    if (opened) closeMenu();
    else openMenu();
  });

  overlay.addEventListener("click", closeMenu);

  // Close menu when any mobile link is clicked
  panel.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeMenu();
  });

  // Close on Escape or on window resize to desktop
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && panel.classList.contains("open")) closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && panel.classList.contains("open"))
      closeMenu();
  });
};

//
// 8. INITIALIZATION
//
document.addEventListener("DOMContentLoaded", () => {
  // Use alertconfig.js if available, fallback to legacy ticker
  if (typeof initAlertFromConfig === "function") {
    initAlertFromConfig();
  } else {
    initAlertTicker();
  }
  initCounters();
  initSagaSlider();
  initExpertSlider();
  initExpertVideoModal();
  initTestimonials();
  initNavbarScroll();
  initMobileMenu();
  // Skip initAlertPopupModal if using alertconfig (it handles its own popups)
  if (typeof initAlertFromConfig !== "function") {
    initAlertPopupModal();
  }
  initHoverPauseControls();
  initScrollTopButton();
  initEventsAutoScroll();

  // Handle Window Resize for Sliders
  window.addEventListener("resize", () => {
    testiIdx = 0;
    const track = document.getElementById("testiTrack");
    if (track) track.style.transform = `translateX(0px)`;
  });
});

// --- HIGHLIGHT ACTIVE NAV ITEM ---
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll(".nav-item");
  const currentPath = window.location.pathname
    .replace(/\\/g, "/")
    .toLowerCase();

  navItems.forEach((navItem) => {
    let isActive = false;

    // Check top-level link
    const topLink = navItem.querySelector(":scope > .nav-link");
    if (topLink) {
      const href = topLink.getAttribute("href");
      if (href && href !== "#") {
        try {
          const linkPath = new URL(href, window.location.href).pathname
            .replace(/\\/g, "/")
            .toLowerCase();
          const normalizedLink = linkPath.endsWith("/")
            ? linkPath + "index.html"
            : linkPath;
          const normalizedCurrent = currentPath.endsWith("/")
            ? currentPath + "index.html"
            : currentPath;
          if (normalizedLink === normalizedCurrent) {
            isActive = true;
          }
        } catch (e) {}
      }
    }

    // Check dropdown items if top link doesn't match
    if (!isActive) {
      const dropdownLinks = navItem.querySelectorAll(".dropdown-menu a");
      for (const link of dropdownLinks) {
        const href = link.getAttribute("href");
        if (
          href &&
          !href.startsWith("http") &&
          !href.startsWith("#") &&
          !href.startsWith("javascript:")
        ) {
          try {
            const linkPath = new URL(href, window.location.href).pathname
              .replace(/\\/g, "/")
              .toLowerCase();
            const normalizedLink = linkPath.endsWith("/")
              ? linkPath + "index.html"
              : linkPath;
            const normalizedCurrent = currentPath.endsWith("/")
              ? currentPath + "index.html"
              : currentPath;
            if (normalizedLink === normalizedCurrent) {
              isActive = true;
              break;
            }
          } catch (e) {}
        }
      }
    }

    // Apply or remove active class
    if (isActive) {
      navItem.classList.add("active");
    } else {
      navItem.classList.remove("active");
    }
  });
});

// --- SITE WIDE BREADCRUMB (inserts under alert bar) ---
document.addEventListener("DOMContentLoaded", () => {
  try {
    const headerTop = document.querySelector(".header-top");
    if (!headerTop) return;

    // where to insert: under alert-bar/alert-row if present, else after navbar
    const alertBar =
      headerTop.querySelector(".alert-row") ||
      headerTop.querySelector(".alert-bar");
    const navbar = headerTop.querySelector(".navbar");

    const insertAfter = alertBar || navbar;
    if (!insertAfter) return;

    // Build crumbs by matching the site's navigation structure first
    const currentPath = window.location.pathname.replace(/\\/g, "/");
    const currentFull = currentPath.endsWith("/")
      ? currentPath + "index.html"
      : currentPath;

    const navRoot = document.querySelector(".nav-links");
    const crumbs = [];

    let matched = false;
    if (navRoot) {
      // consider both top-level links and dropdown items
      const allLinks = Array.from(navRoot.querySelectorAll("a"));
      for (const link of allLinks) {
        const href = link.getAttribute("href");
        if (!href) continue;
        // Ignore anchors and non-page links that would resolve to the current page (e.g., href="#")
        const hrefTrim = href.trim().toLowerCase();
        if (
          hrefTrim === "#" ||
          hrefTrim.startsWith("#") ||
          hrefTrim.startsWith("javascript:") ||
          hrefTrim.startsWith("mailto:")
        )
          continue;
        let linkPath = null;
        try {
          linkPath = new URL(href, window.location.href).pathname.replace(
            /\\/g,
            "/",
          );
        } catch (e) {
          continue;
        }

        // Normalize: treat trailing slash and index.html as equivalent
        const normalizedLink = linkPath.endsWith("/")
          ? linkPath + "index.html"
          : linkPath;
        const normalizedCurrent = currentFull;

        if (normalizedLink.toLowerCase() === normalizedCurrent.toLowerCase()) {
          // Found exact nav link that matches current page
          const topItem = link.closest(".nav-item");
          if (topItem) {
            const topAnchor = topItem.querySelector(
              ":scope > .nav-link, :scope > a",
            );
            if (topAnchor && topAnchor !== link) {
              crumbs.push({
                label: topAnchor.textContent.trim() || "Menu",
                href: topAnchor.getAttribute("href") || "#",
                current: false,
              });
            }
          }
          crumbs.push({
            label: link.textContent.trim() || "Current",
            href: href,
            current: true,
          });
          matched = true;
          break;
        }
      }
    }

    // If no match found in nav, fall back to path-based breadcrumb
    if (!matched) {
      const parts = window.location.pathname.split("/").filter(Boolean);
      let accum = "";
      const nameMap = {
        "About us-section": "About Us",
        "about%20us-section": "About Us",
        "founders_desk.html": "Founder's Desk",
        "our_focus.html": "Our Focus",
        program_benefits: "Program Benefits",
        "programs_benefits.html": "Program Benefits",
        incubator: "Incubator",
        "incubator.html": "Incubator",
        virtual_incubator: "Virtual Incubator",
        "virtual_incubator.html": "Virtual Incubator",
        GAllery: "Gallery",
        "gallery.html": "Gallery",
        event_page: "Events",
        "events.html": "Events",
        "event.html": "Event Details",
      };

      const isLocal = window.location.protocol === "file:";

      for (let i = 0; i < parts.length; i++) {
        const raw = parts[i];
        const decoded = decodeURIComponent(raw);

        // Build relative path
        if (i > 0) accum += "/";
        accum += raw;

        let href = (isLocal ? "" : "/") + accum;

        // Custom mapping: if folder is event_page, link to its events.html
        if (raw === "event_page") {
          href = (isLocal ? "" : "/") + "event_page/events.html";
        }

        let label =
          nameMap[raw] ||
          decoded.replace(/[_\-]/g, " ").replace(/\.html$/i, "");
        label = label.replace(/\b\w/g, (ch) => ch.toUpperCase());
        const current = i === parts.length - 1;
        crumbs.push({ label, href, current });
      }
    }

    // Create breadcrumb element
    const nav = document.createElement("nav");
    nav.className = "page-breadcrumb";
    nav.setAttribute("aria-label", "Breadcrumb");
    const ol = document.createElement("ol");
    ol.className = "breadcrumb-list";

    crumbs.forEach((c) => {
      const li = document.createElement("li");
      li.className = "breadcrumb-item" + (c.current ? " current" : "");
      if (c.current) {
        li.textContent = c.label;
        li.setAttribute("aria-current", "page");
      } else {
        const a = document.createElement("a");
        a.href = c.href;
        a.textContent = c.label;
        li.appendChild(a);
      }
      ol.appendChild(li);
    });

    nav.appendChild(ol);

    insertAfter.parentNode.insertBefore(nav, insertAfter.nextSibling);
  } catch (e) {
    console.error("breadcrumb init failed", e);
  }
});

/**
 * 8. EVENT SCROLLING
 * Controls vertical scroll for Upcoming and Past events columns
 */
window.scrollColumn = function (id, direction) {
  const list = document.getElementById(id + "-events");
  const scrollAmount = 250;
  if (list) {
    // Pause auto-scroll briefly when manual controls are used
    list.dataset.manualPause = "true";
    clearTimeout(list.manualPauseTimeout);
    list.manualPauseTimeout = setTimeout(() => {
      list.dataset.manualPause = "false";
    }, 3000); // Resume auto-scroll after 3 seconds

    // If we are at the top and scrolling up, jump to the start of the cloned set
    const threshold = list.scrollHeight / 2;
    if (direction === -1 && list.scrollTop <= 10) {
      list.scrollTop += threshold;
    }
    // If we are near the bottom of the clones and scrolling down, jump back up
    if (direction === 1 && list.scrollTop >= threshold) {
      list.scrollTop -= threshold;
    }

    list.scrollBy({
      top: direction * scrollAmount,
      behavior: "smooth",
    });
  }
};

const initEventsAutoScroll = () => {
  const columns = ["upcoming", "past"];
  const scrollSpeed = 0.5; // Pixels per frame (lower for slower/smoother)

  columns.forEach((id) => {
    const list = document.getElementById(id + "-events");
    if (!list) return;

    // Clone content for seamless loop
    const originalContent = list.innerHTML;
    list.innerHTML = originalContent + originalContent;

    let requestID;
    let isPaused = false;
    // let lastScrollTop = list.scrollTop; // This variable is no longer used

    // Reset scroll to top initially
    list.scrollTop = 0;

    const step = () => {
      // Only scroll if not hovered and not manually paused by buttons
      if (!isPaused && list.dataset.manualPause !== "true") {
        list.scrollTop += scrollSpeed;

        // seamless height of one complete set
        const threshold = list.scrollHeight / 2;

        // If we've scrolled past the first set, jump back to start
        // We use subtraction to keep any extra decimals/progress
        if (list.scrollTop >= threshold) {
          list.scrollTop -= threshold;
        }
      }
      requestID = requestAnimationFrame(step);
    };

    const startAutoScroll = () => {
      isPaused = false;
    };

    const stopAutoScroll = () => {
      isPaused = true;
    };

    list.addEventListener("mouseenter", stopAutoScroll);
    list.addEventListener("mouseleave", startAutoScroll);

    // Handle touch for mobile
    list.addEventListener("touchstart", stopAutoScroll, { passive: true });
    list.addEventListener("touchend", startAutoScroll, { passive: true });

    // Start animation
    requestAnimationFrame(step);

    // Allow manual buttons to work alongside auto-scroll
    // We detect user scrolling and temporarily pause if needed,
    // though linear scroll is usually fine with manual overrides.
  });
};
