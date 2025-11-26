export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Abstract geometric illustration - neural network meets physics */}
        <div className="mb-12 animate-fade-in">
          <svg
            viewBox="0 0 200 200"
            className="w-32 h-32 mx-auto text-foreground"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            {/* Statistical mechanics / spin glass inspired pattern */}
            <circle cx="100" cy="100" r="60" strokeDasharray="4 4" opacity="0.3" />
            <circle cx="100" cy="100" r="40" strokeDasharray="2 2" opacity="0.4" />

            {/* Neural network nodes */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
              const r = 60;
              const x = 100 + r * Math.cos((angle * Math.PI) / 180);
              const y = 100 + r * Math.sin((angle * Math.PI) / 180);
              return (
                <g key={angle}>
                  <circle cx={x} cy={y} r="4" fill="currentColor" opacity="0.3" />
                  <line x1="100" y1="100" x2={x} y2={y} opacity="0.15" />
                </g>
              );
            })}

            {/* Inner connections - branching structure */}
            {[30, 150, 270].map((angle) => {
              const r = 40;
              const x = 100 + r * Math.cos((angle * Math.PI) / 180);
              const y = 100 + r * Math.sin((angle * Math.PI) / 180);
              return (
                <g key={`inner-${angle}`}>
                  <circle cx={x} cy={y} r="6" opacity="0.5" />
                  <circle cx={x} cy={y} r="2" fill="currentColor" opacity="0.5" />
                </g>
              );
            })}

            {/* Central node */}
            <circle cx="100" cy="100" r="10" strokeWidth="1" />
            <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.8" />
          </svg>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight mb-6 animate-fade-in-delay-1">
          Zechen Zhang
        </h1>

        <p className="text-lg md:text-xl text-muted mb-4 animate-fade-in-delay-2">
          PhD @ Harvard · Deep Learning Theory · AI Safety
        </p>

        <p className="text-base md:text-lg text-muted/80 max-w-xl mx-auto mb-12 animate-fade-in-delay-3">
          Using statistical mechanics to understand neural networks.
          Building{" "}
          <a
            href="#orchestra"
            className="text-foreground hover:text-accent transition-colors border-b border-border hover:border-foreground"
          >
            Orchestra
          </a>{" "}
          to democratize AI for scientific discovery.
        </p>

        <div className="flex items-center justify-center gap-6 text-sm text-muted animate-fade-in-delay-3">
          <a
            href="https://scholar.google.com/citations?user=GZYRzKoAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Scholar
          </a>
          <span className="text-border">·</span>
          <a
            href="https://github.com/zechenzhangAGI"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span className="text-border">·</span>
          <a
            href="https://x.com/ZechenZhang5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Twitter
          </a>
          <span className="text-border">·</span>
          <a
            href="mailto:zechen_zhang@g.harvard.edu"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-5 h-5 text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
