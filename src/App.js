import './App.css';
import React,{ useState, useEffect } from 'react';
import { Container, Box, Card, CardContent, FormControl, InputLabel, Button, Input, Typography, CardActions  } from '@mui/material'
import Todos from './Todos';
import db from './firebase';
import firebase from 'firebase';
function App() {
const [todos, settodos] = useState([]);
const [input, setInput] = useState();

useEffect(() => {
 
db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{

  settodos(snapshot.docs.map(doc => ({id: doc.id, todo:doc.data().todo})))


})

}, []);



const addTodos = (e) =>
{
  e.preventDefault();

  db.collection('todos').add({
    todo: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp() 
  })
  
  setInput('');
}

  return (
    <div className="App">
      <Container maxWidth="sm">
       
     <Box sx={{ display: 'flex', justifyContent: 'center', p: 4, bgcolor: '#cfe8fc' }}>
      
         <Card sx={{ minWidth: 400 }}>
            <Typography sx={{textAlign: 'center', p:1 }}>Todo List</Typography> 
      <CardContent>

        <FormControl>
       <InputLabel htmlFor="my-input">Write List</InputLabel>
        <Input  value={input} onChange={e => setInput(e.target.value)}/>
   
</FormControl>
        
       
      </CardContent>
      <CardActions>
        <Button variant="contained" disabled={! input} size="small" type="submit" onClick={addTodos}>Add New Item</Button>
      </CardActions>
      
    </Card>
    
      </Box>
      {todos.map(todo =>( <Todos todo={todo}></Todos>))}
     
      </Container>



    </div>
  );
}

export default App;
