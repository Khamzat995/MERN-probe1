import React from 'react';
import lake from './videos/lake.mp4';
import { useTranslation } from 'react-i18next';


import styled from 'styled-components';
// import { Container } from 'react-bootstrap';
// import Istanbul from '../videos/Istanbul.mp4';
// import Turkey from '../videos/Tcontainer__videourkey.mp4';


const Styles = styled.div`
  .container-video {
    margin-bottom: 280px;
    //height: 300px;
  }
  .container-fluid {
    padding-top: 100px;
    padding-left: 10%;
    padding-right: 10%;
    height: 100%;
    //position: static;
  }
  video {
    position:absolute;
    //position:fixed;
    z-index:-1;
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
      opacity:0.8;
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
  }
`;


function Сinema() {

  const { t } = useTranslation()

  return (
<Styles>
    <div className="container-video">
      <video autoPlay={true}  loop={true} playsInline={true} muted >
        <source src={lake} type="video/mp4" />
      </video>
      <div className='container-fluid'>
        <h4>{t('cinema-title')}</h4>
        <p> {t('cinema-text-one')}<br />
          {t('cinema-text-two')}<br />
          {t('cinema-text-three')}
        </p>
      </div>
    </div>
</Styles>

  );
}



export default Сinema;