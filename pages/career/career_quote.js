import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import { careerStaticlanguages } from 'helpers/utils/careerStaticlang';
import {useRouter} from 'next/router'


export default function CareerQuote() {

    const langContext = useContext(LanguageContext)
    const router=useRouter()

    return (
        <>
          <section class="careersQuotes text-center">
            <div class="container container-1070">
              <img src="/images/quote.png" />
              <span class="quotes">{careerStaticlanguages[langContext.lang].hirecontent}”</span>
            </div>
          </section>

          <section class="careersimg-collage-section">
            <div class="container container-1160 reset-padding">
              <div class="row reset-margin">
                <div class="col-xl-7 col-lg-12 col-md-12 col-sm-12 collage-left-col d-none d-sm-block reset-padding">
                    <div class="row first-row align-items-end">
                      <div class="col-lg-7 col-sm-7 text-right col-pic-first">
                        <img src="/images/career-photo1.png" class="uni-img uni-img-one"/>
                      </div>
                      <div class="col-lg-5 col-sm-5 text-left col-pic-second">
                        <img src="/images/carrer-photo4.png" class="uni-img uni-img-two"/>
                      </div>
                    </div>
                    <div class="row second-row align-items-end">
                      <div class="col-lg-7 col-sm-7 text-right col-pic-first">
                        <img src="/images/carrer-photo2.png" class="uni-img uni-img-three " />
                      </div>
                      <div class="col-lg-5 col-sm-5 text-left col-pic-second">
                        <img src="/images/carrer-photo3.png" class="uni-img uni-img-four" />
                      </div>
                    </div>
                    <img src="/images/carrer-photo-circle.png" class="overlap-collage-pic"/>
                </div>
                <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 collage-right-col">
                  <p>{careerStaticlanguages[langContext.lang].bottomcontent}</p>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}