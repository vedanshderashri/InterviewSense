export default function Methodology() {
  return (
    <section className="pt-32 pb-24 min-h-[80vh]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Methodology</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how our multimodal system combines computer vision, audio analysis, and behavioral modeling to
            measure interview confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Facial Analysis</h2>
            <p className="text-gray-400 mb-6">
              We extract facial landmarks and map them to established psychological markers such as micro-expressions and
              gaze stability.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-400">
              <li>468-point face mesh tracking.</li>
              <li>Action Unit classification for emotion detection.</li>
              <li>Blink rate + pupil dilation monitoring.</li>
            </ul>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Speech Analysis</h2>
            <p className="text-gray-400 mb-6">
              Our audio models analyze pitch, tone, and pacing to identify stress markers and communication patterns.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-400">
              <li>Prosodic feature extraction (pitch, volume, cadence).</li>
              <li>Speech filler detection ("um", "uh", "like").</li>
              <li>Confidence scoring based on vocal consistency.</li>
            </ul>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Behavioral Modeling</h2>
            <p className="text-gray-400 mb-6">
              Movement and posture are incorporated into a unified NerveScore, informed by research in nonverbal
              communication.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-400">
              <li>Posture and gesture detection from webcam video.</li>
              <li>Movement regularity and self-soothing patterns.</li>
              <li>Integrated score that adjusts feedback for each user.</li>
            </ul>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">Ethics &amp; Privacy</h2>
            <p className="text-gray-400 mb-6">
              Transparency and user control are core to our research platform. You decide what data is stored and how
              it is used.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-400">
              <li>All analysis is performed locally in the browser unless you opt in to cloud features.</li>
              <li>Data export and deletion is available anytime.</li>
              <li>We use secure containerized models and follow best practices for sensitive research data.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
