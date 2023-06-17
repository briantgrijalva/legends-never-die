import Link from "next/link"

export default function Champions({ championsData }: any) {


  let champions = championsData.data;

  let keysChamps = Object.keys(champions);

  let arrayChampions = []; 


  for (let clave in champions){
    arrayChampions.push(champions[clave]);
  }

  // console.log(arrayChampions.map((champ) => champ.id));

  return (
    
    <ul>
      {keysChamps.map((keysChamp) => (
        <li key={champions[`${keysChamp}`].id} className="odd:bg-white even:bg-slate-50">
          <Link href='/[id]' as={`/${champions[`${keysChamp}`].id}`}>
            {champions[`${keysChamp}`].id}
          </Link>
        </li>
      ))}
    </ul>
  )
}
 
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion.json');
  
  const championsData = await res.json();
  

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      championsData,
      // post,
    },
  }
}
