import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  return (
    <div className='header_container'>
      <div className='company_title'>
        <div>Leehong Kim</div>
        <div>Architects</div>
      </div>
      <div className='category'>
        <div>Architecture</div>
        <div>Conceptual</div>
        <div>News</div>
        <div>About</div>
      </div>
      <div className='project'>
        <div>Project</div>
      </div>
      <div className='year'>
        <div>Year</div>
      </div>
      <div className='program'>
        <div>Program</div>
      </div>
    </div>
  );
}

export default Header;
