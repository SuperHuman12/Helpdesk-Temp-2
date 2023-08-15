'use client'// PopupAi.js
import React, { useEffect, useState } from 'react';
import { getDocument } from '../../Utils/getData';
import Resources from './Resources';
import InputBar from './Input';

function PopupAi() {
    const [aiChatData, setAiChatData] = useState({
        chat_title: '',
        chat_subtitle: '',
        raiseticket: '',
        raiseticketlink: '',
        chat_placeholder: '',
        chat_button: ''
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
            if (result.aichat) {
                setAiChatData(result.aichat);
            }

        };

        fetchData();
    }, []);

    return (
        <div className="" id="SearchstaticBackdrop"
            data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="1" aria-labelledby="SearchstaticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-lg" id="aichat">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="d-flex">
                            <div>
                                <h5 className="modal-title text--primary" id="chat_title">
                                    {aiChatData?.chat_title}
                                </h5>
                                <div className="text--primary opacity-75" id="chat_subtitle">
                                    {aiChatData?.chat_subtitle}
                                </div>
                            </div>
                        </div>
                        <div className="d-flex gap-3">
                            <a href={aiChatData?.raiseticketlink}>
                                <button type="button" className="btn button--primary" data-bs-dismiss="modal" id="raiseticket">
                                    {aiChatData?.raiseticket}
                                </button>
                            </a>
                            <button type="button" className="btn btn-outline-danger endchat" data-bs-dismiss="modal">
                                Clear & End Chat
                            </button>
                        </div>
                    </div>
                    <div className="modal-body">
                        <div className="container p-3 background--complementary rounded" style={{ height: "400px", overflowY: "auto" }}>
                            {/* User and bot message containers */}
                            <div className="message-container">
                                {/* User message */}
                                <div className="message user-message shadow-sm border bg-white">
                                    {/* User icon */}
                                    <div className="usericon">
                                        <img src="https://hustleai.co/assets/images/userplaceholder.png" className="w-8 h-8" alt="User Icon" />
                                    </div>
                                    {/* User message content */}
                                    <div className="message-content w-100">hello</div>
                                    {/* Copy message button */}
                                    <button className="copy-message" data-message="hello">
                                        {/* Copy message icon */}
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                        </svg>
                                    </button>
                                </div>

                                {/* Bot message */}
                                <div className="message user-message shadow-sm border bg-white">
                                    {/* Bot icon */}
                                    <div className="boticon m-auto mt-0">
                                        <img src="https://hustleai.co/assets/images/sparkit.png" className="w-8 h-8" alt="Bot Icon" />
                                    </div>
                                    {/* Bot message content */}
                                    <div className="message-content w-100">
                                        <p>Hello! How may I assist you today?</p>
                                    </div>
                                    {/* Copy message button */}
                                    <button className="copy-message" data-message="<p>Hello! How may I assist you today?</p>">
                                        {/* Copy message icon */}
                                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                        </svg>
                                    </button>
                                </div>
                                {/* Add more messages as needed */}
                            </div>

                            {/* Chat input form */}
                            <InputBar aiChatData={aiChatData} />

                            {/* Accordion for answer sources */}
                            <Resources />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PopupAi;
