'use client'
import React from 'react';
import PopupAi from './popup';
import { useState } from 'react';

const Hero = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (

    <>

      <div>



        {isModalOpen && (
          <div className="overlay">
            <div className="overlay-content">
              <PopupAi />
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>

      <section className="text-center text-white" id="hero">
        <div className="hero_bannersection background--primary" id="hero_banner">
          <div className="container" data-aos="fade-up">
            <h1 className="display-6 fw-bold mt-4 headline--primary" id="hero_text">How can we help? 👋</h1>
            <br />
            <p className="headline--primary opacity-75" id="hero_subtext"></p>
            <div className="input-group mt-3 w-100 mx-auto" style={{ maxWidth: '500px' }}>
              <div className="mt-3 p-2 w-50 background--complementary searchbar w-100"
                data-bs-toggle="modal" data-bs-target="#SearchstaticBackdrop"
                onClick={() => openModal()}
              >
                <form className="form-inline d-flex" id="search-form" role="search"
                //    onSubmit={handleSearch}
                >
                  <div className="d-flex w-100">
                    <svg className="promoted-search__search-icon opacity-25" style={{ width: '30px' }} viewBox="0 0 24 24">
                      <path
                        d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z"
                      ></path>
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                    </svg>
                    <input
                      id="hero_search_placeholder"
                      type="text"
                      placeholder="Ask our AI helpbot anything..."
                      aria-label="Describe your issue to find information that might help you."
                      autoComplete="off"
                      name="q"
                      spellCheck="false"
                      aria-haspopup="false"
                      role="combobox"
                      aria-autocomplete="both"
                      dir="ltr"
                      className="form-control border-0 w-100 background--complementary"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
