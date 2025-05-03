async function getData(){
    const url = 'https://pokeapi.co/api/v2/pokemon';
    const result = await fetch(url, 
        {
            next: {
                revalidate: 30,
            }
        }
    );
    return result.json();
}

export default async function MonstersList() {
    const data = await getData();
    console.log(data);

    return(
        <div>
            Look at the console, dumbo
        </div>
    )
}