import { useState, useContext, useEffect }  from 'react'
import LanguageContext from 'props/context/LanguageContext';
import { useRouter } from 'next/router';
import {footerlanguages} from 'helpers/utils/footerlang';
import { Link } from 'components/Link';

const Footer = (props) => {

  const langContext = useContext(LanguageContext)  
  const router = useRouter();
  const [homeactive, sethomeactive] = useState(false)
  const [makewish, setmakewishactive] = useState(false)
  const [service, setserviceactive] = useState(false)
  
  const oper = props.value;
    
  return (
      <>
      <footer>
            <div className="container container-1070">
              <div className="row reset-margin">
                <div className="footer-col-1 col-lg-8 col-md-7 col-sm-12 reset-padding">
                  <div className="widget widget_menu">
                    <div className="widget-content">
                      <h2 className="widget-title">{footerlanguages[langContext.lang].whoweare}</h2>
                      <nav className="menu-categories-container">
                        <ul id="menu-category" className="menu">
                          <li className="menu-item"><a href="#">{footerlanguages[langContext.lang].work}</a></li>
                          <li className="menu-item"><a href="services.html">{footerlanguages[langContext.lang].services}</a></li>
                          <li className="menu-item"><a href="careers.html">{footerlanguages[langContext.lang].careers}</a></li>
                          <li className="menu-item"><a href="#">{footerlanguages[langContext.lang].workingprocess}</a></li>
                          <li className="menu-item"><a href="#">{footerlanguages[langContext.lang].whychooseus}</a></li>
                          <li className="menu-item"><a href="#">{footerlanguages[langContext.lang].legal}</a></li>
                          <li className="menu-item"><a href="#">{footerlanguages[langContext.lang].privacypolicy}</a></li>
                          <li className="menu-item"><a href="#">{footerlanguages[langContext.lang].cookiespolicy}</a></li>
                          <li className="menu-item"><a href="#">{footerlanguages[langContext.lang].termsandconditions}</a></li>
                        </ul>
                      </nav>
                      <div className="d-block d-sm-none text-center">
                        <p className="mb-copyright">{footerlanguages[langContext.lang].copyright}</p>
                        <ul className="socialmedia_network">
                          <li><a href="#" className="fa fa-facebook" data-toggle="tooltip" data-placement="bottom" title="Facebook"></a></li>
                          <li><a href="#" className="fa fa-instagram" data-toggle="tooltip" data-placement="bottom" title="Instagram"></a></li>
                          <li><a href="#" className="fa fa-linkedin" data-toggle="tooltip" data-placement="bottom" title="Linkedin"></a></li>
                          <li><a href="#" className="fa fa-pinterest-p" data-toggle="tooltip" data-placement="bottom" title="Pinterest"></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-col-2 col-lg-4 col-md-5 col-sm-12 reset-padding d-none d-sm-block">
                    <div className="widget widget_text">
                      <div className="widget-content">
                        <div className="icon-box rounded-circle text-center">
                          <i className="fa fa-whatsapp" aria-hidden="true"></i>
                        </div>
                        <ul className="address-list">
                          <li>Converge 2 Digital </li>
                          <li>96, Rajendran Street, Valasarvakkam</li>
                          <li>Chennai 600087</li>
                          <li>Tamil Nadu, India</li>
                        </ul>
                        <ul className="socialmedia_network">
                          <li><a href="#" className="fa fa-facebook" data-toggle="tooltip" data-placement="bottom" title="Facebook"></a></li>
                          <li><a href="#" className="fa fa-instagram" data-toggle="tooltip" data-placement="bottom" title="Instagram"></a></li>
                          <li><a href="#" className="fa fa-linkedin" data-toggle="tooltip" data-placement="bottom" title="Linkedin"></a></li>
                          <li><a href="#" className="fa fa-pinterest-p" data-toggle="tooltip" data-placement="bottom" title="Pinterest"></a></li>
                        </ul>
                      </div>
                    </div>
                </div>


              </div>
            </div>
</footer>
<a href="javascript:void(0)" id="scrollBtn" >
  <img src="/images/scroll-top.png" />
</a>
<div className="mobile-fixed-footer container-fluid d-block d-md-none">
  <div className="mobile-fixed-row  row reset-margin">
    <div className="home-holder holder col reset-padding">
      <Link className={`tap-holder ${oper=='home' ? 'active' : ''}`} href="/"  >
        <span className="holder-span">
          <img src="/images/homeicon.svg" className="holder-icon"/>
          <img src="/images/sm-homeg.svg" className="active-holder-icon" />
        </span>
        <label className="label">{footerlanguages[langContext.lang].home}</label>
      </Link>
    </div>
    <div className="wish-holder holder col reset-padding">
      <Link className={`tap-holder ${oper=='make-wish' ? 'active' : ''}`} href="/make-wish" >
        <span className="holder-span">
            <img src="/images/makewish-icon.svg" className="holder-icon"/>
            <img src="/images/sm-logocg.svg" className="active-holder-icon" />
        </span>
        <label className="label">{footerlanguages[langContext.lang].wish}</label>
      </Link>
    </div>
    <div className="service-holder holder col reset-padding">
      <Link className={`tap-holder ${oper=='services' ? 'active' : ''}`} href="/services" >
        <span className="holder-span">
              <img src="/images/servicebox.svg" className="holder-icon"/>
              <img src="/images/sm-serviceg.svg" className="active-holder-icon" />
        </span>
        <label className="label">{footerlanguages[langContext.lang].services}</label>
      </Link>
    </div>
  </div>
</div>
      </>
    )
}

export default Footer