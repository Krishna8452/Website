import React from "react";
// import { useGlobalContext } from "../context/Context";
import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import styled from "styled-components";

const Services = () => {
  // const { services } = useGlobalContext();



  const services=[
      {
        id: 1,
        title: "Web Development",
        image: "https://images.pexels.com/photos/4974913/pexels-photo-4974913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description :"we are actively developing web applicants for our costumers."
      },
      {
        id: 2,
        title: "Web Design",
        image: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "we are actively developing web applicants for our costumers."
      },
      {
        id: 3,
        title: "Maintainance",
        image: "https://images.pexels.com/photos/7114/laptop-mobile.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"we are actively developing web applicants for our costumers."
      },
      {
        id: 4,
        title: "Hosting",
        image: "https://images.pexels.com/photos/4974907/pexels-photo-4974907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"we are actively developing web applicants for our costumers."
      },
      {
        id: 5,
        title: "Graphics Design",
        image: "https://images.pexels.com/photos/1181272/pexels-photo-1181272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"we are actively developing web applicants for our costumers."
      },
      {
        id: 6,
        title: "Testing and Debugging",
        image: "https://images.pexels.com/photos/5829726/pexels-photo-5829726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"we are actively developing web applicants for our costumers."
      },
      {
        id: 7,
        title: "Web Development",
        image: "https://images.pexels.com/photos/4974913/pexels-photo-4974913.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"we are actively developing web applicants for our costumers."
      },
      {
        id: 8,
        title: "Web Design",
        image: "https://images.pexels.com/photos/3987066/pexels-photo-3987066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description":"we are actively developing web applicants for our costumers."
      },
      {
        id: 9,
        title: "Maintainance",
        image: "https://images.pexels.com/photos/7114/laptop-mobile.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"we are actively developing web applicants for our costumers."
      },
      {
        id: 10,
        title: "Hosting",
        image: "https://images.pexels.com/photos/4974907/pexels-photo-4974907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"we are actively developing web applicants for our costumers."
      },
      {
        id: 11,
        title: "Graphics Design",
        image: "https://images.pexels.com/photos/1181272/pexels-photo-1181272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"we are actively developing web applicants for our costumers."
      },
      {
        id: 12,
        title: "Testing and Debugging",
        image: "https://images.pexels.com/photos/5829726/pexels-photo-5829726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:"we are actively developing web applicants for our costumers."
      }
    ]



  return (
    <Wrapepr className="section">
      <h2 className="common-heading" data-aos="fade-up"
            data-aos-duration="2000">Our Services</h2>
      <div className="container grid grid-three-column"  data-aos="fade-up"
     >
        {services.map((list) => {
          const { id, title, image, description } = list;
          return (
            <div key={id} className="card" data-aos="fade-up"
            data-aos-duration="2000">
              <figure>
                <img src={image} alt={title} />
              </figure>
              <div className="card-data">
                <h3>{title}</h3>
                <p>{description}</p>
                <NavLink to="/services" >
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapepr>
  );
};

const Wrapepr = styled.section`
padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};

.container {
  max-width: 120rem;
}
.card {
  border: 0.1rem solid rgb(170 170 170 / 40%);
  .card-data {
    padding: 0 2rem;
  }
  h3 {
    margin: 2rem 0;
    font-weight: 300;
    font-size: 2.4rem;
  }
  .btn {
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;
    color:rgb(98 84 243);
    font-size:1.4rem;

    &:hover {
      background-color: rgb(98 84 243);
      color: #fff;
    } 
  }
}
figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover img {
    transform: scale(1.2);
  }
  img {
    max-width: 90%;
    margin-top: 1.5rem;
    height: 20rem;
    transition: all 0.2s linear;
  }
}

@media (max-width:${({theme})=>theme.media.tab}) {

  .grid-three-column{
    grid-template-column: 1fr 1fr; 
   }
 }

 @media (max-width:${({theme})=>theme.media.mobile}) {
  
  .grid-two-column
  .grid-three-column{
    grid-template-column: 1fr; 
   }
 }
`;
export default Services;
