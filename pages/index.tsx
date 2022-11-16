import Head from "next/head";
import { ReactElement } from "react";
import Tile from "../components/tile";

const image_count: Number = 18;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Caros Cat Memory</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {create_grid()}
    </div>
  );
}

function create_grid(): ReactElement {
  let ids = [...Array(image_count).keys()];
  let ids2 = (ids = ids.concat([...Array(image_count).keys()]));
  ids = shuffle(ids);

  return (
    <div className="container">
      {ids.map((id) => {
        return <Tile key={id} image_index={id}></Tile>;
      })}
    </div>
  );
}

function shuffle(a: number[]): number[] {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
