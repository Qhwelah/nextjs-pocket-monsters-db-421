import ImageComponent from "@/components/ImageComponent";

async function getData(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const monster = await fetch(url);
    return monster.json();
}

async function getImage(name){
    const url = `https://img.pokemondb.net/sprites/scarlet-violet/normal/${name}.png`
    const theImg = await fetch(url);
    return theImg;
}

const Monster = async ({params}) => {   
    const monsterId = params.id;
    console.log(`the id of this john is ${monsterId}`)
    const monster = await getData(monsterId);
    const monsterString = JSON.stringify(monster);

    const name = monster['name']
    const imageUrl = `https://img.pokemondb.net/sprites/scarlet-violet/normal/${name}.png`
    const oldUrl = `https://img.pokemondb.net/sprites/sun-moon/normal/${name}.png`

    // try {
    return(
        <div>
            <h1>{name} - ID: {monsterId}</h1>
            <ImageComponent src={imageUrl} fallback={oldUrl} alt={name}></ImageComponent>
            <p>{monsterString}</p>
        </div>
    )
    // } catch (e) {
    //     return(
    //         <div>
    //             <h1>{name} - ID: {monsterId}</h1>
    //             <ImageComponent src={oldUrl} alt={name}></ImageComponent>
    //             <p>{monsterString}</p>
    //         </div>
    //     )
    // }
    
}

export default Monster;