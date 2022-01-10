import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import {useRouter} from 'next/router'
import MobileMenu from 'pages/includes/mobile-menu';
import Header from 'pages/includes/header';
import HighlightFooter from 'pages/includes/highlighted-footer';
import Footer from 'pages/includes/footer';

import StepOne from './step_one';
import StepTwo from './step_two';
import StepThree from 'props/sound/step_three';
import StepFour from 'props/sound/step_four';

export default function SoundPage() {
  
  const [tempStatus,setTempStatus]=useState(false); 
  const [list,setList]=useState({
        music:'',
        voice:'',
        content:'',
        phonetic:'',
        company_name:'',
        customer_ref_no:'',
        first_name:'',
        last_name:'',
        contact_number:'',
        email:'',
        voice_message:'',
        service_provider:'',
        certify_readme:false,
        pre_record:true,
        auto_gsm:false
  })
    const langContext = useContext(LanguageContext)
    const router=useRouter()
    useEffect( () => {
      document.querySelector("body");
      let body_ele = document.querySelector("body");
      body_ele.className='';
      body_ele.classList.add("page-audio"); 
      body_ele.classList.add("innerPage"); 
      setTempStatus(true);
                   
    });
    
    const [showStep,setShowSteps]=useState({
      step_one:true,
      step_two:false,
      step_three:false,
      step_four:false
    })
    const setSelectChange =(item,step,action,type)=>{
      

      if(action=='add'){
      //   const newState={};
      // Object.keys(showStep).forEach(item => {
      //     newState[item] = item==step;
      // })
      // setShowSteps(newState)
      if(type=='pre_record'){
      setList({
        ...list,
        [type]:item,
        'auto_gsm':!item,
        'service_provider':'',
        'voice_message':''
      })
    }else if(type=='auto_gsm'){
      setList({
        ...list,
        [type]:item,
        'pre_record':!item
      })
    }else{
      setList({
        ...list,
        [type]:item,
      })
    }
      }else{
        setList({
          ...list,
          [type]:item
        })
      }


    }

    const showNext =(show,step)=>{
      //console.log(`New step`,show)
      const newState={};
      Object.keys(showStep).forEach(item => {
          newState[item] = item==step;
      })
      setShowSteps(newState)

    }
    return (

                
    <div className="container-fluid reset-padding">
          <section className="banner--with--content audiopage--banner" style={{backgroundImage: "url('/images/audio_bg.png')"}}>
              <div className="container container-1280">
              <MobileMenu/>
                <header className="site-header site-navbar site-navbar-target overlay-header">
               <Header/>
                </header>

                <div className="banner-content">
                  <div className="row reset-margin">
                    <div className="col-lg-8 col-md-6 col-sm-12 audio-overflow--content">
                      <h1>Sound Engineering{list.music}</h1>
                      <p>Create your IVR, Pre-hanger, Hold, Answering Messages with us</p>
                      <div className="bs-example">
                           {showStep.step_four && <div className="btn-group btn-group-toggle">
                              <label className={`btn btn-primary btn-c2d-audio-primary ${list.pre_record ? 'active':''}`}>
                                  <input type="radio" name="options" value="Pre Recorded Music" autocomplete="off" onChange={(e)=>setSelectChange(e.target.checked,'','add','pre_record')} defaultChecked={list.pre_record ? true :false} value={list.pre_record}/> <span>Pre Recorded Music</span>
                              </label>
                              <label className={`btn btn-primary btn-c2d-audio-primary ${list.auto_gsm ? 'active':''}`}>
                                  <input type="radio" name="options" value="Auto GSM Messaging" autocomplete="off" onChange={(e)=>setSelectChange(e.target.checked,'','add','auto_gsm')} defaultChecked={list.auto_gsm ? true :false} value={list.auto_gsm} /> <span>AUTO GSM MESSAGING</span>
                              </label>
                          </div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img src="/images/audiobanner_bottom_opacity.png" class="audiobanner-bottom-shadow"/>
          </section>
          {showStep.step_one && <StepOne onSelect={(item,step,action,type)=>setSelectChange(item,step,action,type)} showNext={(show,step)=>showNext(show,step)} show={list}/>}
          {showStep.step_two &&<StepTwo onSelect={(item,step,action,type)=>setSelectChange(item,step,action,type)} showNext={(show,step)=>showNext(show,step)} show={list}/>}
          {showStep.step_three && tempStatus && <StepThree onSelect={(item,step,action,type)=>setSelectChange(item,step,action,type)} showNext={(show,step)=>showNext(show,step)} show={list}/>}
          {showStep.step_four && <StepFour onSelect={(item,step,action,type)=>setSelectChange(item,step,action,type)} showNext={(show,step)=>showNext(show,step)} show={list}/>}
          <HighlightFooter/>
          <Footer/>
    </div>
      
    )
}