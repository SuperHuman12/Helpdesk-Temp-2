"use client"
import React, { useContext, useMemo, useState, useEffect, useLayoutEffect } from "react";
import { getDocument, getDocumentByDomain } from "./Utils/getData";

import { AppContext } from './Utils/context/AppContext';
import LoadingPage from "./post/loading";
import CategoryCard from './post/CategoryCard';
import PostList from './post/PostList';


const Page = () => {
  const { state, dispatch } = useContext(AppContext);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    dispatch({ type: 'SET_NCATEGORY', payload: [...new Set(state.category)] });
  }, [state.category]);



  useEffect(() => {

    const fetchData = async () => {
      const data = { url: window.location.origin };
      const response = await fetch('/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`POST request failed: ${response.status}`);
      }
  
      const responseData = await response.json();
  
      var { result: resultDesign, error: errorDesign } = await getDocument("webDesign", responseData[0].workspaces_id);
  
      const collection = 'notion_documents';
      const id = responseData[0].workspaces_id;
      var { result: resultDocument, error: errorDocument } = await getDocument(collection, id);
  
      return { responseData, resultDesign, errorDesign, resultDocument, errorDocument };
    };
  
    fetchData()
      .then(({ responseData, resultDesign, errorDesign, resultDocument, errorDocument }) => {
        setResponse(responseData);
  
        dispatch({ type: 'SET_WORKSPACE_DATA', payload: responseData[0] });
  
        if (!resultDesign) {
          dispatch({ type: 'SET_ERROR', payload: 'Error loading Design:' + errorDesign });
        } else if (!resultDesign.exists) {
          dispatch({ type: 'SET_ERROR', payload: 'No such document!' });
        } else {
          dispatch({
            type: 'SET_DESIGN',
            payload: resultDesign.data()
          });
        }
  
        if (errorDocument) {
          dispatch({ type: 'SET_ERROR', payload: 'Error loading document:' + errorDocument });
        } else if (!resultDocument.exists) {
          dispatch({ type: 'SET_ERROR', payload: 'No such document!' });
        } else {
          const data = resultDocument.data();
          dispatch({
            type: 'SET_CATEGORY',
            payload: data?.pages?.map(page => page?.Category)
          });
          dispatch({
            type: 'SET_DOCUMENT_DATA',
            payload: data
          });
          dispatch({
            type: 'SET_LOADING_DATA',
            payload: false
          });
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);




  const handleCategoryClick = (category) => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: category });
    dispatch({ type: 'SET_VIEW', payload: "articles" });
  };

  const handleBackClick = () => {
    dispatch({ type: 'SET_SELECTED_CATEGORY', payload: null });
    dispatch({ type: 'SET_VIEW', payload: "categories" });
  };

  const filteredDocuments = useMemo(() => {

    if (!state.selectedCategory || !state.documentData) return [];

    return state.documentData.pages.filter(page => page.Category === state.selectedCategory);
  }, [state.selectedCategory, state.documentData]);

  if (state.loadingData) {
    return <div><LoadingPage /></div>
  }

  if (state.error) {
    return <div>{state.error}</div>
  }


  if (state.view === "categories") {
    return (
      <section className="p-5 categoryhome">
        <div className="container">
          <div className="row d-flex flex-wrap justify-content-center" data-aos="fade-up">
            <div className="gap-4 d-flex flex-wrap justify-content-center mb-4">
              {
                state.Ncategory.map((item, index) => (
                  <CategoryCard
                    key={index}
                    iconUrl="https://fonts.gstatic.com/s/i/productlogos/chrome/v7/web-64dp/logo_chrome_color_1x_web_64dp.png"
                    title={item}
                    description=""
                    articleCount={1}
                    clickfun={handleCategoryClick}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (

      <PostList
        filteredDocuments={filteredDocuments}
        selectedCategory={state.selectedCategory}
        handleBackClick={handleBackClick}
      />
    );
  }
}


export default Page;
