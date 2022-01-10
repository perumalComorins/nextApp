import { title_case } from 'helpers/utils/commonAction';
import { useState, useEffect, useContext }  from 'react'
import { alertService, userService } from 'services';
import LanguageContext from 'props/context/LanguageContext';
import { useRouter } from 'next/router';
import {languages} from 'helpers/utils/lang';
import { careerStaticlanguages } from 'helpers/utils/careerStaticlang';
const CareerBanner = ({type}) => {

  const langContext = useContext(LanguageContext)
  const [loading,setLoading] = useState(true)
  const router = useRouter();

    return (
      <>
       <div class="banner-content">
                <div class="row reset-margin">
                  <div class="col-lg-6 col-md-6 col-sm-12 banner-left-col">
                    <h1>{careerStaticlanguages[langContext.lang].joinus}</h1>
                    <p>{careerStaticlanguages[langContext.lang].headercontent}</p>
                  </div>
                  <div class="col-lg-6 col-md-6 col-sm-12 banner-right-col overlap-group d-none d-md-block">
                    <div class="bg-rectangle-shape-pattern d-none d-lg-block"></div>
                    <div>
                      <img class="rectangle-152" src="/images/careers-circle-pic-2.png" />
                    </div>
                    <div>
                      <img class="rectangle-151" src="/images/careers-circle-pic-1.png" />
                    </div>
                  </div>
                </div>
        </div>


      </>
    )
}

export default CareerBanner