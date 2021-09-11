import Link from 'next/link';

function Footer() {
  return (
    <div className='footer_container'>
      <div className='footer_inner'>
        <div>
          <span>CEO</span>
          <p>Chang Joon Yong</p>
        </div>
        <div>
          <span>Business Registration</span>
          <p>105-11-81551</p>
        </div>
        <div>
          <span>Address</span>
          <p>
            10874 #38, Herman House02, 134, Chaekhyanggisup-gil, Paju-Si,
            Gyeonggi-do, Korea
          </p>
        </div>
        <div>
          <span>Phone</span>
          <p>+82-10-5696-6635</p>
        </div>
        <div>
          <span>E-mail</span>
          <p>davidwtnt@naver.com</p>
        </div>
        <div className='copyright'>
          <p>COPYRIGHT 2021 Business Channel ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
