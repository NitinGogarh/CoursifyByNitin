import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const EnrolledDetails = () => {
    const {id} = useParams()
     const navigate = useNavigate()
  const [tutorialValues, setTutorialValues] = useState({
    tutorial1: 0,
    tutorial2: 0,
    tutorial3: 0,
    tutorial4: 0,
    tutorial5: 0,
    tutorial6: 0,
    tutorial7: 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTutorialValues({ ...tutorialValues, [name]: value });
  };
  useEffect(() => {
    const fetchData = async () => {
        const {email} = JSON.parse(localStorage.getItem('user'))
      try {
        
        const response = await axios.post(`https://coursifybynitin-production-5b9e.up.railway.app/progressreport/${id}`,{email});
        console.log(response)
         setTutorialValues(response.data)
      } catch (error) {
        console.error('Error:', error);
      }
    }; 
    fetchData();   
  }, []);
  console.log(tutorialValues)
  const save = async()=>{
     const {email} = JSON.parse(localStorage.getItem('user'))
     console.log(email)
    try {
        await axios.post(`https://coursifybynitin-production-5b9e.up.railway.app/progress/${id}`,{
            email,tutorialValues
        })
        navigate('/enrolled')
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <Container>
      <div className="main">
        <div>
          <label htmlFor="rangeInput1">Tutorial 1:</label>
          <input
            type="range"
            id="rangeInput1"
            name="tutorial1"
            min="0"
            max="100"
            value={tutorialValues.tutorial1}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="rangeInput2">Tutorial 2:</label>
          <input
            type="range"
            id="rangeInput2"
            name="tutorial2"
            min="0"
            max="100"
            value={tutorialValues.tutorial2}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="rangeInput3">Tutorial 3:</label>
          <input
            type="range"
            id="rangeInput3"
            name="tutorial3"
            min="0"
            max="100"
            value={tutorialValues.tutorial3}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="rangeInput4">Tutorial 4:</label>
          <input
            type="range"
            id="rangeInput4"
            name="tutorial4"
            min="0"
            max="100"
            value={tutorialValues.tutorial4}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="rangeInput5">Tutorial 5:</label>
          <input
            type="range"
            id="rangeInput5"
            name="tutorial5"
            min="0"
            max="100"
            value={tutorialValues.tutorial5}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="rangeInput6">Tutorial 6:</label>
          <input
            type="range"
            id="rangeInput6"
            name="tutorial6"
            min="0"
            max="100"
            value={tutorialValues.tutorial6}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="rangeInput7">Tutorial 7:</label>
          <input
            type="range"
            id="rangeInput7"
            name="tutorial7"
            min="0"
            max="100"
            value={tutorialValues.tutorial7}
            onChange={handleInputChange}
          />
        </div>
        <button className="button1" onClick={save}>Save</button>
      </div>
     
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
 
  display: flex;
  align-items: center;
  justify-content: center;
  .main {
    width: 80%;
    height: 95%;
    background-color: #64a5de;
    border-radius: 43px;
    text-align: center;
    div {
      text-align: center;
      margin-top: 23px;
      label {
        font-size: 34px;
      }
      input {
        width: 80%;
      }
     
    }
    button{
            background-color: #4edb9e;
            padding: 13px;
            padding-inline: 18px;
            border-radius: 13px;
            border: none;
        }
  }
`;

export default EnrolledDetails;
