import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import {useRouter} from 'next/router'
import { userService, alertService } from 'services';
import { title_case } from 'helpers/utils/commonAction';
import { Spinner } from 'components/Spinner';
export default function StepTwo(props) {

    const langContext = useContext(LanguageContext)
    const router=useRouter()
    const [datas, setDatas] = useState(null);
    const [copy_datas, copy_setDatas] = useState(null);
    const [loading,setLoading] = useState(true)
    const [uniqueTags,set_uniqueTags] = useState(['All']);
    const [token,setToken]=useState('')
    const [select,set_select]=useState('All')
    const [selectSound,setSelectSound]=useState([])
    let remainSound = datas && datas.filter(cls => !selectSound.includes(cls.voice_title));
    let filteredSound = datas &&  datas.filter(cls => selectSound.includes(cls.voice_title));

console.log(`remainSound`, remainSound)
console.log(`filteredSound`, filteredSound)

    const type='bgvoice_front'

    useEffect(() => {
      if(props.show.voice.length > 0){
        setSelectSound(props.show.voice)
      }
        userService.getAll(type)
        .then(res => {
          let newArr = [...res];
          res.map((data,index) => {
      newArr[index].expand= false;
      if (uniqueTags.indexOf(data.category) === -1) {
        uniqueTags.push(data.category)
    }
    set_uniqueTags(uniqueTags)
    setLoading(false)
  })
         setDatas(newArr)
         copy_setDatas(newArr)
        })
        .catch(alertService.error)
    }, []);

    console.log(`object`, datas)

    const filterType = (type) =>{
        set_select(type)
        if(type=='All'){
          setDatas([...copy_datas])
        }else{
        setDatas([...copy_datas.filter(e=>e.category===type)]);
        }

      }

      const addItem = (name,id) =>{
        setSelectSound([...selectSound,name])
        props.onSelect([...selectSound,name],'step_two','add','voice')
      }
      
      const removeItem = (name,id) =>{
          let newarray = selectSound.filter(element => element!==name);
          setSelectSound(newarray)
          props.onSelect([...newarray],'step_one','remove','voice')
        }

    return (

        loading ?
        <Spinner/>:
          <section className="audio-step--werapper audio-step-2" style={{backgroundImage: "url('/images/audiobanner_bottom_opacity.png')"}}>
            <div className="step-title-section">
            <h2 className="step-title">Step - 2</h2>
              <p className="step-sub-title">Choose the voice that interpret your text</p>
            </div>
            <div className="container container-1120">
              <div className="track-filter-tab d-flex" id="tile-1">

                  <ul id="mytrackContainer" className="track-tabs track-inline mx-auto" role="tablist">
                    <div className="slider"></div>
                    {uniqueTags.map((item,index) => <li class={`track-inline-item cur-pointer ${select==item? 'current-tab':''}`}><a onClick={()=>filterType(item)} className="track-btn">{(item)}</a></li>)}
                  </ul>

              </div>

              <div className="audio-track-lists-section">
                <div className="row audio-track-row reset-margin">
                  <div className="col-lg-6 audio-track-list reset-padding">
                    <ul className="track-items reset-margin pr-2">
                     {remainSound && remainSound.map((item,index)=><li className="track-block all reggae show">
                        <ul className="single-track-list">
                          <li className="align-self-center"><div className="heart"></div></li>
                          <li className="align-self-center">
                            <div className="track-thumbnail-box">
                                <img src={item.photo_voice} className="track-thumbnail" />
                            </div>
                            <div className="track-thumbnail-widget-content">
                                <h3>{item.voice_title}</h3>
                                <span className="track-artist">{item.sub_text}</span>
                            </div>
                          </li>
                          <li className="align-self-center">
                            <img src="/images/music-bar.png"  className="music-bar-icon"/>
                            <span className="track-time-stamp">{item.voice_duration}</span>
                          </li>
                          <li className="align-self-center">
                            <a className="trackadd-btn" data-trackname="On the beach" onClick={()=>addItem(item.voice_title,item.id)}>Add</a>
                          </li>
                        </ul>
                      </li>)}
                     </ul>
                  </div>
                  <div className="col-lg-6 audio-track-music-player">
                    <img src="/images/track-voice-avator.png" className="img-fluid"/>
                  </div>
                </div>
              </div>
              <h5 className="bt-title d-block d-md-none">Your favourite list of voices. Push as many voices you want to.</h5>
              <h5 className="bt-title">Your final audio selection</h5>

              <div className="per-buttonIn-Voice align-self-center">
              <div className="bootstrap-tagsinput">
                      <input className="tag-trap" type="text" data-role="tagsinput" value=""/>
                      {selectSound.length > 0 && <button className="perform-btn" onClick={()=>props.showNext(props.show,'step_three')}>Step 3 <img src="images/arrowforward.svg" className="arrow-long"/></button>}
                      {filteredSound && filteredSound.map((item,index)=> <span className="tag label label-info">{item.voice_title}<span data-role="remove" onClick={()=>removeItem(item.voice_title,item.id)}></span></span>)}
                      <button className="perform-btn perform-left-btn d-none d-lg-block" onClick={()=>props.showNext(props.show,'step_one')}>Back</button>
              </div>
              </div>
               <div className="text-center d-block d-lg-none mt-3">
                  <a className="audio-step-back" onClick={()=>props.showNext(props.show,'step_one')}><img src="images/arrowback.svg" className="arrow-long"/> Go back</a>
              </div>
              </div>
              </section>
    )
}