import React from 'react';
import Image1 from '../images/Screenshot8.png'
import Image3 from '../images/Screenshot9.png'
import Image6 from '../images/Screenshot10.png'
import Image4 from '../images/Screenshot11.png'
import Image5 from '../images/Screenshot12.png'
import Image7 from '../images/Screenshot14.png'
import Image8 from '../images/Screenshot15.png'
import Image9 from '../images/Screenshot16.png'
import Image10 from '../images/Screenshot7.png'
import Image11 from '../images/Screenshot17.png'
import './TextBlock.css'

const TextBolock = () => {
    return (
        <div className="weyw">
            <p style={{color:"red"}}>!!! Rich text does not support styles and paragraphs. You can't move text to another line using Shift+Enter.
                This function was created to fix a bug that caused the printed word to jump to another line if it ran out of space.</p>
            <p>First you need to create a new widget or use an existing one. </p>
            <p>Then add a text block to the widget's viewport.</p>
            <img style={{ width: "70vh", padding:"10px"}} src={Image1} alt=""/>

            <img style={{ width: "70vh", padding:"10px"}} src={Image3} alt=""/>
            <p>Make the Text Block Variable.</p>
            <img style={{ width: "70vh", padding:"10px"}} src={Image6} alt=""/>

            <p>Next Connect the styles as shown.</p>
            <img style={{ width: "70vh", padding:"10px"}} src={Image4} alt=""/>
            <img style={{ width: "70vh", padding:"10px"}} src={Image5} alt=""/>
            <p>To change the color, font and size, find and open Style Set.</p>
            <img style={{ width: "70vh", padding:"10px"}} src={Image7} alt=""/>
            <p>There will be two rows in this file, the second row "I" responsible for the style of invisible text that is printed after the main one. This was so that the game would understand how much the word takes and not start typing it on the line in which there is not enough space for it.</p>
            <p>Change the font and font size on both lines, but the color on the first line only. Leave invisible text invisible.</p>
            <img style={{ width: "70vh", padding:"10px"}} src={Image8} alt=""/>


            <p>Go to graph. Right-click in the graph and find the Print Rich Text node.</p>
            {/*<img style={{ width: "50vh", padding:"10px"}} src={Image4} alt=""/>*/}
            <p>Connect your text block to this node. Set all necessary parameters according to your preferences. The "Accuracy" parameter determines how many characters of invisible text will be printed before the main one. It is advisable to use sound in "cue" format and make it repeatable.
                Start the node with any event.</p>

            <img style={{ width: "90vh", padding:"10px"}} src={Image9} alt=""/>
            <p>To stop all printed text, run "Stop Printing" node anywhere. Then all the text will be displayed instantly.</p>
            <img style={{ width: "80vh", padding:"10px"}} src={Image10} alt=""/>
            <p>You can set acceleration on stop greater than one to speed up text typing. Pressing stop again prints the entire text.</p>
                <p>Don't forget to set Auto Wrap Text so that it doesn't print on one line.</p>
                <img style={{ width: "80vh", padding:"10px"}} src={Image11} alt=""/>

        </div>
    );
};

export default TextBolock;