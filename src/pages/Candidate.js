import React, { useEffect, useState } from 'react'
import styles from '../styles/Candidate.module.css';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getApiAdd, getEditedDetails, getUpdateCandidate } from '../action/action';
import { useNavigate, useParams } from 'react-router-dom';

const Candidate = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const params= useParams();
  // console.log('P',params)

  const editData=useSelector((state)=>state.candidateRed.selectedCandidate)
  console.log('editited data',editData);
  useEffect(()=>{
    dispatch(getUpdateCandidate(params.id))
  },[]);

  useEffect(()=>{
    if(editData){
      setInputText({...editData})
    }
  },[editData]);

  const [inputText,setInputText]=useState({
    name:'',
    email:'',
    phone:''
  });
  const {name,email,phone}=inputText;
  const inputEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputText((lastValue)=>{
      return{
        ...lastValue,
        [name]:value
      }
    })
  }
  const submitDetails=(e)=>{
    e.preventDefault();
    console.log('ValuesE',inputText);
    if(params.id){
      dispatch(getEditedDetails(inputText,params.id));
      navigate('/');
    }
    else{
      dispatch(getApiAdd(inputText));
    }
    navigate('/');
  }
  return (
    <div>
      <div className={styles.body}>
        <div className={styles.container}>
          <h2 className={styles.heading}>{params.id?'Edit':'Add'} Candidate</h2>
          <form onSubmit={submitDetails}>
          <div className={styles.inputText}>
            <input name='name' value={name || ''} onChange={inputEvent} type='text' placeholder='Enter your Name' />
          </div>
          <div className={styles.inputText}>
            <input name='email' value={email || ''} onChange={inputEvent} type='text' placeholder='Enter your Email' />
          </div>
          <div className={styles.inputText}>
            <input name='phone' value={phone || ''} onChange={inputEvent} type='number' placeholder='Enter your Phone number' />
          </div>
          <div className={styles.btn}>
            <Button type='submit' variant="contained">Submit Details</Button>
            <Button onClick={()=>navigate('/')} type='button' variant="outlined">Go Home</Button>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Candidate