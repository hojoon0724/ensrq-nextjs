import style from './nav.module.css';

export default function Navbar({}) {
  return (
    <nav>
      <div className={style.logo}></div>
      <ul className={style.navigation}>
        <li className={style.about}>about</li>
        <li className={style.thisNewThing}>donate</li>
        <li>streaming</li>
        <li>tickets</li>
      </ul>
    </nav>
  );
}
