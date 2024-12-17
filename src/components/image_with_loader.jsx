import '../styles/image_with_loader.css';
import PlaceHolder from '../assets/placeholder.png'
import { useState } from 'react';
import MyLoader from './my_loader';

const ImageWithLoader = ({ imageUrl, alternativeText, width}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    return (
        <div className="ImageWithLoader">
            {/* Circular Loader */}
            {isLoading && !hasError && (
                <div className='imageLoader'>
                    <MyLoader width={width && 200}/>
                </div>
            )}
            {hasError && (
                <img src={PlaceHolder} alt={alternativeText} />
            )}
            <img
                style={{ display: isLoading || hasError ? "none" : "block", }}
                src={imageUrl}
                alt={alternativeText}
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                }} />
        </div>
    )
}

export default ImageWithLoader