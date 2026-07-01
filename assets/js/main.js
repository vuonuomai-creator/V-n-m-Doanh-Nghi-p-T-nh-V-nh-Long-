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
        if (window.innerWidth > 860) return;
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
      tab.addEventListener("click", () => {
        const target = tab.getAttribute("data-tab-target");
        tabs.forEach((t) => t.classList.toggle("is-active", t === tab));
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

  function initContactForm() {
    const form = document.getElementById("contactForm");
    const success = document.getElementById("contactSuccess");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      form.reset();
      form.classList.add("is-hidden");
      if (success) success.classList.remove("is-hidden");
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
    initContactForm();
    setYear();
    markActiveNav();
    document.dispatchEvent(new CustomEvent("partials:loaded"));
  });
})();
