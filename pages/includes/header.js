import { title_case } from 'helpers/utils/commonAction';
import { useState, useEffect, useContext }  from 'react'
import { alertService, userService } from 'services';
import LanguageContext from 'props/context/LanguageContext';
import { useRouter } from 'next/router';
import {languages} from 'helpers/utils/lang';
import { headerlanguages } from 'helpers/utils/headerlang';
import { Link } from 'components/Link';
const Header = (props) => {

  const router = useRouter(); 
  const [res, setres] = useState([])
  const [loading, setloading] = useState(true)
  const [popupbar, setpopupbar] = useState(false);
  const langContext = useContext(LanguageContext)
  const oper = props.value;
  useEffect(()=>{
    userService.fetchService_groups('solution_front/view_all_solution_list')
    .then(services =>{        
        setres(services.data) 
        setloading(false)                     
    })       
  },[router.query,langContext])

  const setCurrentLang = (lang) =>{
    userService.setLanguage(lang)
    langContext.setLanguage(lang)
  }

  const setrouterfunction = (id,slug) => {        
      router.push(`/solutions/${slug}`)
  }

  const operSearchBar = async() =>{
    setpopupbar(true);
  }
  const closeSearchBar = async()=>{
    setpopupbar(false);
  }
    
  // if(loading){
  //   return(
  //     <div>
        
  //     </div>
  //   )
  // }
    return (
      <>            
      <div className="row align-items-center position-relative reset-margin">
            { oper== 'about' ? 
                <>
                <div className="container container-1280 reset-padding">
                    <div className="row align-items-center reset-margin">
                          <div className="col-xl-3 col-lg-3 col-5">
                            <div className="site-logo">
                              <Link href="/" className="navbar-brand">
                                    <img src="/images/C2Dlogo-black.png" alt="SiteLogo" className="dark-logo" style={{width:183,height:48}}/>
                                    <img src="/images/C2Dlogo-white.png" alt="SiteLogo" className="white-logo" style={{width:183,height:48}}/>
                              </Link>
                            </div>
                          </div>
                          <div className="col-xl-9 col-lg-9 col-7 text-right">
                            <span className="home-search-bar d-lg-none">
                              <Link href="javascript:void(0)" className="text-black site-menu-toggle search-form-tigger" data-toggle="search-form" >
                                <span className="icon-menu-bar h3 text-white"><img src="/images/header-search.png" onClick={()=>operSearchBar()} style={{width:19,height:19}}/></span>
                              </Link>
                            </span>
                            <span className="d-inline-block d-lg-none">
                              <Link href="javascript:void(0)" className="text-black site-menu-toggle js-menu-toggle">
                                <span className="icon-menu-bar h3 text-white"><img src="/images/bar.png" /></span>
                              </Link>
                            </span>
                            <nav className="site-navigation navbar navbar-expand-lg navbar-light bg-light reset-padding">
                                <div className="main-nav collapse navbar-collapse" id="navbarCollapse">
                                    <ul id="menu-site-menu" className="navbar-nav ml-auto ">
                                      <li className="nav-item"><Link href="/" className="nav-link">{headerlanguages[langContext.lang].home}</Link></li>
                                      <li className="nav-item"><Link href="/about" className="nav-link">{headerlanguages[langContext.lang].about}</Link></li>
                                      <li className="nav-item menu-item-has-children">
                                        <Link href="javascript:void(0)" className="nav-link">{headerlanguages[langContext.lang].services}</Link>
                                        <ul className="sub-menu">
                                          {res.map((each)=>
                                              <li className="menu-item" onClick={() => setrouterfunction(each.id,each.slug)}><Link href="/services" className="nav-link">{JSON.parse(each.page_title)}</Link></li>
                                          )}
                                          <li className="menu-item"><Link href="/services" className="nav-link">All Our Services</Link></li>
                                        </ul>
                                      </li>
                                      <li className="nav-item"><Link href="/sound" className="nav-link">{headerlanguages[langContext.lang].soundengineering}</Link></li>
                                      <li className="nav-item"><Link href="/how_we_work" className="nav-link">{headerlanguages[langContext.lang].howwework}</Link></li>
                                      <li className="nav-item"><Link href="/career" className="nav-link">{headerlanguages[langContext.lang].career}</Link></li>
                                      <li className="nav-item lang-item">
                                        <Link href="javascript:void(0)" className="nav-link"><img src={languages[langContext.lang].flagimg} className="flag"/></Link>
                                        <ul className="sub-menu">
                                          <li className="menu-item" onClick={()=>setCurrentLang('en')}>
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
                                      </li>
                                    </ul>
                                </div>
                              </nav>                            
                              <nav className="site-navigation text-right ml-auto d-none d-lg-none" role="navigation">                            
                                                        <ul className="site-menu main-menu js-clone-nav ml-auto ">                                                      
                                                          <li className="nav-item"><Link href="/" className="nav-link"><img src="/images/mbmenu-home-icon.svg" className="mb-nav-icon" />{languages[langContext.lang].home}</Link></li>
                                                          <li className="nav-item"><Link href="/about" className="nav-link"><img src="/images/mbmenu-about-icon.svg" className="mb-nav-icon" />{languages[langContext.lang].about}</Link></li>
                                                          <li className="dropdown hoves">
                                                            <Link href="javascript:void(0)" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                                              <img src="/images/mbmenu-service-icon.svg" className="mb-nav-icon" />Services<b className="caret"></b>
                                                            </Link>
                                                            <ul className="dropdown-menu">   
                                                                  {res.map((each)=>
                                                                      <li className="menu-item" onClick={() => setrouterfunction(each.id,each.slug)}><Link href="/services" className="nav-link">{JSON.parse(each.page_title)}</Link></li>
                                                                  )}                                                           
                                                                <li className="menu-item"><Link href="/services" className="nav-link">All Our Services</Link></li>
                                                            </ul>
                                                          </li>
                                                          <li className="nav-item"><Link href="/sound" className="nav-link"><img src="/images/mbmenu-sound-icon.svg" className="mb-nav-icon" />Sound Engineering</Link></li>
                                                          <li className="nav-item"><Link href="/how_we_work" className="nav-link"><img src="/images/mbmenu-howwework-icon.svg" className="mb-nav-icon" />How we work</Link></li>
                                                          <li className="nav-item"><Link href="/career" className="nav-link"><img src="/images/mbmenu-career-icon.svg" className="mb-nav-icon" />Career</Link></li>
                                                        </ul>
                              </nav>
                              <div class={`search-form-wrapper ${popupbar!='' ? 'open' :  ''}`}>
                                  <form className="header-search-form" id="" action="">
                                      <div className="input-group">
                                        <input type="text" name="search" className="header-search form-control" placeholder="Search your wish here"/>
                                        <span className="input-group-addon search-close" id="basic-addon2"><i className="icon-close2" aria-hidden="true" onClick={()=>closeSearchBar()}></i>
                                        </span>
                                      </div>
                                  </form>
                                  <div className="search-feed-bar">
                                    <h2 className="feed-title">Please enter your wish</h2>
                                    <ul className="feed-result-list text-left">
                                      <li>
                                        <h3>Search Results will appear here</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue aliquet molestie iaculis in enim. Consequat</p>
                                      </li>
                                      <li>
                                        <h3>Search Results will appear here</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue aliquet molestie iaculis in enim. Consequat</p>
                                      </li>
                                      <li>
                                        <h3>Search Results will appear here</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue aliquet molestie iaculis in enim. Consequat</p>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                    </div>
                    </div></>: 
                    <>
                    <div className="col-xl-3 col-lg-3 col-5">
                      <div className="site-logo">
                        <Link href="/" className="navbar-brand">
                              <img src="/images/C2Dlogo-black.png" alt="SiteLogo" className="dark-logo" style={{width:183,height:48}}/>
                              <img src="/images/C2Dlogo-white.png" alt="SiteLogo" className="white-logo" style={{width:183,height:48}}/>
                        </Link>
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-7 text-right">
                      <span className="home-search-bar d-lg-none">
                        <Link href="javascript:void(0)" className="text-black site-menu-toggle search-form-tigger" data-toggle="search-form" >
                          <span className="icon-menu-bar h3 text-white"><img src="/images/header-search.png" onClick={()=>operSearchBar()} style={{width:19,height:19}}/></span>
                        </Link>
                      </span>
                      <span className="d-inline-block d-lg-none">
                        <Link href="javascript:void(0)" className="text-black site-menu-toggle js-menu-toggle">
                          <span className="icon-menu-bar h3 text-white"><img src="/images/bar.png" /></span>
                        </Link>
                      </span>
                      <nav className="site-navigation navbar navbar-expand-lg navbar-light bg-light reset-padding">
                          <div className="main-nav collapse navbar-collapse" id="navbarCollapse">
                              <ul id="menu-site-menu" className="navbar-nav ml-auto ">
                                <li className="nav-item"><Link href="/" className="nav-link">{headerlanguages[langContext.lang].home}</Link></li>
                                <li className="nav-item"><Link href="/about" className="nav-link">{headerlanguages[langContext.lang].about}</Link></li>
                                <li className="nav-item menu-item-has-children">
                                  <Link href="javascript:void(0)" className="nav-link">{headerlanguages[langContext.lang].services}</Link>
                                  <ul className="sub-menu">
                                    {res.map((each)=>
                                        <li className="menu-item" onClick={() => setrouterfunction(each.id,each.slug)}><Link href="/services" className="nav-link">{JSON.parse(each.page_title)}</Link></li>
                                    )}
                                    <li className="menu-item"><Link href="/services" className="nav-link">All Our Services</Link></li>
                                  </ul>
                                </li>
                                <li className="nav-item"><Link href="/sound" className="nav-link">{headerlanguages[langContext.lang].soundengineering}</Link></li>
                                <li className="nav-item"><Link href="/how_we_work" className="nav-link">{headerlanguages[langContext.lang].howwework}</Link></li>
                                <li className="nav-item"><Link href="/career" className="nav-link">{headerlanguages[langContext.lang].career}</Link></li>
                                <li className="nav-item lang-item">
                                  <Link href="javascript:void(0)" className="nav-link"><img src={languages[langContext.lang].flagimg} className="flag"/></Link>
                                  <ul className="sub-menu">
                                    <li className="menu-item" onClick={()=>setCurrentLang('en')}>
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
                                </li>
                              </ul>
                          </div>
                        </nav>                            
                        <nav className="site-navigation text-right ml-auto d-none d-lg-none" role="navigation">                            
                                                  <ul className="site-menu main-menu js-clone-nav ml-auto ">                                                      
                                                    <li className="nav-item"><Link href="index.php" className="nav-link"><img src="/images/mbmenu-home-icon.svg" className="mb-nav-icon" />{languages[langContext.lang].home}</Link></li>
                                                    <li className="nav-item"><Link href="about.php" className="nav-link"><img src="/images/mbmenu-about-icon.svg" className="mb-nav-icon" />{languages[langContext.lang].about}</Link></li>
                                                    <li className="dropdown hoves">
                                                      <Link href="javascript:void(0)" className="dropdown-toggle nav-link" data-toggle="dropdown">
                                                        <img src="/images/mbmenu-service-icon.svg" className="mb-nav-icon" />Services<b className="caret"></b>
                                                      </Link>
                                                      <ul className="dropdown-menu">                                                              
                                                          <li className="menu-item"><Link href="/service" className="nav-link">All Our Services</Link></li>
                                                      </ul>
                                                    </li>
                                                    <li className="nav-item"><Link href="sound_engg_step_1.php" className="nav-link"><img src="/images/mbmenu-sound-icon.svg" className="mb-nav-icon" />Sound Engineering</Link></li>
                                                    <li className="nav-item"><Link href="/how_we_work" className="nav-link"><img src="/images/mbmenu-howwework-icon.svg" className="mb-nav-icon" />How we work</Link></li>
                                                    <li className="nav-item"><Link href="careers.php" className="nav-link"><img src="/images/mbmenu-career-icon.svg" className="mb-nav-icon" />Career</Link></li>
                                                  </ul>
                        </nav>
                        <div class={`search-form-wrapper ${popupbar!='' ? 'open' :  ''}`}>
                            <form className="header-search-form" id="" action="">
                                <div className="input-group">
                                  <input type="text" name="search" className="header-search form-control" placeholder="Search your wish here"/>
                                  <span className="input-group-addon search-close" id="basic-addon2"><i className="icon-close2" aria-hidden="true" onClick={()=>closeSearchBar()}></i>
                                  </span>
                                </div>
                            </form>
                            <div className="search-feed-bar">
                              <h2 className="feed-title">Please enter your wish</h2>
                              <ul className="feed-result-list text-left">
                                <li>
                                  <h3>Search Results will appear here</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue aliquet molestie iaculis in enim. Consequat</p>
                                </li>
                                <li>
                                  <h3>Search Results will appear here</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue aliquet molestie iaculis in enim. Consequat</p>
                                </li>
                                <li>
                                  <h3>Search Results will appear here</h3>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue aliquet molestie iaculis in enim. Consequat</p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div></>}
              
      </div>

      </>
    )
}

export default Header