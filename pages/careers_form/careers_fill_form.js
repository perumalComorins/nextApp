import { useEffect,useState,useContext } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import { careersformlanguages } from 'helpers/utils/careersformlang';
import { useRouter } from "next/router"


export default function CarrersfillForm(){

    const [res, setres] = useState({
        'first_name':'First Name',
        'last_name':'Last Name',
        'email_address':'Email Address',
        'post_name':'Post Applied for',
        'about_you':'In short tell about you and the reason for applying tge above post(s).',        
    })    
    const [filecv, setfilecv] = useState()  
    console.log(filecv) 
    
    const langContext = useContext(LanguageContext)
    const router = useRouter()
    
    const Pagepath = (type) => {
        router.push(`/${type}`)
    }

    const onChange = async (key, val) => {  
        let resUpdate      
        let copyRes = {...res};
        copyRes[key] = val;
        resUpdate={...copyRes}
        setres(resUpdate)        
    }

    const onFileChange = (event) => {
        const files = event.target.files[0];
        setfilecv(files)
    }

    const saveSubmit = async() =>{
        let formData = new FormData();
        formData.append('filecv', filecv);
        formData.append(res);
    }

    return(
        <>
            <section class="careersform-Section">
                <div class="container container-1160 careersform-cover--Box">
                    <div class="container container-970 careersform-Inner--wrapper reset-padding">
                        <div class="breadcrumb-part" role="navigation">
                        <ul class="breadcrumbs">
                            <li><a onClick={()=>Pagepath('home')} style={{cursor:'pointer'}}>{careersformlanguages[langContext.lang].home}</a></li>
                            <li><a onClick={()=>Pagepath('services')} style={{cursor:'pointer'}}>{careersformlanguages[langContext.lang].services}</a></li>
                            <li>{careersformlanguages[langContext.lang].cloudcomputing}</li>
                        </ul>
                        </div>
                        <form class="careersForm">
                            <div class="form-row career-double--col reset-margin">
                                <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                    <input type="text" class="form-control" id="inputEmail4" placeholder={res.first_name} onChange={(value)=>onChange('first_name',value.target.value)}/>
                                </div>
                                <div class="form-group col-lg-6 col-md-6 col-sm-12">
                                    <input type="text" class="form-control" id="inputPassword4" placeholder={res.last_name} onChange={(value)=>onChange('last_name',value.target.value)}/>
                                </div>
                            </div>
                            <div class="form-row career-single--col reset-margin">
                                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                    <input type="email" class="form-control" id="inputEmail4" placeholder={res.email_address} onChange={(value)=>onChange('email_address',value.target.value)}/>
                                </div>
                            </div>
                            <div class="form-row career-single--col reset-margin">
                                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                    <input type="text" class="form-control" id="inputEmail4" placeholder={res.post_name} onChange={(value)=>onChange('post_name',value.target.value)}/>
                                </div>
                            </div>
                            <div class="form-row career-single--col reset-margin">
                                <div class="form-group col-lg-12 col-md-12 col-sm-12">
                                    <textarea class="form-control" rows="7" placeholder={res.about_you} onChange={(value)=>onChange('about_you',value.target.value)}></textarea>
                                </div>
                            </div>
                            <div class="form-row career-single--col reset-margin">
                                <div class="form-group file-upload-wrapper col-lg-12 col-md-12 col-sm-12" data-text="Attach you CV here">
                                    <input name="file-upload-field" type="file" class="file-upload-field" onChange={(event)=>onFileChange(event)}/>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary btn-c2d-primary-md">{careersformlanguages[langContext.lang].discoverourservices}</button>
                            {/* <p class="careerform-sucess-msg">{careersformlanguages[langContext.lang].appsubmitted}</p> */}
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}