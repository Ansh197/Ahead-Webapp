import './Quotes.css'
import React from 'react'

export default function Quotes(props) {
  return (
    <>
    <div className="flex-container">
            <div className="heading">{props.quotes[0]}</div>
            <div className="content">{props.quotes[1]}</div>
            <div className="content">{props.quotes[2]}</div>
        </div>
    </>
  )
};

// const Quotes = () => {
//     return 
//     (
//         <>
//         <div className="flex-container">
//             <div className="heading">EQ beats IQ</div>
//             <div className="content">People with high emotional intelligence [EQ] live more fulfilled lives. They tend to be happier and have healthier relationships.</div>
//             <div className="content">They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</div>
//         </div>
//         </>
//     );
// };

// export default Quotes;