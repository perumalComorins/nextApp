import MobileMenu from 'pages/includes/mobile-menu';
import Header from 'pages/includes/header';
import { useEffect,useState } from 'react';
import { useRouter } from 'next/router';
import HighlightFooter from 'pages/includes/highlighted-footer';
import { userService } from 'services';
import Footer from 'pages/includes/footer';
import { Link } from 'components/Link';
import { servicegrouplanguages } from 'helpers/utils/servicegrouplang';
import LanguageContext from 'props/context/LanguageContext';
import { useContext } from 'react';

export default function ServicegroupView () {
    
    const router = useRouter()
    const slug = (router.query.services_group_view) 
    const [loading,setLoading]=useState(true)
    const [res, setres] = useState([])       
    const [displaystate, setdisplaystate] = useState(0)  
    
    const langContext = useContext(LanguageContext)    
    const [swLang , setSwlang] = useState(langContext.lang);
    useEffect(() =>{ 
        if(swLang != langContext.lang){
            router.push(`/services`);
        }
        document.querySelector("body");
        let body_ele = document.querySelector("body");
        body_ele.className='';
        body_ele.classList.add("page-service-muted","innerPage");
          
        if(!slug){
            return;
        }                
        userService.fetchsolution_list('service_group_front/view_list',{'slug':slug})
        .then(services =>{                        
            setres(services.data)                                                                     
        })
    },[langContext])

    const Displayactivestate = (index,key) => {
        if( key === 'setdisplay' ) {
            setdisplaystate(index) 
        } 
        if( key === 'unsetdisplay' ) {
            setdisplaystate() 
        }         
    }    

    return(        
        <div class="container-fluid reset-padding page-service">
            <section class="innerpage--banner" style={{backgroundImage:"url(/images/innerpage_banner.png)"}}>
                <img src="/images/innerpage-top-opacity.png" class="innerpage-top-shadow"/>
                <div class="container container-1280 reset-padding">  
                    <MobileMenu/>
                    <header class="site-header site-navbar overlay-header site-navbar-target">                                      
                        <Header/>     
                    </header> 
                    <img src="/images/bottom_fade_service_muted.png" class="mutedfade_bottom d-block d-sm-none mb-about-shadow"></img>                                  
                </div>
            </section>
            <section class="serviceMuted--section">
                <div class="container container-970">
                    <div class="breadcrumb-part" role="navigation">
                        <ul class="breadcrumbs">
                            <li><Link href="/">{servicegrouplanguages[langContext.lang].home}</Link></li>
                            <li><Link href="/services">{servicegrouplanguages[langContext.lang].services}</Link></li>
                            {res.map((each) =>
                                <li key={each.id}>{JSON.parse(each.title)}</li>
                            )}
                        </ul>
                    </div>
                    <div class="servicemuted_intropara">
                        {res.map((each) =>
                            <p>{JSON.parse(each.service_group_desc)}</p>
                        )}
                    </div>
                    <div class="accordionNew">  
                        {res.map((each)=>each.service.map((each,index) =>
                            <div class="mb-0" key={index}>
                                <div class="card-header">
                                    <a class="card-title">{JSON.parse(each.service_name)}
                                    { displaystate != index ?
                                        <i class="fa fa-plus" onClick={()=>Displayactivestate(index,'setdisplay')}></i> :
                                        <i class="fa fa-minus" onClick={()=>Displayactivestate(index,'unsetdisplay')}></i>   
                                    }                                        
                                    </a>                                     
                                </div>  
                                <div class="card-body collapse" style={{ display : displaystate === index ? 'block' : '' }}>                             
                                    <p>{JSON.parse(each.service_description)}</p> 
                                </div>                               
                            </div>
                        ))}
                        {/* <div class="mb-0">
                            <div id="headingOne" class="card-header collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                <a class="card-title" href="#accordion">                                    
                                </a>
                            </div>
                            <div id="collapseOne" class="card-body collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <p>Public clouds are owned and operated by third-party service providers, like AWS, Azure or Google cloud.
                            service provider makes available the resources included hardware (OS, CPU, memory, storage) or software
                            (application server, database) to the public via the internet. </p> */}

                            {/* <h2>Some advantages of using Public cloud :</h2>
                            <h3>Costs for hardware :</h3>
                            <p>By using public cloud, there is no need to buy infrastructure hardwares.
                                The public cloud reduces the cost of infrastructure because it’s a pay-per-usage model
                                and the payments are estimates based on the capacity of used resources.</p>
                            <h3>Costs for maintanance :</h3>
                            <p>Public cloud services are provided by a third party. So we don't need to employ an IT specialist
                                for maintaining and securing the system.</p>
                            <h3>Scalability and flexibility :</h3>
                            <p>The public cloud infrastructures provide on-demand scalability.</p>

                            <p><i>If you are a small or mid-size company, and you are looking for great levels of efficiency and the ability
                                to scale on-demand on lower cost, public cloud is the best solution for you. We secure your services created
                                in public cloud as much as possible. To benefit of additional levels of security, we can leverage a public
                                cloud solution within a hybridized environment.</i></p> */}
                            {/* </div> */}
                            {/* <div id="headingTwo" class="card-header collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <a class="card-title" href="#accordion">
                                Community Cloud
                                </a>
                            </div>
                            <div id="collapseTwo" class="card-body collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                                    aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat
                                    craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </p>
                            </div>
                            <div id="headingThree" class="card-header collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                <a class="card-title" href="#accordion">
                                Hybrid Cloud
                                </a>
                            </div>
                            <div id="collapseThree" class="card-body collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    <p>In a hybrid cloud, an organization makes use of interconnected private and public cloud infrastructure.
                                        For the organization who has sensitive information, trust in a third party is often an issue.
                                        The hybrid cloud combine the advantages of both models private and public: scalability, security, flexibility and lower costs.
                                        Hybrid cloud services let companies to increase the control over their private data.</p>

                                    <p><i>If your organization needs to scale up their IT infrastructure rapidly, such as when leveraging public
                                        clouds to supplement the capacity available within a private cloud, or if you need more levels of security,
                                        the hybrid cloud is the best solution for you.</i></p>
                                </div>
                            </div> */}
                        {/* </div> */}
                    </div>
                    <div class="servicereturn-dir text-right">
                        <a onClick={() => router.back()} style={{cursor:'pointer'}}>{servicegrouplanguages[langContext.lang].backtoservicepage}</a>
                    </div>
                </div>
            </section>
            <HighlightFooter/>
            <Footer/>
        </div>
    )
}