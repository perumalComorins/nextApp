import LanguageContext from 'props/context/LanguageContext';
import { howweworklanguages } from 'helpers/utils/howweworklang';
import { useRouter } from "next/router"
import { useContext } from 'react';

export default function Howweworkheader(props){

    const langContext = useContext(LanguageContext)    
    const router = useRouter()

    const Homepath = () => {
        router.push('/home')
    }
    const res = props.value 
    return(
        <>
            <section class="intro_how_we_work">
                <div class="container container-1000">
                    <div class="breadcrumb-part" role="navigation">
                        <ul class="breadcrumbs">
                            <li ><a onClick={()=>Homepath()} style={{cursor:'pointer'}}>{res.home_text}</a></li>
                            <li>{res.current_page_name}</li>
                        </ul>
                    </div>
                    <div class="how-we-work-intro-para">
                        <p>{res.desc}</p>
                    </div>
                </div>
            </section>    
        </>
    )
}