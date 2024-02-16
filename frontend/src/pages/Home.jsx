import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CoursesHandle from "../store/Thunks/CoursesHandle";
import Card from "../components/Card";
import { styled } from "styled-components";
import SearchBar from "../components/SearchBar";
const Home = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.CoursesSlice);
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    } else dispatch(CoursesHandle());
  }, []);


  
  return (
    <Container>
       <SearchBar  />
      <div className="belowContainer">
        {user &&
          !loading &&
          user.map((course, index) => {
            return <Card key={index} course={course} />;
          })}
      </div>
    </Container>
  );
};
const Container = styled.div`
  padding: 0%;
  margin: 0%;
  width: 100vw;
  
  .belowContainer {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 19px;
  }
`;
export default Home;
