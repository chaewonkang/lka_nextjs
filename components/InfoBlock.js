import React, { useState } from 'react';
import logo from '../static/images/adj_logo.svg';

function InfoBlock() {
  const [isInfoShow, setIsInfoShow] = useState(false);

  return (
    <div className='info_block'>
      <img src={logo}></img>
      <span onClick={() => setIsInfoShow(!isInfoShow)}>Info</span>
      {isInfoShow && (
        <div className='overlay'>
          <span onClick={() => setIsInfoShow(!isInfoShow)}>X</span>
          <p>
            Adj is a creative agency specializing in branding and advertising.
            We are creative thinkers on a mission to develop brand strategies
            and advertising designs that cannot be overlooked. We also have a
            rich network of designers, Illustrators, and strategists, and can
            build the perfect team for any design project. We thrive on complex
            communication challenges and go out of our way to help brands grow.
            We understand design serves a purpose and are driven to make a
            positive impact in the world as we work with individuals and
            organizations to create brands that matter.
          </p>
          <div className='info'></div>
        </div>
      )}
    </div>
  );
}

export default InfoBlock;
