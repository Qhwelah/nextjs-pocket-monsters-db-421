import Link from "next/link";

async function getData(limit){
    const url = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`;
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
    let totalAmountOfMons = 1025;

    let monIds = Array.from({length: totalAmountOfMons}, (_, i) => i+1);

    // let monsters = {};
    // monIds.array.forEach(element => {
    //     monsters[element] = getData(element)
    // });
    const inputdata = await getData(totalAmountOfMons);
    console.log(inputdata);
    const data = inputdata['results'];
    console.log(data);
    console.log(data[1])
    let theIdUno = data[1]['url'];
    theIdUno = theIdUno.substring(34, theIdUno.length-1)
    console.log(`${theIdUno} is ${data[1]['name']}`)

    let monsters = data.map((monster) => {
        let theId = monster['url'];
        theId = theId.substring(34, theId.length-1)
        let theName = `${monster['name']}`
        //console.log(`${theId} is ${monster}`)
        return(
            <Link key={theId} href={`/monsters/${theId}`} className={'collection-item'}>{theName}</Link>
        );
    })

    const monstersData = monsters && monsters.length > 0 ? (
        <div className="collection">{monsters}</div>
    ) : (
        <h1>no posts</h1>
    )

    console.log(monsters[2])

    return(
        <div>
            {monstersData}
        </div>
    )
}