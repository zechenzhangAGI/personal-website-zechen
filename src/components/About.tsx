import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start">
          {/* Portrait */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            <Image
              src="/zechen_profile_photo.jpg"
              alt="Zechen Zhang"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Bio */}
          <div>
            <p className="text-sm text-accent uppercase tracking-widest mb-4">
              About
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-8">
              Hello
            </h2>

            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                I&apos;m Zechen Zhang. My path has wandered through philosophy and physics,
                theoretical physics, evolutionary dynamics, and now machine learning—each
                turn driven by the same question: how do complex systems learn and adapt?
              </p>

              <p>
                That question led me from studying the mathematics of evolution to the
                statistical mechanics of neural networks, working with{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Haim_Sompolinsky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors border-b border-border hover:border-foreground"
                >
                  Haim Sompolinsky
                </a>{" "}
                at Harvard on deep learning theory. I&apos;m fascinated by how simple
                theoretical frameworks can illuminate the behavior of systems far more
                complex than they have any right to explain.
              </p>

              <p>
                Along the way, I became deeply involved in{" "}
                <span className="text-foreground">AI safety</span>—organizing Harvard&apos;s
                first AI alignment seminar series and leading the graduate EA community.
                I believe powerful AI should benefit humanity broadly, not remain a
                privilege for the few.
              </p>

              <p>
                Now I&apos;m building{" "}
                <a
                  href="https://www.orchestra-research.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors border-b border-border hover:border-foreground"
                >
                  Orchestra
                </a>
                —AI co-scientist infrastructure to democratize scientific discovery.
                It&apos;s where all these threads converge: theory, systems thinking,
                and the conviction that transformative tools should be accessible to everyone.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-10 pt-8 border-t border-border grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-muted mb-1">Location</p>
                <p className="text-foreground">Cambridge, MA</p>
              </div>
              <div>
                <p className="text-muted mb-1">Focus</p>
                <p className="text-foreground">Building Orchestra</p>
              </div>
              <div>
                <p className="text-muted mb-1">Research</p>
                <p className="text-foreground">Deep Learning Theory</p>
              </div>
              <div>
                <p className="text-muted mb-1">Cares About</p>
                <p className="text-foreground">AI Safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
