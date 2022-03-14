import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import './style.css'
import { css } from "@emotion/react";

const Spinner = () => {

    const override = css`
        display: block;
        margin: 0 auto;
        border-color: gray;
    `;

    return (
        <div className='spinnerDiv'>
            <h3 className='loadingMessage'>Loading... Please wait.</h3>
            <ClipLoader 
                color='gray' 
                css={override} 
                size={75}
            />
        </div>
    )
};

export default Spinner;
