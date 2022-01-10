import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userService } from 'services';
import { Nav, Alert } from 'components';
import { LanguageProvider } from '../props/context/LanguageContext';

export default App;

function App({ Component, pageProps }) {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [authorized, setAuthorized] = useState(false);
    const [lang,setLanguage]=useState('en')
    const language={ lang,setLanguage  }

    useEffect(() => {
        // on initial load - run auth check
        authCheck(router.asPath);

        // on route change start - hide page content by setting authorized to false
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);
        setLanguage(localStorage.getItem('lang'))

        // on route change complete - run auth check
        router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function authCheck(url) {
        // redirect to login page if accessing a private page and not logged in
        setUser(userService.userValue);
        const publicPaths = ['/account/login', '/account/register'];
        const path = url.split('?')[0];
        if (!userService.userValue && !publicPaths.includes(path)) {
            setAuthorized(true);
            // setAuthorized(false);
            // router.push({
            //     pathname: '/account/login',
            //     query: { returnUrl: router.asPath }
            // });
        } else {
            setAuthorized(true);
        }
    }
    return (
        <>
            <Head>
                <title>C2D WEBSITE</title>

                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-tagsinput/0.8.0/bootstrap-tagsinput.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
                <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css"/>
                <link rel="stylesheet" href="/assets/fonts/icomoon/style.css"/>
                <link rel="stylesheet" href="/assets/css/mobile_style.css" />
                <link rel="stylesheet" href="/assets/css/style.css" />
                <link rel="stylesheet" href="/assets/css/responsive.css" />






            </Head>

                    <LanguageProvider value={language}>
                    <Component {...pageProps} />
                    </LanguageProvider>


                <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <script src="/assets/js/bootstrap-tagsinput.js" ></script>
                <script src="/assets/js/owl.carousel.js"></script>
                <script src="/assets/js/jquery.sticky.js"></script>
                <script src="/assets/js/mobile_menu.js"></script>
                <script src="/assets/js/main.js"></script>
        </>

    );
}
export async function getServerSideProps(){
    return{
        props: {
            title: 'C2D Website',
            description: 'C2D Website',

        }
    }
  }