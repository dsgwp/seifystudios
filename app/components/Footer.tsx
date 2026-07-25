const CONTACT_EMAIL = "danielseify@yahoo.com";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-edge px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <span className="font-display font-bold text-ivory text-base">
          Seify Studios
        </span>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-dim text-sm hover:text-ivory transition-colors duration-200"
        >
          {CONTACT_EMAIL}
        </a>

        <p className="text-dim text-sm">
          &copy; {year} Seify Studios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
