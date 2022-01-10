import { useEffect } from 'react';
import MobileMenu from 'pages/includes/mobile-menu';
import Header from 'pages/includes/header';
import CarrersfillForm from './careers_fill_form';
import Footer from 'pages/includes/footer';
import {languages} from 'helpers/utils/lang';

export default function servicesGroup(){

    useEffect( () => {
        document.querySelector("body");
          let body_ele = document.querySelector("body");
          body_ele.className='';
          body_ele.classList.add("page-career","innerPage") ;              
    });    
    

    return(
        <>
            <div class="container-fluid reset-padding page-service">
                <section class="innerpage--banner" style={{backgroundImage:"url(/images/innerpage_Careers_Banner.png)"}}>
                    <img src="/images/innerpage-top-opacity.png" class="innerpage-top-shadow"/>
                    <div class="container container-1280 reset-padding">  
                        <MobileMenu/>
                        <header class="site-header overlay-header site-navbar site-navbar-target">                                      
                            <Header/>     
                        </header>                                       
                    </div>
                </section>
                <CarrersfillForm/>                
                <Footer/>                
            </div>
        </>
    )
}