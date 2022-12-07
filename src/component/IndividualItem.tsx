import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import "./dashboard.css";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../state/store';
import { ProductsDetaiis } from '../state/auth';
import { DeleteIndividual, GetIndividual, getInit, GetItems, Productshown, PutIndividual } from '../state/todoItem';
import { Link, useNavigate, useParams } from 'react-router-dom';


function IndividualItem() {

    const [description, setDescription] = useState("")
    const [title, setTitle]= useState("")

    const {id} = useParams<idtype>()
    console.log(id)
    type idtype= {
        id: any
    }
    const dispatch= useDispatch<AppDispatch>()
    const navigate= useNavigate()
  
  
  


type Statesym= {
  authReducer: object,
  GetItemsReducer: getInit
}

  const valuesindi: any = useSelector<Statesym>((state)=> state.GetItemsReducer?.todo.todo)
  console.log("individual value ", valuesindi)
  

  const population= ()=>{
    console.log("works", valuesindi.title)
    setTitle(valuesindi.title)
    setDescription(valuesindi.description)
  }
  useEffect( ()=>{
    // dispatch(ProductsDetaiis())
    const trial= async ()=>{
      await dispatch(GetIndividual(id))
      await population()
    }
    trial()
    .catch(console.error)
    // population()
  },[])

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>): void =>{
    console.log(e.target.value);
    
  }

  const handleSubmit= (e:  React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const data = {
      "description": description,
      "title": title
    }
    console.log("data values ",data)
    dispatch(PutIndividual({id, data}))
  }

  const handleDelete=()=>{
    navigate("/dashboard")
  }
  

  return (
    <div className="list_display">
      <form onSubmit={handleSubmit} className='each_description'>
        <p><span className='title_design'>Title:</span><input type="text" name="title" value={title} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setTitle(e.target.value)}} /></p>
        <p><span className='title_design'>Description:</span><input type="text" name="description" value={description} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setDescription(e.target.value)}} /></p>
        <button type="submit" style={{border:"none"}}>Edit details</button>
        <p style={{color:"red"}} onClick={handleDelete}>Go back</p>
        </form>
        {/* <p>it works well</p> */}
    </div>
  );
}

export default IndividualItem;
