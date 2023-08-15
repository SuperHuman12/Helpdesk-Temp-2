import React from 'react';

const HelpElement = () => {
  return (
    <div
      style={{ width: '100%' }}
      className="mt-3 pt-5 pb-5 d-flex justify-content-center align-items-center flex-column rounded-md"
    >
      <div className="need-more-help-header">
        <h2 className="need-more-help-title">Need more help?</h2>
      </div>
      <div className="d-flex gap-3 w-75 mt-4">
        <button
          className="btn btn-dark d-flex text-start"
          data-bs-toggle="modal"
          data-bs-target="#SearchstaticBackdrop"
          style={{ width: "100%" }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="50"
            width="50"
          >
            {/* svg paths omitted for brevity */}
          </svg>
          <div className="d-grid">
            <span className="need-more-help-option__title">Ask AI</span>
            <span className="opacity-50 small">Instant Support</span>
          </div>
        </button>

        <a
          href="/store/gethelp"
          className="btn btn-outline-dark d-flex text-start"
          style={{ width: "100%" }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="50"
            width="50"
          >
            {/* svg paths omitted for brevity */}
          </svg>
          <div className="d-grid">
            <span className="need-more-help-option__title">
              Contact a Human
            </span>
            <span className="opacity-50 small">This can take 2 days</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default HelpElement;