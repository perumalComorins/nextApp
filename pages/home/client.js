import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import {useRouter} from 'next/router'
import { userService, alertService } from 'services';
import { title_case } from 'helpers/utils/commonAction';

export default function Client() {

    const langContext = useContext(LanguageContext)
    const router=useRouter()

    const [datas, setDatas] = useState(null);
    const [token,setToken]=useState('')
    const [loading,setLoading] = useState(true)
    const type='client_front'

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

    console.log(datas, 'clients');

    return (

       <section class="clients-list">
            <div class="container container-1160">
                <div class="client-slider owl-carousel owl-theme">
                  {datas && datas.map((item,index) =>
                  <div class="item">
                    <img src={item.client_logo} alt="" />
                  </div>)}
                </div>
            </div>
          </section>
    )
}