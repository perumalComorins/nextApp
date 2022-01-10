import { useContext, useEffect, useState } from 'react';
import LanguageContext from 'props/context/LanguageContext';
import {languages} from 'helpers/utils/lang';
import { careerStaticlanguages } from 'helpers/utils/careerStaticlang';
import {useRouter} from 'next/router'


export default function CareerTitle() {

    const langContext = useContext(LanguageContext)
    const router=useRouter()

    return (
        <>
          <section class="container container-970 careerpager--Heading text-center">
            <h2>{careerStaticlanguages[langContext.lang].adventure}</h2>
            <p>{careerStaticlanguages[langContext.lang].bannercontent}</p>
          </section>
        </>
    )
}