"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = {
  id: string;
  label: string;
};

interface SiteHeaderProps {
  navItems: readonly NavItem[];
}

export function SiteHeader({ navItems }: SiteHeaderProps) {
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

      const scrollPosition = window.scrollY + topOffset;
      let currentId = sections[0].id;

      for (const section of sections) {
        if (section.element.offsetTop <= scrollPosition) {
          currentId = section.id;
        }
      }

      const pageBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (pageBottom >= documentHeight - 2) {
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
                className={`rounded-full px-4 py-2 text-[0.95rem] font-medium no-underline transition-colors hover:no-underline ${
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
        </div>
      )}
    </header>
  );
}
