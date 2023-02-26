import { useEffect, useState } from 'react';
import {Card, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [list, listHandle] = useState([]);
  const [loading, loadingHandle] = useState(null);
  const [error, errorHandle] = useState(null);
  const fetchData = async () =>{
    try {
      await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        loadingHandle("Loading Data");
        return res.json();
      })
      .then((data)=>{
        loadingHandle(null);
        errorHandle(null);
        listHandle(data);
      })
    } catch (error) {
      errorHandle("Error Data Fetching");
      loadingHandle(null);
      listHandle([]);
    }
  }
  useEffect(() => {
    fetchData()
  },[])
  return (
    <div className="App p-4" style={{display:'grid', gridTemplateColumns: 'auto auto auto auto', gap
    :'30px'}}>
      {loading}
      {error}
      {list.map((data) => {
        return  <Card className='p-4'>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.email}</Card.Text>
            <Button>Helo</Button>
          </Card>
      })}
    </div>
  );
}

export default App;
