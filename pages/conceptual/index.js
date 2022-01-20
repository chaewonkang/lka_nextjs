import theme from '../../styles/theme';
import { useEffect, useState, useRef } from 'react';
import PageLayout from '../../components/PageLayout';
import Link from 'next/link';

const Conceptual = () => {
  const menuTop = useRef();
  const [contentTop, setContentTOp] = useState(0);

  useEffect(() => {
    setContentTOp(menuTop.current.offsetTop);
  }, [contentTop]);

  return (
    <PageLayout>
      <></>
    </PageLayout>
  );
};

export default Conceptual;
