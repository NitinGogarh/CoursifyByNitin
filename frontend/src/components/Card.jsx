import React from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import styled from 'styled-components';
import image from '../images/images.jpeg'
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Card = ({ course }) => {
    const navigate = useNavigate()
   const { name, instructor} = course;
   const {email} = JSON.parse(localStorage.getItem('user'))
   const addItem = async()=>{
    try {
        await axios.post('https://coursifybynitin-production-5b9e.up.railway.app/courses/addcourses',{
           email,
           data:course
        })
    } catch (error) {
        console.log(error) 
    }
   }
   const seeDetails = ()=>{
      navigate(`/coursesdetails/${course.id}`)
      return
   }
  return (
      <Container >
      <div className='innerContainer' >
        <div className='image' onClick={seeDetails}>
           <img src={image} alt="nitin" />
        </div>
           <div className='names'>
           <div onClick={seeDetails}>
            <h3 > {name}</h3>
            <p>By {instructor}</p>
            </div>
            <div className='buttons'>
                <span><FavoriteBorderIcon  className='like'/></span>
                <span onClick={addItem}><AddIcon  className='add'  /></span>
            </div>
        </div>
        </div>
      </Container>
  ); 
};
const Container =  styled.div`
     width: 300px;
     min-height: 320px;
     max-height: 320px;
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
            .buttons{
                display: flex;
                justify-content: space-between;

                span{
                    margin: 4px;
                    .like,.add{
                       font-size: 34px;
                    }
                    .like:hover,.add:hover{
                        transform: scale(1.1);
                    }
                }
            }
        }
    }

`
export default Card;
