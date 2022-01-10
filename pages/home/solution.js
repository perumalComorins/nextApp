import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import { homeStaticlanguages } from 'helpers/utils/homeStaticlang';
import {useRouter} from 'next/router'
import { userService, alertService } from 'services';
import { title_case } from 'helpers/utils/commonAction';


export default function HomeSolution() {

    const langContext = useContext(LanguageContext)
    const router=useRouter()

    const [datas, setDatas] = useState(null);
    const [loading,setLoading] = useState(true)
    const type='solution_front'

    const setrouterfunction = (id,slug) => {    
      router.push(`/solutions/${slug}`)
    }

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
    }, [langContext]);

    console.log(datas, 'sdfsafasdfasdfasdfasdfasdfasdf');
    
    return (
        <section className="what-we-do">
        <div className="container container-1280">
          <div className="we-do-title--area">
            <h2>{homeStaticlanguages[langContext.lang].homesolutionlistTitle}</h2>
            <p>{homeStaticlanguages[langContext.lang].homesolutionlistDescription}</p>
          </div>

          
          <div className="we-do--row-wrapper">
              {datas && datas.map((item,index) =>
              index%2 == 0 ? 
              <>  
              <div className="we-do--row row reset-margin">
                <div className="col-lg-4 col-md-4 col-sm-4 we-do--picture we-do--leftarea reset-padding carousel carousel-fade carousel-fade-1" data-ride="carousel">
                  <div role="listbox" className="carousel-inner we-do--picture-inner">
                      {JSON.parse(item.published_json).content_1.solution_slider && JSON.parse(item.published_json).content_1.solution_slider.map((list,i)=>
                        <img src={list} className={`carousel-item img-fluid ${i == 0 &&  'active'}`} />
                      )}
                  </div>
                  <div className="pic-emp-box"></div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 we-do--content we-do--rightarea we-do--space-measurement text-left">
                  <h3>{JSON.parse(item.published_json).content_1.home_title}</h3>
                  <p>{JSON.parse(item.published_json).content_1.home_desc}</p>
                  <a onClick={() => setrouterfunction(item.id, item.slug)} className="btn btn-outline-primary btn-outline-we-do">Know More</a>
                </div>
              </div></>:
              <>
              <div className="we-do--row row reset-margin">
                <div className="col-lg-8 col-md-8 col-sm-8 we-do--content we-do--leftarea we-do--space-measurement text-left">
                  <h3>{JSON.parse(item.published_json).content_1.home_title}</h3>
                  <p>{JSON.parse(item.published_json).content_1.home_desc}</p>
                  <a className="btn btn-outline-primary btn-outline-we-do">Know More</a>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 we-do--picture we-do--rightarea reset-padding carousel carousel-fade carousel-fade-1" data-ride="carousel">
                    <div role="listbox" className="carousel-inner we-do--picture-inner">
                        {JSON.parse(item.published_json).content_1.solution_slider && JSON.parse(item.published_json).content_1.solution_slider.map((list,i)=>
                          <img src={list} className={`carousel-item img-fluid ${i == 0 &&  'active'}`} />
                        )}  
                        {/* <img src="/images/we-do-img-4.png" className="carousel-item active img-fluid" />
                        <img src="/images/we-do-img-5.png" className="carousel-item img-fluid" />
                        <img src="/images/we-do-img-6.png" className="carousel-item img-fluid" /> */}
                    </div>
                    <div className="pic-emp-box"></div>
                </div>
              </div>
              </>
              
              
              )}
          </div>  

        </div>
      </section>
    )
}