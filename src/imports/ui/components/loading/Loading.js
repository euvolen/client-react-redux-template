import React from 'react';
import loading from "../../../data/loading.gif";

const Loading = ()=> {
    {
        return (
          <div className="text-center mt-4">
            <img 
            src={loading}
            style={{width:'200px', margin:'auto'}} 
            alt="Loading..."/> 
          </div>
        )
      }
    }

export default Loading;
