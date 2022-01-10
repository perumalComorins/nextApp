import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import {useRouter} from 'next/router'
import { userService, alertService } from 'services';
import { title_case } from 'helpers/utils/commonAction';
import { Spinner } from 'components/Spinner';
export default function StepOne(props) {

    const langContext = useContext(LanguageContext)
    const router=useRouter()
    const [datas, setDatas] = useState(null);
    const [copy_datas, copy_setDatas] = useState(null);
    const [loading,setLoading] = useState(true)
    const [uniqueTags,set_uniqueTags] = useState(['All']);
    const [token,setToken]=useState('')
    const [select,set_select]=useState('All')
    const [selectSound,setSelectSound]=useState([])
    let remainSound = datas && datas.filter(cls => !selectSound.includes(cls.music_title));
    let filteredSound = datas &&  datas.filter(cls => selectSound.includes(cls.music_title));



    const type='bgmusic_front'

    useEffect(() => {
      if(props.show.music.length > 0){
        setSelectSound(props.show.music)
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
        props.onSelect([...selectSound,name],'step_one','add','music')
      }
      const removeItem = (name,id) =>{
          let newarray = selectSound.filter(element => element!==name);
          setSelectSound(newarray)
          props.onSelect([...newarray],'step_one','remove','music')
      }
        
    return (

        loading ?
        <Spinner/>:
          <section className="audio-step--werapper audio-step-1" style={{backgroundImage: "url('/images/audiobanner_bottom_opacity.png')"}}>
            <div className="step-title-section">
              <h2 className="step-title">Step - 1</h2>
              <p className="step-sub-title">Listen and select your 100% Copyright free SACEM & SPCA Musical Background</p>
            </div>
            <div className="container container-1120">
              <div className="track-filter-tab d-flex" id="tile-1">

                  <ul id="mytrackContainer" className="track-tabs track-inline mx-auto" role="tablist">
                    <div className="slider"></div>
                    {uniqueTags.map((item,index) => <li className={`track-inline-item cur-pointer ${select==item? 'current-tab':''}`}><a onClick={()=>filterType(item)} className="track-btn">{(item)}</a></li>)}
                  </ul>

              </div>

              <div className="audio-track-lists-section">
                <div className="row audio-track-row reset-margin">
                  <div className="col-xl-6 col-lg-7 audio-track-list reset-padding">
                    <ul className="track-items reset-margin pr-2">
                     {remainSound && remainSound.map((item,index)=><li className="track-block all reggae show">
                        <ul className="single-track-list">
                          <li className="align-self-center"><div className="heart"></div></li>
                          <li className="align-items-center" >
                            <div className="track-thumbnail-box">
                                <img src={item.photo_album} className="track-thumbnail" />
                            </div>
                            <div className="track-thumbnail-widget-content">
                                <h3>{item.music_title}</h3>
                                <span className="track-artist">{item.artist_name}</span>
                            </div>
                          </li>
                          <li className="align-self-center">
                            <img src="/images/music-bar.png"  className="music-bar-icon"/>
                            <span className="track-time-stamp">{item.music_duration}</span>
                          </li>
                          <li className="align-self-center">
                            <a className="trackadd-btn" data-trackname="On the beach" onClick={()=>addItem(item.music_title,item.id)}>Add</a>
                          </li>
                        </ul>
                      </li>)}
                     </ul>
                  </div>
                  <div className="col-xl-6 col-lg-5 audio-track-music-player">
                    <img src="/images/trackthumbnai-thumbnail.png" className="img-fluid"/>
                  </div>
                </div>
              </div>
              <h5 className="bt-title text-left">Your final audio selection <i className="fa fa-exclamation-circle" aria-hidden="true" data-toggle="tooltip" data-placement="right" data-html="true" title="We recommend you to use a maximum of two music tracks for your voice message" style={{color:'#ffff'}}></i></h5>
              <div className="per-buttonIn">
              <div className="bootstrap-tagsinput"><input type="text" placeholder=""/>
              {filteredSound && filteredSound.map((item,index)=> <span className="tag label label-info">{item.music_title}<span data-role="remove" onClick={()=>removeItem(item.music_title,item.id)}></span></span>)}
              </div>
                  {selectSound.length > 0 && <button className="perform-btn" onClick={()=>props.showNext(props.show,'step_two')}>Step 2 <img src="images/arrowforward.svg" className="arrow-long"/></button>}
              </div>
              </div>
              </section>
    )
}