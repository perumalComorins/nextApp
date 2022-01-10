import { Link } from 'components/Link';
import { title_case } from 'helpers/utils/commonAction';
import { useState, useEffect, useContext }  from 'react'
import { alertService, userService } from 'services';
import LanguageContext from 'props/context/LanguageContext';
import { useRouter } from 'next/router';
import {languages} from 'helpers/utils/lang';
const MobileMenu = ({type}) => {

  const langContext = useContext(LanguageContext)
  const [loading,setLoading] = useState(true)
  const router = useRouter();
  console.log(langContext)

  const setCurrentLang = (lang) =>{
    userService.setLanguage(lang)
    langContext.setLanguage(lang)
  }

    return (
      <>
       <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                      <img src="/images/C2Dlogo-black.png" alt="SiteLogo" style={{height:42}}/>
                      <div className="site-mobile-menu-close">
                        <span className="icon-close2 js-menu-toggle"></span>
                      </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                    <div className="site-mobile-menu-footer">
                      <div className="language-tab">
                        <Link href="javascript:void(0)" className="lang-link" onClick={()=>alert(1)}><img src={languages[langContext.lang].flagimg} className="flag mb-nav-icon"/>Language</Link>
                        <ul className="sub-menu">
                                        <li className="menu-item">
                                          <Link href="javascript:void(0)" className="nav-link">
                                            <label className="lan-code">US</label>
                                            <label className="lan-flag"><img src="/images/us-Flag.png" /></label>
                                            <label className="lan-title">English</label>
                                          </Link>
                                        </li>
                                        <li className="menu-item" onClick={()=>setCurrentLang('fr')}>
                                          <Link href="javascript:void(0)" className="nav-link">
                                            <label className="lan-code">FR</label>
                                            <label className="lan-flag"><img src="/images/fr-Flag.png" /></label>
                                            <label className="lan-title">French</label>
                                          </Link>
                                        </li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <a href="make_wish.php" className="btn btn-primary btn-c2d-primary">Make a wish</a>
                      </div>
                    </div>
</div>
      </>
    )
}

export default MobileMenu