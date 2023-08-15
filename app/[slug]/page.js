"use client"
import React, { useContext, useEffect, useLayoutEffect, useMemo, useState } from 'react'
import Link from 'next/link';
import NotionPost from '../Utils/NotionPost';
import { getDocument, getDocumentByDomain } from "../Utils/getData";

import SvgArrowLeft from '../components/ArrowIcon';
import FeedbackElement from '../components/FeedbackElement';
import { AppContext } from '../Utils/context/AppContext';
import HelpElement from '../components/HelpElement';

function page({ params: { slug } }) {
  const { state, dispatch } = useContext(AppContext);
  const [pageContent, setpagecontent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {

      const url=window.location.origin;
      const { workspaceData, error1 } = await getDocumentByDomain("workspaces", url);


      console.log('worksapcedata',workspaceData);

      if (error1) {
        console.error("Failed to fetch workspace data:", error1);
      } else {
        // Note: This assumes the document data is in the format you want for your workspace data.
        dispatch({ type: 'SET_WORKSPACE_DATA', payload: workspaceData });
      }
      const collection = 'notion_documents';
      const id = workspaceData.workspaces_id;

      console.log('word id  ',id);
      const { result, error } = await getDocument(collection, id);

      if (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Error loading document:' + error });
        dispatch({ type: 'SET_LOADING_DATA', payload: false });
        return;
      }

      if (!result.exists) {
        dispatch({ type: 'SET_ERROR', payload: 'No such document!' });
      } else {
        const data = result.data();
        dispatch({
          type: 'SET_CATEGORY',
          payload: data.pages.map(page => page.Category)
        });
        dispatch({ type: 'SET_DOCUMENT_DATA', payload: data });

        console.log('data set  ', getContent(data?.pages, slug));
        setpagecontent(getContent(data?.pages, slug));
      }

      dispatch({ type: 'SET_LOADING_DATA', payload: false });
    };

    fetchData();


  }, []);

  const getContent = (objects, title) => {
    for (let i = 0; i < objects.length; i++) {

      let newurls = objects[i].title;
      newurls = newurls.replace(/[^\w\s]/gi, '');
      newurls = newurls.replace(/ /g, '-');

      if (newurls === title) {
        return objects[i].content.results;
      }
    }
    return null;
  }


  return (
    <section
      className="container text-center d-flex blogcontent"
    >

      <div className='container'>
        <Link href='/' >
          <p style={{
            color: "black", cursor: "pointer"
            , fontSize: "40px"
          }}
          >
            <SvgArrowLeft />
          </p>
        </Link>


        {/* Get Post Details  */}

        <h1>{slug}</h1>



        {pageContent.map((value, index) => (
          <div key={index}>
            <NotionPost value={value} id={index} />
          </div>
        ))}

        <FeedbackElement />
        <HelpElement />



      </div>
    </section>
  )
}

export default page