import { useRouter } from "next/router"
import { servicegrouplanguages } from 'helpers/utils/servicegrouplang';
import LanguageContext from 'props/context/LanguageContext';
import { useContext } from 'react';

export default function Carouselitems (props) {

    const router = useRouter()
    const langContext = useContext(LanguageContext)

    const setrouterfunction = (id,slug) => {        
        router.push(`/services_group/${slug}`)
    }

    const res = props.value                     

    return(
        <>            
            <div id="serviceScroll" class="container container-1160 carousel slide d-block d-sm-none" data-ride="carousel" style={{overflow: 'hidden'}}>
                <div class="row serviceScroll-inner justify-content-center reset-margin" style={{height:'715px'}}>
                    {res && res.map((each,index)=>
                        <div className={"service-block" + " col-sm-4" + " carousel-item" + " reset-padding" + (index === 0 ? ' active' : '')} key={each.id}>
                            <div class="service card">
                                <div class="service-title d-table text-center" style={{minHeight:'174px'}}>
                                    <div class="service-title-innerwrapper d-table-cell align-middle">
                                        <h2>{JSON.parse(each.title)}</h2>
                                        <label>{JSON.parse(each.published_json).sub_title}</label>
                                    </div>
                                </div>
                                <div class="service-body">
                                    <ul class="service-body--lists" style={{minHeight:'220px'}}>  
                                        {each.service.map((arreach,index)=> 
                                            <li key={index}><i class="fa fa-check-circle" aria-hidden="true"></i>{JSON.parse(arreach.service_name)}</li> 
                                        )}                                                                                                                                                                                                                                             
                                    </ul>
                                </div>
                                <div class="service-footer text-center">
                                    <a class="btn btn-primary btn-c2d-primary-sm" onClick={() => setrouterfunction(each.id,each.slug)}>{JSON.parse(each.published_json).group_lablename}</a>
                                </div>                
                            </div>                            
                        </div>                        
                    )}                                                                                                                       
                </div>            
                <ul class="carousel-indicators">
                    {res.map((each,index)=>
                        <li data-target="#serviceScroll" data-slide-to="0" className={(index === 0 ? 'active' : '')}  key={each.id}></li> 
                    )}
                </ul>
                <a class="carousel-control-prev" href="#serviceScroll" data-slide="prev">
                    <span class="control-spaces"><img src="images/prev-service-box.png"/></span>
                </a>
                <a class="carousel-control-next" href="#serviceScroll" data-slide="next">
                    <span class="control-spaces"><img src="images/next-service-box.png"/></span>
                </a>
            </div>                
        </>
    )
}