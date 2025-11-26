const projects = [
  {
    title: "Orchestra",
    description:
      "AI co-scientist for everyone. Infrastructure to distribute powerful AI systems for scientific research worldwide.",
    tech: ["TypeScript", "AI Agents", "Full Stack"],
    link: "https://www.orchestra-research.com",
    stars: null,
    featured: true,
  },
  {
    title: "AI-Research-SKILLs",
    description:
      "Comprehensive open-source library of AI research and engineering skills. Enables AI agents to function as research assistants with expanded capabilities.",
    tech: ["Python", "AI", "Research Tools"],
    link: "https://github.com/zechenzhangAGI/AI-Research-SKILLs",
    stars: 141,
    featured: true,
  },
  {
    title: "Quantum Sensing Agent",
    description:
      "AI agent that assists scientists to automatically conduct quantum sensing experiments—autocalibration, Rabi oscillations, ESR, and more.",
    tech: ["Python", "Quantum", "AI Agents"],
    link: "https://github.com/zechenzhangAGI/quantum-sensing-agent",
    stars: null,
    featured: true,
  },
  {
    title: "Digital-Research-Labs",
    description:
      "Digital physics laboratory for running computational experiments and simulations with AI assistance.",
    tech: ["TypeScript", "Physics", "Simulation"],
    link: "https://github.com/zechenzhangAGI/Digital-Research-Labs",
    stars: 1,
    featured: true,
  },
  {
    title: "Random-AI-Chat-Room",
    description:
      "Chat with any AI model with customizable character personas. Experimental multi-agent conversation interface.",
    tech: ["TypeScript", "AI", "Chat"],
    link: "https://github.com/zechenzhangAGI/random-AI-chat-room",
    stars: null,
    featured: true,
  },
  {
    title: "Vibe Filmmaking",
    description:
      "Vibe filmmaking with Veo 3.1 and Claude for Orchestra launch video production.",
    tech: ["Python", "Video", "AI"],
    link: "https://github.com/zechenzhangAGI/vibe-filmmaking-veo3-claude",
    stars: null,
    featured: true,
  },
];

function ProjectIllustration({ index, featured }: { index: number; featured: boolean }) {
  const illustrations = [
    // Orchestra - orchestrated agents
    <svg key="orchestra" viewBox="0 0 64 64" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="32" cy="32" r="8" />
      <circle cx="32" cy="32" r="3" fill="currentColor" opacity="0.4" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const x = 32 + 20 * Math.cos((angle * Math.PI) / 180);
        const y = 32 + 20 * Math.sin((angle * Math.PI) / 180);
        return (
          <g key={angle}>
            <line x1="32" y1="32" x2={x} y2={y} strokeDasharray="2 2" opacity="0.3" />
            <circle cx={x} cy={y} r="5" opacity={0.5 + i * 0.08} />
          </g>
        );
      })}
      <circle cx="32" cy="32" r="28" strokeDasharray="2 4" opacity="0.2" />
    </svg>,
    // AI Skills - modular grid
    <svg key="skills" viewBox="0 0 64 64" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="6" y="6" width="20" height="20" rx="2" />
      <rect x="38" y="6" width="20" height="20" rx="2" />
      <rect x="6" y="38" width="20" height="20" rx="2" />
      <rect x="38" y="38" width="20" height="20" rx="2" />
      <circle cx="16" cy="16" r="4" fill="currentColor" opacity="0.3" />
      <circle cx="48" cy="16" r="4" fill="currentColor" opacity="0.4" />
      <circle cx="16" cy="48" r="4" fill="currentColor" opacity="0.5" />
      <circle cx="48" cy="48" r="4" fill="currentColor" opacity="0.6" />
      {/* Connecting lines */}
      <line x1="26" y1="16" x2="38" y2="16" strokeDasharray="2 2" opacity="0.3" />
      <line x1="16" y1="26" x2="16" y2="38" strokeDasharray="2 2" opacity="0.3" />
      <line x1="48" y1="26" x2="48" y2="38" strokeDasharray="2 2" opacity="0.3" />
      <line x1="26" y1="48" x2="38" y2="48" strokeDasharray="2 2" opacity="0.3" />
    </svg>,
    // Quantum Sensing - NV center / spin visualization
    <svg key="quantum" viewBox="0 0 64 64" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Diamond lattice structure */}
      <polygon points="32,8 52,24 52,44 32,56 12,44 12,24" opacity="0.3" />
      {/* NV center */}
      <circle cx="32" cy="32" r="6" fill="currentColor" opacity="0.4" />
      <circle cx="32" cy="32" r="10" strokeDasharray="2 2" />
      {/* Spin arrows */}
      <line x1="32" y1="22" x2="32" y2="14" strokeWidth="1.5" />
      <path d="M29 17 L32 14 L35 17" strokeWidth="1.5" />
      {/* Rabi oscillation wave */}
      <path d="M8 52 Q16 46 24 52 Q32 58 40 52 Q48 46 56 52" opacity="0.5" />
      {/* Energy levels */}
      <line x1="48" y1="18" x2="58" y2="18" opacity="0.4" />
      <line x1="48" y1="26" x2="58" y2="26" opacity="0.4" />
      <path d="M53 18 L53 26" strokeDasharray="1 1" opacity="0.3" />
    </svg>,
    // Digital Labs - physics simulation
    <svg key="labs" viewBox="0 0 64 64" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
      {/* Oscilloscope-like display */}
      <rect x="8" y="8" width="48" height="36" rx="3" />
      {/* Wave pattern */}
      <path d="M12 26 Q20 16 28 26 Q36 36 44 26 Q52 16 52 26" strokeWidth="1.5" />
      {/* Control panel */}
      <rect x="8" y="48" width="48" height="10" rx="2" />
      <circle cx="18" cy="53" r="3" />
      <circle cx="32" cy="53" r="3" />
      <circle cx="46" cy="53" r="3" />
      {/* Grid lines */}
      <line x1="8" y1="20" x2="56" y2="20" opacity="0.2" />
      <line x1="8" y1="32" x2="56" y2="32" opacity="0.2" />
      <line x1="32" y1="8" x2="32" y2="44" opacity="0.2" />
    </svg>,
    // Chat room - conversation bubbles
    <svg key="chat" viewBox="0 0 64 64" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="8" y="8" width="32" height="20" rx="4" />
      <path d="M16 28 L12 36 L24 28" />
      <rect x="24" y="32" width="32" height="20" rx="4" />
      <path d="M48 52 L52 60 L40 52" />
      <circle cx="16" cy="18" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="24" cy="18" r="2" fill="currentColor" opacity="0.4" />
      <circle cx="32" cy="18" r="2" fill="currentColor" opacity="0.4" />
      <line x1="32" y1="40" x2="48" y2="40" opacity="0.3" />
      <line x1="32" y1="46" x2="44" y2="46" opacity="0.3" />
    </svg>,
    // Filmmaking - video/camera
    <svg key="film" viewBox="0 0 64 64" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
      <rect x="8" y="16" width="36" height="28" rx="3" />
      <circle cx="26" cy="30" r="10" />
      <circle cx="26" cy="30" r="4" fill="currentColor" opacity="0.3" />
      {/* Film reel indicator */}
      <path d="M44 24 L56 16 L56 40 L44 32" />
      {/* Recording light */}
      <circle cx="14" cy="22" r="2" fill="currentColor" opacity="0.5" />
      {/* Bottom controls */}
      <rect x="8" y="48" width="48" height="6" rx="2" opacity="0.5" />
    </svg>,
  ];

  return illustrations[index] || illustrations[0];
}

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-accent uppercase tracking-widest mb-4">
          Building
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6">
          Projects
        </h2>
        <p className="text-muted mb-16 max-w-2xl">
          Open-source tools and infrastructure for AI-powered scientific research.
        </p>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border border-border rounded-lg hover:border-foreground/30 transition-all hover:shadow-lg hover:shadow-foreground/5"
            >
              <div className="w-14 h-14 mb-5 text-muted group-hover:text-foreground transition-colors">
                <ProjectIllustration index={index} featured={true} />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-serif text-lg font-medium group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                {project.stars && (
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z" />
                    </svg>
                    {project.stars}
                  </span>
                )}
              </div>
              <p className="text-muted text-sm mb-4 leading-relaxed line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-0.5 bg-foreground/5 rounded text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted mb-4">Check out more projects on my GitHub</p>
          <a
            href="https://github.com/zechenzhangAGI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-accent transition-colors"
          >
            github.com/zechenzhangAGI
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
