import React, { useEffect, useState } from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components';
import image from '../images/images.jpeg'
import { useNavigate } from 'react-router-dom';
const EnrolledCard = ({ course }) => {
   const { name, instructor, thumbnail,progress } = course;
   const navigate = useNavigate()
   const doTutorial = ()=>{
    navigate(`/enrolled/assessment/${course.id}`)
   }
   const [value,setValue] = useState(0);
   useEffect(() => {
    if(progress)
     {
    let totalItems = Object.keys(progress).length;
    let sum = 0;
   
    for (let key in progress) {
      sum += Number(progress[key]);
    }
  
    let average = sum / totalItems;
    let percentage = (average / 100) * 100; 
    setValue(percentage);
  }
  }, []);

  
  return (
      <Container >
      <div className='innerContainer'>
        <div className='image'>
           <img src={image} alt="nitin" />
        </div>
           <div className='names'>
            <h3> {name}</h3>
            <p>By {instructor}</p>
            <div className='buttons'>
                <button className='button1' onClick={doTutorial}>Start</button>
            </div>
            <div className='progress1'>
          <div> Progress</div>
          <input
          className='progress'
            type="range"
            id="rangeInput1"
            name="tutorial1"
            min="0"
            max="100"
            value={value?value:0}
            readOnly = {true}
          />
        </div>
        </div>
        </div>
      </Container>
  ); 
};
const Container =  styled.div`
     width: 300px;
     min-height: 370px;
     max-height: 380px;
     border: none;
     border-radius: 20px;
     overflow: hidden;
     box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
     margin-top: 13px;
     cursor: pointer;
    .innerContainer
    {
        width: 100%;
        .image{
            width: 100%;
            height: 150px;
            border: none;
            img{
                width: 100%;
                height: 150px;
            }
        }
        .names{
            text-align: center;
            min-height: 160px;
            padding-top: 12px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            
            }
        .button1{
            background-color: #4edb9e;
            padding: 13px;
            padding-inline: 18px;
            border-radius: 13px;
            border: none;
        }
        .progress1{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .progress{   
                width: 90%;
        }
        }
       
    }

`
export default EnrolledCard;
