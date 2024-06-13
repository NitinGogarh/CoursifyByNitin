import React, { useEffect, useState } from "react";
import styled from "styled-components";
import image from "../images/images.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CoursesHandle from "../store/Thunks/CoursesHandle";
import axios from "axios";
const CardDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.CoursesSlice);

  const data = user?.find((item) => item.id == id);
  const [msg, setMsg] = useState(false);
  const enrollNow = async () => {
    const { email } = JSON.parse(localStorage.getItem("user"));
    try {
      const response = await axios.post(
        "https://coursifybynitin-production-5b9e.up.railway.app/courses/enroll",
        {
          email,
          data,
        }
      );
    } catch (error) {
      setMsg(true);
      console.log(error);
    }
  };
  useEffect(() => {
    dispatch(CoursesHandle());
  }, []);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMsg(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [msg]);

  return (
    <Container>
      {!data ? (
        <div></div>
      ) : (
        <div className="main">
          <div className="image">
            <img src={image} alt="" />
          </div>
          <div
            className="status"
            style={{ color: data.description === "Close" ? "red" : "initial" }}
          >
            {data.description}
          </div>
          <div className="names">
            <h2>{data.name}</h2>
            <p>{data.instructor}</p>
          </div>
          <div className="duration">Duration :{data.duration}</div>
          <div className="deshead">Description:</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus
            ante vel dolor interdum, sed mattis augue sagittis. Vestibulum
            pulvinar erat quis tortor tempor consequat. Aliquam erat volutpat.
            Maecenas faucibus nulla sed urna aliquam scelerisque. Quisque tempor
            dapibus est. Praesent at egestas augue, et laoreet risus. Etiam
            accumsan, erat at semper scelerisque, neque eros semper ligula,
            posuere aliquam mi quam id mauris. Vivamus aliquet, neque eu
            ultrices volutpat, mi odio sagittis est, et tincidunt justo est sit
            amet est. Vestibulum sollicitudin velit ac arcu tempus, ornare porta
            lacus egestas. Aenean in quam sodales, hendrerit orci tincidunt,
            pretium magna. Nunc scelerisque gravida ante, nec eleifend nunc
            euismod sed. Sed dictum felis et purus pretium condimentum. Nunc
            tincidunt nisl nec vehicula rhoncus. Phasellus euismod velit arcu,
            nec faucibus velit viverra ac. Nunc id mi ac diam tincidunt
            imperdiet. Etiam tempus tristique arcu eu vulputate. Sed ac odio mi.
            Mauris ligula velit, aliquet quis ligula varius, ultricies tempus
            turpis. In eu dui finibus, tristique ante quis, congue dolor. Nam
            fermentum sem nunc, ultricies convallis enim viverra eget. Donec
            tempor nisi odio. Mauris eget mollis ante. Sed fringilla urna
            feugiat risus posuere tristique. Fusce pulvinar enim quis nulla
            tincidunt placerat. Nullam nec dapibus odio.
          </div>
          <h4 className="schedule">Schedule :{data.Schedule}</h4>
          <div className="location">Location:{data.location}</div>
          <div className="prereq">
            Prerequisites:{data.prerequisites.map((e) => e)}
          </div>
          <div className="syll">Syllabus</div>
          <div className="syllabus">
            {data.syllabus.map((e, index) => (
              <div key={index}>
                <h4>Week:{e.week}</h4>
                <h5>Topic : {e.topic}</h5>
                <h5> Content : {e.content}</h5>
              </div>
            ))}
            {msg ? (
              <div className="alert alert-danger founded" role="alert">
                Error:Already Enrolled
              </div>
            ) : null}
          </div>
          <div className="btnDiv">
            <button className="enrollBtn" onClick={enrollNow}>
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 40px;
  .founded {
    position: absolute;
    top: 40px;
    width: 100%;
  }
  .main {
    width: 90%;
    background-color: #0f1921;
    margin: 32px;
    padding: 20px;
    border-radius: 35px;
    color: white;
    .image {
      width: 100%;
      height: 320px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-top-right-radius: 35px;
        border-top-left-radius: 35px;
      }
    }
    .status {
      text-align: center;
      font-size: 23px;
    }
    .names {
      text-align: center;
    }
    .duration {
      font-size: 24px;
    }
    .deshead {
      font-size: 24px;
    }
    .schedule {
      margin-top: 23px;
      text-align: center;
      font-size: 23px;
    }
    .location,
    .prereq {
      font-size: 21px;
      margin-top: 12px;
    }
    .syll {
      font-size: 28px;
      text-align: center;
      margin: 12px;
    }
    .syllabus {
      text-align: center;
      position: relative;
    }
    .btnDiv {
      text-align: center;
      margin-top: 43px;
    }
    .enrollBtn {
      padding: 18px;
      background-color: #52af15;
      border: none;
      border-radius: 18px;
      font-size: 18px;
    }
  }

  @media screen and (max-width: 700px) {
    .main {
      width: 100%;
      margin: 0%;
      border-radius: 0;
    }
    img {
      border-radius: 0;
    }
  }
`;
export default CardDetails;
