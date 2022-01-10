import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import {useRouter} from 'next/router'
import MobileMenu from 'pages/includes/mobile-menu';
import Header from 'pages/includes/header';
import CareerBanner from './career_banner';
import CareerTitle from './career_title';
import CareerFilter from './career_filter';
import CareerQuote from './career_quote';
import CareerModal from './career_modal';

import HighlightFooter from 'pages/includes/highlighted-footer';
import Footer from 'pages/includes/footer';

export default function CareerPage() {

    const langContext = useContext(LanguageContext)
    const router=useRouter()

    useEffect( () => {
        document.querySelector("body");
        let body_ele = document.querySelector("body");
        body_ele.className='';
        body_ele.classList.add("page-career");              
    });
    
    return (
      
        <div class="container-fluid reset-padding">
          <section class="banner--with--content careers--banner" style={{backgroundImage: "url('/images/homepage_banner.jpg')",}}>  
            <div class="container container-1280 reset-padding">
              <MobileMenu/>
              <header class="site-header site-navbar site-navbar-target">
                <Header/>
              </header>
              {/* Banner Start */}
              <CareerBanner/>
              {/* Banner End */}
            </div>
          </section>
          <CareerTitle/>
          <CareerFilter/>
          <CareerQuote/>
          <HighlightFooter/>
          <Footer/>
          
          <div class="careersposition-popup">
            <CareerModal/>
          </div>
        </div>
           
      
    )
}