import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import "./dashboard.css";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../state/store';
import { ProductsDetaiis } from '../state/auth';
import { DeleteIndividual, GetItems, Productshown } from '../state/todoItem';
import { Link } from 'react-router-dom';


function Dashboard() {

    const dispatch= useDispatch<AppDispatch>()
  useEffect(()=>{
    // dispatch(ProductsDetaiis())
    dispatch(GetItems())
  },[])

  //  interface IProduct{
  //   id: number,
  //   name: string,
  //   quantity: string,
  //   price: string,
  //   seller:{
  //     id: number,
  //     name:string
  //   },
  //   image:string,
  //   product_orders: string,
  //   rating: number
  // }

  // interface Iroot {
  //   authReducer: {
  //     success: boolean,
  //     error: boolean,
  //     products: {
  //       data: IProduct[]
  //     }
  //   }
  // }
  // const gottenItems: any= useSelector<Iroot>(state=> state.authReducer.products?.data)
  // console.log(gottenItems)
  type getInit = {
    success: boolean,
    isLoadingUsers: boolean,
    message: null,
    error: boolean,
    failed: boolean,
    todoit:{
      todos: Productshown[]
    }
}
type Statesym= {
  authReducer: object,
  GetItemsReducer: getInit
}
  const gottenItems: any= useSelector<Statesym>(state=> state.GetItemsReducer?.todoit)
  const mappingit: any= gottenItems?.todos
  console.log(mappingit)


  return (
    <div className="list_display">
      {/* {gottenItems.map((each: any, index: string)=>
      {return <div key={index} className="each_item">
        <img src={each.image} width="200px" height="200px"/><br/>
        <p>{each.name}</p>
        <p>${each.price}</p>
        <p>{each.product_orders}</p>
      </div>
    }
        )} */}
        {mappingit?.map((each: any, index: string)=>
        { return <div className='each_description' key={index}>
        <p><span className='title_design'>Title:</span> {each?.title}</p>
        <p><span className='title_design'>Description:</span>{each?.description}</p>
        <Link to={`/item/${each._id}`} style={{color:"green"}}>view details</Link>
        <p style={{color:"red"}} onClick={ async()=>{await dispatch(DeleteIndividual(each?._id));}}>delete details</p>
        </div>})}
    </div>
  );
}

export default Dashboard;
