import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import {useRouter} from 'next/router'
import { userService, alertService } from 'services';
import { title_case } from 'helpers/utils/commonAction';
import { Spinner } from 'components/Spinner';
export default function StepThree(props) {

    const langContext = useContext(LanguageContext)
    const router=useRouter()
    const [datas, setDatas] = useState(null);

    return (
          <section className="audio-step--werapper audio-step-3" style={{backgroundImage: "url('/images/audiobanner_bottom_opacity.png')"}}>
                  <div className="step-title-section text-center">
              <h2 className="step-title">Step - 3</h2>
              <p className="step-sub-title">Choose the what you want as a text</p>
            </div>
            <div className="container container-1160 reset-padding">
              <label className="step-3-personalized-text">Please write your personalized text for your audio message</label>
              <div className="permsg-sample-wrapper">
                <div className="permsg-sample-wrapper-inner">
                  <textarea value={props.show.content} className="perform-row permsg-sample-wrapper permsg-sample-wrapper-inner reset-padding" onChange={(e)=> props.onSelect(e.target.value,'step_three','add','content')} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra pulvinar aliquet eu nam mauris, libero. Etiam tristique phasellus leo tellus nam. Et quis lacus blandit et pretium a elit.">

                </textarea>
              </div>

              </div>
              {/*<label className="step-3-personalized-more">For more examples please click here</label>*/}
              <h5 className="bt-title">Phonetic Details</h5>
              <div className="per-buttonIn">
                  <textarea className="perform-row step-3-perform-row" value={props.show.phonetic} onChange={(e)=> props.onSelect(e.target.value,'step_three','add','phonetic')} placeholder="Company Name, brand name, etc. Example: Converge2Digital “Converge tou digital”">

                  </textarea>
                  {props.show.content!='' &&  props.show.phonetic!='' && <button className="perform-btn" onClick={()=>props.showNext(props.show,'step_four')}>Step 4 <img src="images/arrowforward.svg" className="arrow-long"/></button>}
                  <button className="perform-btn perform-left-btn d-none d-lg-block" onClick={()=>props.showNext(props.show,'step_two')} >Back</button>
              </div>
              <div className="text-center d-block d-lg-none mt-3">
                  <a onClick={()=>props.showNext(props.show,'step_two')} className="audio-step-back"><img src="images/arrowback.svg" className="arrow-long"/> Go back</a>
              </div>
            </div>
          </section>
    )
}