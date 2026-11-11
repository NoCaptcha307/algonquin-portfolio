
/* ============================================================
   FULL CIRCLE PORTFOLIO
   MAIN WEBSITE JAVASCRIPT

   SECTIONS
   01. Image loading
   02. Helper functions
   03. Case study builder
   04. Opening and closing case studies
   05. Portfolio filters
   06. Mobile navigation
   07. Footer year
   08. Scroll parallax
   09. Website initialization

   Project content and image paths are managed in:
   data/projects.js
============================================================ */

"use strict";


// ============================================================
// 01. IMAGE LOADING
// ============================================================

// Loads project cover images from data/projects.js.
// If an image is missing, the original placeholder remains.

function loadOptionalImages() {

  for (const [id, entry] of Object.entries(mediaManifest)) {

    const art = document.querySelector(
      `.project[data-project="${id}"] .art`
    );

    if (!art || !entry.cover) continue;

    // Avoid inserting the same image twice.
    if (art.querySelector(".project-cover-image")) continue;

    const img = document.createElement("img");

    img.className = "project-cover-image";
    img.alt = `${id} project cover`;

    img.onload = () => {
      art.classList.add("has-image");
      console.log(`Cover loaded: ${entry.cover}`);
    };

    img.onerror = () => {
      console.warn(`Cover not available: ${entry.cover}`);
      img.remove();
    };

    art.prepend(img);

    // Set the source after attaching event handlers.
    img.src = entry.cover;
  }
}


// ============================================================
// 02. HELPER FUNCTIONS
// ============================================================

// Creates an HTML element.

function el(tag, cls = "", txt) {

  const element = document.createElement(tag);

  if (cls) element.className = cls;

  if (txt !== undefined) {
    element.textContent = txt;
  }

  return element;
}


// Creates an element and appends it to a parent.

function block(parent, tag, cls = "", txt) {

  const element = el(tag, cls, txt);

  parent.append(element);

  return element;
}


// Creates an image with an optional demo fallback.

function figure(src, caption, extra = "", fallback = "") {

  const container = el(
    "figure",
    "case-visual " + extra
  );

  const img = document.createElement("img");

  img.alt = caption;
  img.loading = "lazy";

  img.onerror = () => {

    console.log("Case study image failed:", img.src);

    if (fallback && !img.dataset.fallback) {

      img.dataset.fallback = "1";
      img.src = fallback;

    } else {

      container.hidden = true;

    }
  };

  img.src = src;

  container.append(img);

  return container;
}


// Creates a case study content wrapper.

function wrap(parent, cls = "case-wrap") {

  const wrapper = el("div", cls);

  parent.append(wrapper);

  return wrapper;
}


// Creates a section heading.

function heading(parent, kicker, title, desc) {

  block(parent, "span", "case-kicker", kicker);

  block(parent, "h3", "", title);

  if (desc) {
    block(parent, "p", "section-intro", desc);
  }
}


// ============================================================
// 03. CASE STUDY BUILDER
// ============================================================

// Builds the complete scrollable case study.
// Text, image paths and project details come from projects.js.

const dialog = document.getElementById("dialog");
const caseBody = document.getElementById("case-body");

function buildCase(id) {

  caseBody.dataset.case = id;

  const c = cases[id];

  if (!c) return;

  const x = caseContent[id] || {};

  const folder = caseFolders[id];

  const root = caseRoot + folder + "/";

  const demo = "assets/demo/";

  console.log("Case assets for", id, caseAssets[id]);

  const assets = caseAssets[id] || {};

  // Clear previous case study.
  caseBody.replaceChildren();


  // ----------------------------------------------------------
  // SECTION A: PROJECT INTRODUCTION
  // ----------------------------------------------------------

  const intro = el("section", "case-hero");

  const iw = wrap(intro);

  block(iw, "span", "case-kicker", c.kind);

  if (id === "steam") {
  const title = block(iw, "h2", "", "");
  title.append(
    document.createTextNode("Steam Whistle:"),
    document.createElement("br"),
    document.createTextNode("T-Shirt Designs")
  );
} else {
  block(iw, "h2", "", c.title);
}

  block(
    iw,
    "p",
    "case-deck",
    x.subtitle || c.description
  );

  const meta = block(iw, "div", "case-hero-meta");

  [
    x.role || "Creative direction",
    x.scope || c.tags.slice(0, 3).join(" · "),
    x.year || "Selected project"
  ].forEach(text => {

    block(meta, "span", "case-chip", text);

  });

  caseBody.append(intro);


  // ----------------------------------------------------------
  // SECTION B: HERO IMAGE
  // ----------------------------------------------------------

  const hero = el("section", "case-hero-image");

hero.append(
  figure(
    assets["hero"] || root + "hero.jpg",
    "Project hero image",
    "",
    demo + "hero.svg"
  )
);

hero.querySelector("figcaption")?.remove();

  caseBody.append(hero);


  // ----------------------------------------------------------
  // SECTION C: THE CHALLENGE
  // ----------------------------------------------------------

  const challenge = el("section", "case-band");

  const cw = wrap(challenge);

  const two = block(cw, "div", "case-two");

  const left = block(two, "div");

  const right = block(two, "div");

  block(left, "span", "case-kicker", "01 / THE BRIEF");

  block(left, "h3", "", "The challenge.");

block(
  right,
  "p",
  "case-challenge-text",
  x.challenge ||
  "Introduce the client brief, target audience and design problem here."
);

  caseBody.append(challenge);


  // ----------------------------------------------------------
  // SECTION D: CREATIVE THINKING
  // ----------------------------------------------------------

const process = el("section", "case-section case-process");

const pw = wrap(process);

// Group the text into its own column.
const processText = block(pw, "div", "case-process-text");

heading(
  processText,
  "02 / CREATIVE THINKING",
  ({
  mc: "Bringing illustrations to life.",
  ott: "Bringing a brand into motion.",
  steam: "From concept to commission.",
  en: "Building a brand from the ground up.",
  em: "Making everyday moments extraordinary.",
  hydro: "Designing with purpose.",
  caps: "From idea to creation."
})[id] || "From idea to direction.",
  x.approach ||
  "Explain the decisions, explorations and creative reasoning behind this work."
);

// Keep the artwork in its own column.
const pg = block(pw, "div", "case-grid");

    if (id === "steam") {
      pg.append(
        figure(
          root + "steam-reveal.gif",
          "Steam Whistle design reveal",
          ""
        )
      );
    } else {
      pg.append(
        figure(
          id === "em" || id === "ott"
            ? root + "process-01.gif"
            : root + "process-01.jpg",
          "Exploration / process image 01",
          "",
          demo + "process-01.svg"
        )
      );
    }

  pg.append(
    figure(
      assets["process-02"] || root + "process-02.jpg",
      "Exploration / process image 02",
      "",
      demo + "process-02.svg"
    )
  );

  caseBody.append(process);


  // ----------------------------------------------------------
  // SECTION E: DESIGN PRINCIPLE
  // ----------------------------------------------------------

  const quote = el(
  "section",
  id === "env" ? "case-quote enviro-quote" : "case-quote"
);

  const qw = wrap(quote);

  block(
    qw,
    "span",
    "case-kicker",
    "THE DESIGN PRINCIPLE"
  );

  block(
    qw,
    "blockquote",
    "",
    x.quote ||
    "Show the thinking that makes the work worth remembering."
  );

  caseBody.append(quote);


  // ----------------------------------------------------------
  // SECTION F: FINISHED WORK
  // ----------------------------------------------------------

  const solution = el("section", "case-section alt");

  const sw = wrap(solution);

  heading(
    sw,
    "03 / THE EXECUTION",
    "The work, in the world.",
    x.solution ||
    "Show the finished design system and how it works across different formats."
  );

  const sg = block(sw, "div", "case-grid");

  if (id === "em") {

  const videoCard = el("div", "case-video-card wide");

  const video = document.createElement("video");
  video.src = root + "logo-reveal.mp4";
  video.preload = "metadata";
  video.playsInline = true;
  video.controls = true;

  const cover = el("button", "case-video-cover");
  cover.style.backgroundImage = `url("${root}logo-reveal-titlecard.jpg")`;
  cover.style.backgroundSize = "cover";
  cover.style.backgroundPosition = "center";
  cover.type = "button";
  cover.setAttribute("aria-label", "Play Ener-C logo reveal");

  cover.innerHTML = `
    <span class="case-video-play">▶</span>
  `;

cover.addEventListener("click", () => {
  cover.hidden = true;

  video.controls = true;
  video.currentTime = 0;

  video.play().catch((error) => {
    console.error("Video playback failed:", error);
    cover.hidden = false;
  });
});

  video.addEventListener("ended", () => {
    video.controls = false;
    cover.hidden = false;
  });

  videoCard.append(video, cover);
  sg.append(videoCard);

} else if (id === "hydro") {


  const videoCard = el("div", "case-video-card wide");

  videoCard.appendChild(
    createYouTubePlayer(
      youtubeVideos.hydroOttawa.application01,
      "Hydro Ottawa - Application 01"
    )
  );

  sg.appendChild(videoCard);


} else if (id === "flip") {

  const videoCard = el("div", "case-video-card wide");

  videoCard.appendChild(
    createYouTubePlayer(
      youtubeVideos.mcmillan.flipbooks,
      "McMillan Holiday Flipbooks"
    )
  );

  sg.appendChild(videoCard);


} else if (id === "ott") {


  
  const videoCard = el("div", "case-video-card wide");

  videoCard.appendChild(
    createYouTubePlayer(
      youtubeVideos.ottawaLiving.application,
      "Waybridge / Ottawa Living Video"
    )
  );

  sg.appendChild(videoCard);


} else {


  sg.append(
    figure(
      assets["application-01"] ||
      root + "application-01.jpg",
      "Final application 01",
      "wide",
      demo + "application-wide.svg"
    )
  );

}

  if (id === "em" || id === "hydro") {

  function socialVideo(filename, title) {
    const card = el("div", "case-video-card square");

    const video = document.createElement("video");
    video.src = root + filename;
    video.preload = "metadata";
    video.playsInline = true;

    const cover = el("button", "case-video-cover");
    const titlecard = id === "hydro"
  ? filename.replace(".mp4", "-titlecard.jpg")
  : filename === "social-campaign.mp4"
    ? "social-titlecard.jpg"
    : "athletic-titlecard.jpg";

    cover.style.backgroundImage = `url("${root + titlecard}")`;
    cover.style.backgroundSize = "cover";
    cover.style.backgroundPosition = "center";
    cover.type = "button";
    cover.setAttribute("aria-label", "Play " + title);

    cover.innerHTML = `
      <span class="case-video-play">▶</span>
    `;

    cover.addEventListener("click", () => {
      cover.hidden = true;
      video.controls = true;
      video.currentTime = 0;

      video.play().catch((error) => {
        console.error("Video playback failed:", error);
        cover.hidden = false;
      });
    });

    video.addEventListener("ended", () => {
      video.controls = false;
      cover.hidden = false;
    });

    card.append(video, cover);
    return card;
  }


if (id === "hydro") {

  sg.append(
    createYouTubePlayer(
      youtubeVideos.hydroOttawa.application02,
      "Hydro Ottawa - Application 02"
    )
  );

  sg.append(
    createYouTubePlayer(
      youtubeVideos.hydroOttawa.application03,
      "Hydro Ottawa - Application 03"
    )
  );


} else {

  sg.append(
    socialVideo("social-campaign.mp4", "Social Campaigns")
  );

  sg.append(
    socialVideo("athlete-campaign.mp4", "Athlete Campaign")
  );

}

} else if (id === "flip") {

  function flipVideo(number) {
    const card = el("div", "case-video-card square");

    const video = document.createElement("video");
    video.src = root + `application-${number}.mp4`;
    video.preload = "metadata";
    video.playsInline = true;
    video.controls = false;

    const cover = el("button", "case-video-cover");
    cover.type = "button";
    cover.setAttribute("aria-label", `Play McMillan video ${number}`);
    cover.style.backgroundImage = `url("${root}application-${number}-title.jpg")`;
    cover.style.backgroundSize = "cover";
    cover.style.backgroundPosition = "center";

    cover.innerHTML = `<span class="case-video-play">▶</span>`;

    cover.addEventListener("click", () => {
      cover.hidden = true;
      video.controls = true;
      video.currentTime = 0;

      video.play().catch((error) => {
        console.error("Video playback failed:", error);
        cover.hidden = false;
        video.controls = false;
      });
    });

    video.addEventListener("ended", () => {
      video.controls = false;
      cover.hidden = false;
    });

    card.append(video, cover);
    return card;
  }

  sg.append(flipVideo("02"));
  sg.append(flipVideo("03"));

} else {

  sg.append(
    figure(
      assets["application-02"] ||
      root + (id === "caps" || id === "ott" || id === "steam" ? "application-02.jpg" : "application-02.webp"),
      "Final application 02",
      "",
      demo + "application-02.svg"
    )
  );

  sg.append(
    figure(
id === "ott" || id === "steam"
  ? root + "application-03.jpg"
  : assets["application-03"] ||
    root + (id === "caps" ? "application-03.jpg" : "application-03.webp"),
      "Final application 03",
      "",
      demo + "application-03.svg"
    )
  );

}

  caseBody.append(solution);


  // ----------------------------------------------------------
  // SECTION G: ADDITIONAL ARTWORK AND VIDEOS
  // ----------------------------------------------------------

  const entry = mediaManifest[id];

  if (id !== "env" && id !== "ott" && id !== "steam" && id !== "flip" && entry?.media?.length) {

    const extra = el("section", "case-section");

    const ew = wrap(extra);

heading(
  ew,
  "04 / THE FINAL CAMPAIGN",
 id === "caps" ? "From concept to creation." : "Bringing the concept to life.",
id === "caps" ? "What began as an idea has grown into a collection of original, locally manufactured headwear. Each hat brings together thoughtful design, carefully selected materials and years of hands-on manufacturing experience. From one-of-a-kind upcycled pieces to original designs, every cap is cut and sewn from scratch in Ottawa." : "The finished commercial brings together live-action footage, green-screen compositing and seamless transitions to transform an ordinary morning into something vibrant and full of energy."
);


if (id === "em" || id === "hydro") {

  const campaignCard = el("div", "case-video-card wide");

  const videoId = id === "em"
    ? youtubeVideos.enerC.campaign
    : youtubeVideos.hydroOttawa.campaign;

  const videoTitle = id === "em"
    ? "Ener-C Campaign Video"
    : "Hydro Ottawa Campaign Video";

  campaignCard.appendChild(
    createYouTubePlayer(videoId, videoTitle)
  );

  ew.appendChild(campaignCard);

}


if (id === "caps") {
  ew.append(
    figure(
      root + "campaign-01.jpg",
      "Captcha finished hat collection",
      "wide"
    )
  );
}

    const grid = block(ew, "div", "case-grid");

    entry.media.forEach(([kind, path, label]) => {


  if (kind === "youtube") {
    const f = el("figure", "case-visual");

    f.appendChild(
      createYouTubePlayer(path, label)
    );

    block(f, "figcaption", "", label);
    grid.append(f);

    return;
  }


      const f = el("figure", "case-visual");

      const media = document.createElement(
        kind === "video" ? "video" : "img"
      );

      if (kind === "video") {

        media.controls = true;
        media.preload = "metadata";
        media.playsInline = true;

      } else {

        media.alt = label;
        media.loading = "lazy";

      }

      media.onerror = () => {
        f.remove();
      };

      media.src = path;

      f.append(media);

      block(f, "figcaption", "", label);

      grid.append(f);

    });

    caseBody.append(extra);
  }


  // ----------------------------------------------------------
  // SECTION H: OUTCOME AND REFLECTION
  // ----------------------------------------------------------

const outro = el("section", "case-outro case-outcome");

const ow = wrap(outro);

// Left column: Outcome text
const outcomeText = block(ow, "div", "case-outcome-text");

heading(
  outcomeText,
  id === "env" || id === "ott" || id === "steam" || id === "flip" ? "04 / REFLECTION" : "05 / REFLECTION",
  "The outcome.",
  x.result ||
  "A cohesive visual identity designed to work across print and digital applications."
);

if (id === "hydro") {

  const outcomeImage = block(ow, "div", "case-outcome-image");

  outcomeImage.append(
    figure(
      root + "outcome.jpg",
      "Hydro Ottawa finished motion design"
    )
  );

}

if (id === "em") {

  const outcomeImage = block(ow, "div", "case-outcome-image");

  outcomeImage.append(
    figure(
      root + "outcome.jpg",
      "Ener-C finished campaign"
    )
  );

}

if (id === "flip") {
  const outcomeImage = block(ow, "div", "case-outcome-image");

  outcomeImage.append(
    figure(
      root + "outcome.gif",
      "McMillan creative projects and animation"
    )
  );
}

if (id === "caps") {

  const outcomeImage = block(ow, "div", "case-outcome-image");

  outcomeImage.append(
    figure(
      root + "outcome-01.jpg",
      "Captcha finished headwear"
    )
  );

}

// Right column: Finished brand logo
if (id === "env") {

  const outcomeImage = block(ow, "div", "case-outcome-image");

  outcomeImage.append(
    figure(
      root + "logo.jpg",
      "Final Enviro-Stewards brand identity"
    )
  );

}


if (id === "steam") {
  const outcomeImage = block(ow, "div", "case-outcome-image");

  outcomeImage.append(
    figure(
      root + "outcome.jpg",
      "Steam Whistle finished T-shirt design"
    )
  );
}


caseBody.append(outro);


if (id === "ott") {
  const outcomeCard = block(ow, "div", "case-outcome-image");
  const videoCard = el("div", "case-video-card");

  const video = document.createElement("video");
  video.src = root + "outcome-video.mp4";
  video.preload = "metadata";
  video.playsInline = true;

  const cover = el("button", "case-video-cover");
  cover.type = "button";
  cover.setAttribute("aria-label", "Play Waybridge Realty outcome video");
  cover.style.backgroundImage = `url("${root}outcome-title.jpg")`;
  cover.style.backgroundSize = "cover";
  cover.style.backgroundPosition = "center";
  cover.innerHTML = `<span class="case-video-play">▶</span>`;

  cover.addEventListener("click", () => {
    cover.hidden = true;
    video.controls = true;
    video.currentTime = 0;

    video.play().catch((error) => {
      console.error("Outcome video playback failed:", error);
      cover.hidden = false;
      video.controls = false;
    });
  });

  video.addEventListener("ended", () => {
    video.controls = false;
    cover.hidden = false;
  });

  videoCard.append(video, cover);
  outcomeCard.append(videoCard);
}


}


// ============================================================
// 04. OPENING AND CLOSING CASE STUDIES
// ============================================================

function openCase(id) {

  if (!cases[id] || !dialog) return;

  buildCase(id);

  dialog.showModal();

  document.body.classList.add("case-open");

  dialog.scrollTop = 0;
}


function closeCase() {

  if (dialog?.open) {
    dialog.close();
  }
}


function setupCaseStudyInteractions() {

  document.querySelectorAll(
    ".project[data-project]"
  ).forEach(card => {

    // Entire card is clickable.
    card.addEventListener("click", () => {

      openCase(card.dataset.project);

    });

    // Keyboard accessibility.
    card.addEventListener("keydown", event => {

      if (
        event.key === "Enter" ||
        event.key === " "
      ) {

        event.preventDefault();

        openCase(card.dataset.project);

      }

    });

  });


  const closeButton = document.getElementById("close");

  const bottomCloseButton = document.getElementById(
    "close-bottom"
  );

  if (closeButton) {
    closeButton.addEventListener("click", closeCase);
  }

  if (bottomCloseButton) {
    bottomCloseButton.addEventListener("click", closeCase);
  }


  if (dialog) {

    dialog.addEventListener("close", () => {

      document.body.classList.remove("case-open");

      caseBody.querySelectorAll("video").forEach(video => {
        video.pause();
      });

    });

  }

}


// ============================================================
// 05. PORTFOLIO FILTERS
// ============================================================

function setupPortfolioFilters() {

  const buttons = document.querySelectorAll("[data-filter]");

  const projects = document.querySelectorAll(".project");

  buttons.forEach(button => {

    button.addEventListener("click", () => {

      buttons.forEach(otherButton => {

        const active = otherButton === button;

        otherButton.classList.toggle("active", active);

        otherButton.setAttribute(
          "aria-pressed",
          String(active)
        );

      });


      const selectedFilter = button.dataset.filter;

      projects.forEach(project => {

        const categories = (
          project.dataset.category || ""
        ).split(" ");

        project.hidden = (
          selectedFilter !== "all" &&
          !categories.includes(selectedFilter)
        );

      });

    });

  });

}


// ============================================================
// 06. MOBILE NAVIGATION
// ============================================================

function setupMobileNavigation() {

  const menu = document.getElementById("menu");

  const links = document.getElementById("navlinks");

  if (!menu || !links) return;

  menu.addEventListener("click", () => {

    const open = links.classList.toggle("open");

    menu.setAttribute(
      "aria-expanded",
      String(open)
    );

  });


  links.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      links.classList.remove("open");

      menu.setAttribute("aria-expanded", "false");

    });

  });

}


// ============================================================
// 07. FOOTER YEAR
// ============================================================

function updateFooterYear() {

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

}


// ============================================================
// 08. SCROLL PARALLAX
// ============================================================

// Preserves your existing reversible parallax effects.

function setupParallax() {

  const reduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  const items = [

    ...Array.from(
      document.querySelectorAll(".art .giant")
    ).map(element => ({

      el: element,
      host: element.closest(".art"),
      strength: 0.20

    })),

    {
      el: document.querySelector(".hero h1"),
      host: document.querySelector(".hero"),
      strength: 0.10
    },

    {
      el: document.querySelector(".hero-bottom"),
      host: document.querySelector(".hero"),
      strength: 0.06
    },

    {
      el: document.querySelector(".feature-card"),
      host: document.querySelector(".feature"),
      strength: 0.11,
      base: "rotate(3deg)"
    }

  ].filter(item => item.el && item.host);


  let scheduled = false;


  function update() {

    scheduled = false;

    if (reduced.matches) {

      items.forEach(({ el }) => {
        el.style.removeProperty("transform");
      });

      return;
    }


    const vh = window.innerHeight;

    for (const { el, host, strength, base } of items) {

      const rect = host.getBoundingClientRect();

      if (
        rect.bottom < -150 ||
        rect.top > vh + 150
      ) {
        continue;
      }

      const delta = (
        vh / 2 -
        (rect.top + rect.height / 2)
      );

      const offset = Math.max(
        -95,
        Math.min(95, delta * strength)
      );

      el.style.transform =
        `translate3d(0, ${offset.toFixed(2)}px, 0) ${base || ""}`;

    }

  }


  function requestUpdate() {

    if (!scheduled) {

      scheduled = true;

      requestAnimationFrame(update);

    }

  }


  window.addEventListener(
    "scroll",
    requestUpdate,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    requestUpdate,
    { passive: true }
  );

  reduced.addEventListener("change", requestUpdate);

  requestUpdate();

}


// ============================================================
// 09. WEBSITE INITIALIZATION
// ============================================================

// All interactive features start here.

function initializeWebsite() {

  setupCaseStudyInteractions();

  setupPortfolioFilters();

  setupMobileNavigation();

  updateFooterYear();

  setupParallax();

  // This fixes your missing cover images.
  loadOptionalImages();

}


// Wait until the page is ready before initializing.

if (document.readyState === "loading") {

  document.addEventListener(
    "DOMContentLoaded",
    initializeWebsite,
    { once: true }
  );

} else {

  initializeWebsite();

}


/* ==========================================
   FULL CIRCLE / INTERACTIVE SCROLL WHEEL
   ========================================== */

function initCareerWheel() {
  const wheel = document.getElementById("career-wheel");
  const ring = document.getElementById("career-wheel-ring");

  if (!wheel || !ring) return;

  const stats = [
  wheel.querySelector(".stat-one"),
  wheel.querySelector(".stat-two"),
  wheel.querySelector(".stat-three"),
  wheel.querySelector(".stat-four")
  ];

  let progress = 0;

  // How much scrolling completes one revolution.
  // Increase this number for slower rotation.

  const scrollDistance = 900;

  function renderWheel() {
    // Rotate the circle through 360 degrees.

    ring.style.transform = `rotate(${progress * 360}deg)`;

    // Reveal statistics progressively.

    const thresholds = [0.15, 0.35, 0.6, 0.85];

    stats.forEach((stat, index) => {
      if (!stat) return;

      stat.classList.toggle(
        "is-visible",
        progress >= thresholds[index]
      );
    });
  }

  function handleWheel(event) {
    // Respect reduced-motion preferences.

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Normalize mouse wheel and trackpad scrolling.

    let delta = event.deltaY;

    if (event.deltaMode === 1) {
      delta *= 16;
    } else if (event.deltaMode === 2) {
      delta *= window.innerHeight;
    }

    const movingForward = delta > 0;
    const movingBackward = delta < 0;

    // Allow normal page scrolling once the
    // animation reaches either end.

    if (
      (movingForward && progress >= 1) ||
      (movingBackward && progress <= 0)
    ) {
      return;
    }

    // Keep scrolling inside the wheel.

    event.preventDefault();

    progress = Math.max(
      0,
      Math.min(1, progress + delta / scrollDistance)
    );

    renderWheel();
  }

  wheel.addEventListener("wheel", handleWheel, {
    passive: false
  });

  // Display the initial state.

  renderWheel();
}

initCareerWheel();


/* ==========================================
   CAREER MAP / TIMELINE SCROLL TRIGGER
   ========================================== */

function initCareerTimeline() {
  const timeline = document.querySelector(".rail");

  if (!timeline) return;

  // Respect visitors who prefer reduced motion.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    timeline.classList.add("timeline-visible");
    return;
  }

  // Watch for the timeline entering the screen.
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Start the animation.
          entry.target.classList.add("timeline-visible");

          // Only animate once per page visit.
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.25
    }
  );

  observer.observe(timeline);
}

initCareerTimeline();


/* ==========================================
   COVER LETTER / POPUP CONTROLS
   ========================================== */

function initCoverLetterModal() {
  const modal = document.getElementById("cover-modal");
  const openButton = document.getElementById("open-cover-letter");
  const closeButton = document.getElementById("close-cover-letter");

  if (!modal || !openButton || !closeButton) return;

  let previousFocus = null;

  function openModal() {
    previousFocus = document.activeElement;

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
    closeButton.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    document.body.style.overflow = "";
    previousFocus?.focus();
  }

  // Open when the cover letter button is clicked.
  openButton.addEventListener("click", openModal);

  // Close using the X button.
  closeButton.addEventListener("click", closeModal);

  // Close when clicking the dark background.
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  // Escape closes the popup; Tab stays inside it.
  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeModal();
    }

    if (event.key === "Tab") {
      const focusable = Array.from(
        modal.querySelectorAll(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((element) => element.getClientRects().length > 0);

      if (!focusable.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

initCoverLetterModal();



/* =========================================
   FLOATING CONTACT BUSINESS CARD
========================================= */

const contactCard = document.getElementById("contact-card");
const openContactCard = document.getElementById("open-contact-card");
const closeContactCard = document.getElementById("close-contact-card");

if (contactCard && openContactCard && closeContactCard) {

  // Open the contact card
  openContactCard.addEventListener("click", () => {
    contactCard.showModal();
  });

  // Close using the X button
  closeContactCard.addEventListener("click", () => {
    contactCard.close();
  });

  // Close when clicking outside the card
  contactCard.addEventListener("click", (event) => {
    if (event.target === contactCard) {
      contactCard.close();
    }
  });

}


/* =========================================
   REUSABLE YOUTUBE VIDEO PLAYER
========================================= */

function createYouTubePlayer(videoId, title = "Project video") {
  const wrapper = document.createElement("div");
  wrapper.className = "youtube-player";

  const iframe = document.createElement("iframe");

  iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
  iframe.title = title;
  iframe.loading = "lazy";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.allowFullscreen = true;

  wrapper.appendChild(iframe);

  return wrapper;
}



