'use client'

import Image from 'next/image';
import { use, useState } from 'react';

const ImageComponent = ({ monsterName, alt }) => {
    const game = {
        8: 'scarlet-violet',
        7: 'sun-moon',
        6: 'x-y',
        5: 'black-white',
        4: 'diamond-pearl',
        3: 'ruby-sapphire',
        2: 'silver',
        1: 'red-blue',
        0: 'sword-shield',
    } // skipping sword/shield until the end since many of its sprites are lower resolution
    
    const [gameNum, setGameNum] = useState(8);
    const [curGame, setCurGame] = useState(game[gameNum])
    const [url, setUrl] = useState(`https://img.pokemondb.net/sprites/${game[gameNum]}/normal/${monsterName}.png`)

    //console.log(`try ${imgSrc} first, then try ${fallback}`);
    return (
        <div>
            <Image 
                src={url} 
                alt={alt} 
                width={500} 
                height={500} 
                onError={() => {
                    if(gameNum > 0) {
                        setGameNum(gameNum-1)
                    }
                    console.log(`Swapping to ${game[gameNum]}`)
                    setUrl(`https://img.pokemondb.net/sprites/${game[gameNum]}/normal/${monsterName}.png`)
                }}
            />
        </div>
    );
    
};

export default ImageComponent;