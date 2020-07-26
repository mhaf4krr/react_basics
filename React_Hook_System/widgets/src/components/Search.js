import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("javascript");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      if (term) {
        (async () => {
          const { data } = await axios.get(
            "https://en.wikipedia.org/w/api.php",
            {
              params: {
                action: "query",
                list: "search",
                origin: "*",
                format: "json",
                srsearch: term,
              },
            }
          );

          setResults(data.query.search);
        })();
      }
    }, 500);
    //CleanUp Function
    return () => {
      clearTimeout(timeOutID);
    };
  }, [term]);
  let handleInputChange = (event) => {
    setTerm(event.target.value);
  };

  const renderedResults = results.map((result) => {
    return (
      <div className='card' key={result.pageid}>
        <div className='card-body'>
          <blockquote className='blockquote mb-0'>
            <p>{result.title}</p>
            <footer
              className='blockquote-footer'
              dangerouslySetInnerHTML={{ __html: result.snippet }}></footer>
          </blockquote>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <form onClick={(event) => event.preventDefault()}>
        <div className='form-group'>
          <label htmlFor='inputText'>Enter Search Term</label>
          <input
            type='text'
            id='inputText'
            className='form-control'
            value={term}
            onChange={(event) => handleInputChange(event)}
          />
        </div>
      </form>
      <div className='container'>{renderedResults}</div>
    </React.Fragment>
  );
};

export default Search;
