import { userService } from 'services';
import { Link } from 'components';
import { useRouter } from 'next/router';
import HomePage from './home/index'
export default Home;



function Home() {


  const router = useRouter();

// only show nav when logged in
// if (!user) return null;
    return (
      <HomePage/>
    )
}
