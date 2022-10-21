import React from 'react';

function SubjectSearch({getActivity}, props){

  function testClick(){
    getActivity()
  }

    return (
        
        <main>
        
          <div>
           <input type="text" />
            <button onClick={testClick}>Search</button>
          </div>  
          <div className='searchResults'>
            <p>{props.title}</p>
            </div>   
        </main>
    );
}

export default SubjectSearch;