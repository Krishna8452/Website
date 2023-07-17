import React from "react";
import { styled } from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;

  .container {
    margin-top: 6rem;
    text-align: center;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs{
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type= "submit"]{
        cursor: pointer;
        transition: all 0.2s;
  
        &:hover {
          background-color: ${({theme})=>theme.colors.white};
          border: 1px solid ${({theme})=>theme.colors.btn};
          color: ${({theme})=>theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
  }
  `;

  return (
    <Wrapper className="section">
      <h2 className="common-heading" data-aos="fade-left">Feel free to contact Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d804.652232353862!2d85.37736080266534!3d27.687732301023516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1686760881956!5m2!1sen!2snp"
        width="100%"
        height="450"
        style={{ border: 0, padding:"2%"}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"

        data-aos="fade-up"
     data-aos-duration="3000"
      ></iframe>
      <div className="container">
              
        <div className="contact-form" data-aos="fade-up" data-aos-duration="1000" >
          <form action="#" method="POST" className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required

             
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required

            
            />
            <textarea 
              name="message"
              placeholder="description"
              cols="30" 
              rows={6}  
              autoComplete="off"
              required
            
              >
                
              </textarea>
              <input type="submit" value="send"></input>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
