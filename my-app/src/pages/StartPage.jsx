import React from 'react';
import './/StartPage.css'
import TextBolock from "./TextBolock";
import RichTextBolock from "./RichTextBolock";

const StartPage = () => {
    return (
        <div className="blockes">
        <div className="row align-items-md-stretch">

            <div className="col-md-6">
                <div className="h-100 p-2 text-white bg-dark rounded-4">
                    <h2 style={{color: "gold"}} >Text Block</h2>
                   <TextBolock/>
                </div>
            </div>

            <div className="col-md-6">
                <div className="h-100 p-2 bg-dark text-white rounded-4">
                    <h2 style={{color: "gold"}}>Rich Text Block</h2>
                    <RichTextBolock/>

                </div>
            </div>
        </div>

        </div>
    );
};

export default StartPage;