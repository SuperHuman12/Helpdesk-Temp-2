'use client'
import React, { useEffect, useState } from 'react';
import { getDocument, getDocumentByDomain } from "../../Utils/getData";

const Header = () => {
  const [pageMetadata, setPageMetadata] = useState({});
  const [site_info,setsite_infodata]=useState('');
   


  useEffect(()=>{
    console.log('site_info' ,site_info);
  },[site_info])


  const fetchRepo = async () => {
    const url = { url: window.location.origin };
    const response = await fetch('/api/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(url),
    });
    const _worksapce_data = await response.json();

    var { result, error } = await getDocument("webDesign", _worksapce_data[0]?.projectId);
    const webDesignData = result?.data();
    const siteInfo = webDesignData?.site_info;
    const seoData = webDesignData?.seoData;

    console.log('before set ',webDesignData?.site_info);
    setsite_infodata(webDesignData?.site_info);

    return {
      siteName: siteInfo?.site_name,
      favicon: seoData?.siteIcon,
      customDomain: siteInfo?.custom_domain,
      logoTextExtension: siteInfo?.logotext_extension,
      setLogo: siteInfo?.setlogo,
      logoUrl: siteInfo?.logourl,
      analyticsTrackerId: siteInfo?.analytics_tracker_id,
      blogNewsletterCatalogueListview: siteInfo?.blog_newsletter_catalogue_listview,
      loadingAnimation: siteInfo?.loadinganimation,
      userIcon: siteInfo?.user_icon,
      botIcon: siteInfo?.bot_icon,
      title: siteInfo?.site_name,
      description: seoData?.metaDesc,
      keywords: seoData?.metaKeywords,
      siteIcon: seoData?.siteIcon,
      siteBanner: seoData?.siteBanner,
      siteTitle: seoData?.siteTitle,
      setLogoSeoData: seoData?.setlogo,
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      const metadata = await fetchRepo();
      setPageMetadata(metadata);
    };
    fetchData();
  }, []);
  return (
    <>
      <meta name="description" content={pageMetadata.description} />
      <meta name="keywords" content={pageMetadata.keywords} />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={pageMetadata.title} />
      <meta property="og:url" content={pageMetadata.customDomain} />
      <meta property="og:site_name" content={pageMetadata.siteName} />
      <meta property="og:image" content={pageMetadata.siteBanner} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageMetadata.title} />
      <meta name="twitter:description" content={pageMetadata.description} />
      <meta name="twitter:image" content={pageMetadata.siteBanner} />

      <link rel="apple-touch-icon" sizes="180x180" href={pageMetadata.favicon} />
      <link rel="shortcut icon" sizes="32x32" href={pageMetadata.favicon} />
      <link rel="icon" sizes="16x16" href={pageMetadata.favicon} />
      <link rel="icon" href={pageMetadata.favicon} />

      <style jsx global>{`
          .headline--primary {
            color: ${site_info?.heroColor} !important;
            font-family: ${site_info?.heroFont} !important;
          }

          .button--primary {
            background-color: ${site_info?.primaryColor} !important;
            color: ${site_info?.secondaryColor} !important;
            border: 4px solid ${site_info?.primaryColor} !important;
            font-family: ${site_info?.primaryFont} !important;
          }

          .element--secondary {
            color: ${site_info?.secondaryColor} !important;
            font-family: ${site_info?.primaryFont} !important;
          }

          .button--secondary {
            background-color: ${site_info?.secondaryColor} !important;
            color: ${site_info?.primaryColor} !important;
            font-family: ${site_info?.primaryFont} !important;
          }

          .background--primary {
            background-color: ${site_info?.primaryColor} !important;
            font-family: ${site_info?.primaryFont} !important;
          }

          .background--secondary {
            background-color: ${site_info?.secondaryColor} !important;
            font-family: ${site_info?.primaryFont} !important;
          }

          .background--complementary {
            background-color: ${site_info?.complementaryColor} !important;
            font-family: ${site_info?.primaryFont} !important;
          }        

          .background--card {
            background-color: ${site_info?.secondaryColor} !important;
            font-family: ${site_info?.primaryFont} !important;
          }

          .button--outline--primary {
            background: none;
            color: ${site_info?.primaryColor} !important;
            border: 1px solid ${site_info?.primaryColor} !important;
            font-family: ${site_info?.primaryFont} !important;
          }

          .button--outline--secondary {
            background: none;
            color: ${site_info?.secondaryColor} !important;
            border: 1px solid ${site_info?.secondaryColor} !important;
            font-family: ${site_info?.primaryFont} !important;
          }

          .text--primary {
            color: ${site_info?.primaryColor} !important;
            font-family: ${site_info?.primaryFont} !important;
          }

          .text--secondary {
            color: ${site_info?.secondaryColor} !important;
            font-family: ${site_info?.secondaryFont} !important;
          }

          .icon--primary {
            color: ${site_info?.primaryColor} !important;
          }

          .breadcrumb-item a {
            color: ${site_info?.primaryColor} !important;
            text-decoration: none;
          }        

          a.nav-link:hover {
            border-bottom: 3px solid ${site_info?.primaryColor};
          }        

          .badge--primary {
            background: ${site_info?.primaryColor} !important;
            color: ${site_info?.secondaryColor} !important;
            font-family: ${site_info?.primaryFont} !important;
          }

          .badge--secondary {
            background: ${site_info?.secondaryColor} !important;
          }

          .button--primary:hover,
          .button--primary:focus,
          .button--primary:active {
            background-color: ${site_info?.secondaryColor} !important;
            color: ${site_info?.primaryColor} !important;    
          }

          .button--secondary:hover,
          .button--secondary:focus,
          .button--secondary:active {
            background-color: ${site_info?.primaryColor} !important;
            color: ${site_info?.primaryColor} !important;    
          }

          .button--outline--primary:hover,
          .button--outline--primary:focus,
          .button--outline--primary:active {
            background-color: ${site_info?.primaryColor} !important;
            color: ${site_info?.primaryColor} !important;    
          }

          .button--outline--secondary:hover,
          .button--outline--secondary:focus,
          .button--outline--secondary:active {
            background-color: ${site_info?.primaryColor} !important;
            color: ${site_info?.primaryColor} !important;    
          }

          .form-select:hover,
          .form-select:focus,
          .form-select:active {
            background-color: ${site_info?.primaryColor} !important;
            color: ${site_info?.primaryColor} !important;
            border-color: ${site_info?.primaryColor} !important;
            box-shadow: 0 0 0 0.25rem ${site_info?.primaryColor} !important;
          }
        `}</style>
    </>
  );
};

export default Header;