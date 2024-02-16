import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CoursesHandle from "../store/Thunks/CoursesHandle";
import SearchBar from "../components/SearchBar";
import styled from "styled-components";
import Card  from "../components/Card";
import AddedCard from "../components/AddedCard";
import addCoursesHandle from "../store/Thunks/addCoursesHandle";

const SearchedResult = () => {
  const dispatch = useDispatch();
  const { search } = useParams();
  const { user } = useSelector((state) => state.CoursesSlice);

   useEffect(()=>{
    dispatch(CoursesHandle())
   },[])
   const data = user?.filter((item) => (
        item.name.trim().toLowerCase().replace(/\s+/g, "").includes(search) ||
        item.instructor.trim().toLowerCase().replace(/\s+/g, "").includes(search)
      ));
  return (
    <Container>
      <SearchBar />
      
      <div className="belowContainer">
      {data&&!data.length?<h2>No result Found</h2>:null}
        {data&&data.map((course, index) => {
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

export default SearchedResult;
