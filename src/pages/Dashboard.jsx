export default function Dashboard() {
  return (
    <section className="pt-32 pb-24 min-h-[80vh]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dashboard</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Track your progress over time with session summaries, goal tracking, and personalized coaching insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Your NerveScore</h2>
            <p className="text-gray-400 mb-6">
              See how your confidence metrics evolve across interviews and where you are improving the most.
            </p>
            <div className="h-40 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-gray-500">
              Graph placeholder
            </div>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Recent Sessions</h2>
            <ul className="space-y-4 text-gray-400">
              <li className="p-4 bg-white/5 rounded-xl border border-white/10">Session • 2026-03-10 • NerveScore 78</li>
              <li className="p-4 bg-white/5 rounded-xl border border-white/10">Session • 2026-03-05 • NerveScore 71</li>
              <li className="p-4 bg-white/5 rounded-xl border border-white/10">Session • 2026-02-28 • NerveScore 63</li>
            </ul>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Action Plan</h2>
            <p className="text-gray-400 mb-6">
              Get tailored tips to improve your interview presence based on your recent performance.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-400">
              <li>Slow down your speech for better clarity.</li>
              <li>Keep your shoulders relaxed and maintain eye contact.</li>
              <li>Try deep breaths before answering tough questions.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
