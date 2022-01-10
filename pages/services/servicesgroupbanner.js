import { servicegrouplanguages } from 'helpers/utils/servicegrouplang';
import LanguageContext from 'props/context/LanguageContext';
import { useContext } from 'react';

export default function ServicesgroupBanner(){

    const langContext = useContext(LanguageContext)

    return(
        <div class="banner-content">
            <div class="row reset-margin">
                <div class="col-lg-6 col-md-6 col-sm-12 banner-left-col">
                    <h1>{servicegrouplanguages[langContext.lang].services}</h1>
                    <p>{servicegrouplanguages[langContext.lang].headerdesc}</p>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 banner-right-col overlap-group">
                    <div class="bg-rectangle-shape-pattern">                
                    </div>
                    <div>
                        <img class="rectangle-152" src="/images/service-01.png"/>
                    </div>
                    <div>
                        <img class="rectangle-151" src="/images/service-02.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}