import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import { careerStaticlanguages } from 'helpers/utils/careerStaticlang';
import {useRouter} from 'next/router'
import { userService, alertService } from 'services';
import { title_case } from 'helpers/utils/commonAction';
import { Spinner } from 'components/Spinner';
import { Link } from 'components/Link';

export default function CareerModal() {

    const langContext = useContext(LanguageContext)
    const router=useRouter()
    
    const [datas, setDatas] = useState(null);
    const [loading,setLoading] = useState(true)
    const [uniqueTags,set_uniqueTags] = useState(['All']);
    const [token,setToken]=useState('')
    const [select,set_select]=useState('All')
    const [selectJob,setSelectSound]=useState([])
    
    const type='job_front'

    useEffect(() => {
        userService.getAll(type).then(res => 
        {
          let newArr = [...res];
          res.map((data,index) => {
              newArr[index].expand= false;
              if (uniqueTags.indexOf(data.position) === -1) {
                uniqueTags.push(data.position)
            }
            set_uniqueTags(uniqueTags)
            setLoading(false)
          })
          setDatas(newArr)
          copy_setDatas(newArr)
        })
        .catch(alertService.error)
    }, [token,langContext]);
    console.log(datas)
    return (
        <>
          {datas && datas.map((item,index) =>
          <div class="modal fade" id={`myModal`+ (item.id)}>
              <div class="modal-dialog modal-xl">
                <div class="modal-content">
                
                  <div class="modal-header">
                    <h4 class="modal-title">{item.designation}</h4>
                    <div class="container-fluid modal-short-describe reset-padding">
                      <label><img src="/images/pos-location.png" /> {item.location}</label>
                      <label><img src="/images/pos-salary.png" /> {item.salary==0 ? careerStaticlanguages[langContext.lang].salary_not_disclosed : item.amount}</label>
                    </div>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  
                  <div class="modal-body">
                    <div class="position-description">
                      <p>{item.description}</p>
                    </div>
                    {/*<div class="position-description">
                      <h3>Minimum Qualification</h3>
                      <p>Bachelor's degree or equivalent practical experience.</p>
                      <p>4 years of work experience linked to Ads sales business.</p>
                      <p>2 years of experience developing sales curriculum and instructional design.</p>
                    </div>
                    <div class="position-description">
                      <h3>Prefered Qualification</h3>
                      <p>Experience Building sales curriculum for different sales roles in order to target skill gaps/opportunities.</p>
                      <p>Excellent project management and strategic planning experience.</p>
                      <p>Expertise is storyboarding and designing learning programs for a sales audience, including experience using learning 
                        programs for a sales audience, including experience using learning design software(e.g., Evolve, Articulate) </p>
                    </div>
                    <div class="position-description">
                      <h3>About the job</h3>
                      <p>Bachelor's degree or equivalent practical experience.</p>
                      <p>4 years of work experience linked to Ads sales business.</p>
                      <p>2 years of experience developing sales curriculum and instructional design.</p>
                    </div>
                    <div class="position-description">
                      <h3>Responsibilities</h3>
                      <p>Experience Building sales curriculum for different sales roles in order to target skill gaps/opportunities.</p>
                      <p>Excellent project management and strategic planning experience.</p>
                      <p>Expertise is storyboarding and designing learning programs for a sales audience, including experience using learning 
                        programs for a sales audience, including experience using learning design software(e.g., Evolve, Articulate) </p>
                    </div>*/}
                  </div>
                  
                  <div class="modal-footer">
                    <Link href="/careers_form" class="btn btn-primary btn-c2d-primary-md" >Apply Now</Link>
                  </div>
                  
                </div>
              </div>
            </div>
          )}
        </>
    )
}