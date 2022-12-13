import image from '../../Images/PinkArrow.png'
import { Link } from 'react-router-dom'

export default function Back() {

    return(
        <div>
            <Link to="/page2">
                <img src={image} className="BackArrow" alt="Pink Arrow" style={{position: 'fixed',top: '20px',left: '20px'}}/>
            </Link>
        </div>
    )


}