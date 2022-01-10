import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import { homeStaticlanguages } from 'helpers/utils/homeStaticlang';
import {useRouter} from 'next/router'
import { userService, alertService } from 'services';
import { title_case } from 'helpers/utils/commonAction';
import { Link } from 'components/Link';

export default function Team() {

    const langContext = useContext(LanguageContext)
    const router=useRouter()

    const [datas, setDatas] = useState(null);
    const [token,setToken]=useState('')
    const [loading,setLoading] = useState(true)
    const type='testimonial_front'

    useEffect(() => {      
      userService.getAll(type).then(services => {
        let newArr = [...services];
        services.map((data,index) => {
            newArr[index].expand= false;      
        });
        setDatas(newArr)
        setLoading(false)
      })
      .catch(alertService.error)      
    }, [token,langContext]);

    console.log(datas, 'team');

    return (

        <section className="Testimonials">
            <div className="container container-1160">
              <div className="row reset-margin">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 testimonialSlides">
                    <div className="teamMember-lists owl-carousel">
                      {datas && datas.map((item,index) =>
                      <>
                      <div className="item">
                        <div className="c2d-teamMember-row row">
                          <div className="c2d-teamMember--thumbnail col-lg-4 col-md-4 col-5 reset-padding">
                            <img src={JSON.parse(item.published_json).photo_person} className="teamMember--img rounded-circle img-fluid"/>
                          </div>
                          <div className="c2d-teamMember--name-designation col-lg-8 col-md-8 col-6">
                            <h5 className="memberName">{JSON.parse(item.published_json).person_name}</h5>
                            <p className="memberDesignation">{JSON.parse(item.published_json).designation}, {JSON.parse(item.published_json).company}</p>
                          </div>
                        </div>
                        <div className="memberQuotes">
                          <p>“{JSON.parse(item.published_json).message} “ </p>
                        </div>
                      </div>
                      </>)}
                      
                      
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 testimonialContents align-self-center">
                  <h3>{homeStaticlanguages[langContext.lang].hometestimonial_title}</h3>
                  <img src="/images/phone2000.png" className="icon" />
                  <img src="/images/gms.png" className="icon" />
                </div>
              </div>
            </div>
          </section>
    )
}