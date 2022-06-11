import React from 'react';
import Image1 from '../images/Screenshot1.png'
import Image3 from '../images/Screenshot3.png'
import Image6 from '../images/Screenshot6.png'
import Image4 from '../images/Screenshot4.png'
import Image5 from '../images/Screenshot5.png'
import Image7 from '../images/Screenshot7.png'
import './TextBlock.css'

const TextBolock = () => {
    return (
        <div className="weyw">
            <p>First you need to create a new widget or use an existing one.</p>
            <p>Then add a text block to the widget's viewport.</p>
            <img style={{ width: "70vh", padding:"10px"}} src={Image1} alt=""/>

            <img style={{ width: "70vh", padding:"10px"}} src={Image3} alt=""/>
            <p>Make the Text Block Variable.</p>
            <img style={{ width: "70vh", padding:"10px"}} src={Image6} alt=""/>

            <p>Go to graph. Right-click in the graph and find the Print Text node.</p>
            <img style={{ width: "50vh", padding:"10px"}} src={Image4} alt=""/>
            <p>Connect your text block to this node. Set all necessary parameters according to your preferences. It is advisable to use sound in "cue" format and make it repeatable.
                Start the node with any event.</p>
            <img style={{ width: "90vh", padding:"10px"}} src={Image5} alt=""/>
            <p>To stop all printed text, run "Stop Printing" node anywhere. Then all the text will be displayed instantly.</p>
            <img style={{ width: "80vh", padding:"10px"}} src={Image7} alt=""/>
            <p>You can set acceleration on stop greater than one to speed up text typing. Pressing stop again prints the entire text.</p>

        </div>
    );
};

export default TextBolock;