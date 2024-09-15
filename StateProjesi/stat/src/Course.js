import One from './images/One.png';
import Two from './images/Two.png';
import Three from './images/Three.png';
import './Course.css';


const courseMap = {
    One,
    Two,
    Three
}
function Course({courseName}) {
    return (
        <div className='courseDiv'>
            <img className="course" src={courseMap[courseName]} />
        </div>
    );
}

export default Course;