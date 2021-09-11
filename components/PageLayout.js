import Footer from './Footer';
import Header from './Header';

function PageLayout({ children }) {
  return (
    <div>
      <Header />
      <div id='body'>{children}</div>
      <Footer />
    </div>
  );
}

export default PageLayout;
