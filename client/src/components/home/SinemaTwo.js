import React from 'react';
import woman from './videos/woman.mp4';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Styles = styled.div`
  .container-video {
    margin-bottom: 300px;
  }
  .container-fluid {
    padding-top: 100px;
    padding-left: 10%;
    padding-right: 10%;
    height: 100%;
    //
    //max-width: 100%;
    //max-height: 100%;
    //background: rgb(0, 0, 0, 0.5);
    //background: -webkit-gradient(linear, left bottom, left top, from(rgb(0, 0, 0, 0.5)), color-stop(30%, rgb(255, 255, 250, 0)));
    //background: linear-gradient(0deg, rgb(0, 0, 0, 0.5) 0%, rgb(255, 255, 250, 0) 30%);
    
  }
  
  
  video {
    position:absolute;
    z-index: -1;
    //max-width:1110px;
    overflow:hidden;
  }
  
  h4 {
    margin-bottom: 2rem;
    font-size: 2.8rem;
    color: orange;
  }
  p {
    font-size: 1.8rem;
    color: white;
  }
  
  @media screen and (max-width: 690px) {
    
    .container-video {
      margin-bottom: 40px;
      //max-height: 100%;
    } 
    video {
      max-width: 92%;
    }
    p {
      font-size: 0.8rem;
      color: white;
    }
    h4 {
      //margin-bottom: 10px;
      font-size: 1.6rem;
    }
    .container-fluid {
      padding-top: 20px;
      padding-left: 10%;
      padding-right: 10%;
      height: 100%;
  }
    
`;


function СinemaTwo() {

  const { t } = useTranslation()

  return (
<Styles>
    <div className="container-video">
      <div className="in">
      <video autoPlay={true}  loop={true} playsInline={true} muted >
        <source src={woman} type="video/mp4" />
      </video>

      <div className='container-fluid'>
           <h4>{t('cinema-title')}</h4>
          <p> {t('cinema-text-one')}<br />
            {t('cinema-text-two')}<br />
            {t('cinema-text-three')}
          </p>
      </div>
      </div>
    </div>

</Styles>

  );
}



export default СinemaTwo;