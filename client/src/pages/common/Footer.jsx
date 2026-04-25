import { useState } from "react";

/* ── Google Fonts ── */
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Jost:wght@300;400;500;600&display=swap";
if (!document.head.querySelector('link[href*="Cormorant"]')) {
  document.head.appendChild(fontLink);
}

/* ── Icon base ── */
const Icon = ({ children, cls = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" className={cls}>
    {children}
  </svg>
);

/* Social */
const FBIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const IGIcon  = () => <Icon><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></Icon>;
const LIIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const TWIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>;
const YTIcon  = () => <svg viewBox="0 0 24 24" fill="currentColor" className="w-[15px] h-[15px]"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>;

/* Nav icons */
const SearchIco   = () => <Icon cls="w-[15px] h-[15px]"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></Icon>;
const BuildingIco = () => <Icon cls="w-[15px] h-[15px]"><rect x="3" y="6" width="18" height="15" rx="1"/><path d="M3 10h18M10 10v11M14 10v11"/></Icon>;
const UsersIco    = () => <Icon cls="w-[15px] h-[15px]"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></Icon>;
const CalIco      = () => <Icon cls="w-[15px] h-[15px]"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></Icon>;
const StarFlIco   = () => <Icon cls="w-[15px] h-[15px]"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></Icon>;
const HomeIco     = () => <Icon cls="w-[15px] h-[15px]"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></Icon>;
const GridIco     = () => <Icon cls="w-[15px] h-[15px]"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></Icon>;
const TagIco      = () => <Icon cls="w-[15px] h-[15px]"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></Icon>;
const BoxIco      = () => <Icon cls="w-[15px] h-[15px]"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></Icon>;
const HdphoIco    = () => <Icon cls="w-[15px] h-[15px]"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></Icon>;
const InfoIco     = () => <Icon cls="w-[15px] h-[15px]"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></Icon>;
const ShieldIco   = () => <Icon cls="w-[15px] h-[15px]"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></Icon>;
const BriefIco    = () => <Icon cls="w-[15px] h-[15px]"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></Icon>;
const MegaIco     = () => <Icon cls="w-[15px] h-[15px]"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></Icon>;
const HelpIco     = () => <Icon cls="w-[15px] h-[15px]"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></Icon>;
const PhSmIco     = () => <Icon cls="w-[15px] h-[15px]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5A16 16 0 0 0 15.5 16.09l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></Icon>;
const FlagIco     = () => <Icon cls="w-[15px] h-[15px]"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></Icon>;
const DocIco      = () => <Icon cls="w-[15px] h-[15px]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></Icon>;
const LockIco     = () => <Icon cls="w-[15px] h-[15px]"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></Icon>;
const ArrowIco    = () => <Icon cls="w-4 h-4"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></Icon>;
const PhLgIco     = () => <Icon cls="w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5A16 16 0 0 0 15.5 16.09l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></Icon>;
const HdsetLgIco  = () => <Icon cls="w-6 h-6"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z"/><path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></Icon>;
const HeartIco    = () => <svg viewBox="0 0 24 24" fill="#c8a84b" className="w-4 h-4"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
const ChevDnIco   = () => <Icon cls="w-3.5 h-3.5"><polyline points="6 9 12 15 18 9"/></Icon>;

/* ── Nav Data ── */
const EXPLORE = [
  { ico: <SearchIco/>,   label: "Browse Properties" },
  { ico: <BuildingIco/>, label: "Cities" },
  { ico: <UsersIco/>,    label: "PG & Co-living" },
  { ico: <CalIco/>,      label: "Short Term Stays" },
  { ico: <StarFlIco/>,   label: "New Launches" },
];
const OWNERS = [
  { ico: <HomeIco/>,   label: "List Your Property" },
  { ico: <TagIco/>,    label: "Pricing & Plans" },
  { ico: <BoxIco/>,    label: "Resources" },
  { ico: <HdphoIco/>,  label: "Owner Support" },
];
const COMPANY = [
  { ico: <UsersIco/>,   label: "About Us" },
  { ico: <InfoIco/>,    label: "How It Works" },
  { ico: <ShieldIco/>,  label: "Trust & Safety" },
  { ico: <BriefIco/>,   label: "Careers" },
  { ico: <MegaIco/>,    label: "Press & Media" },
];
const SUPPORT = [
  { ico: <HelpIco/>,  label: "Help Center" },
  { ico: <PhSmIco/>,  label: "Contact Us" },
  { ico: <FlagIco/>,  label: "Report an Issue" },
  { ico: <DocIco/>,   label: "Terms of Use" },
  { ico: <LockIco/>,  label: "Privacy Policy" },
];

/* ── Star Rating ── */
function StarRating({ rating, setRating }) {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(s => (
        <button key={s} onClick={() => setRating(s)}
          className="transition-transform hover:scale-110 focus:outline-none">
          <svg viewBox="0 0 24 24" className="w-[26px] h-[26px]"
            fill={s <= rating ? "#5a9e4e" : "none"}
            stroke="#5a9e4e" strokeWidth="1.6">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </button>
      ))}
    </div>
  );
}

/* ── Nav Column ── */
function NavCol({ title, items }) {
  return (
    <div>
      <h4 className="text-black text-xs font-semibold tracking-[0.22em] uppercase mb-2"
        style={{ fontFamily: "'Jost', sans-serif" }}>
        {title}
      </h4>
      <div className="w-8 h-[2px] bg-[#c8a84b] mb-4 rounded-full" />
      <nav className="flex flex-col gap-[6px]">
        {items.map(({ ico, label }) => (
          <a key={label} href="#"
            className="flex items-center gap-[9px] text-[13px] font-light
                       hover:text-[#c8a84b] transition-all duration-200 hover:translate-x-[3px] group"
            style={{ color: "black" }}>
            <span className="text-black group-hover:text-[#c8a84b] transition-colors duration-200 flex-shrink-0">
              {ico}
            </span>
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}

/* ══════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════ */
export default function AashrayaFooter() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);

  return (
    /*
     * KEY FIX: The entire footer wrapper — including the white-fade
     * transition zone — shares ONE background image declaration.
     * This means even if the top portion appears "white" via the gradient
     * overlay, the forest image is always rendered underneath.
     * Nothing goes blank when any element is removed.
     */
    <div
      style={{
        fontFamily: "'Jost', sans-serif",
        position: "relative",
        /* ── Single background image anchored to entire footer ── */
        backgroundImage: "url('footer-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        /* Fallback dark colour so text is never on white if image fails */
        
      }}
    >

     

      {/* ── LAYER 2: White-to-transparent wipe at the very top ──────
           This creates the seamless "page above is white" look.
           It fades from solid white → fully transparent over 110px.    */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          height: 110,
          background: "linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0) 100%)",
          pointerEvents: "none",
          zIndex: 2,           /* above the dark overlay so white wins at top */
        }}
      />

      {/* ── Spacer so content starts below the white-fade zone ──── */}
      <div style={{ height: 110 }} />

      {/* ════════════════════════════════════════
          ALL CONTENT — z-index 10, above overlays
      ════════════════════════════════════════ */}
      <div style={{ position: "relative", zIndex: 10 }}>

        {/* ── TOP SECTION: Brand + Nav ── */}
        <div className="max-w-[1280px] mx-auto px-6 pt-4 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">

            {/* Brand column */}
            <div className="flex flex-col gap-5">
              {/* Logo + name */}
              <div className="flex items-center gap-3">
                <div
                  className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-white flex-shrink-0"
                  style={{
                    border: "2px solid #c8a84b",
                    boxShadow: "0 0 0 4px rgba(200,168,75,0.18), 0 4px 20px rgba(0,0,0,0.5)",
                  }}
                >
                  <img
                    src="logo.png"
                    alt="Aashraya Logo"
                    className="w-[62px] h-[62px] object-contain rounded-full"
                  />
                </div>
                <div>
                  <div
                    className="text-black text-[1.9rem] leading-none"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, letterSpacing: "0.05em" }}
                  >
                    Aashraya
                  </div>
                  <div className="text-black text-[0.6rem] tracking-[0.38em] font-light mt-1">
                    FIND. LIVE. BELONG.
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[13px] leading-[1.85] font-light text-black">
                Aashraya is India's trusted rental marketplace that connects verified owners with genuine renters.
                Find your space. Live with peace. Belong to a better community.
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-[10px] flex-wrap ">
                {[
                  { ico: <FBIcon/>, label: "Facebook" },
                  { ico: <IGIcon/>, label: "Instagram" },
                  { ico: <LIIcon/>, label: "LinkedIn" },
                  { ico: <TWIcon/>, label: "Twitter" },
                  { ico: <YTIcon/>, label: "YouTube" },
                ].map(({ ico, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-[2px]"
                    style={{
                      border: "1px solid rgba(255,255,255,0.22)",
                      background: "rgba(255,255,255,0.09)",
                      color: "black",
                    }}
                  >
                    {ico}
                  </button>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
              <NavCol title="Explore" items={EXPLORE} />
              <NavCol title="Owners"  items={OWNERS}  />
              <NavCol title="Company" items={COMPANY} />
              <NavCol title="Support" items={SUPPORT} />
            </div>
          </div>
        </div>

        {/* Thin gold divider */}
        <div
          className="mx-6"
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(200,168,75,0.4) 25%, rgba(200,168,75,0.4) 75%, transparent)",
          }}
        />

        {/* ── BOTTOM CARDS ── */}
        <div className="max-w-[1280px] mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Card 1 — Concierge */}
          <div
            className="rounded-xl p-5 flex gap-4"
            style={{
              background: "rgba(5,20,7,0.60)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(200,168,75,0.12)",
                border: "1px solid rgba(200,168,75,0.32)",
                color: "#c8a84b",
              }}
            >
              <HdsetLgIco />
            </div>

            <div className="flex-1">
              <p className="text-white font-medium text-[15px] leading-tight mb-1">
                We're here to help you
              </p>
              <p className="text-[12px] font-light mb-4"
                style={{ color: "rgba(210,238,210,0.62)" }}>
                Talk to our concierge for personalized assistance.
              </p>

              <div className="flex items-start gap-4">
                <div style={{ width: 1, background: "rgba(255,255,255,0.15)", alignSelf: "stretch", minHeight: 40 }} />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span style={{ color: "#c8a84b" }}><PhLgIco /></span>
                    <span className="text-white font-medium text-[15px] tracking-wide">+91 98765 43210</span>
                  </div>
                  <p className="text-[11px] font-light mb-3"
                    style={{ color: "rgba(210,238,210,0.55)" }}>
                    Mon - Sun, 9:00 AM - 9:00 PM
                  </p>
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 hover:-translate-y-[1px] hover:shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #c8a84b 0%, #e8cc70 50%, #c8a84b 100%)",
                      color: "#0c1a08",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      fontSize: "0.68rem",
                    }}
                  >
                    Talk to Concierge <ArrowIco />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Rating */}
          <div
            className="rounded-xl p-5 flex flex-col gap-3"
            style={{
              background: "rgba(5,20,7,0.60)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div>
              <p className="text-white font-semibold text-[15px] mb-0.5">Love Aashraya?</p>
              <p className="text-[11.5px] font-light"
                style={{ color: "rgba(210,238,210,0.58)" }}>
                Rate us and help others discover better living.
              </p>
            </div>
            <StarRating rating={rating} setRating={setRating} />
            <div className="text-[12.5px]" style={{ color: "rgba(210,238,210,0.68)" }}>
              <span className="text-white text-[1.35rem]"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>4.8</span>
              <span className="ml-1">/5</span>
              <span className="ml-2 text-[11px]"
                style={{ color: "rgba(210,238,210,0.42)" }}>from 12,500+ reviews</span>
            </div>
          </div>

          {/* Card 3 — Feedback */}
          <div
            className="rounded-xl p-5 flex flex-col gap-3"
            style={{
              background: "rgba(5,20,7,0.60)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div>
              <p className="text-white font-semibold text-[15px] mb-0.5">Share your feedback</p>
              <p className="text-[11.5px] font-light"
                style={{ color: "rgba(210,238,210,0.58)" }}>
                Your feedback helps us improve.
              </p>
            </div>
            <div className="relative">
              <textarea
                className="w-full h-16 text-[12.5px] font-light resize-none rounded-md px-3 py-2 outline-none transition-colors duration-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(220,245,220,0.88)",
                  fontFamily: "'Jost', sans-serif",
                }}
                placeholder="Write a short review..."
                maxLength={120}
                value={review}
                onChange={e => setReview(e.target.value)}
              />
              <span className="absolute bottom-2 right-2.5 text-[10px]"
                style={{ color: "rgba(180,210,180,0.45)" }}>
                {review.length}/120
              </span>
            </div>
            <button
              className="w-full py-2 rounded-md font-medium text-[12.5px] tracking-wide transition-all duration-200 hover:-translate-y-[1px]"
              style={{
                border: "1px solid rgba(200,168,75,0.5)",
                color: "rgba(220,245,220,0.88)",
                background: "rgba(200,168,75,0.12)",
                fontFamily: "'Jost', sans-serif",
              }}
            >
              Submit Review
            </button>
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3">

            <p className="text-[11.5px] tracking-wide"
              style={{ color: "rgba(200,228,200,0.48)" }}>
              © 2025 Aashraya Housing Pvt. Ltd. All rights reserved.
            </p>

            
          </div>
        </div>

      </div>{/* /content z-10 */}
    </div>
  );
}