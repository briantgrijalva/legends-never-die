export default function Champ({ championData }: any) {
  return (
    <div>
      {JSON.stringify(championData)}
      {championData.title}
      <br />
      {championData.name}
      <br />
      {championData.id}
    </div>
  );
}

export async function getAllChampsIds() {
  const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion.json`);
  const data = await res.json();

  let champions = data.data;

  let arrayChampions = [];

  for (let clave in champions){
    arrayChampions.push(champions[clave]);
  }

  return arrayChampions.map((champ: any) => {
    return {
      params: {
        id: champ.id,
      },
    };
  });
}

export async function getStaticPaths() {

  const paths = await getAllChampsIds();
  
  return {
    paths,
    fallback: false,
  }
 
}

export async function getStaticProps({ params }: any) {
  

  const resById = await fetch(`http://ddragon.leagueoflegends.com/cdn/13.12.1/data/en_US/champion/${params.id}.json`)
  const data = await resById.json()

  let championData = data.data[`${params.id}`];
  
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      championData,
      // post,
    },
  }
}