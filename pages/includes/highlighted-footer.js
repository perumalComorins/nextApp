import { title_case } from 'helpers/utils/commonAction';
import { Link } from 'components/Link';
import { useContext }  from 'react'
import LanguageContext from 'props/context/LanguageContext';
import {highlightedfooterlanguages} from 'helpers/utils/highlightedfooterlang';
const HighlightFooter = ({type}) => {

  const langContext = useContext(LanguageContext)    

    return (
      <>
       <section className="heightlight-footer-box">
          <div className="container container-1160">
            <div className="row reset-margin">
              <div className="col-lg-8 col-md-12 col-sm-12 box-content">
                <h4 className="box-title">{highlightedfooterlanguages[langContext.lang].wishingyourself}</h4>
                <p className="box-para">{highlightedfooterlanguages[langContext.lang].wishingyourselfcontent}</p>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 box-link align-self-center">
                <Link href="/make-wish" className="box-btn">{highlightedfooterlanguages[langContext.lang].makeawish}</Link>
              </div>
            </div>
          </div>
</section>
      </>
    )
}

export default HighlightFooter