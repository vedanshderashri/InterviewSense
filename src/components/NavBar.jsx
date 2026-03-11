import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-dark/80 backdrop-blur-md" data-purpose="main-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">InterviewSense</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a className="hover:text-brand-primary transition-colors" href="#features">
              Features
            </a>
            <a className="hover:text-brand-primary transition-colors" href="#how-it-works">
              Methodology
            </a>
            <a className="hover:text-brand-primary transition-colors" href="#use-cases">
              Solutions
            </a>
            <Link
              to="/interview"
              className="bg-brand-primary hover:bg-brand-secondary text-white px-5 py-2 rounded-full transition-all shadow-lg shadow-brand-primary/20"
            >
              Sign-up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
