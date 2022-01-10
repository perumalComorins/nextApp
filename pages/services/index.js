import MobileMenu from 'pages/includes/mobile-menu';
import Header from 'pages/includes/header';
import ServicesgroupBanner from './servicesgroupbanner';
import ServicesgroupHeader from './servicesgroupheader'
import ServicesgroupCard from './servicesgroupcard';
import Carouselitems from 'props/services/carousel_items';
import HighlightFooter from 'pages/includes/highlighted-footer';
import Footer from 'pages/includes/footer';
import { useEffect,useState,useContext } from 'react';
import { userService } from 'services';

import LanguageContext from 'props/context/LanguageContext';

export default function Servicesgroup(){
     
    const [servicegroupres, setservicegroupres] = useState([])     
    const [loading,setLoading]=useState(true)
    const langContext = useContext(LanguageContext)

    const pageSlug = 'services';     
    
    useEffect(()=>{      
        
        document.querySelector("body");
        let body_ele = document.querySelector("body");
        body_ele.className='';
        body_ele.classList.add("page-service");  
          
        userService.fetchService_groups('service_group_front/show_all_list')
        .then(services =>{                       
            setservicegroupres(services.data)
            setLoading(false) 
        })  
    },[langContext])

    if(loading){
        return(
            <div></div>
        )
    }
    console.log(`servicegroupres`,servicegroupres)
    return(
        
        <div class="container-fluid reset-padding page-service">
            <section class="banner--with--content service--banner" style={{backgroundImage:"url(/images/homepage_banner.jpg)"}}>
                <div class="container container-1280 reset-padding">  
                    <MobileMenu/>
                    <header class="site-header site-navbar site-navbar-target">                                      
                        <Header/>     
                    </header>           
                        <ServicesgroupBanner/>
                </div>
            </section>
            <ServicesgroupHeader/>
            <section class="service-lists-box" style={{marginBottom:'0px'}}>
                <div class="container container-1160 d-none d-sm-block">
                    <div class="row justify-content-center reset-margin">                        
                            <ServicesgroupCard value={servicegroupres}/>                                                                        
                    </div>
                </div>                 
                <Carouselitems value={servicegroupres}/>                                                                              
            </section>
            <HighlightFooter/>
            <Footer value={pageSlug}/>
        </div>
    )
}