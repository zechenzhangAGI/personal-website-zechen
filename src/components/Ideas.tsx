const ideas = [
  {
    title: "Vibe Fine-tuning LLMs",
    excerpt:
      "How I reproduced cutting-edge LoRA research from Thinking Machines Lab by just prompting Orchestra with natural language. From 2-3 weeks of engineering to 2 days—validating that rank=1 LoRA beats full fine-tuning on RL tasks.",
    date: "Nov 2025",
    tag: "Orchestra",
    url: "https://www.orchestra-research.com/perspectives/LLM-with-Orchestra",
  },
  {
    title: "AI Research Engineering Skills",
    excerpt:
      "Introducing the most comprehensive open-source library of AI research engineering skills—70 skills across 19 categories designed to empower AI agents to autonomously conduct end-to-end scientific experimentation.",
    date: "Nov 2025",
    tag: "Orchestra",
    url: "https://www.orchestra-research.com/perspectives/ai-research-skills",
  },
  {
    title: "Science for the Possible World",
    excerpt:
      "As consciousness increasingly inhabits digital spaces, we need a novel scientific discipline. Rather than testing theories against physical reality, we should explore rules that generate complexity in digital worlds.",
    date: "2022",
    tag: "Philosophy",
    url: "https://www.lesswrong.com/posts/kDJtsGMX7YkYSEwqH/science-for-the-possible-world",
  },
];

export default function Ideas() {
  return (
    <section id="ideas" className="py-32 px-6 bg-foreground/[0.02]">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-accent uppercase tracking-widest mb-4">
          Thinking
        </p>
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight mb-6">
          Ideas
        </h2>
        <p className="text-muted mb-16 max-w-2xl">
          Thoughts on AI, science, and building for humanity.
        </p>

        <div className="space-y-6">
          {ideas.map((idea, index) => (
            <a
              key={index}
              href={idea.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 -mx-6 rounded-lg hover:bg-foreground/[0.03] transition-colors border-l-2 border-transparent hover:border-accent"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="text-xs px-2 py-0.5 bg-foreground/5 rounded text-muted">
                  {idea.tag}
                </span>
                <span className="text-sm text-muted">{idea.date}</span>
              </div>
              <h3 className="font-serif text-xl font-medium mb-2 group-hover:text-accent transition-colors">
                {idea.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{idea.excerpt}</p>
            </a>
          ))}
        </div>

        <p className="mt-16 text-sm text-muted italic">More posts coming soon...</p>

        <div className="mt-8 p-8 bg-foreground/[0.03] rounded-lg text-center">
          <p className="text-muted mb-4">
            Read more perspectives on Orchestra&apos;s mission:
          </p>
          <a
            href="https://www.orchestra-research.com/perspectives"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
          >
            Orchestra Blog
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
