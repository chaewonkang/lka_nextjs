import { ThemeProvider } from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import Link from 'next/link';

const dataSet = [
  {
    index: 0,
    flag: 'taiki',
    artist: 'Taiki Sakpisit',
    keyword: [
      'alchemical Transmutation',
      'mysticism',
      'phantasmagoria',
      'disembodiment',
      'sensory Stimulus',
      'eschatology',
      'spectrality',
    ],
    thumb: '../static/images/taiki.jpg',
  },
  {
    index: 1,
    flag: 'wonjung',
    artist: 'Wonjung Shin',
    keyword: [
      'gesture',
      'sounda',
      'network',
      'abject',
      'non-verbal',
      'dialog',
      'stress',
      'thing-in-itself',
      'noting',
    ],
    thumb: '../static/images/wonjung.jpg',
  },
  {
    index: 2,
    flag: 'sabina',
    artist: 'Sabina Hyoju AHN',
    keyword: [
      'covid19',
      'ai',
      'machine learning',
      'daily life',
      'soundb',
      'local',
      'digital',
      'artist',
      'residency',
      'air',
      'germany',
      'stuttgart',
      'akademies',
      'schloss',
      'solitude',
      'forest',
      'walk',
      'lockdown',
    ],
    thumb: '../static/images/sabina.png',
  },
  {
    index: 3,
    flag: 'aamp',
    artist: 'AAMP',
    keyword: [
      'onta',
      'caring',
      'ergliffenheit',
      'minority language',
      'xeo',
      'mountain',
      'foresta',
      'entanglement',
      'touch the ground',
    ],
    thumb: '../static/images/aamp.png',
  },
  {
    index: 4,
    flag: 'minjung',
    artist: 'Minjung Kim',
    keyword: [
      'connected',
      'border',
      'interaction',
      'settle down',
      'interlock',
      'tide',
      'native',
      'roam',
    ],
    thumb: '../static/images/minjung.jpg',
  },
  {
    index: 5,
    flag: 'john',
    artist: 'John Torres',
    keyword: [
      'intro2barter',
      'denvicky',
      'findings',
      'felicity',
      'patkay',
      'shady',
      'waiting',
      'badvibes',
      'narratives',
    ],
    thumb: '../static/images/john.png',
  },
];

const Index = () => {
  const [keyword, setKeyword] = useState('');
  const [loading, setLoading] = useState(true);
  const [isItalic, setIsItalic] = useState(false);
  const [thumbUrl, setThumbUrl] = useState('');
  const [flag, setFlag] = useState('');
  const [isKeyClicked, setIsKeyClicked] = useState(false);

  let keywordArr = [].concat.apply(
    [],
    dataSet.map((item) => item.keyword)
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 500);

    const spanTarget = [...document.getElementsByClassName('keyword')];

    isKeyClicked
      ? spanTarget
          .filter((item) => {
            if (!item.className.includes(flag)) return item;
          })
          .map((item) => (item.style.opacity = '0'))
      : null;

    dataSet.map((item) => {
      if (!isKeyClicked && item.keyword.includes(keyword)) {
        setFlag(item.flag);
        setThumbUrl(item.thumb);
      } else return null;
    });

    const italicTarget = [...document.getElementsByClassName(flag)];

    isItalic
      ? italicTarget.map((item) => (item.style.fontFamily = 'Signifier Italic'))
      : italicTarget.map(
          (item) => (item.style.fontFamily = 'Signifier Regular')
        );
  }, [keyword, thumbUrl, flag, isItalic, loading, isKeyClicked]);

  return (
    <ThemeProvider theme={theme}>
      {loading && (
        <>
          <PageLayout></PageLayout>
        </>
      )}
    </ThemeProvider>
  );
};

export default Index;
