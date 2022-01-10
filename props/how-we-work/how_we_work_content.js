import LanguageContext from 'props/context/LanguageContext';
import { howweworklanguages } from 'helpers/utils/howweworklang';
import { useContext } from 'react';

export default function HowweWorkcontent(props){

    const langContext = useContext(LanguageContext)        
    const res = props.value 
    console.log(res);
    return(
        <>
            <section class="how-do-we-do-section">
                <div class="row reset-margin">
                    <div class="col-lg-2 col-md-2 rotate-navigation reset-padding d-none d-md-block">
                        <div class="sticky-top">
                            {/* <ul class="nav nav-tabs left-tabs sideways-tabs">
                                <li class="nav-item" data-tab="to-define">
                                    <a class="nav-link how-we-work-filter" href="javascript:void(0)"  data-toggle="tab">{howweworklanguages[langContext.lang].define}</a>
                                </li>
                                <li class="nav-item" data-tab="analyze">
                                    <a class="nav-link how-we-work-filter" href="javascript:void(0)"  data-toggle="tab">{howweworklanguages[langContext.lang].analyze}</a>
                                </li>
                                <li class="nav-item" data-tab="design">
                                    <a class="nav-link how-we-work-filter" href="javascript:void(0)"  data-toggle="tab">{howweworklanguages[langContext.lang].design}</a>
                                </li>
                                <li class="nav-item" data-tab="execute">
                                    <a class="nav-link how-we-work-filter" href="javascript:void(0)"  data-toggle="tab">{howweworklanguages[langContext.lang].deploy}</a>
                                </li>
                                <li class="nav-item" data-tab="to-transmit">
                                    <a class="nav-link how-we-work-filter" href="javascript:void(0)"  data-toggle="tab">{howweworklanguages[langContext.lang].delivery}</a>
                                </li>
                            </ul> */}

                            {res.side_bar ? 
                            <ul class="nav nav-tabs left-tabs sideways-tabs">
                                {res.side_bar.side_bar_view && res.side_bar.side_bar_view.map((item,index) =>
                                <li class="nav-item" data-tab={res.side_bar.side_bar_link[index]}>
                                    <a class="nav-link how-we-work-filter" href="javascript:void(0)"  data-toggle="tab">{item}</a>
                                </li>
                                )}
                            </ul>: null
                            } 
                        </div>
                    </div>
                    <div class="col-lg-10 col-md-10 rotate-contentarea-toolbar reset-padding">
                        {res.section_one ? 
                        <article id={res.section_one.slug} class="define-section">
                            <div class="row reset-margin">
                                    <div class="col-md-12 tab-pane-left--col">
                                        <h2>{res.section_one.title}</h2>
                                    </div>
                                    <div class="col-md-12 tab-pane-right--col">
                                        {res.section_one && res.section_one.sub.map((each,index) =>
                                            <p>{each}</p>
                                        )}
                                        
                                    </div>
                            </div>
                        </article>: null
                        }

                        {res.section_two ? 
                        <article id={res.section_two.slug} class="analyze-design-section">
                            <div class="ad-contentarea-toolbar reset-margin">
                                <div class="ad-contentarea-row ad-contentarea-row-1">
                                    <h3>{res.section_two.title}</h3>
                                    <p>{res.section_two.desc}</p>
                                    <img src={res.section_two.image} style={{width:`50%`}}/>
                                </div>
                            </div>
                        </article>: null
                        }
                        {res.section_three ? 
                        <article id={res.section_three.slug} class="analyze-design-section">
                            <div class="ad-contentarea-toolbar reset-margin">
                                <div class="ad-contentarea-row ad-contentarea-row-1">
                                    <h3>{res.section_three.title}</h3>
                                    <p>{res.section_three.desc}</p>
                                </div>
                            </div>
                        </article>:null
                        }
                        {res.section_four ?
                        <article id={res.section_four.slug} class="deployment-section">
                            <div class="deploy-contentarea-toolbar reset-padding">
                                <div class="deploy-inner-contentarea">
                                    <h2>{res.section_four.title}</h2>
                                    <div class="deploy-subcontent-leads">
                                        <h5 class="deploy-subContent-title">{res.section_four.sub_1.title}</h5>
                                        <div class="depo-subContent--wrapper">
                                            <img src={res.section_four.sub_1.image} />
                                            <p>{res.section_four.sub_1.desc}</p>
                                        </div>
                                    </div>
                                    <div class="deploy-subcontent-leads">
                                        <h5 class="deploy-subContent-title">{res.section_four.sub_2.title}</h5>
                                        <div class="depo-subContent">
                                            <img src={res.section_four.sub_2.image}/>
                                            <p>{res.section_four.sub_2.desc}</p>
                                        </div>
                                    </div>
                                    <div class="deploy-subcontent-leads">
                                        <h5 class="deploy-subContent-title">{res.section_four.sub_3.title}</h5>
                                        <div class="depo-subContent">
                                            <img src={res.section_four.sub_3.image} class="img-fluid"/>
                                            <p>{res.section_four.sub_3.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>   
                        </article>: null 
                        }

                        {res.section_five ?
                        <article id={res.section_five.slug} class="analyze-design-section">
                            <div class="ad-contentarea-toolbar">
                                <div class="ad-contentarea-row ad-contentarea-row-1">
                                    <h3>{res.section_five.title}</h3>
                                    <p>{res.section_five.desc}</p>
                                    <label>{res.section_six.title}</label>
                                    <p>{res.section_six.desc}</p>
                                </div>
                            </div>
                        </article>:null
                        }
                    </div>
                </div>
            </section>
        </>
    )
}