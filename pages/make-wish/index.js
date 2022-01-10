import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import {useRouter} from 'next/router'
import MobileMenu from 'pages/includes/mobile-menu';
import Header from 'pages/includes/header';
import Footer from 'pages/includes/footer';
import MakewishForm from './make-wish-form';

export default function MakewishPage() {
    const langContext = useContext(LanguageContext)
    const router=useRouter()
    const pageSlug = 'make-wish';
    const [loading,setLoading]=useState(true)

    useEffect( () => {
        document.querySelector("body");
        let body_ele = document.querySelector("body");
        body_ele.className='';
        body_ele.classList.add("innerPage"); 
        body_ele.classList.add("makewishPage");    
        
        setLoading(false) 
    });
    
    if(loading){
        return(
            <div></div>
        )
    }

    return (
        <>
        <div className="make-wish-wrapper container-fluid reset-padding" style={{backgroundImage: "url('/images/make_wish_banner.jpg')",}}>
            <div className="container container-1280 reset-padding">
              <MobileMenu/>
              <header className="site-header overlay-header site-navbar site-navbar-target">
                <Header/>
              </header>
            </div>
            <section className="make-wish-content">
                <div className="container container-1280 wishpageContainer">
                    <div className="row reset-margin">
                            <MakewishForm/>
                    </div> 
                </div>         
            </section>

            <Footer value={pageSlug}/>
        </div>

        
        </>
    )

}