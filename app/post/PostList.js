import React from "react";
import Link from 'next/link';
import SvgArrowLeft from '../components/ArrowIcon';

import { Button, Container, ListGroup } from 'react-bootstrap';
import './page.module.css'



const PostList = ({ filteredDocuments, selectedCategory, handleBackClick }) => {


    const getTimeSince =(dateString)=> {
        const date = new Date(dateString);
        const now = new Date();
        const diff = now.getTime() - date.getTime();

        // calculate time differences in milliseconds, seconds, minutes, hours, days, and months
        const ms = Math.floor(diff);
        const s = Math.floor(diff / 1000);
        const m = Math.floor(diff / 1000 / 60);
        const h = Math.floor(diff / 1000 / 60 / 60);
        const d = Math.floor(diff / 1000 / 60 / 60 / 24);
        const months = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);

        // choose the appropriate time unit to display
        if (ms < 1000) {
            return "just now";
        } else if (s < 60) {
            return `${s} second${s === 1 ? "" : "s"} ago`;
        } else if (m < 60) {
            return `${m} minute${m === 1 ? "" : "s"} ago`;
        } else if (h < 24) {
            return `${h} hour${h === 1 ? "" : "s"} ago`;
        } else if (d < 30) {
            return `${d} day${d === 1 ? "" : "s"} ago`;
        } else {
            return `${months} month${months === 1 ? "" : "s"} ago`;
        }
    }


 
  
    return (
        <section
        className="text-center d-flex blogcontent"
        >
            <Container>
                <p style={{color:"black",cursor:"pointer"
                ,fontSize:"40px"
            }} onClick={handleBackClick} 
                >
                    <SvgArrowLeft/>
                  
                </p>
                <h2 className="mt-3 mb-3">
                    Articles in category: 
                    <span className="badge text-white 
                    ml-2 w-15 bg-black
                    badge-pill badge-primary">
                        {selectedCategory}
                        </span>
                    </h2>
                {filteredDocuments.map((doc, i) =>{
                    
                    let newurls=doc.title;
                    newurls = newurls.replace(/[^\w\s]/gi, ''); 
                    newurls=newurls.replace(/ /g, '-');
                     
                    
                        return (<Link href={`/${newurls}`} key={i}>
                        <div
                        className="border m-1 rounded-1 d-flex gap-3 p-3"
                        id={doc.id}  // Assumed id from doc
                        >
                        <div className="card-body text-start">
                            <h5 className="card-title fw-bold">{doc.title}</h5>
                            <p className="text-muted m-0">{getTimeSince(doc.lastEditTime)}</p>
                        </div>
                        </div>
                       
                       </Link>);
                })};

            </Container>
        </section>
    );
};

export default PostList;