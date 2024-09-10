import style from './nav.module.css';

export default function Navbar({}) {
  return (
    <nav>
      <ul>
        <li className={style.about}>about</li>
        <li className={style.thisNewThing}>donate</li>
        <li>streaming</li>
        <li>tickets</li>
      </ul>
    </nav>
  );
}
