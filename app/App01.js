import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [fruitList, setFruitList] = useState([]);
  const [fruitColor, setFruitColor] = useState([]);
  const [fruitName, setFruitName] = useState();
  const [fruitInSeason, setFruitInSeason] = useState();

  const getList = async () => {
    const request = {
      method: 'get',
      url: 'http://localhost:3001/fruit',
      params: {},
    }
    if(fruitName){request.params.name = fruitName}
    if(fruitColor){request.params.color = fruitColor}
    if(fruitInSeason !== undefined){request.params.in_season = fruitInSeason}
    try{
      const response = await axios(request);
      setFruitList(response.data);
    } catch(e){
      console.log(e);
      setFruitList([]);
    }
  };

  const handleInputChange = (event) => {
    const target = event.target;
    if(target.type === 'checkbox'){
      setFruitInSeason(target.checked);
    } else {
      if(target.name === 'name'){
        setFruitName(target.value);
      }else{
        setFruitColor(target.value);
      }
    }
  };

  useEffect(() =>{
    getList();
  }, []);

  return (
    <div>
      <input type="text" name="name" onChange={handleInputChange} placeholder="Enter a fruit name" />
      <input type="text" name="color" onChange={handleInputChange} placeholder="Enter a color" />
      <span>Is season</span>
      <input name="fruitIsSeason"
        type="checkbox"
        onChange={handleInputChange} />     
      <button type="button" onClick={() => getList()}>Search</button>
      {fruitList && fruitList.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Nmae</th>
              <th>Colors</th>
              <th>In season</th>
            </tr>
          </thead>
          <tbody>
            {fruitList.map((fruit, index) => {
              return (
                <tr key={index}>
                  <td>{fruit.name}</td>
                  <td>{fruit.colors.join(', ')}</td>
                  <td>{fruit.in_season ? 'Yes': 'No'}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      )}
    </div> 
  );
}

export default App;
