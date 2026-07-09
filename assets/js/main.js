// Include partials, menu mobile, back-to-top — theo mục 5 CLAUDE.md
(function () {
  async function includePartials() {
    const nodes = document.querySelectorAll("[data-include]");
    await Promise.all(
      Array.from(nodes).map(async (node) => {
        const path = node.getAttribute("data-include");
        try {
          const res = await fetch(path);
          node.innerHTML = await res.text();
        } catch (err) {
          console.error("Không thể tải partial:", path, err);
        }
      })
    );
  }

  function initMobileNav() {
    const toggle = document.getElementById("navToggle");
    const nav = document.getElementById("mainNav");
    const backdrop = document.getElementById("navBackdrop");
    if (!toggle || !nav) return;

    function setOpen(isOpen) {
      nav.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      if (backdrop) backdrop.classList.toggle("is-visible", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    }

    toggle.addEventListener("click", () => {
      setOpen(!nav.classList.contains("is-open"));
    });

    if (backdrop) {
      backdrop.addEventListener("click", () => setOpen(false));
    }

    // Dropdown toggle bằng chạm trên mobile
    nav.querySelectorAll(".has-dropdown > a").forEach((link) => {
      link.addEventListener("click", (e) => {
        if (window.innerWidth > 1240) return;
        e.preventDefault();
        link.parentElement.classList.toggle("is-open");
      });
    });
  }

  function initTabs() {
    const tabs = document.querySelectorAll("[data-tab-target]");
    const panels = document.querySelectorAll("[data-tab-panel]");
    if (!tabs.length) return;

    tabs.forEach((tab) => {
      tab.setAttribute("aria-pressed", tab.classList.contains("is-active") ? "true" : "false");
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab-target");
        tabs.forEach((t) => {
          t.classList.toggle("is-active", t === tab);
          t.setAttribute("aria-pressed", t === tab ? "true" : "false");
        });
        panels.forEach((p) => {
          const match = target === "all" || p.getAttribute("data-tab-panel") === target;
          p.classList.toggle("is-hidden", !match);
        });
      });
    });
  }

  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;

    window.addEventListener("scroll", () => {
      btn.classList.toggle("is-visible", window.scrollY > 480);
    });

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function initHeroCarousel() {
    const root = document.getElementById("heroCarousel");
    const track = document.getElementById("heroCarouselTrack");
    const dotsWrap = document.getElementById("heroDots");
    const prevBtn = document.getElementById("heroPrev");
    const nextBtn = document.getElementById("heroNext");
    if (!root || !track || !dotsWrap) return;

    const slides = Array.from(track.children);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let index = 0;
    let autoplayTimer = null;

    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "hero-carousel__dot" + (i === 0 ? " is-active" : "");
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Xem ảnh ${i + 1}`);
      dot.setAttribute("aria-selected", i === 0 ? "true" : "false");
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    });
    const dots = Array.from(dotsWrap.children);

    function goTo(newIndex) {
      index = (newIndex + slides.length) % slides.length;
      track.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((d, i) => {
        d.classList.toggle("is-active", i === index);
        d.setAttribute("aria-selected", i === index ? "true" : "false");
      });
    }

    function next() {
      goTo(index + 1);
    }

    function prev() {
      goTo(index - 1);
    }

    function startAutoplay() {
      if (prefersReducedMotion || slides.length < 2) return;
      stopAutoplay();
      autoplayTimer = setInterval(next, 5500);
    }

    function stopAutoplay() {
      if (autoplayTimer) clearInterval(autoplayTimer);
      autoplayTimer = null;
    }

    if (prevBtn) prevBtn.addEventListener("click", () => { prev(); startAutoplay(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { next(); startAutoplay(); });

    root.addEventListener("mouseenter", stopAutoplay);
    root.addEventListener("mouseleave", startAutoplay);

    root.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { prev(); startAutoplay(); }
      if (e.key === "ArrowRight") { next(); startAutoplay(); }
    });

    // Vuốt trái/phải trên mobile
    let touchStartX = 0;
    let touchDeltaX = 0;

    track.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      touchDeltaX = 0;
      stopAutoplay();
    }, { passive: true });

    track.addEventListener("touchmove", (e) => {
      touchDeltaX = e.touches[0].clientX - touchStartX;
    }, { passive: true });

    track.addEventListener("touchend", () => {
      if (touchDeltaX > 40) {
        prev();
      } else if (touchDeltaX < -40) {
        next();
      }
      startAutoplay();
    });

    goTo(0);
    startAutoplay();
  }

  function initActivityFilters() {
    const list = document.getElementById("activityList");
    if (!list) return;

    const cards = Array.from(list.querySelectorAll(".activity-card"));
    const tabs = Array.from(document.querySelectorAll("[data-activity-category]"));
    const statusSelect = document.getElementById("filterStatus");
    const formatSelect = document.getElementById("filterFormat");
    const areaSelect = document.getElementById("filterArea");
    const searchInput = document.getElementById("activitySearch");
    const searchBtn = document.getElementById("activitySearchBtn");
    const emptyState = document.getElementById("activityEmpty");
    let activeCategory = "all";

    function applyFilters() {
      const status = statusSelect.value;
      const format = formatSelect.value;
      const area = areaSelect.value;
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const matches =
          (activeCategory === "all" || card.dataset.category === activeCategory) &&
          (status === "all" || card.dataset.status === status) &&
          (format === "all" || card.dataset.format === format) &&
          (area === "all" || card.dataset.area === area) &&
          (!query || card.dataset.title.includes(query));

        card.classList.toggle("is-hidden", !matches);
        if (matches) visibleCount++;
      });

      if (emptyState) emptyState.classList.toggle("is-visible", visibleCount === 0);
    }

    tabs.forEach((tab) => {
      tab.setAttribute("aria-pressed", tab.classList.contains("is-active") ? "true" : "false");
      tab.addEventListener("click", () => {
        activeCategory = tab.getAttribute("data-activity-category");
        tabs.forEach((t) => {
          t.classList.toggle("is-active", t === tab);
          t.setAttribute("aria-pressed", t === tab ? "true" : "false");
        });
        applyFilters();
      });
    });

    [statusSelect, formatSelect, areaSelect].forEach((el) => {
      if (el) el.addEventListener("change", applyFilters);
    });

    if (searchBtn) searchBtn.addEventListener("click", applyFilters);
    if (searchInput) {
      searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          applyFilters();
        }
      });
    }

    const hash = location.hash.replace("#", "");
    const target = tabs.find((t) => t.getAttribute("data-activity-category") === hash);
    if (target) target.click();
  }

  function initNewsFilter() {
    const list = document.getElementById("newsList");
    if (!list) return;

    const items = Array.from(list.querySelectorAll(".news-list-item"));
    const filterLinks = Array.from(document.querySelectorAll("[data-news-filter]"));
    const emptyState = document.getElementById("newsEmpty");
    if (!filterLinks.length) return;

    filterLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const category = link.getAttribute("data-news-filter");
        filterLinks.forEach((l) => {
          l.classList.toggle("is-active", l === link);
          l.setAttribute("aria-pressed", l === link ? "true" : "false");
        });
        let visibleCount = 0;
        items.forEach((item) => {
          const matches = category === "all" || item.getAttribute("data-news-category") === category;
          item.classList.toggle("is-hidden", !matches);
          if (matches) visibleCount++;
        });
        list.classList.toggle("is-hidden", visibleCount === 0);
        if (emptyState) emptyState.classList.toggle("is-visible", visibleCount === 0);
      });
    });
  }

  function initPartnersMarquee() {
    ["partnersTrackA", "partnersTrackB"].forEach((id) => {
      const track = document.getElementById(id);
      if (!track) return;
      const original = Array.from(track.children);
      original.forEach((node) => track.appendChild(node.cloneNode(true)));
    });
  }

  function initActivityNewsSplit() {
    const pool = document.getElementById("eventsPool");
    const activityCol = document.getElementById("activityColumn");
    const newsCol = document.getElementById("newsColumn");
    if (!pool || !activityCol || !newsCol) return;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const items = Array.from(pool.children);
    const activities = [];
    const news = [];

    items.forEach((item) => {
      const dateStr = item.getAttribute("data-event-date");
      if (!dateStr) {
        activities.push(item);
        return;
      }
      const eventDate = new Date(`${dateStr}T00:00:00`);
      if (eventDate >= today) {
        activities.push(item);
      } else {
        news.push(item);
      }
    });

    // Hoạt động: chưa có ngày (chương trình liên tục) trước, có ngày thì gần nhất trước
    activities.sort((a, b) => {
      const da = a.getAttribute("data-event-date");
      const db = b.getAttribute("data-event-date");
      if (da && db) return new Date(da) - new Date(db);
      if (da) return 1;
      if (db) return -1;
      return 0;
    });

    // Tin tức: mới nhất trước
    news.sort((a, b) => new Date(b.getAttribute("data-event-date")) - new Date(a.getAttribute("data-event-date")));

    activities.slice(0, 4).forEach((el) => activityCol.appendChild(el));
    news.slice(0, 4).forEach((el) => newsCol.appendChild(el));
    pool.remove();
  }

  function initProgramSearch() {
    const grid = document.getElementById("programGrid");
    if (!grid) return;

    const cards = Array.from(grid.querySelectorAll(".program-card"));
    const searchInput = document.getElementById("programSearch");
    const searchBtn = document.getElementById("programSearchBtn");
    const emptyState = document.getElementById("programEmpty");

    function applyFilter() {
      const query = searchInput.value.trim().toLowerCase();
      let visibleCount = 0;

      cards.forEach((card) => {
        const matches = !query || card.dataset.title.includes(query);
        card.classList.toggle("is-hidden", !matches);
        if (matches) visibleCount++;
      });

      if (emptyState) emptyState.classList.toggle("is-visible", visibleCount === 0);
    }

    if (searchBtn) searchBtn.addEventListener("click", applyFilter);
    if (searchInput) {
      searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          applyFilter();
        }
      });
    }
  }

  function initProfileToggle() {
    const toggle = document.getElementById("achievementsToggle");
    const panel = document.getElementById("achievementsPanel");
    if (!toggle || !panel) return;

    const label = toggle.querySelector(".profile-card__toggle-label");

    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      panel.hidden = isExpanded;
      if (label) {
        label.textContent = isExpanded ? "Xem thành tích tiêu biểu" : "Ẩn thành tích tiêu biểu";
      }
    });
  }

  function initServiceToggles() {
    const toggles = document.querySelectorAll(".service-row__toggle");

    toggles.forEach((toggle) => {
      const panel = document.getElementById(toggle.getAttribute("aria-controls"));
      if (!panel) return;

      const label = toggle.querySelector(".service-row__toggle-label");

      toggle.addEventListener("click", () => {
        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isExpanded));
        panel.hidden = isExpanded;
        if (label) {
          label.textContent = isExpanded ? "Xem chi tiết" : "Ẩn chi tiết";
        }
      });
    });
  }

  function initContactForm() {
    const form = document.getElementById("contactForm");
    const success = document.getElementById("contactSuccess");
    const submitBtn = form ? form.querySelector('button[type="submit"]') : null;
    if (!form) return;

    function validateField(field) {
      const group = field.closest(".form-group");
      if (!group) return true;
      let valid = field.checkValidity();
      group.classList.toggle("is-invalid", !valid);
      return valid;
    }

    form.querySelectorAll("input, textarea").forEach((field) => {
      field.addEventListener("blur", () => validateField(field));
      field.addEventListener("input", () => {
        if (field.closest(".form-group")?.classList.contains("is-invalid")) {
          validateField(field);
        }
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fields = Array.from(form.querySelectorAll("input, textarea"));
      let firstInvalid = null;
      fields.forEach((field) => {
        const valid = validateField(field);
        if (!valid && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        firstInvalid.focus();
        return;
      }

      if (submitBtn) {
        submitBtn.classList.add("btn--loading");
        submitBtn.disabled = true;
      }

      window.setTimeout(() => {
        form.reset();
        form.querySelectorAll(".form-group.is-invalid").forEach((g) => g.classList.remove("is-invalid"));
        form.classList.add("is-hidden");
        if (submitBtn) {
          submitBtn.classList.remove("btn--loading");
          submitBtn.disabled = false;
        }
        if (success) {
          success.classList.remove("is-hidden");
          success.focus();
        }
      }, 700);
    });
  }

  function setYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  function markActiveNav() {
    const current = location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".main-nav__list > li > a").forEach((link) => {
      const target = link.getAttribute("href").split("/").pop().split("#")[0] || "index.html";
      link.classList.toggle("is-active", target === current);
    });
  }

  document.addEventListener("DOMContentLoaded", async () => {
    await includePartials();
    initMobileNav();
    initTabs();
    initBackToTop();
    initHeroCarousel();
    initActivityFilters();
    initNewsFilter();
    initActivityNewsSplit();
    initPartnersMarquee();
    initProgramSearch();
    initProfileToggle();
    initServiceToggles();
    initContactForm();
    setYear();
    markActiveNav();
    document.dispatchEvent(new CustomEvent("partials:loaded"));
  });
})();
