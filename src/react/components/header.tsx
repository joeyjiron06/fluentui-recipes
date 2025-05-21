import Fluent2Logo from '../icons/fluent';
import { Badge, Body1Strong } from '@fluentui/react-components';
import './header.css';

export default function Header() {
  return (
    <header>
      <div className='container'>
        <div className='logo-container'>
          <a href='/' aria-label='home'>
            {<Fluent2Logo className='logo' color='black' />}
          </a>

          <div className='header-divider'></div>

          <div className='header-title-container'>
            <Body1Strong>Recipes</Body1Strong>

            <Badge size='small'>unofficial</Badge>
          </div>
        </div>

        <div>right side</div>
      </div>
    </header>
  );
}
