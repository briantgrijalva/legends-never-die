import { Banner } from "@/components/Banner";
import LegendCard from "@/components/LegendCard";
import bgImage from "../assets/img/lol-bg.png";
import Link from "next/link"

interface Props {
  championsData: Champion;
}

// Generated by https://quicktype.io

export interface Champion {
  type:    Type;
  format:  string;
  version: Version;
  data:    { [key: string]: Data };
}

export interface Data {
  version: Version;
  id:      string;
  key:     string;
  name:    string;
  title:   string;
  blurb:   string;
  info:    Info;
  image:   Image;
  tags:    Tag[];
  partype: string;
  stats:   { [key: string]: number };
}

export interface Image {
  full:   string;
  sprite: Sprite;
  group:  Type;
  x:      number;
  y:      number;
  w:      number;
  h:      number;
}

export enum Type {
  Champion = "champion",
}

export enum Sprite {
  Champion0PNG = "champion0.png",
  Champion1PNG = "champion1.png",
  Champion2PNG = "champion2.png",
  Champion3PNG = "champion3.png",
  Champion4PNG = "champion4.png",
  Champion5PNG = "champion5.png",
}

export interface Info {
  attack:     number;
  defense:    number;
  magic:      number;
  difficulty: number;
}

export enum Tag {
  Assassin = "Assassin",
  Fighter = "Fighter",
  Mage = "Mage",
  Marksman = "Marksman",
  Support = "Support",
  Tank = "Tank",
}

export enum Version {
  The13121 = "13.12.1",
}


export default function Champions({ championsData }: Props) {


  let champions = championsData.data;

  let keysChamps = Object.keys(champions);

  let arrayChampions = []; 


  for (let clave in champions){
    arrayChampions.push(champions[clave]);
  }

  // console.log(arrayChampions.map((champ) => champ.id));

  return (
    <>
    <Banner backgroundImage={`${bgImage.src}`} height="500px" overlay={true}/>
    <div className="container mx-auto px-4 py-14">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 xs:grid-cols-1 gap-4">
        {keysChamps.map((keysChamp) => (
          <LegendCard 
            key={`${champions[`${keysChamp}`].id}`} 
            id={`${champions[`${keysChamp}`].id}`} 
            name={`${champions[`${keysChamp}`].id}`} 
            title={`${champions[`${keysChamp}`].title}`}
            champType={`${champions[`${keysChamp}`].tags}`}
          />
        ))}
      </div>
    </div>
    </>
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
