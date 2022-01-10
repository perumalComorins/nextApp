import { useContext, useEffect, useState, useRef } from 'react';
import MobileMenu from 'pages/includes/mobile-menu';
import Header from 'pages/includes/header';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import Howweworkheader from 'props/how-we-work/how_we_work_header';
import HowweWorkcontent from 'props/how-we-work/how_we_work_content';
import HowweWorkbotImg from './how_we_work_bot_img';
import HighlightFooter from 'pages/includes/highlighted-footer';
import Footer from 'pages/includes/footer';
import { useRouter } from "next/router"
import { userService, alertService } from 'services';

export default function HowweWork(){
    const [tempStatus,setTempStatus]=useState(false);
    const langContext = useContext(LanguageContext)
    const router=useRouter()

    const [loading,setLoading] = useState(true)
    const [pageInfo,setPageInfo] = useState({})
    const type='page_front'
    const pageName = "how_we_work";
    let formData = '';

    useEffect( async() => {
        document.querySelector("body");
          let body_ele = document.querySelector("body");
          body_ele.className='';
          body_ele.classList.add("page-how-we-work"); 
          body_ele.classList.add("innerPage"); 
          let datas={
            "name": pageName 
          }
          setTempStatus(true);
            return await userService.getAllStatic(type,datas).then(async(res) => {
                setPageInfo(JSON.parse(res[0].json_data))
            })  
    },[router.query,langContext]);
    
    return(
        <>
            <div class="container-fluid reset-padding">
                <section class="innerpage--banner" style={{ backgroundImage: `url(${pageInfo.banner_image})` }}>
                    <img src="/images/innerpage-top-opacity.png" class="innerpage-top-shadow"/>
                    <div class="container container-1280 reset-padding">  
                        <MobileMenu/>
                        <header class="site-header site-navbar overlay-header site-navbar-target">                                      
                            <Header/>     
                        </header>                                   
                    </div>
                </section>
                {tempStatus && <Howweworkheader value={pageInfo}/>}
                {tempStatus &&<HowweWorkcontent value={pageInfo}/>}
                {/*<HowweWorkbotImg/> */}
            </div>
            <HighlightFooter/>
            <Footer/>
        </>
    )
}