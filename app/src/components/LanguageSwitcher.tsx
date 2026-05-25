type Lang = "fa" | "en" | "fr";

const LanguageSwitcher = ({ current }: { current: Lang }) => {
  const langs: { code: Lang; label: string; href: string }[] = [
    { code: "fa", label: "FA", href: "/" },
    { code: "en", label: "EN", href: "/en/" },
    { code: "fr", label: "FR", href: "/fr/" },
  ];

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      {langs.map((l, i) => (
        <span key={l.code} className="flex items-center gap-1">
          {i > 0 && <span className="text-foreground/30">|</span>}
          {l.code === current ? (
            <span className="text-primary font-bold px-1">{l.label}</span>
          ) : (
            <a
              href={l.href}
              className="px-1 text-foreground/70 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          )}
        </span>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
