import React, { useState, useEffect } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  Zap,
  HeartPulse,
  Music,
  CreditCard,
  Sparkles,
  Info,
  ChevronRight,
  ChevronDown,
  Monitor,
  ArrowLeft,
  Database,
  Calendar,
  Filter,
  Layers,
  Search,
  X,
  ExternalLink,
} from "lucide-react";

const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist+Mono:wght@400;700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;1,9..40,400;1,9..40,500&display=swap";

const mono = { fontFamily: "'Geist Mono', monospace" };
const serif = { fontFamily: "'Instrument Serif', serif" };
const sans = { fontFamily: "'DM Sans', sans-serif" };

const YouScanLink = ({ children, style: extraStyle }) => (
  <a
    href="https://youscan.io/"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#fff",
      fontWeight: 700,
      textDecoration: "none",
      borderBottom: "1px solid rgba(255,255,255,0.3)",
      transition: "border-color 0.2s",
      ...extraStyle,
    }}
    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#ec4899")}
    onMouseLeave={(e) =>
      (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")
    }
  >
    {children || "YouScan"}
  </a>
);

const App = () => {
  const [currentView, setCurrentView] = useState("home");
  const [activeBrand, setActiveBrand] = useState(null);
  const [expandedStat, setExpandedStat] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = FONTS_URL;
    document.head.appendChild(link);
    setTimeout(() => setMounted(true), 100);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentView]);
  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const stats = [
    {
      id: "total",
      label: "Menções Totais",
      value: "140k+",
      sub: "Legado Consolidado (Pós-Evento)",
      icon: <Users className="w-5 h-5" />,
      accent: "#ec4899",
      detail: {
        title: "Semana 3: O Festival Que Não Para",
        period: "01 a 04/04/2026",
        total: "16.413",
        breakdown: [
          { label: "D01 (01/04)", value: "4.823", pct: 29 },
          { label: "D02 (02/04)", value: "4.694", pct: 28 },
          { label: "D03 (03/04)", value: "3.697", pct: 22 },
          { label: "D04 (04/04)", value: "3.199", pct: 19 },
        ],
        macrotemas: [
          {
            name: "Cultura Digital & Fandom",
            total: 3463,
            pain: 0,
            passion: 1101,
            neutro: 2362,
          },
          {
            name: "Line-up & Artistas",
            total: 3098,
            pain: 0,
            passion: 3098,
            neutro: 0,
          },
          {
            name: "Ingressos, Preço & Acesso",
            total: 934,
            pain: 290,
            passion: 0,
            neutro: 644,
          },
          {
            name: "Saúde & Bem-estar",
            total: 919,
            pain: 919,
            passion: 0,
            neutro: 0,
          },
          {
            name: "Marcas & Ativações",
            total: 460,
            pain: 338,
            passion: 63,
            neutro: 59,
          },
        ],
        insight:
          "Duas semanas após o encerramento, o Lollapalooza 2026 ainda gera quase 4 mil menções diárias. Gatilhos externos (novos lançamentos, declarações de artistas) reacendem o volume — o festival vive além do evento.",
      },
    },
    {
      id: "sentimento",
      label: "Sentimento Positivo",
      value: "40%",
      sub: "No auge da nostalgia",
      icon: <TrendingUp className="w-5 h-5" />,
      accent: "#34d399",
      detail: {
        title: "Mapa de Sentimentos",
        sentimentos: [
          { label: "Positivo", value: "4.185", pct: 25.5, color: "#34d399" },
          { label: "Negativo", value: "3.219", pct: 19.6, color: "#f87171" },
          { label: "Neutro", value: "8.928", pct: 54.4, color: "#737373" },
        ],
        tonsPositivos: [
          {
            tom: "Euforia",
            ctx: "Fandom / Evento — Chappell Roan e fandoms kpop",
          },
          {
            tom: "Nostalgia",
            ctx: "Memórias afetivas — Sabrina Carpenter e Lorde",
          },
          { tom: "Reverência", ctx: "Debate editorial sobre legado histórico" },
          {
            tom: "Descoberta",
            ctx: "Marina — gatilho externo no D04 com 272 menções",
          },
        ],
        tonsNegativos: [
          {
            tom: "Preocupação",
            ctx: "Influenza e exaustão pós-festival na Semana 3",
          },
          {
            tom: "Melancolia",
            ctx: "Saudade crônica — 804 menções permanentes",
          },
          { tom: "Ironia", ctx: "Budweiser alvo de memes sobre custo" },
        ],
        insight:
          "O positivo é puxado por nostalgia e euforia dos fandoms. O negativo concentra-se em saúde física (influenza) e frustração financeira — ambos oportunidades para marcas de autocuidado e serviços financeiros.",
      },
    },
    {
      id: "saude",
      label: "Macrotema Saúde",
      value: "919",
      sub: "Menções específicas",
      icon: <HeartPulse className="w-5 h-5" />,
      accent: "#22d3ee",
      detail: {
        title: "Saúde & Bem-estar Pós-Festival",
        subtemas: [
          {
            name: "Saudade crônica: o estado permanente",
            citacoes: 804,
            tom: "Melancolia",
            desc: "Saudade como emoção permanente — estado afetivo que fideliza audiência para próximas edições.",
          },
          {
            name: "Influenza pós-festival: ainda em pauta",
            citacoes: 115,
            tom: "Preocupação",
            desc: "Influenza pós-festival ainda presente na conversa duas semanas depois.",
          },
        ],
        vozes: [
          '"ser pobre no lolla é tipo tomar mounjaro né, perdi 3kg em um fim de semana"',
          '"as pessoas positivando pra influenza pós lolla culpo o cigarraço da addison"',
          '"quem diria que ficar 3 dias seguidos bebendo pouca água... alguem me explica esse sono descomunal"',
        ],
        insight:
          'As 919 menções são 100% Pain — mas a dor não cancela a positividade da memória. Esse paradoxo ("doente, mas feliz") cria o momento perfeito para marcas de autocuidado entrarem no feed com empatia.',
      },
    },
    {
      id: "chappell",
      label: "Pico Chappell Roan",
      value: "966",
      sub: "Gatilho dia 02/04",
      icon: <Music className="w-5 h-5" />,
      accent: "#facc15",
      detail: {
        title: "Gatilhos Externos: O Festival Que Se Retroalimenta",
        artistas: [
          {
            name: "Chappell Roan",
            citacoes: 1488,
            pico: "D02 — 966 menções",
            tom: "Euforia",
            desc: "Evento externo reacende fenômeno. Maior volume do pós-festival tardio.",
          },
          {
            name: "Sabrina Carpenter",
            citacoes: 442,
            pico: "Consistente nos 4 dias",
            tom: "Nostalgia",
            desc: "Maior legado de show. Presença orgânica contínua.",
          },
          {
            name: "Marina",
            citacoes: 313,
            pico: "D04 — 272 menções",
            tom: "Descoberta",
            desc: "Gatilho externo amplifica narrativa de artista descoberta pelo Brasil.",
          },
          {
            name: "Katseye",
            citacoes: 299,
            pico: "Consistente nos 4 dias",
            tom: "Empolgação",
            desc: "Maior consistência do pós-festival tardio. Comunidade kpop engajada.",
          },
          {
            name: "Lorde",
            citacoes: 226,
            pico: "Estável (98+89+93+69)",
            tom: "Reverência",
            desc: "Show cult em análise editorial contínua.",
          },
          {
            name: "RIIZE",
            citacoes: 173,
            pico: "Todos os dias",
            tom: "Empolgação",
            desc: "Kpop com maior engajamento pós-festival.",
          },
        ],
        badges: [
          "GATILHOS EXTERNOS: 2.248 MENÇÕES",
          "FANDOM KPOP: 1.058 MENÇÕES",
        ],
        insight:
          "A conversa pós-festival não decai linearmente. Gatilhos externos reacendem o debate e criam janelas de oportunidade para marcas monitorando em tempo real.",
      },
    },
  ];

  const brandStrategies = [
    {
      id: "risque",
      name: "Risqué",
      category: "Beleza & Estilo",
      icon: <Sparkles className="w-6 h-6" />,
      color: "#db2777",
      insight: "Presença orgânica ativa mesmo na 2ª semana pós-evento.",
      action:
        'Lançar tutoriais "Daily Festival Look" e coleções inspiradas nos maiores fandoms (Lorde/Sabrina Carpenter) para eternizar a memória afetiva.',
      metric:
        "Forte presença em UGC tardio — 63 menções Passion com tom de nostalgia.",
    },
    {
      id: "budweiser",
      name: "Budweiser",
      category: "Cultura Pop",
      icon: <Music className="w-6 h-6" />,
      color: "#dc2626",
      insight: "Vinculada a memes e contextos editoriais da indústria.",
      action:
        'Atuar como curadora da "ressaca cultural". Promover watch parties digitais focadas em artistas que tiveram picos tardios (Chappell Roan/Marina).',
      metric:
        "338 menções Pain — picos em D02 (176) e D03 (136) via gatilhos externos.",
    },
    {
      id: "bradesco",
      name: "Bradesco",
      category: "Serviços Financeiros",
      icon: <CreditCard className="w-6 h-6" />,
      color: "#2563eb",
      insight: 'Citada em contextos de pagamentos e "ressaca financeira".',
      action:
        "Transformar a dor do gasto em planejamento. Oferecer conteúdos de educação financeira e benefícios exclusivos para o ciclo de 2027.",
      metric: "53 menções em contexto pragmático — D02 concentra 33 menções.",
    },
  ];

  const navOpacity = Math.min(scrollY / 100, 1);

  const StatDetail = ({ stat }) => {
    const d = stat.detail;
    const closeBtn = (
      <button
        onClick={(e) => {
          e.stopPropagation();
          setExpandedStat(null);
        }}
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "none",
          borderRadius: 12,
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "rgba(255,255,255,0.5)",
          flexShrink: 0,
        }}
      >
        <X className="w-4 h-4" />
      </button>
    );

    return (
      <div
        style={{
          gridColumn: "1 / -1",
          background: "#141414",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 24,
          overflow: "hidden",
          animation: "slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <style>{`@keyframes slideDown { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }`}</style>
        <div
          style={{
            padding: "28px 28px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 20,
          }}
        >
          <h3
            style={{
              ...serif,
              fontStyle: "italic",
              fontSize: 22,
              fontWeight: 400,
              lineHeight: 1.2,
            }}
          >
            {d.title}
          </h3>
          {closeBtn}
        </div>

        {stat.id === "total" && (
          <div style={{ padding: "0 28px 28px" }}>
            <div
              style={{
                display: "flex",
                gap: 10,
                marginBottom: 20,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  ...mono,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.3)",
                  padding: "5px 12px",
                  background: "rgba(255,255,255,0.04)",
                  borderRadius: 8,
                }}
              >
                PERÍODO: {d.period}
              </span>
              <span
                style={{
                  ...mono,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#ec4899",
                  padding: "5px 12px",
                  background: "rgba(236,72,153,0.08)",
                  borderRadius: 8,
                }}
              >
                CONSOLIDADO: {d.total} MENÇÕES
              </span>
            </div>
            <div
              style={{
                ...mono,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.3)",
                marginBottom: 10,
              }}
            >
              VOLUMETRIA DIÁRIA
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: 24,
              }}
            >
              {d.breakdown.map((day, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <span
                    style={{
                      ...mono,
                      fontSize: 11,
                      fontWeight: 700,
                      color: "rgba(255,255,255,0.4)",
                      width: 80,
                      flexShrink: 0,
                    }}
                  >
                    {day.label}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: 8,
                      background: "rgba(255,255,255,0.06)",
                      borderRadius: 99,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        borderRadius: 99,
                        background: `linear-gradient(90deg, ${stat.accent}, ${stat.accent}99)`,
                        width: `${day.pct}%`,
                        transition: "width 0.8s cubic-bezier(0.16,1,0.3,1)",
                        transitionDelay: `${i * 100}ms`,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      ...sans,
                      fontWeight: 700,
                      fontSize: 13,
                      width: 48,
                      textAlign: "right",
                    }}
                  >
                    {day.value}
                  </span>
                  <span
                    style={{
                      ...mono,
                      fontSize: 9,
                      color: "rgba(255,255,255,0.25)",
                      width: 28,
                    }}
                  >
                    {day.pct}%
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                ...mono,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.3)",
                marginBottom: 10,
              }}
            >
              MACROTEMAS
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                marginBottom: 24,
              }}
            >
              {d.macrotemas.map((m, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <span
                    style={{ ...sans, fontSize: 13, fontWeight: 600, flex: 1 }}
                  >
                    {m.name}
                  </span>
                  <div style={{ display: "flex", gap: 6 }}>
                    {m.passion > 0 && (
                      <span
                        style={{
                          ...mono,
                          fontSize: 9,
                          padding: "3px 8px",
                          borderRadius: 6,
                          background: "rgba(236,72,153,0.1)",
                          color: "#ec4899",
                        }}
                      >
                        ♥ {m.passion}
                      </span>
                    )}
                    {m.pain > 0 && (
                      <span
                        style={{
                          ...mono,
                          fontSize: 9,
                          padding: "3px 8px",
                          borderRadius: 6,
                          background: "rgba(248,113,113,0.1)",
                          color: "#f87171",
                        }}
                      >
                        ⚡ {m.pain}
                      </span>
                    )}
                    {m.neutro > 0 && (
                      <span
                        style={{
                          ...mono,
                          fontSize: 9,
                          padding: "3px 8px",
                          borderRadius: 6,
                          background: "rgba(255,255,255,0.04)",
                          color: "rgba(255,255,255,0.4)",
                        }}
                      >
                        ○ {m.neutro}
                      </span>
                    )}
                  </div>
                  <span
                    style={{
                      ...sans,
                      fontWeight: 800,
                      fontSize: 14,
                      width: 48,
                      textAlign: "right",
                    }}
                  >
                    {m.total.toLocaleString("pt-BR")}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                padding: 20,
                background: "rgba(236,72,153,0.06)",
                borderRadius: 16,
                border: "1px solid rgba(236,72,153,0.1)",
              }}
            >
              <p
                style={{
                  ...sans,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}
              >
                {d.insight}
              </p>
            </div>
          </div>
        )}

        {stat.id === "sentimento" && (
          <div style={{ padding: "0 28px 28px" }}>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginBottom: 24,
                flexWrap: "wrap",
              }}
            >
              {d.sentimentos.map((s, i) => (
                <div
                  key={i}
                  style={{
                    flex: "1 1 100px",
                    padding: 16,
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.05)",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      ...sans,
                      fontWeight: 900,
                      fontSize: 24,
                      color: s.color,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {s.pct}%
                  </div>
                  <div
                    style={{
                      ...sans,
                      fontWeight: 600,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.5)",
                      marginBottom: 4,
                    }}
                  >
                    {s.label}
                  </div>
                  <div
                    style={{
                      ...mono,
                      fontSize: 10,
                      color: "rgba(255,255,255,0.25)",
                    }}
                  >
                    {s.value}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <div>
                <div
                  style={{
                    ...mono,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#34d399",
                    marginBottom: 10,
                  }}
                >
                  TONS POSITIVOS
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  {d.tonsPositivos.map((t, i) => (
                    <div
                      key={i}
                      style={{
                        padding: 12,
                        background: "rgba(52,211,153,0.04)",
                        borderRadius: 10,
                        borderLeft: "3px solid rgba(52,211,153,0.3)",
                      }}
                    >
                      <div
                        style={{
                          ...sans,
                          fontWeight: 700,
                          fontSize: 12,
                          color: "#34d399",
                          marginBottom: 2,
                        }}
                      >
                        {t.tom}
                      </div>
                      <div
                        style={{
                          ...sans,
                          fontSize: 11,
                          color: "rgba(255,255,255,0.4)",
                          lineHeight: 1.4,
                        }}
                      >
                        {t.ctx}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div
                  style={{
                    ...mono,
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#f87171",
                    marginBottom: 10,
                  }}
                >
                  TONS NEGATIVOS
                </div>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  {d.tonsNegativos.map((t, i) => (
                    <div
                      key={i}
                      style={{
                        padding: 12,
                        background: "rgba(248,113,113,0.04)",
                        borderRadius: 10,
                        borderLeft: "3px solid rgba(248,113,113,0.3)",
                      }}
                    >
                      <div
                        style={{
                          ...sans,
                          fontWeight: 700,
                          fontSize: 12,
                          color: "#f87171",
                          marginBottom: 2,
                        }}
                      >
                        {t.tom}
                      </div>
                      <div
                        style={{
                          ...sans,
                          fontSize: 11,
                          color: "rgba(255,255,255,0.4)",
                          lineHeight: 1.4,
                        }}
                      >
                        {t.ctx}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              style={{
                padding: 20,
                background: "rgba(52,211,153,0.06)",
                borderRadius: 16,
                border: "1px solid rgba(52,211,153,0.1)",
              }}
            >
              <p
                style={{
                  ...sans,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}
              >
                {d.insight}
              </p>
            </div>
          </div>
        )}

        {stat.id === "saude" && (
          <div style={{ padding: "0 28px 28px" }}>
            <span
              style={{
                ...mono,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#f87171",
                padding: "5px 12px",
                background: "rgba(248,113,113,0.08)",
                borderRadius: 8,
                display: "inline-block",
                marginBottom: 20,
              }}
            >
              100% PAIN — ZERO PASSION OU NEUTRO
            </span>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginBottom: 24,
              }}
            >
              {d.subtemas.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: 20,
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: 8,
                    }}
                  >
                    <span style={{ ...sans, fontWeight: 700, fontSize: 14 }}>
                      {s.name}
                    </span>
                    <span
                      style={{
                        ...sans,
                        fontWeight: 800,
                        fontSize: 18,
                        color: "#22d3ee",
                      }}
                    >
                      {s.citacoes}
                    </span>
                  </div>
                  <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <span
                      style={{
                        ...mono,
                        fontSize: 9,
                        padding: "3px 8px",
                        borderRadius: 6,
                        background: "rgba(248,113,113,0.1)",
                        color: "#f87171",
                      }}
                    >
                      Pain
                    </span>
                    <span
                      style={{
                        ...mono,
                        fontSize: 9,
                        padding: "3px 8px",
                        borderRadius: 6,
                        background: "rgba(255,255,255,0.04)",
                        color: "rgba(255,255,255,0.4)",
                      }}
                    >
                      {s.tom}
                    </span>
                  </div>
                  <p
                    style={{
                      ...sans,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.4)",
                      lineHeight: 1.5,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
            <div
              style={{
                ...mono,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.3)",
                marginBottom: 10,
              }}
            >
              VOZES DO PÚBLICO
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: 24,
              }}
            >
              {d.vozes.map((v, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px 16px",
                    background: "rgba(34,211,238,0.04)",
                    borderRadius: 12,
                    borderLeft: "3px solid rgba(34,211,238,0.2)",
                  }}
                >
                  <p
                    style={{
                      ...sans,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.5)",
                      fontStyle: "italic",
                      lineHeight: 1.5,
                    }}
                  >
                    {v}
                  </p>
                </div>
              ))}
            </div>
            <div
              style={{
                padding: 20,
                background: "rgba(34,211,238,0.06)",
                borderRadius: 16,
                border: "1px solid rgba(34,211,238,0.1)",
              }}
            >
              <p
                style={{
                  ...sans,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}
              >
                {d.insight}
              </p>
            </div>
          </div>
        )}

        {stat.id === "chappell" && (
          <div style={{ padding: "0 28px 28px" }}>
            <div
              style={{
                display: "flex",
                gap: 10,
                marginBottom: 20,
                flexWrap: "wrap",
              }}
            >
              {d.badges.map((b, i) => (
                <span
                  key={i}
                  style={{
                    ...mono,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: i === 0 ? "#facc15" : "#a855f7",
                    padding: "5px 12px",
                    background:
                      i === 0
                        ? "rgba(250,204,21,0.08)"
                        : "rgba(168,85,247,0.08)",
                    borderRadius: 8,
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 8,
                marginBottom: 24,
              }}
            >
              {d.artistas.map((a, i) => (
                <div
                  key={i}
                  style={{
                    padding: 16,
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.05)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        marginBottom: 4,
                      }}
                    >
                      <span style={{ ...sans, fontWeight: 800, fontSize: 15 }}>
                        {a.name}
                      </span>
                      <span
                        style={{
                          ...mono,
                          fontSize: 9,
                          padding: "2px 8px",
                          borderRadius: 6,
                          background: "rgba(250,204,21,0.08)",
                          color: "#facc15",
                        }}
                      >
                        {a.tom}
                      </span>
                    </div>
                    <div
                      style={{
                        ...mono,
                        fontSize: 10,
                        color: "rgba(255,255,255,0.3)",
                        marginBottom: 4,
                      }}
                    >
                      Pico: {a.pico}
                    </div>
                    <p
                      style={{
                        ...sans,
                        fontSize: 11,
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.4,
                      }}
                    >
                      {a.desc}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        ...sans,
                        fontWeight: 900,
                        fontSize: 22,
                        color: stat.accent,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {a.citacoes.toLocaleString("pt-BR")}
                    </div>
                    <div
                      style={{
                        ...mono,
                        fontSize: 8,
                        color: "rgba(255,255,255,0.2)",
                        textTransform: "uppercase",
                      }}
                    >
                      citações
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                padding: 20,
                background: "rgba(250,204,21,0.06)",
                borderRadius: 16,
                border: "1px solid rgba(250,204,21,0.1)",
              }}
            >
              <p
                style={{
                  ...sans,
                  fontSize: 14,
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}
              >
                {d.insight}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const HomeView = () => (
    <div style={{ opacity: mounted ? 1 : 0, transition: "opacity 0.8s ease" }}>
      {/* Hero */}
      <header
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: 100,
          paddingBottom: 80,
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: "50%",
            transform: "translateX(-50%)",
            width: 900,
            height: 500,
            background:
              "radial-gradient(ellipse at center, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.08) 40%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 99,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              ...mono,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              color: "rgba(255,255,255,0.7)",
              marginBottom: 32,
              backdropFilter: "blur(8px)",
            }}
          >
            <Zap className="w-3 h-3" style={{ color: "#facc15" }} />
            ESTUDO DE CASO: LOLLAPALOOZA BRASIL 2026
          </div>
          <h1
            style={{
              ...sans,
              fontWeight: 900,
              fontSize: "clamp(40px, 7vw, 72px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              marginBottom: 24,
            }}
          >
            O FESTIVAL
            <br />
            NÃO ACABA{" "}
            <span
              style={{
                ...serif,
                fontStyle: "italic",
                fontWeight: 400,
                background:
                  "linear-gradient(135deg, #ec4899, #a855f7, #facc15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              no domingo
            </span>
          </h1>
          <p
            style={{
              ...sans,
              fontSize: 18,
              color: "rgba(255,255,255,0.45)",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Como o Social Listening via <YouScanLink /> transforma o legado
            digital em uma janela estratégica de oportunidade para marcas.
          </p>
        </div>
      </header>

      {/* Stats */}
      <section
        style={{ padding: "48px 24px", background: "rgba(255,255,255,0.02)" }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 32,
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <h2
              style={{
                ...sans,
                fontWeight: 800,
                fontSize: 22,
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <BarChart3 style={{ color: "#ec4899" }} /> O Eco do Festival
            </h2>
            <span
              style={{
                ...mono,
                fontSize: 10,
                color: "rgba(255,255,255,0.3)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Dados{" "}
              <YouScanLink
                style={{ fontSize: 10, color: "rgba(255,255,255,0.5)" }}
              />{" "}
              · 24/03 a 04/04
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
              gap: 16,
            }}
          >
            {stats.map((stat, idx) => {
              const isExpanded = expandedStat === stat.id;
              return (
                <div
                  key={idx}
                  onClick={() => setExpandedStat(isExpanded ? null : stat.id)}
                  style={{
                    background: isExpanded
                      ? "rgba(255,255,255,0.06)"
                      : "rgba(255,255,255,0.03)",
                    border: `1px solid ${
                      isExpanded ? stat.accent + "30" : "rgba(255,255,255,0.06)"
                    }`,
                    borderRadius: 20,
                    padding: 28,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isExpanded) {
                      e.currentTarget.style.borderColor = stat.accent + "40";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isExpanded) {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.06)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.03)";
                    }
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      marginBottom: 16,
                    }}
                  >
                    <div style={{ color: stat.accent }}>{stat.icon}</div>
                    <ChevronDown
                      className="w-4 h-4"
                      style={{
                        color: "rgba(255,255,255,0.2)",
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0)",
                        transition: "transform 0.3s",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      ...sans,
                      fontWeight: 900,
                      fontSize: 36,
                      letterSpacing: "-0.03em",
                      marginBottom: 4,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      ...sans,
                      fontWeight: 600,
                      fontSize: 13,
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {stat.label}
                  </div>
                  <div
                    style={{
                      ...mono,
                      fontSize: 10,
                      color: "rgba(255,255,255,0.3)",
                      marginTop: 4,
                    }}
                  >
                    {stat.sub}
                  </div>
                </div>
              );
            })}
            {expandedStat && (
              <StatDetail stat={stats.find((s) => s.id === expandedStat)} />
            )}
          </div>
        </div>
      </section>

      {/* Brand Strategies */}
      <section
        style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}
      >
        <div style={{ marginBottom: 48 }}>
          <h2
            style={{
              ...serif,
              fontStyle: "italic",
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 400,
              marginBottom: 12,
              lineHeight: 1.1,
            }}
          >
            Esticando a Plataforma
            <br />
            de Comunicação
          </h2>
          <p
            style={{
              ...sans,
              color: "rgba(255,255,255,0.4)",
              fontSize: 15,
              maxWidth: 500,
            }}
          >
            Identificamos "gatilhos externos" que permitem às marcas liderar
            conversas mesmo após o fim das ativações in loco.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 20,
          }}
        >
          {brandStrategies.map((brand) => {
            const isActive = activeBrand?.id === brand.id;
            return (
              <button
                key={brand.id}
                onClick={() => setActiveBrand(isActive ? null : brand)}
                style={{
                  textAlign: "left",
                  padding: 32,
                  borderRadius: 28,
                  border: isActive
                    ? "none"
                    : "1px solid rgba(255,255,255,0.08)",
                  background: isActive ? "#fff" : "rgba(255,255,255,0.02)",
                  color: isActive ? "#0a0a0a" : "#fff",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  transform: isActive ? "translateY(-4px)" : "translateY(0)",
                  boxShadow: isActive
                    ? "0 20px 60px rgba(255,255,255,0.1)"
                    : "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 300,
                  ...sans,
                  outline: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = isActive
                      ? "#fff"
                      : "rgba(255,255,255,0.02)";
                }}
              >
                <div>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 16,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 24,
                      background: brand.color,
                      color: "#fff",
                    }}
                  >
                    {brand.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: 26,
                      fontWeight: 900,
                      marginBottom: 4,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {brand.name}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: isActive
                        ? "rgba(0,0,0,0.5)"
                        : "rgba(255,255,255,0.35)",
                    }}
                  >
                    {brand.category}
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginTop: 16,
                    color: isActive ? brand.color : "rgba(255,255,255,0.4)",
                  }}
                >
                  {isActive ? "Fechar" : "Ver Estratégia"}{" "}
                  <ChevronRight
                    className="w-4 h-4"
                    style={{
                      transform: isActive ? "rotate(90deg)" : "none",
                      transition: "transform 0.3s",
                    }}
                  />
                </div>
              </button>
            );
          })}
        </div>
        {activeBrand && (
          <div
            style={{
              marginTop: 24,
              background: "#fafafa",
              color: "#0a0a0a",
              borderRadius: 28,
              overflow: "hidden",
              animation: "slideUp 0.5s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <style>{`@keyframes slideUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }`}</style>
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  window.innerWidth > 768 ? "1fr 1fr" : "1fr",
              }}
            >
              <div style={{ padding: 40 }}>
                <div
                  style={{
                    ...mono,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: activeBrand.color,
                    marginBottom: 12,
                  }}
                >
                  O Insight
                </div>
                <p
                  style={{
                    ...serif,
                    fontSize: 24,
                    fontStyle: "italic",
                    lineHeight: 1.3,
                    marginBottom: 24,
                  }}
                >
                  {activeBrand.insight}
                </p>
                <div
                  style={{
                    background: "#fff",
                    padding: 20,
                    borderRadius: 16,
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                    border: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    style={{
                      ...mono,
                      fontSize: 9,
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      color: "rgba(0,0,0,0.35)",
                      marginBottom: 8,
                      textTransform: "uppercase",
                    }}
                  >
                    Métrica Chave
                  </div>
                  <p style={{ ...sans, fontSize: 14, fontWeight: 500 }}>
                    {activeBrand.metric}
                  </p>
                </div>
              </div>
              <div
                style={{
                  padding: 40,
                  borderLeft:
                    window.innerWidth > 768
                      ? "1px solid rgba(0,0,0,0.08)"
                      : "none",
                  borderTop:
                    window.innerWidth <= 768
                      ? "1px solid rgba(0,0,0,0.08)"
                      : "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    ...mono,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(0,0,0,0.35)",
                    marginBottom: 12,
                  }}
                >
                  Como Trabalhar
                </div>
                <p
                  style={{
                    ...sans,
                    fontSize: 17,
                    color: "rgba(0,0,0,0.6)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                  }}
                >
                  "{activeBrand.action}"
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Health Territory */}
      <section
        style={{
          padding: "80px 24px",
          background:
            "linear-gradient(135deg, rgba(6,78,84,0.3) 0%, rgba(88,28,135,0.2) 100%)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: window.innerWidth > 768 ? "1.2fr 1fr" : "1fr",
            gap: 48,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 99,
                background: "rgba(34,211,238,0.1)",
                border: "1px solid rgba(34,211,238,0.2)",
                ...mono,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#22d3ee",
                marginBottom: 20,
              }}
            >
              <Sparkles className="w-3 h-3" /> NOVO TERRITÓRIO IDENTIFICADO
            </div>
            <h2
              style={{
                ...serif,
                fontStyle: "italic",
                fontSize: "clamp(30px, 4.5vw, 44px)",
                fontWeight: 400,
                marginBottom: 20,
                lineHeight: 1.05,
              }}
            >
              Saúde & Bem-estar:
              <br />
              "Doente, mas Feliz"
            </h2>
            <p
              style={{
                ...sans,
                fontSize: 16,
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                marginBottom: 32,
              }}
            >
              Um dos insights mais potentes de 2026 foi a emergência do
              macrotema focado em exaustão física e influenza. O público está
              cristalizando memórias enquanto se recupera.
            </p>
            <div
              style={{
                display: "flex",
                gap: 16,
                padding: 20,
                background: "rgba(255,255,255,0.04)",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.08)",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  background: "#22d3ee",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Zap className="w-5 h-5" style={{ color: "#0a0a0a" }} />
              </div>
              <div>
                <p
                  style={{
                    ...sans,
                    fontWeight: 700,
                    fontSize: 15,
                    marginBottom: 4,
                    fontStyle: "italic",
                  }}
                >
                  Kit de Recuperação Pós-Lolla
                </p>
                <p
                  style={{
                    ...sans,
                    fontSize: 13,
                    color: "rgba(255,255,255,0.4)",
                    lineHeight: 1.5,
                  }}
                >
                  Oportunidade para marcas farmacêuticas e isotônicos criarem
                  conexão empática na casa do consumidor.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                padding: 40,
                borderRadius: 32,
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.3)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <HeartPulse
                style={{
                  position: "absolute",
                  bottom: -20,
                  right: -20,
                  width: 120,
                  height: 120,
                  color: "rgba(34,211,238,0.06)",
                }}
              />
              <div
                style={{
                  ...sans,
                  fontWeight: 900,
                  fontSize: 56,
                  color: "#22d3ee",
                  letterSpacing: "-0.04em",
                  marginBottom: 4,
                }}
              >
                919
              </div>
              <div
                style={{
                  ...mono,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "rgba(255,255,255,0.3)",
                  textTransform: "uppercase",
                }}
              >
                Menções Reais
              </div>
              <hr
                style={{
                  border: "none",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  margin: "24px 0",
                }}
              />
              <p
                style={{
                  ...sans,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                }}
              >
                "O monitoramento indicou que a dor física (exaustão) não cancela
                a positividade da memória, criando o momento perfeito para
                marcas de autocuidado entrarem no feed."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const MethodologyView = () => (
    <div
      style={{
        paddingTop: 48,
        paddingBottom: 80,
        paddingLeft: 24,
        paddingRight: 24,
        maxWidth: 900,
        margin: "0 auto",
        animation: "fadeSlide 0.6s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <style>{`@keyframes fadeSlide { from { opacity:0; transform:translateX(20px); } to { opacity:1; transform:translateX(0); } }`}</style>
      <button
        onClick={() => setCurrentView("home")}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          color: "#ec4899",
          ...sans,
          fontWeight: 700,
          fontSize: 14,
          background: "none",
          border: "none",
          cursor: "pointer",
          marginBottom: 48,
          transition: "gap 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.gap = "12px")}
        onMouseLeave={(e) => (e.currentTarget.style.gap = "8px")}
      >
        <ArrowLeft className="w-5 h-5" /> Voltar para Insights
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: window.innerWidth > 768 ? "2fr 1fr" : "1fr",
          gap: 48,
        }}
      >
        <div>
          <h1
            style={{
              ...serif,
              fontStyle: "italic",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 400,
              marginBottom: 40,
              lineHeight: 1,
            }}
          >
            Metodologia
            <br />
            de Monitoramento
          </h1>
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            <section>
              <h3
                style={{
                  ...sans,
                  fontWeight: 800,
                  fontSize: 18,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <Database style={{ color: "#ec4899" }} /> Fonte e Escopo dos
                Dados
              </h3>
              <p
                style={{
                  ...sans,
                  fontSize: 15,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                A análise baseia-se na consolidação de 4 fluxos de dados via{" "}
                <YouScanLink />, cobrindo o período tardio do pós-festival
                (Semana 3).
              </p>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 20,
                  padding: 24,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                  gap: 16,
                }}
              >
                {[
                  { l: "Data", v: "01 a 04/04" },
                  { l: "Total Menções", v: "16.413" },
                  { l: "Geografia", v: "Brasil" },
                  { l: "Idiomas", v: "PT-BR" },
                ].map((item, i) => (
                  <div key={i}>
                    <div
                      style={{
                        ...mono,
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        color: "rgba(255,255,255,0.3)",
                        textTransform: "uppercase",
                        marginBottom: 4,
                      }}
                    >
                      {item.l}
                    </div>
                    <div style={{ ...sans, fontWeight: 700, fontSize: 17 }}>
                      {item.v}
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h3
                style={{
                  ...sans,
                  fontWeight: 800,
                  fontSize: 18,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <Calendar style={{ color: "#ec4899" }} /> Volumetria Diária
              </h3>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {[
                  { d: "01/04", v: "4.823", p: 29, n: null },
                  { d: "02/04", v: "4.694", p: 28, n: "Pico Chappell Roan" },
                  { d: "03/04", v: "3.697", p: 22, n: null },
                  { d: "04/04", v: "3.199", p: 19, n: "Gatilho Marina" },
                ].map((day, i) => (
                  <div
                    key={i}
                    style={{ display: "flex", alignItems: "center", gap: 16 }}
                  >
                    <span
                      style={{
                        ...mono,
                        fontSize: 13,
                        fontWeight: 700,
                        color: "rgba(255,255,255,0.3)",
                        width: 50,
                        flexShrink: 0,
                      }}
                    >
                      {day.d}
                    </span>
                    <div
                      style={{
                        flex: 1,
                        height: 10,
                        background: "rgba(255,255,255,0.06)",
                        borderRadius: 99,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          height: "100%",
                          borderRadius: 99,
                          background:
                            "linear-gradient(90deg, #ec4899, #a855f7)",
                          width: `${day.p}%`,
                          transition: "width 1s cubic-bezier(0.16,1,0.3,1)",
                          transitionDelay: `${i * 150}ms`,
                        }}
                      />
                    </div>
                    <span
                      style={{
                        ...sans,
                        fontWeight: 700,
                        fontSize: 14,
                        width: 56,
                        textAlign: "right",
                      }}
                    >
                      {day.v}
                    </span>
                    {day.n && (
                      <span
                        style={{
                          ...mono,
                          fontSize: 9,
                          fontWeight: 700,
                          background: "rgba(250,204,21,0.1)",
                          color: "#facc15",
                          border: "1px solid rgba(250,204,21,0.2)",
                          padding: "4px 10px",
                          borderRadius: 8,
                          whiteSpace: "nowrap",
                        }}
                      >
                        {day.n}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h3
                style={{
                  ...sans,
                  fontWeight: 800,
                  fontSize: 18,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 16,
                }}
              >
                <Layers style={{ color: "#ec4899" }} /> Segmentação de Análise
              </h3>
              <p
                style={{
                  ...sans,
                  fontSize: 15,
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}
              >
                Utilizamos uma estrutura de "Mandala de Insights" para
                categorizar o discurso em três pilares principais:
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                  gap: 12,
                }}
              >
                {[
                  {
                    l: "Pain (Dor)",
                    d: 'Críticas de infraestrutura, logística ou "ressaca" física/financeira.',
                    c: "#ef4444",
                    bg: "rgba(239,68,68,0.08)",
                    b: "rgba(239,68,68,0.15)",
                  },
                  {
                    l: "Passion (Paixão)",
                    d: "Fandoms, nostalgia, memórias afetivas e celebração de artistas.",
                    c: "#ec4899",
                    bg: "rgba(236,72,153,0.08)",
                    b: "rgba(236,72,153,0.15)",
                  },
                  {
                    l: "Neutro",
                    d: "Compartilhamento de UGC, memes e contexto editorial.",
                    c: "rgba(255,255,255,0.5)",
                    bg: "rgba(255,255,255,0.03)",
                    b: "rgba(255,255,255,0.08)",
                  },
                ].map((p, i) => (
                  <div
                    key={i}
                    style={{
                      padding: 20,
                      borderRadius: 16,
                      background: p.bg,
                      border: `1px solid ${p.b}`,
                    }}
                  >
                    <p
                      style={{
                        ...sans,
                        fontWeight: 700,
                        color: p.c,
                        marginBottom: 6,
                        fontSize: 14,
                      }}
                    >
                      {p.l}
                    </p>
                    <p
                      style={{
                        ...sans,
                        fontSize: 12,
                        color: "rgba(255,255,255,0.4)",
                        lineHeight: 1.5,
                      }}
                    >
                      {p.d}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              background: "#fff",
              color: "#0a0a0a",
              padding: 32,
              borderRadius: 28,
            }}
          >
            <Search
              className="w-7 h-7"
              style={{ color: "#ec4899", marginBottom: 16 }}
            />
            <h4
              style={{
                ...sans,
                fontWeight: 900,
                fontSize: 20,
                marginBottom: 8,
              }}
            >
              Detecção de Gatilhos
            </h4>
            <p
              style={{
                ...sans,
                fontSize: 14,
                lineHeight: 1.6,
                color: "rgba(0,0,0,0.6)",
                marginBottom: 24,
              }}
            >
              Nossa tecnologia identifica automaticamente quando um volume de
              menções não pertence ao ciclo natural do evento, permitindo que
              marcas respondam a "fatos novos" em tempo real.
            </p>
            <div
              style={{
                ...mono,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "rgba(0,0,0,0.3)",
                textTransform: "uppercase",
                borderTop: "1px solid rgba(0,0,0,0.08)",
                paddingTop: 16,
              }}
            >
              Exemplo: Chappell Roan (D02)
            </div>
          </div>
          <div
            style={{
              background: "#ec4899",
              color: "#fff",
              padding: 32,
              borderRadius: 28,
            }}
          >
            <Filter className="w-7 h-7" style={{ marginBottom: 16 }} />
            <h4
              style={{
                ...sans,
                fontWeight: 900,
                fontSize: 20,
                marginBottom: 12,
              }}
            >
              Filtros Avançados
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                ...sans,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              <span>· Exclusão de ruído bots</span>
              <span>· Análise de sentimentos via IA</span>
              <span>· Identificação de Micro-tendências</span>
              <span>· Mapeamento de Macrotemas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        ...sans,
      }}
    >
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: `rgba(10,10,10,${0.6 + navOpacity * 0.3})`,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "16px 24px",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              cursor: "pointer",
            }}
            onClick={() => setCurrentView("home")}
          >
            <div
              style={{
                width: 32,
                height: 32,
                background: "linear-gradient(135deg, #ec4899, #a855f7)",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ...serif,
                fontStyle: "italic",
                fontSize: 18,
                color: "#fff",
              }}
            >
              L
            </div>
            <span
              style={{
                ...mono,
                fontWeight: 700,
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Lolla Insights 2026
            </span>
          </div>
          <div style={{ display: "flex", gap: 32 }}>
            {["home", "methodology"].map((v) => (
              <button
                key={v}
                onClick={() => setCurrentView(v)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  ...mono,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: currentView === v ? "#fff" : "rgba(255,255,255,0.35)",
                  transition: "color 0.2s",
                  padding: 0,
                }}
              >
                {v === "home" ? "Home" : "Metodologia"}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div style={{ paddingTop: 64 }}>
        {currentView === "home" ? <HomeView /> : <MethodologyView />}
      </div>

      <footer
        style={{
          padding: "80px 24px",
          textAlign: "center",
          maxWidth: 700,
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <a
          href="https://youscan.io/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            textDecoration: "none",
            color: "#fff",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: "#fff",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Monitor style={{ color: "#0a0a0a", width: 28, height: 28 }} />
          </div>
          <div style={{ textAlign: "left" }}>
            <div
              style={{
                ...mono,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "0.15em",
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
              }}
            >
              Powered by
            </div>
            <div
              style={{
                ...sans,
                fontWeight: 900,
                fontSize: 24,
                letterSpacing: "-0.02em",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              YouScan{" "}
              <ExternalLink
                className="w-4 h-4"
                style={{ color: "rgba(255,255,255,0.3)" }}
              />
            </div>
          </div>
        </a>
        <p
          style={{
            ...sans,
            fontSize: 14,
            color: "rgba(255,255,255,0.3)",
            maxWidth: 460,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Este estudo foi realizado através da ferramenta <YouScanLink />,
          utilizando monitoramento avançado de IA para capturar não apenas
          menções, mas sentimentos e oportunidades orgânicas.
        </p>
        <div
          style={{
            ...mono,
            fontSize: 9,
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          © 2026 · Estudo de Caso · Social Listening
        </div>
      </footer>

      {currentView === "home" && (
        <div style={{ position: "fixed", bottom: 32, right: 32, zIndex: 50 }}>
          <button
            onClick={() => setCurrentView("methodology")}
            style={{
              background: "#fff",
              color: "#0a0a0a",
              padding: "14px 24px",
              borderRadius: 99,
              ...sans,
              fontWeight: 800,
              fontSize: 13,
              display: "flex",
              alignItems: "center",
              gap: 8,
              boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <Info className="w-4 h-4" /> Ver Metodologia
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
