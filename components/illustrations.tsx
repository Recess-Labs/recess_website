export function ExposureDiagram() {
  return (
    <svg viewBox="0 0 520 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
      {/* Exposure */}
      <rect x="0" y="30" width="140" height="60" rx="16" fill="#F5F5FF" stroke="#8D7AA0" strokeWidth="2" />
      <text x="70" y="65" textAnchor="middle" fill="#29285D" fontWeight="600" fontSize="14" fontFamily="system-ui">Exposure</text>
      {/* Arrow 1 */}
      <path d="M145 60 L185 60" stroke="#8D7AA0" strokeWidth="2" markerEnd="url(#arrowhead)" />
      {/* Overload */}
      <rect x="190" y="30" width="140" height="60" rx="16" fill="#FFEDAC" stroke="#8D7AA0" strokeWidth="2" />
      <text x="260" y="65" textAnchor="middle" fill="#29285D" fontWeight="600" fontSize="14" fontFamily="system-ui">Overload</text>
      {/* Arrow 2 */}
      <path d="M335 60 L375 60" stroke="#8D7AA0" strokeWidth="2" markerEnd="url(#arrowhead)" />
      {/* Instability */}
      <rect x="380" y="30" width="140" height="60" rx="16" fill="#29285D" stroke="#29285D" strokeWidth="2" />
      <text x="450" y="65" textAnchor="middle" fill="#FFFFFF" fontWeight="600" fontSize="14" fontFamily="system-ui">Instability</text>
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#8D7AA0" />
        </marker>
      </defs>
    </svg>
  )
}

export function SystemMapIllustration() {
  return (
    <svg viewBox="0 0 720 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-2xl">
      {/* Top label */}
      <text x="360" y="20" textAnchor="middle" fill="#8D7AA0" fontWeight="700" fontSize="11" fontFamily="system-ui" letterSpacing="3">THE RECESS SYSTEM</text>
      <line x1="140" y1="30" x2="580" y2="30" stroke="#8D7AA0" strokeWidth="0.5" opacity="0.3" />

      {/* Foundation Card */}
      <rect x="0" y="50" width="210" height="140" rx="20" fill="#FFF2E2" stroke="#E8E0EC" strokeWidth="1.5" />
      <rect x="20" y="70" width="40" height="40" rx="10" fill="#29285D" opacity="0.08" />
      {/* Foundation icon - building blocks */}
      <rect x="28" y="92" width="24" height="12" rx="3" stroke="#29285D" strokeWidth="1.5" fill="none" />
      <rect x="34" y="80" width="12" height="14" rx="3" stroke="#29285D" strokeWidth="1.5" fill="none" />
      <line x1="40" y1="88" x2="40" y2="94" stroke="#8D7AA0" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="40" cy="85" r="2" fill="#8D7AA0" />
      <text x="20" y="132" fill="#29285D" fontWeight="700" fontSize="14" fontFamily="system-ui">{"Recess Foundation\u2122"}</text>
      <text x="20" y="150" fill="#777698" fontSize="10" fontFamily="system-ui">Standards + training</text>
      <text x="20" y="174" fill="#8D7AA0" fontSize="10" fontFamily="system-ui" fontWeight="500">Align leadership around</text>
      <text x="20" y="186" fill="#8D7AA0" fontSize="10" fontFamily="system-ui" fontWeight="500">trauma exposure</text>

      {/* Connection line 1 */}
      <path d="M215 120 L250 120" stroke="#8D7AA0" strokeWidth="1.5" strokeDasharray="6 3" />
      <circle cx="250" cy="120" r="3" fill="#8D7AA0" opacity="0.4" />

      {/* Frontline Ally Card */}
      <rect x="255" y="50" width="210" height="140" rx="20" fill="#AAF5D4" stroke="#E8E0EC" strokeWidth="1.5" />
      <rect x="275" y="70" width="40" height="40" rx="10" fill="#29285D" opacity="0.08" />
      {/* Ally icon - wave circle */}
      <circle cx="295" cy="90" r="12" stroke="#29285D" strokeWidth="1.5" fill="none" />
      <path d="M285 90 Q289 84 295 90 Q301 96 305 90" stroke="#8D7AA0" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="295" cy="90" r="4" fill="#29285D" opacity="0.12" />
      <text x="275" y="132" fill="#29285D" fontWeight="700" fontSize="14" fontFamily="system-ui">{"Recess Frontline Ally\u2122"}</text>
      <text x="275" y="150" fill="#777698" fontSize="10" fontFamily="system-ui">Real-time stabilization</text>
      <text x="275" y="174" fill="#8D7AA0" fontSize="10" fontFamily="system-ui" fontWeight="500">Personalized relief in</text>
      <text x="275" y="186" fill="#8D7AA0" fontSize="10" fontFamily="system-ui" fontWeight="500">minutes, not sessions</text>

      {/* Connection line 2 */}
      <path d="M470 120 L505 120" stroke="#8D7AA0" strokeWidth="1.5" strokeDasharray="6 3" />
      <circle cx="505" cy="120" r="3" fill="#8D7AA0" opacity="0.4" />

      {/* Signal Card */}
      <rect x="510" y="50" width="210" height="140" rx="20" fill="#D4EDF9" stroke="#E8E0EC" strokeWidth="1.5" />
      <rect x="530" y="70" width="40" height="40" rx="10" fill="#29285D" opacity="0.08" />
      {/* Signal icon - chart bars */}
      <rect x="534" y="78" width="24" height="24" rx="5" stroke="#29285D" strokeWidth="1.5" fill="none" />
      <line x1="540" y1="98" x2="540" y2="88" stroke="#8D7AA0" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="546" y1="98" x2="546" y2="82" stroke="#29285D" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="552" y1="98" x2="552" y2="92" stroke="#8D7AA0" strokeWidth="2.5" strokeLinecap="round" />
      <text x="530" y="132" fill="#29285D" fontWeight="700" fontSize="14" fontFamily="system-ui">{"Recess Signal\u2122"}</text>
      <text x="530" y="150" fill="#777698" fontSize="10" fontFamily="system-ui">Predict + prevent</text>
      <text x="530" y="174" fill="#8D7AA0" fontSize="10" fontFamily="system-ui" fontWeight="500">AI-powered turnover risk</text>
      <text x="530" y="186" fill="#8D7AA0" fontSize="10" fontFamily="system-ui" fontWeight="500">intelligence</text>

      {/* Bottom connecting arc */}
      <path d="M105 195 Q360 230 615 195" stroke="#8D7AA0" strokeWidth="1" strokeDasharray="4 3" opacity="0.3" fill="none" />
      <text x="360" y="228" textAnchor="middle" fill="#8D7AA0" fontSize="9" fontFamily="system-ui" opacity="0.6">Integrated Emotional Infrastructure</text>
    </svg>
  )
}

export function DashboardMockup() {
  return (
    <svg viewBox="0 0 480 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full rounded-2xl">
      <rect width="480" height="300" rx="16" fill="#29285D" />
      {/* Title bar */}
      <rect x="16" y="16" width="448" height="36" rx="8" fill="#FFFFFF" opacity="0.08" />
      <circle cx="36" cy="34" r="5" fill="#FF6B6B" opacity="0.7" />
      <circle cx="52" cy="34" r="5" fill="#FFD93D" opacity="0.7" />
      <circle cx="68" cy="34" r="5" fill="#6BCB77" opacity="0.7" />
      <text x="200" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="10" opacity="0.6" fontFamily="system-ui">Emotional Operating Dashboard</text>
      {/* Sidebar */}
      <rect x="16" y="60" width="100" height="224" rx="8" fill="#FFFFFF" opacity="0.05" />
      <rect x="28" y="76" width="76" height="8" rx="4" fill="#8D7AA0" opacity="0.4" />
      <rect x="28" y="96" width="60" height="6" rx="3" fill="#FFFFFF" opacity="0.15" />
      <rect x="28" y="112" width="68" height="6" rx="3" fill="#FFFFFF" opacity="0.15" />
      <rect x="28" y="128" width="54" height="6" rx="3" fill="#FFFFFF" opacity="0.15" />
      <rect x="28" y="144" width="62" height="6" rx="3" fill="#FFFFFF" opacity="0.15" />
      {/* Main area */}
      <rect x="128" y="60" width="168" height="108" rx="12" fill="#FFFFFF" opacity="0.08" />
      <text x="140" y="82" fill="#FFFFFF" fontSize="9" opacity="0.5" fontFamily="system-ui">Team Strain Index</text>
      {/* Chart bars */}
      <rect x="144" y="140" width="16" height="18" rx="3" fill="#8D7AA0" opacity="0.6" />
      <rect x="168" y="128" width="16" height="30" rx="3" fill="#8D7AA0" opacity="0.7" />
      <rect x="192" y="120" width="16" height="38" rx="3" fill="#8D7AA0" opacity="0.8" />
      <rect x="216" y="108" width="16" height="50" rx="3" fill="#8D7AA0" />
      <rect x="240" y="98" width="16" height="60" rx="3" fill="#FF6B6B" opacity="0.8" />
      <rect x="264" y="114" width="16" height="44" rx="3" fill="#8D7AA0" opacity="0.7" />
      {/* Right panel */}
      <rect x="308" y="60" width="156" height="108" rx="12" fill="#FFFFFF" opacity="0.08" />
      <text x="320" y="82" fill="#FFFFFF" fontSize="9" opacity="0.5" fontFamily="system-ui">Risk Signals</text>
      <circle cx="340" cy="120" r="24" stroke="#8D7AA0" strokeWidth="3" fill="none" opacity="0.6" />
      <text x="340" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="600" fontFamily="system-ui">3</text>
      <rect x="380" y="104" width="68" height="6" rx="3" fill="#FFD93D" opacity="0.5" />
      <rect x="380" y="118" width="52" height="6" rx="3" fill="#FF6B6B" opacity="0.5" />
      <rect x="380" y="132" width="60" height="6" rx="3" fill="#8D7AA0" opacity="0.4" />
      {/* Bottom row */}
      <rect x="128" y="180" width="336" height="104" rx="12" fill="#FFFFFF" opacity="0.08" />
      <text x="140" y="202" fill="#FFFFFF" fontSize="9" opacity="0.5" fontFamily="system-ui">Recommended Actions</text>
      <rect x="140" y="214" width="308" height="24" rx="6" fill="#8D7AA0" opacity="0.15" />
      <rect x="148" y="220" width="120" height="6" rx="3" fill="#FFFFFF" opacity="0.3" />
      <rect x="148" y="228" width="80" height="4" rx="2" fill="#FFFFFF" opacity="0.12" />
      <rect x="140" y="246" width="308" height="24" rx="6" fill="#8D7AA0" opacity="0.15" />
      <rect x="148" y="252" width="140" height="6" rx="3" fill="#FFFFFF" opacity="0.3" />
      <rect x="148" y="260" width="96" height="4" rx="2" fill="#FFFFFF" opacity="0.12" />
    </svg>
  )
}

export function MobileAppMockup() {
  return (
    <svg viewBox="0 0 220 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[180px]">
      <rect x="4" y="4" width="212" height="412" rx="28" fill="#29285D" stroke="#8D7AA0" strokeWidth="2" />
      {/* Notch */}
      <rect x="70" y="12" width="80" height="20" rx="10" fill="#1a1a4a" />
      {/* Content */}
      <rect x="20" y="48" width="180" height="348" rx="16" fill="#FFFFFF" opacity="0.95" />
      <text x="110" y="76" textAnchor="middle" fill="#29285D" fontSize="12" fontWeight="600" fontFamily="system-ui">Frontline Ally</text>
      <text x="110" y="92" textAnchor="middle" fill="#777698" fontSize="8" fontFamily="system-ui">How are you feeling right now?</text>
      {/* Mood circles */}
      <circle cx="58" cy="128" r="18" fill="#F5F5FF" stroke="#E8E0EC" strokeWidth="1" />
      <text x="58" y="132" textAnchor="middle" fill="#29285D" fontSize="16">&#128528;</text>
      <circle cx="110" cy="128" r="18" fill="#8D7AA0" opacity="0.15" stroke="#8D7AA0" strokeWidth="1.5" />
      <text x="110" y="132" textAnchor="middle" fill="#29285D" fontSize="16">&#128555;</text>
      <circle cx="162" cy="128" r="18" fill="#F5F5FF" stroke="#E8E0EC" strokeWidth="1" />
      <text x="162" y="132" textAnchor="middle" fill="#29285D" fontSize="16">&#128546;</text>
      {/* Session card */}
      <rect x="32" y="164" width="156" height="80" rx="12" fill="#AAF5D4" />
      <text x="44" y="184" fill="#29285D" fontSize="10" fontWeight="600" fontFamily="system-ui">Stabilization Session</text>
      <text x="44" y="198" fill="#777698" fontSize="8" fontFamily="system-ui">~8 min guided protocol</text>
      <rect x="44" y="212" width="96" height="20" rx="10" fill="#8D7AA0" />
      <text x="92" y="226" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="600" fontFamily="system-ui">Begin Session</text>
      {/* Progress section */}
      <text x="44" y="272" fill="#29285D" fontSize="9" fontWeight="600" fontFamily="system-ui">Your Progress</text>
      <rect x="32" y="282" width="156" height="8" rx="4" fill="#E8E0EC" />
      <rect x="32" y="282" width="96" height="8" rx="4" fill="#8D7AA0" />
      <text x="44" y="306" fill="#777698" fontSize="7" fontFamily="system-ui">7 sessions completed this week</text>
      {/* Streak */}
      <rect x="32" y="320" width="156" height="56" rx="12" fill="#FFF2E2" />
      <text x="44" y="340" fill="#29285D" fontSize="9" fontWeight="600" fontFamily="system-ui">Stability Streak</text>
      <text x="44" y="362" fill="#8D7AA0" fontSize="20" fontWeight="700" fontFamily="system-ui">12 days</text>
    </svg>
  )
}

export function RepairEngineDiagram() {
  return (
    <svg viewBox="0 0 560 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-xl">
      {/* Center circle */}
      <circle cx="280" cy="170" r="56" fill="#29285D" />
      <text x="280" y="162" textAnchor="middle" fill="#FFFFFF" fontWeight="700" fontSize="12" fontFamily="system-ui">REPAIR</text>
      <text x="280" y="180" textAnchor="middle" fill="#8D7AA0" fontSize="8" fontFamily="system-ui">Engine</text>

      {/* Input 1 - Top Left */}
      <rect x="40" y="20" width="180" height="80" rx="16" fill="#FFF2E2" stroke="#E8E0EC" strokeWidth="1.5" />
      <text x="130" y="52" textAnchor="middle" fill="#29285D" fontWeight="600" fontSize="11" fontFamily="system-ui">Emotional Signals</text>
      <text x="130" y="68" textAnchor="middle" fill="#777698" fontSize="8" fontFamily="system-ui">Secondary trauma, moral injury</text>
      <text x="130" y="80" textAnchor="middle" fill="#777698" fontSize="8" fontFamily="system-ui">Compassion fatigue indicators</text>
      <line x1="200" y1="100" x2="248" y2="140" stroke="#8D7AA0" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Input 2 - Top Right */}
      <rect x="340" y="20" width="180" height="80" rx="16" fill="#AAF5D4" stroke="#E8E0EC" strokeWidth="1.5" />
      <text x="430" y="52" textAnchor="middle" fill="#29285D" fontWeight="600" fontSize="11" fontFamily="system-ui">Engagement Patterns</text>
      <text x="430" y="68" textAnchor="middle" fill="#777698" fontSize="8" fontFamily="system-ui">Session interaction data</text>
      <text x="430" y="80" textAnchor="middle" fill="#777698" fontSize="8" fontFamily="system-ui">Stress-response patterns</text>
      <line x1="360" y1="100" x2="312" y2="140" stroke="#8D7AA0" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Input 3 - Bottom */}
      <rect x="190" y="260" width="180" height="80" rx="16" fill="#D4EDF9" stroke="#E8E0EC" strokeWidth="1.5" />
      <text x="280" y="292" textAnchor="middle" fill="#29285D" fontWeight="600" fontSize="11" fontFamily="system-ui">Biometric Input</text>
      <text x="280" y="308" textAnchor="middle" fill="#777698" fontSize="8" fontFamily="system-ui">Breathing, HRV, arousal signals</text>
      <text x="280" y="320" textAnchor="middle" fill="#777698" fontSize="8" fontFamily="system-ui">Nervous system activation</text>
      <line x1="280" y1="260" x2="280" y2="226" stroke="#8D7AA0" strokeWidth="1.5" strokeDasharray="4 3" />

      {/* Outer ring pulses */}
      <circle cx="280" cy="170" r="76" stroke="#8D7AA0" strokeWidth="1" opacity="0.3" strokeDasharray="4 4" />
      <circle cx="280" cy="170" r="96" stroke="#8D7AA0" strokeWidth="0.5" opacity="0.15" strokeDasharray="2 4" />
    </svg>
  )
}

export function HealthcareIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <rect width="64" height="64" rx="16" fill="#FFCCE5" />
      <path d="M32 18 C28 18, 20 22, 20 30 C20 40, 32 48, 32 48 C32 48, 44 40, 44 30 C44 22, 36 18, 32 18Z" fill="#8D7AA0" opacity="0.2" stroke="#8D7AA0" strokeWidth="1.5" />
      <path d="M29 30 h6 M32 27 v6" stroke="#29285D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function EducationIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <rect width="64" height="64" rx="16" fill="#FFEDAC" />
      <path d="M16 30 L32 22 L48 30 L32 38Z" fill="#8D7AA0" opacity="0.2" stroke="#8D7AA0" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M22 34 v8 c0 0 4 4 10 4 s10-4 10-4 v-8" stroke="#29285D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <line x1="48" y1="30" x2="48" y2="42" stroke="#29285D" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function PublicSafetyIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
      <rect width="64" height="64" rx="16" fill="#D4EDF9" />
      <path d="M32 16 L44 22 V34 C44 42 32 48 32 48 C32 48 20 42 20 34 V22 L32 16Z" fill="#8D7AA0" opacity="0.2" stroke="#8D7AA0" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M28 32 L31 35 L37 29" stroke="#29285D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

export function NervousSystemIllustration() {
  return (
    <svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-sm">
      {/* Brain outline */}
      <ellipse cx="200" cy="90" rx="60" ry="50" fill="#F5F5FF" stroke="#8D7AA0" strokeWidth="1.5" />
      <path d="M170 70 Q200 50 230 70" stroke="#8D7AA0" strokeWidth="1" opacity="0.5" fill="none" />
      <path d="M160 90 Q200 60 240 90" stroke="#8D7AA0" strokeWidth="1" opacity="0.3" fill="none" />
      {/* Spine */}
      <path d="M200 140 Q198 160 200 180 Q202 200 200 220" stroke="#29285D" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Neural connections */}
      <circle cx="200" cy="90" r="4" fill="#8D7AA0" />
      <line x1="200" y1="94" x2="200" y2="140" stroke="#8D7AA0" strokeWidth="1.5" />
      {/* Branch signals */}
      <path d="M200 160 Q170 165 150 175" stroke="#8D7AA0" strokeWidth="1" opacity="0.6" strokeDasharray="3 3" />
      <path d="M200 160 Q230 165 250 175" stroke="#8D7AA0" strokeWidth="1" opacity="0.6" strokeDasharray="3 3" />
      <path d="M200 190 Q165 195 140 210" stroke="#8D7AA0" strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
      <path d="M200 190 Q235 195 260 210" stroke="#8D7AA0" strokeWidth="1" opacity="0.4" strokeDasharray="3 3" />
      {/* Signal dots */}
      <circle cx="150" cy="175" r="3" fill="#8D7AA0" opacity="0.5" />
      <circle cx="250" cy="175" r="3" fill="#8D7AA0" opacity="0.5" />
      <circle cx="140" cy="210" r="3" fill="#8D7AA0" opacity="0.3" />
      <circle cx="260" cy="210" r="3" fill="#8D7AA0" opacity="0.3" />
      {/* Label */}
      <text x="200" y="236" textAnchor="middle" fill="#777698" fontSize="9" fontFamily="system-ui">Nervous System Regulation</text>
    </svg>
  )
}

export function CostIcon({ type }: { type: "nurse" | "officer" | "site" }) {
  const icons = {
    nurse: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#FFCCE5" />
        <path d="M24 14 C20 14, 14 18, 14 24 C14 32, 24 38, 24 38 C24 38, 34 32, 34 24 C34 18, 28 14, 24 14Z" stroke="#8D7AA0" strokeWidth="1.5" fill="none" />
        <path d="M21 24 h6 M24 21 v6" stroke="#29285D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    officer: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#D4EDF9" />
        <path d="M24 12 L34 17 V27 C34 33 24 38 24 38 C24 38 14 33 14 27 V17 L24 12Z" stroke="#8D7AA0" strokeWidth="1.5" fill="none" />
        <path d="M20 25 L23 28 L29 22" stroke="#29285D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    site: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="#FFF2E2" />
        <rect x="14" y="16" width="20" height="20" rx="3" stroke="#8D7AA0" strokeWidth="1.5" fill="none" />
        <path d="M18 24 h12 M18 28 h12 M18 32 h8" stroke="#29285D" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
        <path d="M18 20 L22 20" stroke="#29285D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  }
  return icons[type]
}

export function StepIcon({ step }: { step: 1 | 2 | 3 }) {
  const fills = { 1: "#FFF2E2", 2: "#AAF5D4", 3: "#D4EDF9" }
  if (step === 1) {
    return (
      <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
        <circle cx="28" cy="28" r="26" fill={fills[1]} stroke="#8D7AA0" strokeWidth="1.5" />
        <circle cx="28" cy="28" r="8" stroke="#29285D" strokeWidth="2" fill="none" />
        <circle cx="28" cy="28" r="3" fill="#8D7AA0" />
        <path d="M28 14 v4 M28 38 v4 M14 28 h4 M38 28 h4" stroke="#8D7AA0" strokeWidth="1" opacity="0.5" />
      </svg>
    )
  }
  if (step === 2) {
    return (
      <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
        <circle cx="28" cy="28" r="26" fill={fills[2]} stroke="#8D7AA0" strokeWidth="1.5" />
        <path d="M20 34 Q24 20 28 28 Q32 36 36 22" stroke="#29285D" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M18 38 h20" stroke="#8D7AA0" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
      <circle cx="28" cy="28" r="26" fill={fills[3]} stroke="#8D7AA0" strokeWidth="1.5" />
      <rect x="18" y="20" width="20" height="16" rx="3" stroke="#29285D" strokeWidth="2" fill="none" />
      <path d="M22 28 h12 M22 32 h8" stroke="#8D7AA0" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M28 36 v6" stroke="#29285D" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 42 h12" stroke="#29285D" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function WhyNowIcon({ type }: { type: "shortage" | "duty" | "scrutiny" | "labor" }) {
  const icons = {
    shortage: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M4 20 L12 6 L20 20Z" stroke="#29285D" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <line x1="12" y1="12" x2="12" y2="15" stroke="#29285D" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="17" r="1" fill="#29285D" />
      </svg>
    ),
    duty: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="3" y="3" width="18" height="18" rx="4" stroke="#29285D" strokeWidth="1.5" fill="none" />
        <path d="M8 11 L11 14 L17 8" stroke="#29285D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    scrutiny: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="10" cy="10" r="7" stroke="#29285D" strokeWidth="1.5" fill="none" />
        <line x1="15" y1="15" x2="21" y2="21" stroke="#29285D" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    labor: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="7" r="4" stroke="#29285D" strokeWidth="1.5" fill="none" />
        <path d="M4 21 C4 16 7 13 12 13 C17 13 20 16 20 21" stroke="#29285D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  }
  return icons[type]
}
