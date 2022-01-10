import MobileMenu from 'pages/includes/mobile-menu';
import Header from 'pages/includes/header';
import HighlightFooter from 'pages/includes/highlighted-footer';
import Footer from 'pages/includes/footer';
import { useEffect, useState } from 'react';
import { userService } from 'services';
import {useRouter} from 'next/router'
import { solutionlistlanguages } from 'helpers/utils/solutionlistlang';
import LanguageContext from 'props/context/LanguageContext';
import { useContext } from 'react';

export default function Solutiontype(){

    const langContext = useContext(LanguageContext)
    
    const router = useRouter()    
    const slug = (router.query.solutionview)      
    const [res, setres] = useState([])     
    const [serviceres, setserviceres] = useState([])            
    const [loading,setLoading]=useState(true)
    const [reslang, setreslang] = useState('')        
    const [swLang , setSwlang] = useState(langContext.lang);
    
    var perChunk = 4
        
        
        useEffect(()=>{ 
            
            if(swLang != langContext.lang){
                router.push(`/`);  
            }
            document.querySelector("body");
            let body_ele = document.querySelector("body");
            body_ele.className='';
            body_ele.classList.add("page-homeoffice");
            
            if(!slug){
                return;
            } 

            userService.fetchsolution_list('solution_front/view_list',{'slug':slug})
            .then(services =>{   
                                                                                         
                setres(JSON.parse(services.data[0].published_json).content_2)  
                setserviceres(services.data[0].service) 
                setreslang(services.data[0].lang)
                setLoading(false)             
            })
            
        },[router.query,langContext])
        

        var result = serviceres.reduce((resultArray, item, index) => { 
            const chunkIndex = Math.floor(index/perChunk)
          
            if(!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = [] // start a new chunk
            }
          
            resultArray[chunkIndex].push(item)
          
            return resultArray
        }, [])
        
if(loading){
    return(
        <div>

        </div>
    )
}
    return(
        <div class="container-fluid reset-padding">
            <section class="banner--with--content homeoffice--banner" style={{backgroundImage:"url('/images/homeoffice-Banner.png')"}}>
                <div class="container container-1280 inside-banner reset-padding">  
                    <MobileMenu/>
                    <header class="site-header site-navbar site-navbar-target">                                      
                        <Header/>     
                    </header>   
                    
                    <div class="banner-content smallBusiness-banner" style={{backgroundImage:`url(${res.photo_page})`}}>
                        <div class="row reset-margin">                                                        
                            <div class="col-lg-6 col-md-6 col-sm-12 banner-left-col">
                                <h1>{res.page_title}</h1>
                                <p>{res.page_desc}</p>
                                <a href="#smallbusiness" class="btn btn-primary btn-c2d-primary">{solutionlistlanguages[langContext.lang].learnmore}</a>
                            </div>                                                                                      
                        </div>
                    </div> 
                    {/*
                    <div class="banner-site-icon text-right d-none d-lg-block">
                        <img src="/images/homeoffice-banner-log.png"/>
                    </div>*/}                              
                </div>                
            </section>
            <section data-target="smallbusiness" class="homeofficepage-title-section text-center">
                <div class="container container-1170">
                    <h2>{res.page_sub_title}</h2>
                    <p>{res.page_sub_desc}</p>
                    <a href="make_wish.php" class="btn btn-primary btn-c2d-primary">{solutionlistlanguages[langContext.lang].howmayweserveyou}</a>
                </div>
            </section>            
            <section class="homeoffice-icon-section smallbusiness-icon-section d-none d-xl-block">
                <div class="container-fluid">
                {result.map((each,index)=>
                    
                    <div class={`ob-icon-row ob-icon-row-`+(index+1)} >
                        <div class="ob-icon-innerrow">                                                    
                            {each.map((list,i)=> 
                                <>
                                <div key={i} class="ob--iconbox text-center align-self-center">
                                    <img src={JSON.parse(list.photo_service_new)}/>
                                    <p>{JSON.parse(list.service_name)}</p>
                                </div>
                                
                                </>
                            )} 
                            {index==1 && 
                            <div class="ob--iconbox align-self-center">
                                    <img src="/images/small-business-4Uicon.png"/>
                            </div> }                          
                        </div>
                    </div> 
                    
                )}   
                    {/*
                    <div class="ob-icon-row ob-icon-row-1" style={{maxWidth: '994px', width: '100%'}}>
                        <div class="ob-icon-innerrow">                                                    
                            {serviceres.map((each,index)=><div key={index} class="ob--iconbox text-center align-self-center">
                                    <img src={JSON.parse(each.photo_service_new)}/>
                                    <p>{JSON.parse(each.service_name)}</p>
                                </div>
                            )}                            
                        </div>
                    </div>  
                    <div class="ob-icon-row ob-icon-row-1" style={{maxWidth: '994px', width: '100%'}}>
                        <div class="ob-icon-innerrow">                                                    
                            {serviceres.map((each,index)=><div key={index} class="ob--iconbox text-center align-self-center">
                                    <img src={JSON.parse(each.photo_service_new)}/>
                                    <p>{JSON.parse(each.service_name)}</p>
                                </div>
                            )}                            
                        </div>
                    </div>
                    </>  )}*/ } 

                    {/* <div class="ob-icon-row ob-icon-row-2" style={{maxWidth: '1252px', width: '100%'}}>
                        <div class="ob-icon-innerrow">
                            <div class="ob--iconbox text-center align-self-center">
                                <img src="/images/Security.png"/>
                                <p>Security</p>
                            </div>
                            <div class="ob--iconbox text-center align-self-center">
                                <img src="/images/Bureautique.png"/>
                                <p>Bureautique</p>
                            </div>
                            <div class="ob--iconbox text-center align-self-center">
                                <img src="/images/digitalMarketingIcon.png"/>
                                <p>Digital Marketing</p>
                            </div>
                            <div class="ob--iconbox text-center align-self-center">
                                <img src="/images/branding-logo.png"/>
                                <p>Branding</p>
                            </div>
                            <div class="ob--iconbox align-self-center">
                                <img src="/images/small-business-4Uicon.png"/>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </section>
            <section class="homeoffice-icon-section office-business-icons-lists d-block d-xl-none">
                <div class="container-fluid mobile-office-fluid">
                    <div class="ob-icon-row ob-icon-row-1" style={{maxWidth: '994px', width: '100%'}}>
                        <div class="ob-icon-innerrow reset-margin">
                            {serviceres.map((each,index)=><div key={index} class="ob--iconbox text-center align-self-center">
                                    <img src={JSON.parse(each.photo_service_new)}/>
                                    <p>{JSON.parse(each.service_name)}</p>
                                </div>
                            )}  
                            <div class="ob--iconbox text-center align-self-center made-4-u-bg">
                                <img src="/images/small-business-4Uicon.png" />
                            </div>                                                    
                        </div>
                    </div>
                </div>  
            </section>
            <section class="OB-bottom-contentarea text-center">
                <div class="container container-1160">
                    <p>{res.page_footer}</p>
                </div>
            </section>
            <HighlightFooter/>
            <Footer/>
        </div>
    )
}