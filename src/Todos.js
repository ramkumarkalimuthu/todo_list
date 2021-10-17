import React, { useState } from 'react'
import {Box, Button, Modal,Typography, Input, List, ListItem, ListItemText } from '@mui/material'
import db from './firebase'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
function Todos(props) {

    const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,}
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [input, setinput] = useState(props.todo.todo);
  const UpdateTodo = () =>
  {

    db.collection('todos').doc(props.todo.id).set({

        todo: input


    }, {merge: true})
      setOpen(false);
  }



    return (
        <div>

             <Modal
        open={open}
        onClose={handleClose}
        
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Update Todo List
          </Typography>
          <Input value={input} onChange={e => setinput(e.target.value)}></Input>
          <Button onClick={UpdateTodo}>Update</Button>
        </Box>
      </Modal>




            <Box sx={{ width: '100%', bgcolor: '#cfe8fc' }}>
           <List>
               <ListItem> <ListItemText primary={props.todo.todo} />
               
               </ListItem>

               <EditIcon onClick={handleOpen}>Edit</EditIcon>

               <DeleteForeverIcon onClick={e => db.collection('todos').doc(props.todo.id).delete()}></DeleteForeverIcon>

              
</List>
  
</Box>
        </div>
    )
}

export default Todos

