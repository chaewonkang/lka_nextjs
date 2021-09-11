import PageLayout from '../components/PageLayout';
import SlideShow from '../components/SlideShow';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <SlideShow></SlideShow>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Index;
