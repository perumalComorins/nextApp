import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import { homeStaticlanguages } from 'helpers/utils/homeStaticlang';
import {useRouter} from 'next/router'
import { Link } from 'components/Link';

export default function HomeService() {

    const langContext = useContext(LanguageContext)
    const router=useRouter()

    return (
        <>
        <section class="homepageService text-center">
        <div class="container container-1070">
          <h2>{homeStaticlanguages[langContext.lang].homeserviceTitle}</h2>
          <p>{homeStaticlanguages[langContext.lang].homeserviceDescription}</p>
          <Link href="/services" class="btn btn-primary btn-c2d-primary"><span>{homeStaticlanguages[langContext.lang].homeserviceLinkText}</span></Link>
        </div>
      </section>
      <section class="how-do-we-do">
            <div class="row reset-margin">
              <h2 class="d-block d-sm-none mb-howdo-section-title">{homeStaticlanguages[langContext.lang].home_howdowedo_main_Title}</h2>
              <div class="col-xl-7 col-md-12 col-sm-12 how-do-bg-img">
                <div class="how-do-bg-containerwrapper d-none d-sm-block">
                  <h2>{homeStaticlanguages[langContext.lang].homehowdowedoBannerTitle}</h2>
                  <p>{homeStaticlanguages[langContext.lang].homehowdowedoBannerDescription} </p>
                  <Link href="/how_we_work" class="btn btn-primary btn-c2d-primary">{homeStaticlanguages[langContext.lang].homehowdowedoBannerLinkText}</Link>
                </div>
              </div>
              <div class="col-xl-5 col-md-12 col-sm-12 how-do-content-section">
                  <div class="how-do--icon-box d-none d-sm-block">
                    <img src="/images/home_service_do_we_do.png" class="compound-icon" />
                  </div>
                  <div class="how-do--contentarea">
                    <div class="row content-area--row align-items-end reset-margin">
                      <div class="col-lg-7 col-md-6 col-sm-12 how-do-content-description reset-padding">
                          <h4 class="main--heading">
                            <span class="d-none d-sm-block">{homeStaticlanguages[langContext.lang].home_howdowedo_main_Title}</span>
                            <span class="d-block d-sm-none">{homeStaticlanguages[langContext.lang].home_howdowedo_subsection1_Title}</span>
                          </h4>
                          <p class="main--para d-block d-sm-none">We are a dynamic brand evolving to provide services to make the digital world a better place to encounter with.</p>
                          <img src="/images/securebydesign.png" class="d-block d-sm-none main--compound-icon" />
                          <div class="how-do--short-describe">
                            <h6>{homeStaticlanguages[langContext.lang].home_howdowedo_subsection1_Title}</h6>
                            <p>{homeStaticlanguages[langContext.lang].home_howdowedo_subsection1_Description}</p>
                          </div>
                          <div class="how-do--short-describe">
                            <h6>{homeStaticlanguages[langContext.lang].home_howdowedo_subsection2_Title}</h6>
                            <p>{homeStaticlanguages[langContext.lang].home_howdowedo_subsection2_Description}</p>
                          </div>
                          <div class="how-do--short-describe">
                            <h6>{homeStaticlanguages[langContext.lang].home_howdowedo_subsection3_Title}</h6>
                            <p>{homeStaticlanguages[langContext.lang].home_howdowedo_subsection3_Description}</p>
                          </div>
                          <div class="how-do--short-describe">
                            <h6>{homeStaticlanguages[langContext.lang].home_howdowedo_subsection4_Title}</h6>
                            <p>{homeStaticlanguages[langContext.lang].home_howdowedo_subsection4_Description}</p>
                          </div>
                          <Link href="/how_we_work" class="btn btn-primary btn-c2d-primary mt-3 d-block d-sm-none">{homeStaticlanguages[langContext.lang].homehowdowedoBannerLinkText}</Link>
                      </div>
                      <div class="col-lg-5 col-md-6 col-sm-12 how-do-content-random-images reset-padding">
                         <img src="/images/how-we-do-random-technologies.png" />
                      </div>
                    </div>

                  </div>
              </div>
            </div>
          </section>
        </>
    )
}