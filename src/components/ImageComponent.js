'use client'

import Image from 'next/image';
import { use, useState } from 'react';

const ImageComponent = ({ src, fallback, alt }) => {
    const [imgSrc, setImgSrc] = useState(src);
    //console.log(`try ${imgSrc} first, then try ${fallback}`);
    return (
        <div>
            <Image 
                src={imgSrc} 
                alt={alt} 
                width={500} 
                height={500} 
                onError={() => {
                    console.log(`Swapping to ${fallback}`)
                    if(imgSrc !== fallback) setImgSrc(fallback)
                }}
            />
        </div>
    );
    
};

export default ImageComponent;