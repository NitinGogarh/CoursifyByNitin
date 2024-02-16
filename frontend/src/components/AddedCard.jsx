import React from 'react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from 'styled-components';
import image from '../images/images.jpeg'
const AddedCard = ({ course }) => {
   const { name, instructor, thumbnail } = course;

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
                <span><FavoriteBorderIcon  className='like'/></span>
                <span><RemoveIcon  className='add'/></span>
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
export default AddedCard;
