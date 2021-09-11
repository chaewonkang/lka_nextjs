import PageLayout from '../components/PageLayout';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout></PageLayout>{' '}
    </ThemeProvider>
  );
};

export default Index;
