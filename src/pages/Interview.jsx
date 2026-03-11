export default function Interview() {
  return (
    <section className="pt-32 pb-24 min-h-[80vh]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mock Interview</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Start a mock interview session to receive real-time feedback on your speech, facial expressions, and
            posture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Interview Session</h2>
            <p className="text-gray-400 mb-6">
              You'll be guided through a sequence of questions while our system analyzes your multimodal signals.
            </p>
            <button className="w-full bg-brand-purple hover:bg-brand-accent px-6 py-4 rounded-xl font-semibold text-white transition-all">
              Launch Interview
            </button>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Live Metrics</h2>
            <p className="text-gray-400 mb-6">
              Watch your NerveScore evolve as the system tracks voice stability, facial tension, and body movement.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-400">
              <li>Voice clarity &amp; volume</li>
              <li>Facial expressiveness</li>
              <li>Movement &amp; posture</li>
            </ul>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Post‑Session Report</h2>
            <p className="text-gray-400 mb-6">
              Receive a breakdown of strengths and improvement opportunities. Export your progress report anytime.
            </p>
            <button className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-xl font-semibold text-white hover:bg-white/10 transition-all">
              View Sample Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
