import { useContext, useEffect, useState } from 'react';
import { aboutStaticlanguages } from 'helpers/utils/aboutStaticlang';
import {useRouter} from 'next/router'
import { userService, alertService } from 'services';
import MobileMenu from 'pages/includes/mobile-menu';
import Header from 'pages/includes/header';
import HighlightFooter from 'pages/includes/highlighted-footer';
import Footer from 'pages/includes/footer';

import LanguageContext from 'props/context/LanguageContext';

export default function AboutPage() {

    const langContext = useContext(LanguageContext)
    const router=useRouter()
    const pageSlug = 'about';

    const [loading,setLoading] = useState(true)
    
    const type='page_front'
    const pageName = "about_us";
    const [Res, setRes] = useState({})
    const [pageInfo,setPageInfo] = useState({})
    const [sectionOne,setSectionOne] = useState({})
    const [sectionOneSubOne,setSectionOneSubOne] = useState({})
    const [sectionOneList, setsectionOneList] = useState([])

    useEffect( async() => {
      document.querySelector("body");
      let body_ele = document.querySelector("body");
      body_ele.className='';
      body_ele.classList.add("page-about"); 
      body_ele.classList.add("innerPage"); 

      
      let datas={
        "name": pageName 
      }
      
      userService.getAllStatic(type,datas).then(async(res) => {
          setPageInfo(JSON.parse(res[0].json_data))
          setSectionOne(JSON.parse(res[0].json_data).section_one); 
          setSectionOneSubOne(JSON.parse(res[0].json_data).section_one.sub_1);
          setsectionOneList(JSON.parse(res[0].json_data).section_one.sub_1.list)   

      })  
            
    }, [router.query,langContext]);
    
    
    return (
        
        <div class="container-fluid aboutpage-top-fluid reset-padding">
              <section class="innerpage--banner" style={{ backgroundImage: `url(${pageInfo.banner_image})` }}>
                      <MobileMenu/>
                      <header class="site-header site-navbar overlay-header site-navbar-target">
                        <Header value={pageSlug}/>
                      </header>
                      <img src="/images/about-banner-shadow.png" class="d-block d-sm-none mb-about-shadow"></img>
                </section>
                <section class="aboutpageIntro-content">
          <div class="container container-1070">
            <h1>{pageInfo.title}</h1>
            <p>{pageInfo.title_desc}</p>
          </div>
        </section>

        <section class="aboutpageAlter-content">
          <div class="container container-1070 reset-padding">
            <div class="row alter-row">
              <div class="col-sm-4 col-md-4 col-lg-4 alter-left-col alterPicture reset-padding">
                <img src={pageInfo.section_one?pageInfo.section_one.image:null} class="img-fluid"/>
              </div>
              <div class="col-sm-8 col-md-8 col-lg-8 alter-right-col alterContent">
                <h2>{pageInfo.section_one ? pageInfo.section_one.title:null}</h2>
                <p>{pageInfo.section_one ? pageInfo.section_one.sub_1.title:null}</p>
                <ul>
                  {pageInfo.section_one && pageInfo.section_one.sub_1.list.map((each,index) =>
                      <li>{each}</li>
                  )}
                </ul>
                <p>{pageInfo.section_one ? pageInfo.section_one.sub_2.title:null}</p>
                <ul>
                  {pageInfo.section_one && pageInfo.section_one.sub_2.list.map((each,index) =>
                      <li>{each}</li>
                  )}
                </ul>
                
              </div>
            </div>
            <div class="row alter-row">
              <div class="col-sm-8 col-md-8 col-lg-8 alter-left-col alterContent">
                <h2>{pageInfo.section_two ? pageInfo.section_two.title:null} </h2>
                <p>{pageInfo.section_two ? pageInfo.section_two.sub.title:null}</p>
                <ul>
                  {pageInfo.section_two && pageInfo.section_two.sub.list.map((each,index) =>
                      <li>{each}</li>
                  )}
                </ul>
              </div>
              <div class="col-sm-4 col-md-4 col-lg-4 alter-right-col alterPicture reset-padding">
                <img src={pageInfo.section_two?pageInfo.section_two.image:null} class="img-fluid"/>
              </div>
            </div>
          </div>
        </section>

        <section class="aboutpagePlaceholder-section">
          <div class="container container-1280">
            <img src={pageInfo.middle_banner_image} class="img-fluid d-none d-md-block" style={{borderRadius:`40px`}}/>
            <img src={pageInfo.middle_banner_mobile_image} class="img-fluid d-block d-md-none" />
          </div>
        </section>

        <section class="ourapproach-section">
          <div class="container container-1070 reset-padding">
            <div class="row approach-row-1">
              <div class="col-lg-6 col-md-12 approach-content reset-padding">
                <h3>{pageInfo.footer_title}</h3>
                <h3>{pageInfo.footer_section_one? pageInfo.footer_section_one.title:null}</h3>
                <p>{pageInfo.footer_section_one? pageInfo.footer_section_one.desc:null}</p>
              </div>
              <div class="col-lg-6 col-md-12 approach-icon align-self-center reset-padding d-none d-sm-block">
                <div class="row reset-margin align-items-end">
                  {pageInfo.footer_section_one ? pageInfo.footer_section_one.images.map((item,index) =>
                    index == 0  ?
                    <div class="col-lg-6 col-md-3 col-sm-12 icon-box-layout text-center">
                      <img src={item.image} />
                      <p>{item.img_title}</p>
                    </div>:
                    index == 1  ?
                    <div class="col-lg-6 col-md-3 col-sm-12 icon-box-layout text-center">
                      <img src={item.image} />
                      <p>{item.img_title}</p>
                    </div>:
                    index == 2  ?
                    <div class="col-lg-6 col-md-3 col-sm-12 d-block d-sm-block d-md-block d-lg-none d-xl-none icon-box-layout text-center">
                      <img src={item.image} />
                      <p>{item.img_title}</p>
                    </div>:
                    index == 3  ?
                    <div class="col-lg-6 col-md-3 col-sm-12 d-block d-sm-block d-md-block d-lg-none d-xl-none icon-box-layout text-center">
                      <img src={item.image} />
                      <p>{item.img_title}</p>
                    </div>: ''
                    ) : null
                  }   
                </div>
              </div>
              <div class="col-lg-6 col-md-12 approach-icon align-self-center reset-padding d-block d-sm-none">
                <div id="demo" class="carousel slide" data-ride="carousel">
                  <div class="row reset-margin align-items-end carousel-inner approach-scroll">
                  {pageInfo.footer_section_one ? pageInfo.footer_section_one.images.map((item,index) =>
                    <div className={`carousel-item icon-box-layout text-center ${index==0 && 'active'}`}>
                      <img src={item.image} />
                      <p>{item.img_title}</p>
                    </div>
                    ) : null
                  } 
                  </div>

                  <ul class="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" class="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                    <li data-target="#demo" data-slide-to="2"></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row approach-row-2 d-none d-sm-none d-md-none d-lg-block d-xl-block">
                <div class="col-lg-6 col-md-6 approach-icon align-self-center reset-padding">
                  <div class="row reset-margin align-items-end">
                    {pageInfo.footer_section_one ? pageInfo.footer_section_one.images.map((item,index) =>
                      index == 2  ?
                      <div class="col-lg-6 icon-box-layout text-center">
                        <img src={item.image} />
                        <p>{item.img_title}</p>
                      </div>:
                      index == 3  ?
                      <div class="col-lg-6 icon-box-layout text-center">
                        <img src={item.image} />
                        <p>{item.img_title}</p>
                      </div> : ''
                      ) : null
                    }  
                  </div>
                </div>
            </div>
          </div>
        </section>

        <section class="aboutpageAlter-content ourapproach-bottom-section">
          <div class="container container-1120 reset-padding">
            <div class="row alter-row overlap-alter-row">
              {pageInfo.footer_section_two ?
              <>
                <div className="col-sm-4 col-md-4 col-lg-4 alter-left-col alterPicture overlap-alterPicture reset-padding">
                  <img src={pageInfo.footer_section_two.image} className="img-fluid fixer-picture" />
                  <img src={pageInfo.footer_section_two.circle_image} className="img-fluid movable-picture" />
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8 alter-right-col alterContent">
                  <h3>{pageInfo.footer_section_two.title}</h3>
                  <p>{pageInfo.footer_section_two.desc}</p>
                </div>
              </>: null}
            </div>

            <div className="row alter-row overlap-alter-row">
            {pageInfo.footer_section_three ?
              <>
              <div className="col-lg-8 col-md-8 alter-left-col alterContent">
                <h3>{pageInfo.footer_section_three.title}</h3>
                <p>{pageInfo.footer_section_three.desc}</p>
              </div>
              <div className="col-lg-4 col-md-4 alter-right-col alterPicture reset-padding">
                <img src={pageInfo.footer_section_three.image} className="img-fluid"/>
              </div>
              </>: null 
            }
            </div>
          </div>
        </section>
        <HighlightFooter/>
        <Footer/>
        </div>
      
    )
}