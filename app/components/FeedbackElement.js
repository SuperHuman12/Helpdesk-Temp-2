import React from 'react';

const FeedbackElement = () => {
  return (
    <div
      className="mt-3 bg-gradient-light dark:bg-dark text-dark dark:text-light shadow-sm pt-5 pb-5 d-flex justify-content-center align-items-center flex-column rounded-md"
      style={{ width: '100%' }}
    >
      <span className="contents">
        <div className="text-center opacity-60">
          Was this helpful?
        </div>
        <div className="d-flex items-center justify-content-around mt-3">
          <div className="px-3 py-2 me-1 fs-2 transition rounded-md cursor-pointer hover-opacity-100 hover-bg-gray-200 dark:hover-bg-gray-700">
            😞
          </div>
          <div className="px-3 py-2 me-1 fs-2 transition rounded-md cursor-pointer hover-opacity-100 hover-bg-gray-200 dark:hover-bg-gray-700">
            😐
          </div>
          <div className="px-3 py-2 me-1 fs-2 transition rounded-md cursor-pointer hover-opacity-100 hover-bg-gray-200 dark:hover-bg-gray-700">
            🤩
          </div>
        </div>
      </span>
    </div>
  )
}

export default FeedbackElement;