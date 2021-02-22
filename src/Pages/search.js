import React, { useState, useEffect } from 'react';



function Search() {

const [data, setData] = useState([]);

useEffect( ()=> {

getData();

}, [])

const getData = async () => {

    const url = 'https://api.giphy.com/v1/gifs/trending?api_key=XCj0hwZJ7PyY5ptZE1rKV8hgWXVsKWNa';
    const result = await fetch(url);
    const getResult = await result.json();
    console.log(getResult.data)  
    setData(getResult.data);
    
}




return(
    <>
    <p>TRENDING: </p>
    {data.map(record => (

        <div key={record.id} className="trending-gifs">
            <img src={record.images.fixed_height.url}/>
        </div>
    ))}
    </>
) 

}

export default Search