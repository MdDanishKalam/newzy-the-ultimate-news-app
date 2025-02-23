import React, { useState } from 'react';

export const FakeNewsDetector = () => {

    const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [prediction, setPrediction] = useState('');
  const handleClearClick = () => { 
    setTitle("");
    setText("");
    setPrediction('')
}

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, text }),
      });

      const result = await response.json();
      setPrediction(result.prediction);
    } catch (error) {
      console.error('Error:', error);
    }
  };
    return (
        <div className="container fkenewsbox"style={{width:"100%",paddingTop:'150px',}}>
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Fake News Detector</h1>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="title "><h2> News Title:</h2></label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
                <p className="mt-2 text-center"><label htmlFor="text text-primary"><h3>Or</h3></label></p>
              <div className="form-group">
                <label htmlFor="text"><h2>News Content:</h2></label>
                <textarea
                  className="form-control my-3"
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                        />
              </div>
              <button className="btn btn-primary" onClick={handleSubmit}>
                Predict
              </button>
              {prediction && (
                <p className="mt-3">
                  <strong>Prediction:</strong> {prediction}
              </p>
              
            )}
            <button className="btn btn-primary mx-3" onClick={handleClearClick} > Clear</button>
            </div>
          </div>
        </div>
      );
    };








// import React from 'react'

// export const FakeNewsDetector = () => {
//     return (
//         <div className="container">
            
//             <h1 className='text-center pt-3'>Fake news detector</h1>
//             <p className='text-center my-0 '>check whether news is real or fake.
//             </p>
//             <div className='mx-auto' style={{
//                 width: "600px"
//             }}>
//                 <form action="" >
//                     <div className='mt-3'>
//                         <label htmlFor="news" className='' style={{ fontSize: "20px", fontWeight: "600" }}>Enter the News Here:</label>
//                     </div>
//                     <textarea name="news" id="" cols="70" rows="10" style={{ margin: "auto", resize: "none" }}></textarea>
//                     <div>
//                         <button className='btn btn-outline-success' >Check</button>
//                     </div>
//                 </form>
//             </div>

//             <div>
//                 result
//             </div>
//         </div>
//     )
// }
