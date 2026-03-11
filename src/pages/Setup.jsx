export default function Setup() {
  return (
    <section className="pt-32 pb-24 min-h-[80vh]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Setup Guide</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Learn how to get the most out of InterviewSense — from camera positioning to microphone settings and
            environment tips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">1. Workspace Setup</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-400">
              <li>Position your camera at eye level and ensure even, soft lighting.</li>
              <li>Choose a clutter-free background to reduce distractions.</li>
              <li>Use headphones to improve audio quality and reduce echo.</li>
            </ul>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">2. Audio &amp; Video</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-400">
              <li>Speak clearly and at a natural pace; avoid speaking too quickly.</li>
              <li>Test your microphone and adjust input gain for consistent volume.</li>
              <li>Disable background noise sources (fans, notifications, music).</li>
            </ul>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">3. Practice Routine</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-400">
              <li>Run a short warm-up mock interview before your real session.</li>
              <li>Review performance reports and focus on 1–2 improvement areas each time.</li>
              <li>Try different question types (behavioral, technical, case-study) to build confidence.</li>
            </ul>
          </div>
          <div className="glass-card p-10 rounded-3xl">
            <h2 className="text-2xl font-bold mb-4">4. Privacy & Security</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-400">
              <li>All recordings and analysis remain private and stored securely.</li>
              <li>Opt out of data sharing and export your session reports anytime.</li>
              <li>Review the privacy policy to understand how your data is handled.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
