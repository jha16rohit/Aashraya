import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ─── Trust Badge Card ───────────────────────────────────── */
function TrustCard({ icon, title, desc }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 rounded-2xl"
      style={{
        background: "rgba(15, 25, 15, 0.70)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
      }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ background: "rgba(30,90,30,0.70)", border: "1px solid rgba(80,200,80,0.25)" }}
      >
        {icon}
      </div>
      <div>
        <p className="text-white font-semibold text-sm leading-tight">{title}</p>
        <p className="text-gray-400 text-xs mt-0.5 leading-snug">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Reusable field ─────────────────────────────────────── */
function FieldRow({ icon, placeholder, type = "text" }) {
  return (
    <div
      className="flex items-center gap-2 px-3 py-2.5 rounded-xl w-full"
      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)" }}
    >
      {icon}
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent text-white placeholder-gray-400 text-sm w-full outline-none"
      />
    </div>
  );
}

function SocialBtn({ icon, label, full = false }) {
  return (
    <button
      className={`${full ? "w-full" : "flex-1"} flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-sm font-medium transition-all duration-200 hover:bg-white/10`}
      style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)" }}
    >
      {icon} {label}
    </button>
  );
}

function Divider({ label }) {
  return (
    <div className="flex items-center gap-2 w-full">
      <div className="flex-1 h-px bg-white/10" />
      <span className="text-gray-400 text-xs shrink-0">{label}</span>
      <div className="flex-1 h-px bg-white/10" />
    </div>
  );
}

function EyeIcon({ show }) {
  return show ? (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  ) : (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="#1877F2">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

const TRUST_BADGES = [
  {
    title: "100% Verified",
    desc: "Every property and owner is verified",
    icon: (
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Secure & Safe",
    desc: "Your data is protected with top encryption",
    icon: (
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    desc: "Real people, real support, always",
    icon: (
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

/* ─── Main Page ──────────────────────────────────────────── */
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: "url('/login-1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Page wrapper — centers card, pushes badges to right on lg+ */}
      <div className="relative z-10 w-full min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-10">
        <div className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-12">

          {/* ── Login Card ───────────────────────────────── */}
          <div
            className="w-full max-w-[380px] md:max-w-[430px] rounded-2xl px-8 py-8 md:px-10 md:py-10 sm:px-8 sm:py-7 flex flex-col gap-3 shrink-0"
            style={{
              background: "rgba(15, 25, 15, 0.72)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 8px 48px rgba(0,0,0,0.50)",
            }}
          >

            <div className="flex items-center justify-center gap-4">
  {/* Logo */}
  <div className="flex-shrink-0">
    <img
      src="/logo.png"
      alt="Aashraya"
      className="h-19 w-19 object-contain"
    />
  </div>

  {/* Text */}
  <div className="flex flex-col justify-center">
    <h1 className="text-white text-3xl font-bold leading-none">
      Welcome <span className="text-green-400">Back</span>
    </h1>

    <p className="text-gray-300 text-sm mt-2 leading-relaxed">
      Glad to see you <span className="text-green-400">again!</span>
      <br />
    </p>
  </div>
</div>

            {/* Email */}
            <FieldRow
              icon={<svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
              placeholder="Email or Phone Number"
              type="text"
            />

            {/* Password */}
            <div
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl w-full"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.13)" }}
            >
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="bg-transparent text-white placeholder-gray-400 text-sm w-full outline-none"
              />
              <button onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-white transition-colors shrink-0">
                <EyeIcon show={showPassword} />
              </button>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="w-3.5 h-3.5 accent-green-500" />
                <span className="text-gray-300 text-xs">Remember me</span>
              </label>
              <button className="text-green-400 text-xs hover:text-green-300 transition-colors">Forgot Password?</button>
            </div>

            {/* Login Button */}
            <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 active:scale-95 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-green-900/30">
              Log In
            </button>

            <Divider label="or continue with" />

            <SocialBtn icon={<GoogleIcon />} label="Continue with Google" full />
            

            <p className="text-gray-400 text-xs text-center pt-1">
              Don't have an account?{" "}
              <button onClick={() => navigate("/register")} className="text-green-400 hover:text-green-300 font-semibold transition-colors">
                Register
              </button>
            </p>
          </div>

          {/* ── Trust Badges (right side on lg, bottom on mobile) ── */}
          <div className="w-full max-w-[400px] lg:max-w-[280px] flex flex-col gap-3 lg:gap-4">
            {TRUST_BADGES.map((b, i) => (
              <TrustCard key={i} {...b} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}