"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";

type NavItem = {
  id: string;
  label: string;
};

type SocialLinkId = "linkedin" | "github";

type SocialLink = {
  id: SocialLinkId;
  label: string;
  href: string;
};

interface SiteHeaderProps {
  navItems: readonly NavItem[];
  socialLinks?: readonly SocialLink[];
}

export function SiteHeader({ navItems, socialLinks = [] }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const topOffset = 120;

    const sections = sectionIds
      .map((id) => {
        const element = document.getElementById(id);
        return element ? { id, element } : null;
      })
      .filter((section): section is { id: string; element: HTMLElement } => Boolean(section));

    const getActiveIdFromScroll = () => {
      if (!sections.length) return sectionIds[0] ?? "home";

      // At top of page (including #home with no hash), keep Home active — avoids
      // snapping to Contact on short pages where the viewport already shows the bottom.
      if (window.scrollY < 12) {
        return "home";
      }

      const scrollPosition = window.scrollY + topOffset;
      let currentId = sections[0].id;

      for (const section of sections) {
        if (section.element.offsetTop <= scrollPosition) {
          currentId = section.id;
        }
      }

      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const contentTallerThanViewport = documentHeight > window.innerHeight + 48;
      const nearBottom = pageBottom >= documentHeight - 24;
      if (contentTallerThanViewport && nearBottom && window.scrollY > 80) {
        return sections[sections.length - 1].id;
      }

      return currentId;
    };

    const syncActiveIdFromScroll = () => {
      setActiveId((prev) => {
        const next = getActiveIdFromScroll();
        return prev === next ? prev : next;
      });
    };

    const updateFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sectionIds.includes(hash)) {
        setActiveId(hash);
        return;
      }

      syncActiveIdFromScroll();
    };

    let isTicking = false;
    const onScroll = () => {
      if (isTicking) return;

      isTicking = true;
      window.requestAnimationFrame(() => {
        syncActiveIdFromScroll();
        isTicking = false;
      });
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const nextId = anchor.getAttribute("href")?.replace("#", "");
      if (nextId && sectionIds.includes(nextId)) {
        setActiveId(nextId);
      }
    };

    updateFromHash();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", syncActiveIdFromScroll);
    window.addEventListener("hashchange", updateFromHash);
    window.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", syncActiveIdFromScroll);
      window.removeEventListener("hashchange", updateFromHash);
      window.removeEventListener("click", onClick);
    };
  }, [navItems]);

  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-[68px] w-full max-w-[1180px] items-center justify-between gap-3 px-4 sm:px-6">
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-semibold leading-none text-(--color-text) no-underline hover:no-underline md:text-xl"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-(--color-border) font-sans text-[0.72rem] font-semibold tracking-[0.08em] text-(--color-primary)">
            ST
          </span>
          Supriya Thukral
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--color-border) text-(--color-text) md:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = item.id === activeId;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`inline-flex min-h-11 items-center rounded-full px-4 py-2 text-[0.95rem] font-medium no-underline transition-colors hover:no-underline ${
                  isActive
                    ? "bg-(--color-primary) text-white"
                    : "text-(--color-text-secondary) hover:bg-(--color-bg-soft) hover:text-(--color-primary)"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {socialLinks.length > 0 ? (
          <div className="hidden items-center gap-1 md:flex">
            {socialLinks.map((link) => {
              const Icon = link.id === "linkedin" ? Linkedin : Github;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-(--color-border) text-(--color-text) transition-colors hover:bg-(--color-bg-soft) hover:text-(--color-primary)"
                  aria-label={`${link.label} (opens in new tab)`}
                  title={`${link.label} (opens in new tab)`}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        ) : null}
      </nav>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-(--color-border) bg-white px-4 pb-3 pt-2 md:hidden"
        >
          {navItems.map((item) => {
            const isActive = item.id === activeId;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`mb-2 flex min-h-11 items-center rounded-xl px-3 text-base font-medium no-underline hover:no-underline ${
                  isActive
                    ? "bg-(--color-primary) text-white"
                    : "text-(--color-text-secondary) hover:bg-(--color-bg-soft) hover:text-(--color-primary)"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            );
          })}

          {socialLinks.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2 border-t border-(--color-border) pt-3">
              {socialLinks.map((link) => {
                const Icon = link.id === "linkedin" ? Linkedin : Github;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-(--color-border) px-3 text-sm font-medium text-(--color-text) no-underline transition-colors hover:bg-(--color-bg-soft) hover:text-(--color-primary) hover:no-underline"
                    onClick={() => setIsOpen(false)}
                    aria-label={`${link.label} (opens in new tab)`}
                    title={`${link.label} (opens in new tab)`}
                  >
                    <Icon size={18} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>
      )}
    </header>
  );
}
