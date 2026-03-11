import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <section className="relative pt-32 pb-20 overflow-hidden bg-mesh" data-purpose="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-semibold mb-6 tracking-wider uppercase">
              Next-Gen Recruitment Intelligence
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
              Smarter Interviews with <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-primary to-brand-accent">AI-Powered</span> Insights
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
              Evaluate candidates beyond their resumes. Our AI analyzes live video interviews for nervousness, confidence, speech patterns, and micro-expressions in real-time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-semibold rounded-xl transition-all glow-purple">
                Start Interview
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/10 rounded-xl transition-all">
                See Demo
              </button>
            </div>
          </div>

          <div className="relative max-w-5xl mx-auto" data-purpose="hero-mockup">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-primary/20 blur-[100px] rounded-full animate-blob" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-accent/20 blur-[100px] rounded-full animate-blob" />

            <div className="glass-card rounded-2xl p-2 sm:p-4 shadow-2xl overflow-hidden border border-white/20">
              <div className="bg-[#1e293b] rounded-xl overflow-hidden aspect-video relative">
                <img
                  alt="Interview Mockup"
                  className="w-full h-full object-cover opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8QWrstRHwzy_2EsK0k5Z1DkwoihUbVBa8fqhULArARjXxjkDavxkKYTJoCaW-M9D3JUYhgsPSObCirNypbWylrEoX07TOd4eVxfx5asSx-eQsLTXyk1ARfKWL2jm0vif7592HfgWv1Sms47_tHk9VjS3UQKHtaKPf81TjWXP61b6EoY50YEBIRoQH5AQyqtLryVtDRn4jnoH_jER6SkWR8xci2QX9dX6dMTxzufk3PoYc0p1apdRiTVqm9Grv3EP2Dl-jIldOsiA"
                />

                <div className="absolute inset-0 p-6 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-3">
                      <div className="bg-red-500/80 backdrop-blur-md text-[10px] text-white px-2 py-1 rounded flex items-center gap-1">
                        <span className="w-2 h-2 bg-white rounded-full animate-pulse" /> REC 00:14:52
                      </div>
                      <div className="bg-brand-primary/80 backdrop-blur-md text-[10px] text-white px-2 py-1 rounded">AI ACTIVE</div>
                    </div>
                    <div className="bg-black/50 backdrop-blur-md p-3 rounded-lg border border-white/10 w-48">
                      <div className="text-[10px] text-slate-400 mb-2 uppercase tracking-tighter">Real-time Metrics</div>
                      <div className="space-y-2">
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-green-400 w-[85%]" />
                        </div>
                        <div className="flex justify-between text-[10px]"><span className="text-slate-300">Confidence</span> <span className="text-green-400">85%</span></div>
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-400 w-[30%]" />
                        </div>
                        <div className="flex justify-between text-[10px]"><span className="text-slate-300">Nervousness</span> <span className="text-yellow-400">Low</span></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-2xl flex gap-6 items-center">
                      <div className="text-center">
                        <div className="text-[10px] text-slate-400 uppercase">Eye Focus</div>
                        <div className="text-xs font-bold text-white">92% Stable</div>
                      </div>
                      <div className="w-px h-8 bg-white/10" />
                      <div className="text-center">
                        <div className="text-[10px] text-slate-400 uppercase">Tone</div>
                        <div className="text-xs font-bold text-white">Professional</div>
                      </div>
                      <div className="w-px h-8 bg-white/10" />
                      <div className="text-center">
                        <div className="text-[10px] text-slate-400 uppercase">WPM</div>
                        <div className="text-xs font-bold text-white">128</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-dark" data-purpose="features-section" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Powerful Features for Precision Hiring</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Our specialized AI models are trained on thousands of successful executive interviews to provide industry-leading behavioral analysis.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl hover:border-brand-primary/50 transition-all group">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Live Video Interviews</h3>
              <p className="text-slate-400 leading-relaxed">High-definition, low-latency video infrastructure designed for seamless remote interactions.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:border-brand-primary/50 transition-all group">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Nervousness Detection</h3>
              <p className="text-slate-400 leading-relaxed">Tracks blink rates and pupil dilation to gauge comfort levels and authenticity during complex questions.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:border-brand-primary/50 transition-all group">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Speech Analysis</h3>
              <p className="text-slate-400 leading-relaxed">Detailed breakdown of Words Per Minute (WPM), tonal shifts, and filler word frequency.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:border-brand-primary/50 transition-all group">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Behavioral Insights</h3>
              <p className="text-slate-400 leading-relaxed">AI-driven psychometric profiling based on verified verbal and non-verbal cues.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:border-brand-primary/50 transition-all group">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Auto Interview Reports</h3>
              <p className="text-slate-400 leading-relaxed">Instant PDF summaries with scored competency metrics delivered after every session.</p>
            </div>
            <div className="glass-card p-8 rounded-2xl hover:border-brand-primary/50 transition-all group">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Recruiter Dashboard</h3>
              <p className="text-slate-400 leading-relaxed">Compare entire cohorts side-by-side with data-driven performance leaderboards.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden" data-purpose="how-it-works-section" id="how-it-works">
        <div className="absolute inset-0 bg-brand-primary/5 -skew-y-3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Streamline Your Pipeline</h2>
            <p className="text-slate-400">Three simple steps to transform your recruitment process.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-xl shadow-brand-primary/40">1</div>
              <h4 className="text-xl font-semibold text-white mb-3">Create Interview</h4>
              <p className="text-slate-400">Set up your JD and preferred competencies in seconds.</p>
            </div>
            <div className="hidden md:block w-24 h-px bg-gradient-to-r from-brand-primary to-transparent" />
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-xl shadow-brand-primary/40">2</div>
              <h4 className="text-xl font-semibold text-white mb-3">AI Observes</h4>
              <p className="text-slate-400">Conduct the interview while our AI monitors 50+ data points.</p>
            </div>
            <div className="hidden md:block w-24 h-px bg-gradient-to-r from-transparent to-brand-primary" />
            <div className="flex-1 text-center">
              <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-xl shadow-brand-primary/40">3</div>
              <h4 className="text-xl font-semibold text-white mb-3">Get the Report</h4>
              <p className="text-slate-400">Receive an unbiased, data-backed candidate scorecard.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-dark" data-purpose="ai-analysis-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Deep Behavioral Deep-Dives</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Forget gut feelings. Our AI provides objective data on every candidate, allowing for merit-based hiring decisions that stick.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd" />
                  </svg>
                  Bias-free assessment protocols
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd" />
                  </svg>
                  Emotional Intelligence (EQ) tracking
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path clipRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" fillRule="evenodd" />
                  </svg>
                  Integrity and authenticity indicators
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="glass-card p-6 rounded-3xl border border-white/10 shadow-inner relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-white">Candidate Analysis Dashboard</h3>
                  <span className="text-[10px] bg-brand-primary/20 text-brand-primary px-2 py-1 rounded">V2.4 PREVIEW</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Nervousness Score</div>
                    <div className="text-2xl font-bold text-white">12% <span className="text-xs text-green-400 ml-1">↓ Healthy</span></div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Confidence Level</div>
                    <div className="text-2xl font-bold text-white">88% <span className="text-xs text-brand-primary ml-1">High</span></div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Eye Blink Rate</div>
                    <div className="text-2xl font-bold text-white">14 <span className="text-xs text-slate-500 ml-1">per min</span></div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="text-slate-500 text-xs mb-1 uppercase tracking-wider">Speech Speed</div>
                    <div className="text-2xl font-bold text-white">132 <span className="text-xs text-slate-500 ml-1">WPM</span></div>
                  </div>
                </div>
                <div className="mt-4 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="flex justify-between items-end mb-4">
                    <div className="text-slate-500 text-xs uppercase tracking-wider">Engagement Score</div>
                    <div className="text-xl font-bold text-white">94/100</div>
                  </div>
                  <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-primary to-brand-accent w-[94%]" />
                  </div>
                </div>
                <div className="absolute top-1/2 right-4 bg-brand-accent text-white text-[10px] px-2 py-1 rounded-md shadow-lg transform rotate-3">
                  Actionable AI Data
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-white/5" id="use-cases">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-12">Built for Every Hiring Scenario</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6">
              <h5 className="text-lg font-bold text-white mb-2">HR Recruitment</h5>
              <p className="text-slate-400 text-sm">Automate screening and behavioral vetting.</p>
            </div>
            <div className="p-6">
              <h5 className="text-lg font-bold text-white mb-2">Technical Panels</h5>
              <p className="text-slate-400 text-sm">Focus on code, let AI handle soft skills.</p>
            </div>
            <div className="p-6">
              <h5 className="text-lg font-bold text-white mb-2">Universities</h5>
              <p className="text-slate-400 text-sm">Unbiased admissions at scale.</p>
            </div>
            <div className="p-6">
              <h5 className="text-lg font-bold text-white mb-2">Remote Hiring</h5>
              <p className="text-slate-400 text-sm">Bridge the distance gap with deep data.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/5" data-purpose="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-10 rounded-3xl relative">
              <span className="text-6xl text-brand-primary/20 absolute top-4 left-4">"</span>
              <p className="text-xl text-white italic mb-8 relative z-10 leading-relaxed">
                "InterviewSense reduced our time-to-hire by 40%. The AI reports gave us the confidence to hire candidates we might have overlooked due to initial interview jitters."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-full" />
                <div>
                  <p className="font-bold text-white">Sarah Jenkins</p>
                  <p className="text-slate-500 text-sm">Head of Talent, TechStream</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-10 rounded-3xl relative">
              <span className="text-6xl text-brand-primary/20 absolute top-4 left-4">"</span>
              <p className="text-xl text-white italic mb-8 relative z-10 leading-relaxed">
                "Finally, a tool that brings objective metrics to soft skill evaluation. It's transformed how our technical team views candidate potential beyond just coding."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-full" />
                <div>
                  <p className="font-bold text-white">Marcus Thorne</p>
                  <p className="text-slate-500 text-sm">VP Engineering, DataPath</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-[2rem] p-12 text-center text-white shadow-2xl glow-purple">
            <h2 className="text-4xl font-bold mb-6">Ready to upgrade your hiring?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">Join 500+ forward-thinking companies using AI to find the perfect cultural and technical fit.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-slate-100 transition-colors">Get Started Free</button>
              <button className="px-8 py-4 border border-white/30 rounded-xl font-bold hover:bg-white/10 transition-colors">Book a Demo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
