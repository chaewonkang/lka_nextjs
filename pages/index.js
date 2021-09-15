import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import ColorBlock from '../components/ColorBlock';
import InfoBlock from '../components/InfoBlock';
import LargeBlock from '../components/LargeBlock';
import MediumBlock from '../components/MediumBlock';
import SmallBlock from '../components/SmallBlock';
import XLBlock from '../components/XLBlock';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <div className='firstrow'>
          <InfoBlock></InfoBlock>
          <LargeBlock></LargeBlock>
          <ColorBlock></ColorBlock>
          <MediumBlock></MediumBlock>
        </div>
        <div className='secondrow'>
          <SmallBlock></SmallBlock>
          <SmallBlock></SmallBlock>
          <SmallBlock></SmallBlock>
          <MediumBlock></MediumBlock>
          <ColorBlock></ColorBlock>
          <XLBlock></XLBlock>
        </div>
        <div className='thirdrow'>
          <SmallBlock></SmallBlock>
          <SmallBlock></SmallBlock>
          <SmallBlock></SmallBlock>
          <SmallBlock></SmallBlock>
          <LargeBlock></LargeBlock>
          <ColorBlock></ColorBlock>
        </div>
        <div className='forthrow'>
          <MediumBlock></MediumBlock>
          <SmallBlock></SmallBlock>
          <XLBlock></XLBlock>
          <ColorBlock></ColorBlock>
          <MediumBlock></MediumBlock>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Index;
