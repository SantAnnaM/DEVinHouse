import logoImg from '../../../assets/images/logo.png';
import { Navbar } from '../navbar/Navbar';

export function Header () {

  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <img src={logoImg} alt="logo" /> 
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navbar />
          </section>
          <hr className="header-top__separator" />
        </section>
      </section>
      <section className="header-bottom">
        <section className="header-bottom__phone">
          (51)998765432
        </section>
        <section className="header-bottom__email">
          restaurantebarum@gmail.com
        </section>
      </section>
    </section>
  )
};