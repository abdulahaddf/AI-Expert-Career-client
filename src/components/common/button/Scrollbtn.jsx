import { AiOutlineDownCircle } from 'react-icons/ai';
import {Link} from 'react-scroll'

const Scrollbtn = () => {
    return (
        <Link className="text-3xl text-center flex justify-center text-black pb-1"  to="about" spy={true} smooth={true} offset={-110} duration={500}>
        <AiOutlineDownCircle></AiOutlineDownCircle>
      </Link>
    );
};

export default Scrollbtn;