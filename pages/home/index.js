import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import {useRouter} from 'next/router'
import MobileMenu from 'pages/includes/mobile-menu';
import Header from 'pages/includes/header';
import HomeBanner from './home_banner';
import HomeSolution from './solution'
import HomeService from './home_service';
import Client from './client';
import Team from './team';
import HighlightFooter from 'pages/includes/highlighted-footer';
import Footer from 'pages/includes/footer';

export default function HomePage() {

    const langContext = useContext(LanguageContext)
    const router=useRouter()
    const pageSlug = 'home'; 
    useEffect( () => {
        document.querySelector("body");
        let body_ele = document.querySelector("body");
        body_ele.className='';
        body_ele.classList.add("page-home");  
        
        if(localStorage.getItem('lang')=='' || localStorage.getItem('lang')==undefined){
          localStorage.setItem('lang', 'en');
        }else{
          localStorage.getItem('lang');
        }

        
    });
    
    return (
        
        <div class="container-fluid reset-padding">
              <section class="banner--with--content homepage--banner" style={{backgroundImage: "url('/images/homepage_banner.jpg')",}}>
                  <div class="container container-1280 reset-padding">
                        <MobileMenu/>
                      <header class="site-header site-navbar site-navbar-target">
                        <Header/>
                      </header>
                       {/* Banner Start */}
                     <HomeBanner/>
                       {/* Banner End */}
                    </div>
                </section>
                <HomeSolution/>
                <HomeService/>
                <Client/>
                <Team/>
                <HighlightFooter/>
                <Footer value={pageSlug}/>
            </div>
      
    )
}