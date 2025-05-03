"use client"

import Link from "next/link";

// export async function generateStaticParams() {
//   let data = await getData();
//   return data;
//   // data.map((monster) => {
//   //   return{
//   //     'name': monster.name
//   //   }
//   // });
// }

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

export default function Home() {
  return (
    <div>
      <h1>This is the Pocket Monsters Database Homepage!</h1>
      <br/>
      <Link href="/monsters" className="btn light-blue">Click here to go to the database!</Link>
      <br/>
      {/* <button onClick={getData}>Click for data bruv</button> */}
    </div>
  );
}
