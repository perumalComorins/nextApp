import { useRouter } from "next/router"
import { servicegrouplanguages } from 'helpers/utils/servicegrouplang';
import LanguageContext from 'props/context/LanguageContext';
import { useContext } from 'react';

export default function ServicesgroupCard(props){

    const router = useRouter()
    const langContext = useContext(LanguageContext)

    const setrouterfunction = (id,slug) => {        
        router.push(`/services_group/${slug}`)
    }

    const res = props.value           

    return(  
        <>    
            {res && res.map((each,index) =>
                <div class="service-block col-lg-4 col-md-12 col-sm-12 reset-padding" key={each.id}>
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
        </>
    )
}