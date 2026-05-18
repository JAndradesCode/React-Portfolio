import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-neutral-950"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-red-900 to-red-600 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Equalizer Learning Hub</h3>
              <p className="text-stone-400 mb-4">
                Project for FBLA 2025-2026 for Website Design. Tasked with creating a learning hub by and for students.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "CSS", "JavaScript", "GitHub"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://student-learning-hub-kappa.vercel.app/"
                  className="text-red-400 hover:text-red-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-red-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Word Scramble Game</h3>
              <p className="text-stone-400 mb-4">
                Word scramble game utilizing arrays and animation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "CSS", "HTML"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-red-500/10 text-red-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-red-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://jandradescode.github.io/Capstone-Pair-Project-2026/"
                  className="text-red-400 hover:text-red-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10
              hover:-translate-y-1 hover:border-red-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Art Explorer App</h3>
              <p className="text-stone-400 mb-4">
                App utilizing real-time searching to find art pieces.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "Search algorithms"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-red-500/10 text-red-500 py-1 px-3
                      rounded-full text-sm
                      transition
                      hover:bg-red-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://jandradescode.github.io/Art-Explorer/"
                  className="text-red-400 hover:text-red-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
