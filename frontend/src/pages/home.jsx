import { useState } from "react";

const MOVIES = [
  {
    id: 1,
    emoji: "🌌",
    title: "Voidwalker",
    genre: "Sci-Fi",
    bg: "from-[#1a0533] via-[#4c0b8a] to-[#1d1040]",
  },
  {
    id: 2,
    emoji: "🌊",
    title: "Tide",
    genre: "Drama",
    bg: "from-[#0a1a2a] via-[#1a4060] to-[#0d2a1e]",
  },
  {
    id: 3,
    emoji: "🔥",
    title: "Embers",
    genre: "Thriller",
    bg: "from-[#2a0a00] via-[#8B1a00] to-[#1a0a00]",
  },
  {
    id: 4,
    emoji: "🌿",
    title: "Verdant",
    genre: "Mystery",
    bg: "from-[#001a1a] via-[#003d3d] to-[#1a0040]",
  },
  {
    id: 5,
    emoji: "⚔️",
    title: "Iron Dusk",
    genre: "Action",
    bg: "from-[#1a1a00] via-[#4d4000] to-[#2a0a0a]",
  },
  {
    id: 6,
    emoji: "🎭",
    title: "Masquerade",
    genre: "Comedy",
    bg: "from-[#0a001a] via-[#2d0057] to-[#001a0a]",
  },
];

const FEATURED = [
  {
    emoji: "🌌",
    bg: "from-[#0d0033] via-[#3d0080] to-[#001a33]",
    badge: "New Original",
    title: "The Cartographer of Lost Worlds",
    meta: "2024 · 2h 18m · Sci-Fi Drama · Directed by Elena Voss",
    size: "large",
  },
  {
    emoji: "🔥",
    bg: "from-[#2a0a00] via-[#8B1a00] to-[#1a0a00]",
    title: "Embers of Cascadia",
    meta: "Thriller · 1h 54m",
  },
  {
    emoji: "🌊",
    bg: "from-[#0a1a2a] via-[#1a4060] to-[#0d2a1e]",
    title: "Tide & Silence",
    meta: "Drama · 2h 05m",
  },
  {
    emoji: "⚔️",
    bg: "from-[#1a1a00] via-[#4d4000] to-[#2a0a0a]",
    title: "Iron Dusk Rising",
    meta: "Action · 2h 12m",
  },
  {
    emoji: "🎭",
    bg: "from-[#0a001a] via-[#2d0057] to-[#001a0a]",
    title: "The Grand Masquerade",
    meta: "Comedy · 1h 42m",
  },
];

const GENRES = [
  { emoji: "🚀", name: "Sci-Fi" },
  { emoji: "🎭", name: "Drama" },
  { emoji: "🔪", name: "Thriller" },
  { emoji: "😂", name: "Comedy" },
  { emoji: "👻", name: "Horror" },
  { emoji: "💘", name: "Romance" },
];

const STATS = [
  { num: "12K+", label: "Titles" },
  { num: "4K", label: "Ultra HD Quality" },
  { num: "80+", label: "Countries" },
  { num: "5M", label: "Subscribers" },
  { num: "0", label: "Ads. Ever." },
];

const STEPS = [
  {
    roman: "I",
    title: "Choose Your Plan",
    desc: "Pick from Standard, Premium, or Family. Every plan includes the full catalog — no tiers for content access, only for screens and quality.",
  },
  {
    roman: "II",
    title: "Create Your Profile",
    desc: "Set up profiles for everyone in your household. StreamVault learns your taste and surfaces what you'll actually want to watch next.",
  },
  {
    roman: "III",
    title: "Watch Anywhere",
    desc: "TV, phone, tablet, laptop. Download for offline. Stream in 4K HDR with Dolby Atmos sound. Cancel any time — no questions asked.",
  },
];

const PLANS = [
  {
    name: "Standard",
    price: "$9",
    features: [
      { text: "Full catalog access", active: true },
      { text: "HD 1080p streaming", active: true },
      { text: "1 screen at a time", active: true },
      { text: "4K / HDR", active: false },
      { text: "Downloads", active: false },
      { text: "5 profiles", active: false },
    ],
    featured: false,
  },
  {
    name: "Premium",
    price: "$16",
    badge: "Most Popular",
    features: [
      { text: "Full catalog access", active: true },
      { text: "4K HDR + Dolby Atmos", active: true },
      { text: "2 screens at once", active: true },
      { text: "Downloads included", active: true },
      { text: "5 profiles", active: true },
      { text: "Priority support", active: false },
    ],
    featured: true,
  },
  {
    name: "Family",
    price: "$24",
    features: [
      { text: "Full catalog access", active: true },
      { text: "4K HDR + Dolby Atmos", active: true },
      { text: "4 screens at once", active: true },
      { text: "Unlimited downloads", active: true },
      { text: "10 profiles", active: true },
      { text: "Priority support", active: true },
    ],
    featured: false,
  },
];

const TESTIMONIALS = [
  {
    text: (
      <>
        The curation here is genuinely{" "}
        <strong className="text-[#E8E0D0]">different</strong>. I've discovered
        more great films in a month on StreamVault than I did in years on other
        platforms.
      </>
    ),
    name: "Mara Okonkwo",
    location: "Lagos, Nigeria",
    initial: "M",
    avatarBg: "bg-[#4c1d95]",
  },
  {
    text: (
      <>
        No ads. No region locks.{" "}
        <strong className="text-[#E8E0D0]">No compromises.</strong> It's what
        streaming should have been from day one. The 4K quality is stunning on
        my living room TV.
      </>
    ),
    name: "James Kowalczyk",
    location: "Warsaw, Poland",
    initial: "J",
    avatarBg: "bg-[#065f46]",
  },
  {
    text: (
      <>
        StreamVault Originals are incredible.{" "}
        <strong className="text-[#E8E0D0]">The Cartographer</strong> alone is
        worth the subscription. This is the future of independent cinema
        distribution.
      </>
    ),
    name: "Suki Tanaka",
    location: "Osaka, Japan",
    initial: "S",
    avatarBg: "bg-[#92400e]",
  },
];

const PlayIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[#0A0A0F] text-[#E8E0D0] font-sans overflow-x-hidden">
      {/* Google Fonts injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@300;400;500;600&display=swap');
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-5 bg-gradient-to-b from-[rgba(10,10,15,0.95)] to-transparent backdrop-blur-sm">
        <a
          href="#"
          className="font-playfair font-black text-2xl tracking-tight text-[#E8E0D0]"
        >
          Stream<span className="text-[#F59E0B]">Vault</span>
        </a>
        <ul className="hidden md:flex items-center gap-10">
          {["Movies", "Series", "Originals", "My List"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-sm font-medium text-[#9CA3AF] tracking-widest hover:text-[#E8E0D0] transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              className="text-sm font-semibold text-[#E8E0D0] bg-[#7C3AED] px-5 py-2 rounded hover:bg-[#9F67FF] transition-colors"
            >
              Start Watching
            </a>
          </li>
        </ul>
        <button
          className="md:hidden text-[#9CA3AF] hover:text-[#E8E0D0]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0A0A0F] border-t border-white/10 px-8 py-6 flex flex-col gap-4 md:hidden">
            {["Movies", "Series", "Originals", "My List"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-[#9CA3AF] hover:text-[#E8E0D0] transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="#"
              className="text-sm font-semibold text-[#E8E0D0] bg-[#7C3AED] px-5 py-2 rounded text-center hover:bg-[#9F67FF] transition-colors"
            >
              Start Watching
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(124,58,237,0.18)_0%,transparent_60%),radial-gradient(ellipse_50%_40%_at_20%_80%,rgba(245,158,11,0.10)_0%,transparent_55%)]" />
        {/* Vertical light line */}
        <div className="absolute top-0 bottom-0 right-[38%] w-px bg-gradient-to-b from-transparent via-[rgba(124,58,237,0.4)] to-transparent hidden lg:block" />

        {/* Hero Content */}
        <div className="relative z-10 px-8 md:px-16 max-w-2xl pt-24 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#F59E0B]" />
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[#F59E0B]">
              Cinema Without Limits
            </span>
          </div>
          <h1 className="font-playfair font-black text-5xl md:text-7xl leading-none tracking-tight text-[#E8E0D0] mb-6">
            Where Every
            <br />
            <em className="not-italic text-[#9F67FF]">Story</em>
            <br />
            Begins
          </h1>
          <p className="text-lg font-light text-[#9CA3AF] leading-relaxed max-w-md mb-10">
            Thousands of films, series, and StreamVault Originals — curated for
            those who live to watch. No ads. No compromises.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#9F67FF] text-[#E8E0D0] font-semibold px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
            >
              <PlayIcon /> Start Free Trial
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 hover:bg-white/5 text-[#E8E0D0] font-medium px-6 py-3.5 rounded transition-all"
            >
              Browse Catalog
            </a>
          </div>
        </div>

        {/* Floating Movie Cards */}
        <div
          className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:grid grid-cols-2 gap-4"
          style={{ gridTemplateRows: "repeat(3, 10rem)" }}
        >
          {MOVIES.map((movie, i) => {
            const offsets = [
              "",
              "translate-y-6",
              "",
              "-translate-y-4",
              "translate-y-8",
              "",
            ];
            return (
              <div
                key={movie.id}
                className={`w-40 rounded-md overflow-hidden relative cursor-pointer group transition-transform duration-300 hover:scale-105 hover:shadow-[0_12px_40px_rgba(124,58,237,0.35)] ${offsets[i]}`}
              >
                <div
                  className={`w-full h-full bg-gradient-to-br ${movie.bg} flex items-center justify-center text-5xl`}
                  style={{ minHeight: "10rem" }}
                >
                  {movie.emoji}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,10,15,0.9)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                  <p className="font-playfair font-bold text-xs text-[#E8E0D0]">
                    {movie.title}
                  </p>
                  <p className="text-[0.6rem] text-[#F59E0B] uppercase tracking-widest">
                    {movie.genre}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className="bg-[#111827] border-y border-white/5 px-8 md:px-16 py-7 flex flex-wrap items-center justify-around gap-6">
        {STATS.map((s, i) => (
          <div key={s.label} className="flex items-center gap-6">
            <div className="text-center">
              <div className="font-playfair font-bold text-3xl text-[#E8E0D0] leading-none">
                {s.num
                  .replace(
                    /[K+M]/g,
                    (c) => `<span class="text-[#F59E0B]">${c}</span>`,
                  )
                  .includes("<") ? (
                  <span
                    dangerouslySetInnerHTML={{
                      __html: s.num.replace(
                        /([K+M])/g,
                        '<span style="color:#F59E0B">$1</span>',
                      ),
                    }}
                  />
                ) : (
                  s.num
                )}
              </div>
              <div className="text-[0.7rem] font-semibold tracking-widest uppercase text-[#9CA3AF] mt-1">
                {s.label}
              </div>
            </div>
            {i < STATS.length - 1 && (
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
            )}
          </div>
        ))}
      </div>

      {/* ── FEATURED ── */}
      <section className="px-8 md:px-16 py-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#E8E0D0]">
            Featured This Week
          </h2>
          <a
            href="#"
            className="text-xs font-semibold tracking-widest uppercase text-[#9F67FF] hover:text-[#F59E0B] transition-colors"
          >
            View All →
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-5">
          {/* Main featured */}
          <div
            className={`rounded-lg overflow-hidden relative aspect-video cursor-pointer group bg-gradient-to-br ${FEATURED[0].bg} flex items-end transition-transform hover:scale-[1.01]`}
          >
            <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-30">
              {FEATURED[0].emoji}
            </div>
            <div className="relative z-10 w-full bg-gradient-to-t from-[rgba(10,10,15,0.98)] to-transparent p-7 pt-16">
              <span className="inline-block text-[0.6rem] font-bold tracking-[0.12em] uppercase bg-[#F59E0B] text-[#0A0A0F] px-2.5 py-1 rounded-sm mb-3">
                {FEATURED[0].badge}
              </span>
              <h3 className="font-playfair font-bold text-2xl text-[#E8E0D0] mb-2">
                {FEATURED[0].title}
              </h3>
              <p className="text-sm text-[#9CA3AF]">{FEATURED[0].meta}</p>
            </div>
          </div>

          {/* Small cards col 1 */}
          <div className="flex flex-col gap-5">
            {[FEATURED[1], FEATURED[2]].map((m) => (
              <div
                key={m.title}
                className={`rounded-md overflow-hidden relative aspect-video cursor-pointer group bg-gradient-to-br ${m.bg} flex items-end transition-transform hover:scale-[1.02]`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-40">
                  {m.emoji}
                </div>
                <div className="relative z-10 w-full bg-gradient-to-t from-[rgba(10,10,15,0.95)] to-transparent px-4 pb-3 pt-10">
                  <p className="font-playfair font-bold text-sm text-[#E8E0D0]">
                    {m.title}
                  </p>
                  <p className="text-[0.7rem] text-[#9CA3AF] mt-0.5">
                    {m.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Small cards col 2 */}
          <div className="flex flex-col gap-5">
            {[FEATURED[3], FEATURED[4]].map((m) => (
              <div
                key={m.title}
                className={`rounded-md overflow-hidden relative aspect-video cursor-pointer group bg-gradient-to-br ${m.bg} flex items-end transition-transform hover:scale-[1.02]`}
              >
                <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-40">
                  {m.emoji}
                </div>
                <div className="relative z-10 w-full bg-gradient-to-t from-[rgba(10,10,15,0.95)] to-transparent px-4 pb-3 pt-10">
                  <p className="font-playfair font-bold text-sm text-[#E8E0D0]">
                    {m.title}
                  </p>
                  <p className="text-[0.7rem] text-[#9CA3AF] mt-0.5">
                    {m.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENRES ── */}
      <div className="bg-[#111827] px-8 md:px-16 py-16">
        <h2 className="font-playfair font-bold text-3xl text-[#E8E0D0] mb-8">
          Browse by Genre
        </h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {GENRES.map((g) => (
            <a
              key={g.name}
              href="#"
              className="flex flex-col items-center py-4 px-3 rounded-md border border-white/[0.08] hover:border-[#7C3AED] hover:bg-[rgba(124,58,237,0.1)] hover:-translate-y-0.5 transition-all group"
            >
              <span className="text-2xl mb-2">{g.emoji}</span>
              <span className="text-[0.7rem] font-semibold tracking-widest uppercase text-[#9CA3AF] group-hover:text-[#E8E0D0] transition-colors">
                {g.name}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section className="relative px-8 md:px-16 py-28 overflow-hidden">
        <div className="absolute -left-48 -top-48 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(124,58,237,0.12)_0%,transparent_70%)] pointer-events-none" />
        <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#E8E0D0] relative z-10">
          Ready in Three Steps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-14 relative z-10">
          {STEPS.map((s) => (
            <div key={s.roman}>
              <div className="font-playfair font-black text-8xl text-[rgba(124,58,237,0.15)] leading-none -mb-4">
                {s.roman}
              </div>
              <h3 className="font-playfair font-bold text-xl text-[#E8E0D0] mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="bg-[#0D1B2A] px-8 md:px-16 py-28">
        <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#E8E0D0]">
          Simple Pricing
        </h2>
        <p className="text-[#9CA3AF] mt-3 text-base">
          Try free for 30 days. Your first month is on us.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 max-w-3xl">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-7 border transition-all hover:-translate-y-1 ${
                plan.featured
                  ? "border-[#7C3AED] bg-[rgba(124,58,237,0.08)] hover:border-[#9F67FF]"
                  : "border-white/[0.08] bg-[rgba(17,24,39,0.8)] hover:border-[rgba(124,58,237,0.4)]"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7C3AED] text-[#E8E0D0] text-[0.6rem] font-bold tracking-widest uppercase px-3 py-1 rounded-full whitespace-nowrap">
                  {plan.badge}
                </span>
              )}
              <p className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#9CA3AF] mb-3">
                {plan.name}
              </p>
              <div className="font-playfair font-bold text-5xl text-[#E8E0D0] leading-none">
                {plan.price}
                <span className="font-sans font-normal text-base text-[#9CA3AF] align-middle">
                  /mo
                </span>
              </div>
              <p className="text-xs text-[#9CA3AF] mt-1 mb-6">
                after free trial
              </p>
              <ul className="flex flex-col gap-2.5 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    className={`flex items-center gap-2.5 text-sm ${f.active ? "text-[#E8E0D0]" : "text-[#9CA3AF]"}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${f.active ? "bg-[#F59E0B]" : "bg-[#9F67FF]"}`}
                    />
                    {f.text}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block text-center py-3 rounded text-sm font-semibold transition-all ${
                  plan.featured
                    ? "bg-[#7C3AED] border border-[#7C3AED] text-[#E8E0D0] hover:bg-[#9F67FF] hover:border-[#9F67FF]"
                    : "border border-white/20 text-[#E8E0D0] hover:border-[#7C3AED] hover:bg-[rgba(124,58,237,0.15)]"
                }`}
              >
                {plan.featured ? "Start Free Trial" : "Get Started"}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="px-8 md:px-16 py-28">
        <h2 className="font-playfair font-bold text-3xl md:text-4xl text-[#E8E0D0] mb-14">
          What Our Subscribers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-[#111827] border border-white/[0.06] rounded-xl p-8"
            >
              <div className="font-playfair text-6xl text-[#7C3AED] leading-none opacity-50 mb-2">
                "
              </div>
              <p className="text-sm text-[#9CA3AF] leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold text-[#E8E0D0] flex-shrink-0 ${t.avatarBg}`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#E8E0D0]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#9CA3AF]">{t.location}</p>
                  <p className="text-xs text-[#F59E0B] mt-0.5 tracking-wide">
                    ★★★★★
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative px-8 md:px-16 py-32 text-center bg-[#111827] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(124,58,237,0.15)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="font-playfair font-black text-4xl md:text-6xl text-[#E8E0D0] leading-tight max-w-2xl mx-auto mb-6">
            Your Next Favourite Film
            <br />
            Is Already <em className="not-italic text-[#9F67FF]">Waiting</em>
          </h2>
          <p className="text-[#9CA3AF] text-base max-w-sm mx-auto mb-10 leading-relaxed">
            Join five million subscribers who chose cinema over compromise. Your
            first 30 days are completely free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#7C3AED] hover:bg-[#9F67FF] text-[#E8E0D0] font-semibold px-8 py-3.5 rounded transition-all hover:-translate-y-0.5"
            >
              <PlayIcon /> Start Free Trial
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-white/60 hover:bg-white/5 text-[#E8E0D0] font-medium px-6 py-3.5 rounded transition-all"
            >
              See All Plans
            </a>
          </div>
          <p className="text-xs text-[#9CA3AF] mt-5">
            No credit card required · Cancel any time
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.08] px-8 md:px-16 pt-14 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <a
              href="#"
              className="font-playfair font-black text-2xl text-[#E8E0D0] tracking-tight"
            >
              Stream<span className="text-[#F59E0B]">Vault</span>
            </a>
            <p className="text-sm text-[#9CA3AF] leading-relaxed mt-4 max-w-[240px]">
              Premium streaming for people who take cinema seriously. 12,000+
              titles. Zero ads. Always.
            </p>
          </div>
          {[
            {
              heading: "Explore",
              links: [
                "Movies",
                "Series",
                "Originals",
                "New Releases",
                "Top Rated",
              ],
            },
            {
              heading: "Account",
              links: [
                "Sign In",
                "Register",
                "Plans & Pricing",
                "Gift Cards",
                "Settings",
              ],
            },
            {
              heading: "Company",
              links: [
                "About",
                "Careers",
                "Press",
                "Privacy Policy",
                "Terms of Use",
              ],
            },
          ].map((col) => (
            <div key={col.heading}>
              <h4 className="text-[0.7rem] font-bold tracking-[0.12em] uppercase text-[#E8E0D0] mb-5">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#9CA3AF] hover:text-[#E8E0D0] transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/[0.06] text-xs text-[#9CA3AF]">
          <span>© 2025 StreamVault, Inc. All rights reserved.</span>
          <span>Made for cinephiles, by cinephiles.</span>
        </div>
      </footer>
    </div>
  );
}
