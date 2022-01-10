import { servicegrouplanguages } from 'helpers/utils/servicegrouplang';
import LanguageContext from 'props/context/LanguageContext';
import { useContext } from 'react';

export default function ServicesgroupHeader(){

    const langContext = useContext(LanguageContext)
    
    return(
        <section class="container container-970 servicepager--Heading text-center">
            <h2>{servicegrouplanguages[langContext.lang].serviceoffered}</h2>
            <p>{servicegrouplanguages[langContext.lang].serviceoffereddesc}</p>
        </section>
    )
}