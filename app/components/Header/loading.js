import React from 'react';

function Loading() {
    return (
        <div className="position-fixed top-50 start-50 translate-middle">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}

export default Loading;
