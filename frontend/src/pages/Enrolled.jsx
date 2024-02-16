import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import enrollHandle from '../store/Thunks/enrollHandle';
import AddedCard from '../components/AddedCard';
import EnrolledCard from '../components/EnrolledCard';

const Enrolled = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { user, loading } = useSelector((state) => state.enrollSlice);
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      navigate('/login');
    } else {
      const { email } = JSON.parse(storedUser); 
      dispatch(enrollHandle(email));
    }
  }, []);
  return (
    <Container>
    {!user?<h2>No courses Enrolled</h2>:null}
    <div className="belowContainer">
      {user &&
        !loading &&
        user.map((course, index) => {
          return <EnrolledCard key={index} course={course} />;
        })}
    </div>
  </Container>
  )
}

const Container = styled.div`
  padding: 0%;
  margin: 0%;
  width: 100vw;
  height: 100vh;
  .belowContainer {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    gap: 19px;
  }
`;

export default Enrolled