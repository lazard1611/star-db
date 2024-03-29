import React from "react";
import './error-indicator.scss';

const ErrorInd = () => {
    return (
        <div className='error-ind'>
            <div className="error-ind__icon">
                <svg version="1.2" baseProfile="tiny" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"
                     x="0px" y="0px" viewBox="0 0 41.924 42" >
                    <path fill='currentColor' d="M41.924,20.25c-0.046-1.282-0.192-2.537-0.457-3.75h-8.505V15h3v-1.5h-6V12h4.5v-1.5h-1.5V9h-3V7.5h1.5V6h-3V4.5h1.5V3
                        V2.048C27.232,0.749,24.188,0,20.962,0C9.617,0,0.398,9.002,0,20.25H41.924z M13.462,4.5c3.313,0,6,2.687,6,6c0,3.314-2.687,6-6,6
                        c-3.314,0-6-2.686-6-6C7.462,7.187,10.148,4.5,13.462,4.5"/>
                    <path fill='currentColor' d="M25.462,40.5h-1.5V39h4.5v-1.5h1.5V36h4.5v-1.5h1.5V33h-3v-1.5h-4.5V30h3v-1.5h6V27h-3v-1.5h7.005
                    c0.265-1.213,0.411-2.468,0.457-3.75H0C0.398,32.999,9.617,42,20.962,42c1.547,0,3.05-0.179,4.5-0.495V40.5z"/>
                </svg>
            </div>
            <div>BOOM!</div>
            <div>Something has gone wrong</div>
            <div>(but we already sent droids to fix it)</div>
        </div>
    )
};

export default ErrorInd;
