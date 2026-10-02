export const ServiceFilter = ({
  docs = [],
  services = [],
  variant = "pills",
  label = "Filter by service",
  param = "service",
  syncUrl = true,
}) => {
  const [active, setActive] = useState("all");

  useEffect(() => {
    if (!syncUrl) return;
    const fromUrl = new URLSearchParams(window.location.search).get(param);
    if (fromUrl && services.some((s) => s.id === fromUrl)) setActive(fromUrl);
  }, []);

  const select = (id) => {
    setActive(id);
    if (!syncUrl) return;
    const url = new URL(window.location.href);
    if (id === "all") url.searchParams.delete(param);
    else url.searchParams.set(param, id);
    window.history.replaceState(null, "", url);
  };

  const shared = docs.filter((d) => d.services.includes("all"));
  const specificServices = services.filter(
    (s) => s.id !== "all" && (active === "all" || s.id === active)
  );

  const SectionHeading = ({ children, badge }) => (
    <div className="flex items-center gap-3 mt-8 mb-3">
      <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        {children}
      </span>
      {badge && <span className="service-filter-badge">{badge}</span>}
    </div>
  );

  const DocGrid = ({ items }) => (
    <Columns cols={2}>
      {items.map((d) => (
        <Card key={d.href} title={d.title} href={d.href} icon="link" horizontal />
      ))}
    </Columns>
  );

  return (
    <div className="service-filter not-prose">
      <div className="flex flex-wrap items-center gap-4">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {label}
        </span>

        {variant === "dropdown" ? (
          <select
            value={active}
            onChange={(e) => select(e.target.value)}
            aria-label={label}
            className="service-filter-select"
          >
            {services.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        ) : (
          <div role="tablist" aria-label={label} className="flex flex-wrap gap-2">
            {services.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={active === s.id}
                onClick={() => select(s.id)}
                className={["service-filter-pill", active === s.id && "service-filter-pill-active"].filter(Boolean).join(" ")}
              >
                {s.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <hr className="my-6 border-zinc-950/10 dark:border-white/10" />

      <SectionHeading>Applies to every service</SectionHeading>
      <DocGrid items={shared} />

      {specificServices.map((s) => {
        const items = docs.filter((d) => d.services.includes(s.id));
        if (items.length === 0) return null;
        return (
          <div key={s.id}>
            <SectionHeading badge="Service-specific">{s.label}</SectionHeading>
            <DocGrid items={items} />
          </div>
        );
      })}
    </div>
  );
};
