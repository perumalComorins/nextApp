import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import {useRouter} from 'next/router'
import { userService, alertService } from 'services';
import { title_case } from 'helpers/utils/commonAction';
import { Spinner } from 'components/Spinner';
export default function StepFour(props) {

    const langContext = useContext(LanguageContext)
    const router = useRouter()

const onchange =(val,key)=>{
    props.onSelect(val,'step_four','add',key)
}
const submit =(item,step)=>{
    let validate=false;
    let loopContinue_one = true;
  Object.keys(item).forEach((key,value) => {
    if(item[key]=='' && loopContinue_one && key!='auto_gsm' && key!='certify_readme' && key!='pre_record' && key!='voice_message' && key!='service_provider'){
      alert("Please Enter "+title_case(key)+" value")
      validate=true;
      loopContinue_one = false;
}else{
    if(key=='auto_gsm' && props.show.auto_gsm==true && loopContinue_one){
            if(item.voice_message==''){
                alert("Please Enter "+title_case('voice_message')+" value")
                validate=true;
                loopContinue_one = false;
            }else if(item.service_provider==''){
                alert("Please Enter "+title_case('service_provider')+" value")
                validate=true;
                loopContinue_one = false;
            }
    }
}

})
if(!validate){
    alert("Ok")
}
}
console.log(`props.showprops.show`, props.show)
    return (
        <section className="audio-step--werapper audio-step-4">
        <div className="step-title-section text-center">
          <h2 className="step-title">Step - 4</h2>
          <p className="step-sub-title">Validate your request by filling in the details</p>
        </div>
        <div className="container container-1160 reset-padding">
          <form className="audioform">
            <div className="form-row audioform-double--col reset-margin">
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <label for="companyname" className="form-label">Company Name <span className="req">*</span></label>
                <input type="text" className="form-control" id="company-name" value={props.show.company_name} onChange={(e)=>onchange(e.target.value,'company_name')}/>
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <label for="customer-ref-no" className="form-label">Customer Reference Number</label>
                <input type="text" className="form-control" id="customer-ref-no" value={props.show.customer_ref_no} onChange={(e)=>onchange(e.target.value,'customer_ref_no')}/>
              </div>
            </div>
            <div className="form-row audioform-double--col reset-margin">
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <label for="first-name" className="form-label">First Name <span className="req">*</span></label>
                <input type="text" className="form-control" id="first-name" value={props.show.first_name} onChange={(e)=>onchange(e.target.value,'first_name')}/>
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <label for="last-name" className="form-label">Last Name <span className="req">*</span></label>
                <input type="text" className="form-control" id="last-name" value={props.show.last_name} onChange={(e)=>onchange(e.target.value,'last_name')}/>
              </div>
            </div>
            <div className="form-row audioform-double--col reset-margin">
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <label for="contact-number" className="form-label">Contact Number <span className="req">*</span></label>
                <input type="number" className="form-control" id="contact-number" value={props.show.contact_number} onChange={(e)=>onchange(e.target.value,'contact_number')}/>
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <label for="email-address" className="form-label">Email Address <span className="req">*</span></label>
                <input type="email" className="form-control" id="email-address" value={props.show.email} onChange={(e)=>onchange(e.target.value,'email')}/>
              </div>
            </div>
            <div className={`form-row audioform-double--col reset-margin ${!props.show.auto_gsm && "reform-group"}`}>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <label for="voice-message" className="form-label">Number to affect the Voice Message <span className="req">*</span></label>
                <input type="text" className="form-control" id="voice-message" value={props.show.voice_message} onChange={(e)=>onchange(e.target.value,'voice_message')}/>
              </div>
              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <label for="service-provider" className="form-label">Service provider <span className="req">*</span></label>
                <input type="text" className="form-control" id="service-provider" value={props.show.service_provider} onChange={(e)=>onchange(e.target.value,'service_provider')}/>
              </div>
            </div>
            <p className="certifiedmenot"><input name="certified_rememberme" type="checkbox" id="certified_rememberme" onChange={(e)=>onchange(e.target.checked,'certify_readme')} defaultChecked={props.show.certify_readme ? true :false} value={false}/>
              <label for="certified_rememberme" className="certify_readme">
                By checking this box, I certify that the written texts are the final version, any error related to the phonetics
                requiring an additional recording that has not been specified in the information boxes will be invoiced to you.
              </label>
            </p>
            <div className="col-12 text-center validate-button-wrapper">
                <button type="button" className="btn btn-primary btn-audio-step-validate"  onClick={()=>submit(props.show,'step_four')}>Finish <i className="fa fa-long-arrow-right"></i></button>
            </div>
          </form>
          <div className="text-center d-block d-lg-none mt-4">
              <a href="javascript:void(0)" onClick={()=>submit(props.show,'step_four')}  className="audio-step-back"><img src="images/arrowback.svg" className="arrow-long"/> Go back</a>
          </div>
        </div>
      </section>
    )
}