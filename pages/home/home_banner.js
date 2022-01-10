import { title_case } from 'helpers/utils/commonAction';
import { useState, useEffect, useContext }  from 'react'
import { alertService, userService } from 'services';
import LanguageContext from 'props/context/LanguageContext';
import { useRouter } from 'next/router';
import {languages} from 'helpers/utils/lang';
import { homeStaticlanguages } from 'helpers/utils/homeStaticlang';
import { Link } from 'components/Link';
const HomeBanner = ({type}) => {

  const langContext = useContext(LanguageContext)
  const [loading,setLoading] = useState(true)
  const [firstBannerset, setFirstBannerset ] = useState([]);
  const [secondBannerset, setSecondBannerset ] = useState([]);
  const router = useRouter();
  
  useEffect(() => {      
    userService.getAll('home_banner_front').then(banners => {
      setFirstBannerset(banners.banner_images_1)
      setSecondBannerset(banners.banner_images_2)
      setLoading(false)
    })
    .catch(alertService.error)      
  }, [langContext]);

    return (
      <>
       <div class="banner-content">
                            <div class="banner-row row reset-margin">
                                    <div class="col-lg-6 col-md-6 col-sm-12 banner-left-col">
                                        <h1>{homeStaticlanguages[langContext.lang].homebannerTitle} </h1>
                                        <p>{homeStaticlanguages[langContext.lang].homebannerDescription}</p>
                                        <Link href="/make-wish" class="btn btn-primary btn-c2d-primary">{homeStaticlanguages[langContext.lang].homebannerLinkText}</Link>
                                    </div>
                                    { loading ?
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                              <img src="/images/preLoader.gif" style={{width:'25px',height:'25px',position:'relative',left:'50%',transform:'translateX(-50%)'}} />  
                                    </div> :
                                    <div className="col-lg-6 col-md-6 col-sm-12 banner-right-col overlap-group">
                                        <img src="/images/home-banner-circle_450x450.png" class="bg-circle-shape-pattern d-none d-xl-block"/>
                                        <div class="rectangle-152 carousel carousel-fade carousel-fade-1" data-ride="carousel">
                                          <div role="listbox" class="carousel-inner">
                                              {secondBannerset && secondBannerset.map((item,index) =>
                                                <img class={`desoved-img carousel-item ${index == 0 &&  'active'}`} src={item} />
                                              )}
                                          </div>
                                          <img class="plushover-icon plushover-icon-1" src="/images/home-page-plus.png" data-toggle="tooltip" data-placement="right" data-html="true" title="Billing Software" />
                                          <img class="plushover-icon plushover-icon-2" src="/images/home-page-plus.png" data-toggle="tooltip" data-placement="right" data-html="true" title="Data structure" />
                                          <img class="plushover-icon plushover-icon-3" src="/images/home-page-plus.png" data-toggle="tooltip" data-placement="right" data-html="true" title="Digital Analysis" />
                                          <img class="plushover-icon plushover-icon-4" src="/images/home-page-plus.png" data-toggle="tooltip" data-placement="right" data-html="true" title="Medical Kit" />
                                          <img class="plushover-icon plushover-icon-5" src="/images/home-page-plus.png" data-toggle="tooltip" data-placement="right" data-html="true" title="Key Value" />
                                          <div class="searchhoverPopup">
                                              <input type="text" placeholder="Search" />
                                          </div>
                                        </div>
                                        <div class="rectangle-151 carousel carousel-fade carousel-fade-2 d-none d-lg-block" data-ride="carousel">
                                          <div role="listbox" class="carousel-inner">
                                              {firstBannerset && firstBannerset.map((item,index) =>
                                                <img class={`desoved-img carousel-item ${index == 0 &&  'active'}`} src={item} />
                                              )}
                                          </div>
                                          <img class="plushover-icon plushover-icon-1" src="/images/home-page-plus.png" data-toggle="tooltip" data-placement="right" data-html="true" title="Billing Software" />
                                          <img class="plushover-icon plushover-icon-2" src="/images/home-page-plus.png" data-toggle="tooltip" data-placement="right" title="Desktop App" />
                                          <img class="plushover-icon plushover-icon-3" src="/images/home-page-plus.png" data-toggle="tooltip" data-placement="right" title="Web App" />
                                          <div class="searchhoverPopup">
                                              <input type="text" placeholder="Search" />
                                          </div>
                                        </div>
                                    </div> }
                                </div>
                        </div>


      </>
    )
}

export default HomeBanner