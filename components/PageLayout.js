import Footer from './Footer';
import { useRouter } from 'next/router';
import logo from '../static/images/adj_logo.svg';

function PageLayout({ children }) {
  const router = useRouter();

  return (
    <div className='layout_container'>
      <div id='body'>{children}</div>
      <Footer />
    </div>
  );
}

export default PageLayout;
