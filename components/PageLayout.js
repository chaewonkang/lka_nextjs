import Footer from './Footer';
import Header from './Header';
import { useRouter } from 'next/router';

function PageLayout({ children }) {
  const router = useRouter();

  return (
    <div className='layout_container'>
      <div id='body'>
        {/* <Header></Header> */}
        <div id='container'>{children}</div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default PageLayout;
