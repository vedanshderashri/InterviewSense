import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 pb-10 border-t border-white/5" data-purpose="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-brand-primary rounded-md" />
              <span className="text-xl font-bold text-white">InterviewSense</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6">
              Advancing the science of human assessment through ethical AI and behavioral data analytics.
            </p>
            <div className="flex gap-4">
              <a className="text-slate-500 hover:text-white transition-colors" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a className="text-slate-500 hover:text-white transition-colors" href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.999v-3c0-.999-.75-1.588-1.5-1.588-1.03 0-1.5.737-1.5 1.588v3h-2v-6h2v.983c.385-.585 1.139-1.018 2.1-1.018 2.25 0 2.899 1.441 2.899 3.251v3.784z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h6 className="text-white font-bold mb-6">Product</h6>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <Link className="hover:text-white transition-colors" to="/">Home</Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/interview">Interview</Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link className="hover:text-white transition-colors" to="/methodology">Methodology</Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-bold mb-6">Company</h6>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>
                <a className="hover:text-white transition-colors" href="#">About</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">Careers</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">Blog</a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">Support</a>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-bold mb-6">Stay Updated</h6>
            <p className="text-slate-500 text-sm mb-6">Subscribe for product updates and insights.</p>
            <div className="flex">
              <input
                className="w-full bg-white/5 border-white/10 rounded-l-xl px-4 py-3 text-sm focus:ring-0"
                placeholder="Your email"
                type="email"
              />
              <button className="bg-brand-primary px-4 py-3 rounded-r-xl text-white hover:bg-brand-secondary transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 pt-8 border-t border-white/5">
          <p>© 2026 InterviewSense. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a className="hover:text-white" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white" href="#">
              Terms
            </a>
            <a className="hover:text-white" href="#">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
