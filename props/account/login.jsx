import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Head from 'next/head'
import Image from 'next/image'

import { Link } from 'components';
import { Layout } from 'components/account';
import { userService, alertService } from 'services';
import { useState, useEffect } from 'react';

export default Login;

function Login({title, description} ) {

    useEffect( () => {
        document.querySelector("body").classList.add("bg-default");

      } );

    const [user, setUser] = useState(null);

    const router = useRouter();

    // form validation rules
    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Email is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ email, password }) {
        return userService.login(email, password)
            .then((user) => {
                console.log(user)
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';

                router.push(returnUrl);
            })
            .catch(alertService.error);
    }

    return (
        <>
           <Head>
            <title>{title}</title>
            <meta name="description" content={description}></meta>
        </Head>
        <div className="loginPage">
            <nav id="navbar-main" className="navbar navbar-horizontal navbar-transparent navbar-main navbar-expand-lg navbar-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <Image src="/images/Login_logo.png" width={130} height={30} />
                    </a>
                </div>
            </nav>
            <div className="main-content loginUnset">
                <div className="header bg-gradient-primary loginRel">
                    <div className="separator separator-bottom separator-skew zindex-100">
                        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>
                <div className="container loginAbs">
                    <div className="container">
                        <div className="header-body text-center">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6 col-md-8 px-5">
                                    <h1 className="text-white loginTitle">C2D Admin</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-7">
                            <div className="card border-0 mb-0 loginCard">
                                <div className="card-header signIncred_Pad bg-transparent pb-5">
                                    <div className="text-muted text-center mt-2 mb-3">
                                        <small className="loginHeader">Sign in with credentials</small>
                                    </div>
                                </div>
                                <div className="card-body px-lg-5 py-lg-5 loginBodypad_bottom">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group mb-3">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                                </div>
                                                <input name="email" placeholder="Email" type="text" {...register('email')} className={`form-control ${errors.email ? 'is-invalid' : ''}`} />
                                                 <div className="invalid-feedback">{errors.email?.message}</div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group input-group-merge input-group-alternative">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                                </div>
                                                <input name="password" placeholder="Password" type="password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
                                                <div className="invalid-feedback">{errors.password?.message}</div>
                                            </div>
                                        </div>
                                        {/* <div className="custom-control custom-control-alternative custom-checkbox">
                                            <input className="custom-control-input" id=" customCheckLogin" type="checkbox"></input>
                                            <label className="custom-control-label" for=" customCheckLogin">
                                                <span className="text-muted">Remember me</span>
                                            </label>
                                        </div> */}
                                        <div className="text-center">
                                                <button disabled={formState.isSubmitting} className="btn my-4 text-white">
            {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
            Sign In
        </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="py-5 footer-auto-bottom" id="footer-main">
                <div className="container">
                    <div className="row align-items-center justify-content-xl-between">
                        <div className="col-xl-6">
                            <div className="copyright text-center text-xl-left text-muted">
                                &copy; 2021 <a href="#" className="font-weight-bold ml-1" >CONVERGE 2 DIGITAL</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </>
    );
}
