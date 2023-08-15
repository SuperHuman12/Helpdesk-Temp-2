'use client'
import React, { useEffect, useState } from 'react';
import { getDocument, getDocumentByDomain } from "../../Utils/getData";

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState([]);
  const [footerData, setFooterData] = useState({
    footerlogo: '',
    footer_copyright_text: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = { url: window.location.origin };
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(url),
      });
      const data = await response.json();
      
      const _worksapce_data = data;

      var { result, error } = await getDocument("webDesign", _worksapce_data[0]?.projectId);

      result = result.data();
      if (result.footer_links) {
        setFooterLinks(result.footer_links);
      }
      
      if (result.footer) {
        setFooterData({
          footerlogo: result.footer.footerlogo,
          footer_copyright_text: result.footer.footer_copyright_text
        });
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top" id="footer">
        <a className="navbar-brand d-flex gap-1 align-items-center" href="/">
          <img src={footerData.footerlogo} alt="Footer Logo" id="footerlogo" style={{ height: '30px' }} />
          &nbsp;
          <span>|</span>
          &nbsp;
          <span id="footer_copyright_text" className="text--primary">
            {footerData.footer_copyright_text}
          </span>
        </a>
        <ul className="nav col-md-4 justify-content-end" id="footer_links">
          {footerLinks.map((link, index) => (
            <li className="nav-item" key={index}>
              <a href={link.url} className="nav-link px-2 text-body-secondary">
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </footer>
      <footer className="nav" style={{ justifyContent: 'center', marginBottom: '3rem' }}>
        <a
          className="navbar-brand d-flex bg-white gap-1"
          href="https://notionbear.com?ref=websitename"
          style={{ border: '1px solid #3333', padding: '0.5rem 1rem', borderRadius: '1rem', fontSize: '1rem' }}
        >
          <span>Powered by</span>
          &nbsp;
          <img src="https://dazzling-cat.netlify.app/notionbear.svg" alt="Logo" style={{ height: '2rem' }} />
        </a>
      </footer>
    </>
  );
};

export default Footer;
