import React from 'react'

function Resources() {
  return (
    <div className="accordion mt-4" id="accordionExample">
    <div className="accordion-item">
        {/* Accordion header */}
        <h2 className="accordion-header" id="headingOne">
            <button
                className="accordion-button text--primary background--complementary button--outline--secondary bg-white collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
            >
                {/* Answer sources text */}
                Answer based on &nbsp; <b className="text--primary">19 sources</b>
            </button>
        </h2>
        {/* Accordion content */}
        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                {/* List of sources */}
                <div className="d-grid gap-3">
                    {/* Example list items */}
                    {/* You can add more items based on the fetched data */}
                    <div className="list-group">
                        <a href="#" className="list-group-item list-group-item-action">
                            {/* List item content */}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Resources