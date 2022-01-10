import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import { makewishStaticlanguages } from 'helpers/utils/makewishStaticlang';
import {useRouter} from 'next/router'
import { userService, alertService } from 'services';
import { title_case } from 'helpers/utils/commonAction';
import { Spinner } from 'components/Spinner';

export default function MakewishForm() {

    const langContext = useContext(LanguageContext)
    const router=useRouter()

    const [datas, setDatas] = useState(null);
    const [token,setToken]=useState('')
    const [loading,setLoading] = useState()
    const [selectGroup,setselectGroup]=useState([])

    let remainGroup = datas && datas.filter(cls => !selectGroup.includes(JSON.parse(cls.title)));
    let filteredGroup = datas &&  datas.filter(cls => selectGroup.includes(JSON.parse(cls.title)));

    const [stateForm,setFormState]=useState({
        company_name: '',
        company_size:'',
        name:'',
        first_name: '',
        position: '',
        email_address: '',
        mobile_number: '',
        description:'',
    })
    

    const onChange = async (key, val) => {
         let updated
         updated = {
             ...stateForm,
             [key]: val,
           };
           setFormState(updated)
     }

    useEffect(()=>{
        userService.fetchService_groups('service_group_front/show_all_list')
        .then(services =>{
            setDatas(services.data)  
        })
    },[token,langContext])

    const addItem = (name,id) =>{
        setselectGroup([...selectGroup,name])
    }
    const removeItem = (name,id) =>{
        let newarray = selectGroup.filter(element => element!==name);
        setselectGroup(newarray)
    }

    
    const ResponseData= '';
    const saveSubmit = async() =>{
        
       
        if(stateForm.company_name==''){
            alert("Please Fill Company Name")
        }else if(stateForm.company_size==''){
            alert("Please Choose Company size")
        }else if(stateForm.name==''){
            alert("Please Fill Full Name")
        }else if(stateForm.first_name==''){
            alert("Please Fill First Name")
        }else if(stateForm.position==''){
            alert("Please Fill Position Filed")
        }else if(stateForm.email_address==''){
            alert("Please fill Email Address")
        }else if(stateForm.mobile_number==''){
            alert("Please Fill Mobile Number")
        }else if(stateForm.description==''){
            alert("Please Fill description")
        }
        else if(selectGroup==''){
            alert("Please Choose service group")
        }
        else{
            setLoading(true)
            const ResponseData={
                "form_response_data":[stateForm],
                "selected_group":filteredGroup
            }

            setFormState(
                {
                    company_name: '',
                    company_size:'',
                    name:'',
                    first_name: '',
                    position: '',
                    email_address: '',
                    mobile_number: '',
                    description:'',
                }
            )
            setselectGroup([]) 
            setLoading(false)
        }
        
    }
    
    
    return(
        <>
        <div className="col-lg-4 left-wish-colum">
            <form name="makewish-form" className="makewish-form">
                <div className="form-row wish-form-col reset-margin">
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <input type="text" className="form-control" id="inputEmail4" placeholder={makewishStaticlanguages[langContext.lang].company} value={stateForm.company_name} onChange={(val) => onChange('company_name', val.target.value)}/>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <input type="text" className="form-control" id="inputEmail4" placeholder={makewishStaticlanguages[langContext.lang].size} value={stateForm.company_size} onChange={(val) => onChange('company_size', val.target.value)}/>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <input type="text" className="form-control" id="inputEmail4" placeholder={makewishStaticlanguages[langContext.lang].name} value={stateForm.name} onChange={(val) => onChange('name', val.target.value)}/> 
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <input type="text" className="form-control" id="inputEmail4" placeholder={makewishStaticlanguages[langContext.lang].fname} value={stateForm.first_name} onChange={(val) => onChange('first_name', val.target.value)} />
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <input type="text" className="form-control" id="inputEmail4" placeholder={makewishStaticlanguages[langContext.lang].position} value={stateForm.position} onChange={(val) => onChange('position', val.target.value)} />
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <input type="email" className="form-control" id="inputEmail4" placeholder={makewishStaticlanguages[langContext.lang].email} value={stateForm.email_address} onChange={(val) => onChange('email_address', val.target.value)}/>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <input type="number" className="form-control" id="inputEmail4" placeholder={makewishStaticlanguages[langContext.lang].phone} value={stateForm.mobile_number} onChange={(val) => onChange('mobile_number', val.target.value)}/>
                    </div>
                    <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <textarea className='form-control' rows="7" name="description" placeholder={makewishStaticlanguages[langContext.lang].description} value={stateForm.description} onChange={(val) => onChange('description', val.target.value)} ></textarea>
                    </div>
                    <button type="button" className="btn btn-primary btn-dragdrop-submit d-block d-lg-none" onClick={()=>saveSubmit()}>{makewishStaticlanguages[langContext.lang].btntext}</button>
                    {loading==true && <Spinner/> }  
                    {loading==false && <p class="dragdrop-alert-msg d-block d-lg-none">{makewishStaticlanguages[langContext.lang].sucessmsg}</p>}
                </div>
            </form>
        </div>
        
        <div class="col-lg-8 right-wish-colum">
            <div class="row reset-margin">
                <div class="col-lg-5 dragdrop-wrapper reset-padding" data-target="myfillContainer">
                    <input class="make_a_wishtag-trap" type="text" data-role="tagsinput" value=""/>
                    <div class="dragdrop-box">
                        <h2>{makewishStaticlanguages[langContext.lang].dragbox_title}</h2>
                        <div class="per-buttonIn">
                            <div class="bootstrap-tagsinput"><input type="text" placeholder=""/>
                            {filteredGroup && filteredGroup.map((item,index)=> <span class="tag label label-info">{JSON.parse(item.title)}<span data-role="remove" onClick={()=>removeItem(JSON.parse(item.title),item.id)}></span></span>)}
                            </div>
                        </div>
                        <div class="dragdrop-button-wrapper text-center">
                        <button type="button" class="btn btn-primary btn-dragdrop-submit" onClick={()=>saveSubmit()}>{makewishStaticlanguages[langContext.lang].btntext}</button>
                        {loading==true && <Spinner/> }  
                        {loading==false && <p class="dragdrop-alert-msg">{makewishStaticlanguages[langContext.lang].sucessmsg}</p>}
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 dragdrop-text">
                    <div class="stage-layer-top">
                    <ul class="stage">
                        {remainGroup && remainGroup.map((item,index)=>
                        <>
                        <li class={`stage-li-`+(index+1)}><a className="cursor-pointer" data-wishname={JSON.parse(item.title)} onClick={()=>addItem(JSON.parse(item.title),item.id)} >{JSON.parse(item.title)}</a></li>
                        </>
                        )}
                    </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    
}