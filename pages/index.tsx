import Head from "next/head";
import { useState } from "react";

import Tile, { tileprops } from "../components/tile";

const image_count: number = 18;

interface card_data {
  card_index: number;
  image_index: number;
}

export default function Home() {
  let ids = [...Array(image_count).keys()];
  ids = shuffle(ids.concat([...Array(image_count).keys()]));
  let [openCards, setOpenCards] = useState(Array());
  let [collectedCards, setCollectedCards] = useState(Array());

  let key = 0;
  let [tiles, SetTiles] = useState(
    ids.map((id) => {
      let props: card_data = {
        card_index: key,
        image_index: id,
      };
      key++;
      return props;
    })
  );

  function cardClicked(card_index: number, id: number) {
    if (openCards.length == 2 || openCards.includes(card_index)) {
      if (
        getImageIndexByCardIndex(openCards[0]) ==
        getImageIndexByCardIndex(openCards[1])
      ) {
        let oldCollectedCards = [...collectedCards];
        oldCollectedCards.push(openCards[0]);
        oldCollectedCards.push(openCards[1]);
        setCollectedCards(oldCollectedCards);
      }
      setOpenCards(Array());
    } else {
      let oldOpenCards = [...openCards];
      oldOpenCards.push(card_index);
      setOpenCards(oldOpenCards);
    }
  }

  function getImageIndexByCardIndex(card_index: number): number {
    let res = -1;
    tiles.forEach((tile) => {
      if (card_index == tile.card_index) {
        res = tile.image_index;
      }
    });
    return res;
  }

  return (
    <div>
      <Head>
        <title>Caros Cat Memory</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>Caros cat Memory</h1>
      <h1>Your turn</h1>

      <div className="container">
        {tiles.map((data) => {
          return (
            <Tile
              hidden={!openCards.includes(data.card_index)}
              collected={collectedCards.includes(data.card_index)}
              image_index={data.image_index}
              onClick={cardClicked}
              card_index={data.card_index}
              key={data.card_index}
            ></Tile>
          );
        })}
      </div>
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
