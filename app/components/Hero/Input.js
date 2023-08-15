import React from 'react'

function InputBar({aiChatData}) {
  return (
    <div className="mt-3">
    <form className="chatinput d-flex bg-white">
        <svg className="opacity-50 ms-2 me-2" strokeLinecap="round" height="40" width="20" strokeWidth="0" strokeLinejoin="round" viewBox="0 0 17 17">
            {/* Search icon */}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 2.491A1.246 1.246 0 108 0a1.246 1.246 0 000 2.491zm0 2.436a.858.858 0 100-1.716.858.858 0 000 1.716zm.858 7.004a.858.858 0 11-1.716 0 .858.858 0 011.716 0zM11.073 8a.858.858 0 101.716 0 .858.858 0 00-1.716 0zm-7.004.858a.858.858 0 110-1.716.858.858 0 010 1.716zm6.104-3.03a.858.858 0 101.213-1.214.858.858 0 00-1.213 1.213zm-4.346 5.558a.858.858 0 11-1.213-1.213.858.858 0 011.213 1.213zm4.346-1.213a.858.858 0 101.213 1.213.858.858 0 00-1.213-1.213zm-5.56-4.346a.858.858 0 111.214-1.213.858.858 0 01-1.213 1.213zM8 16a1.246 1.246 0 100-2.491A1.246 1.246 0 008 16zm6.754-6.754a1.246 1.246 0 110-2.492 1.246 1.246 0 010 2.492zM0 8a1.246 1.246 0 102.491 0A1.246 1.246 0 000 8zm14.472-2.298a1.246 1.246 0 11-1.245-2.158 1.246 1.246 0 011.245 2.158zM1.072 12a1.246 1.246 0 102.157-1.246A1.246 1.246 0 001.072 12zm9.226 2.472a1.246 1.246 0 111.246-2.157 1.246 1.246 0 01-1.245 2.157zM4 1.072a1.246 1.246 0 101.246 2.157A1.246 1.246 0 004 1.072z"
                fill="currentColor"
            ></path>
        </svg>
        {/* Chat input field */}
        <input type="text" className="form-control border-0" placeholder={aiChatData.chat_placeholder} />
        {/* Send button */}
        <button className="btn button--primary ms-2" type="submit">
            {aiChatData.chat_button}
        </button>
    </form>
</div>
  )
}

export default InputBar