import { useState } from "react";
import Image from 'react-bootstrap/Image';
import btsPhoto from '../images/btsHeadshot.jpg';

const BTSImageInteractive = () => {
    const [ toggleImage, setToggleImage ] = useState(true);

    return(
        <div className='BTSPhotoDetails' onClick={() => setToggleImage(!toggleImage)} > 
                { toggleImage ? <Image id='BTSPhoto' src={btsPhoto}   alt='' /> : 
                <div className = 'BTSPhotoText'>   
                    <span>V, Jungkook, Park Ji-min, Suga, Jin, RM, and J-Hope</span>
                </div>
                }
            </div>
    )
}


export default BTSImageInteractive;