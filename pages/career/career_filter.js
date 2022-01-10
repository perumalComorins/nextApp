import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import { careerStaticlanguages } from 'helpers/utils/careerStaticlang';
import {useRouter} from 'next/router'
import { userService, alertService } from 'services';
import { title_case } from 'helpers/utils/commonAction';
import { Spinner } from 'components/SpinnerDark';
import { SpinnerDark } from 'components/SpinnerDark';

export default function CareerFilter() {

    const langContext = useContext(LanguageContext)
    const router=useRouter()

    const [job_datas, set_job_datas] = useState([]);
    const [copy_job_datas, set_copy_job_datas] = useState([]);
    const [location, set_location] = useState(['All']);
    const [position, set_position] = useState(['All']);
    const [select_location , set_select_location]=useState('All')
    const [select_position , set_select_position]=useState('All')
    const [loading,setLoading] = useState(true)
    
    const type='job_front'
    let remainJobs = [];
    

    const  setFilter = (item,selected,type) =>{
      if(type=='location'){
        set_select_location(item)
        if(item=='All' && selected=='All'){
          set_copy_job_datas([...job_datas])
        }else if(item!='All' && selected!='All'){
          set_copy_job_datas([...job_datas.filter(e=>e.location == item && e.position==selected)])
        }else if(item!='All' && selected=='All'){
          set_copy_job_datas([...job_datas.filter(e=>e.location == item)])
        }else{
          set_copy_job_datas([...job_datas.filter(e=>e.position == selected)])
        }
       
      }else{
        set_select_position(item)
        if(item=='All' && selected=='All'){
          set_copy_job_datas([...job_datas])
        }else if(item!='All' && selected!='All'){
          set_copy_job_datas([...job_datas.filter(e=>e.position == item && e.location==selected)])
        }else if(item!='All' && selected=='All'){
          set_copy_job_datas([...job_datas.filter(e=>e.position == item)])
        }else{
          set_copy_job_datas([...job_datas.filter(e=>e.location == selected)])
        }
      } 
    } 
    

    
  
 


    
    

    useEffect(async() => {
      
      return await userService.getJobLists(type).then(async(res) => {
      
        setLoading(true);
        let newArr = [...res];
        let resLocationList = [];
        let resPositionList = [];

        res.map((data,index) => {
          resLocationList.push(data.location);
          resPositionList.push(data.position);
        })

          set_location(['All',...new Set(resLocationList)]);
          set_position(['All',...new Set(resPositionList)]);

          set_job_datas(newArr)
          set_copy_job_datas(newArr)
          setLoading(false)
        })
        .catch(alertService.error)
    }, [langContext]);

    
    
    //let remainJobs = copy_job_datas.filter(obj => obj.position == select_position && obj.location == select_location);
    
    
    return (
      

          <section class="careers-position--section">
            <div class="position--title text-center">
              <label>{careerStaticlanguages[langContext.lang].openposition}</label>
              <div class="btn-group c2d-btn-group ">
                <button type="button" class="btn btn-secondary c2d-btn-transparent dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false">
                {select_location=='All' ? careerStaticlanguages[langContext.lang].openlocationbutton : select_location}
                </button>
                <div class="dropdown-menu dropdown-menu-lg-right">         
                  {
                  location.map((item,index)=>{
                          return(
                              <button onClick={()=>setFilter(item,select_position,'location')} class="dropdown-item"  type="button">{item=='All' ? careerStaticlanguages[langContext.lang].openlocationbutton: item}</button>
                          )
                      })
                  }
                </div>
              </div>
            </div>
            <div class="container container-1160 reset-padding">
              <div class="position-filter-flex careers-filter-tab d-flex">
                <ul id="myBtnContainer" class="track-position list-inline mx-auto justify-content-center">
                  {position.map((item,index) => <li  onClick={()=>setFilter(item,select_location,'position')}  className={`list-inline-item cur-pointer ${select_position==item ? 'active' :  ''}`}><a  class="link-btn">{item=='All' ? careerStaticlanguages[langContext.lang].openpositionbutton: item}</a></li>)}
                </ul>
              </div>
              {loading ? <SpinnerDark/>:
              <div class="careers-list-section">
                <div id="myItems" class="row reset-margin">
              {
                  copy_job_datas && copy_job_datas.map((item,index)=>
                  <div class="card-block col-lg-4 col-md-4 col-sm-6 reset-padding show">
                    <div class="card" data-toggle="modal" data-target={`#myModal`+ (item.id)}>
                      <div class="card-body">
                        <h3>{item.designation}</h3>
                        <label><i class="fa fa-map-marker"></i> {item.location}</label>
                      </div>
                    </div>
                  </div>)  }  
                
                </div>
              </div>}
            </div>
          </section>
        
    )
}