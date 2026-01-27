import React from "react";

const ContactInfo: React.FC = () => {
  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif">
          Let's connect
        </h2>
        <p className="text-lg text-slate-500 leading-relaxed uppercase tracking-widest text-sm">
          We'd love to hear from you. Whether you have a question or just want
          to chat about your next big idea.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Email Us</h3>
            <p className="text-slate-500">hello@brandlogo.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Visit Us</h3>
            <p className="text-slate-500">
              123 Design Street, Creative Valley, CA 90210
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
