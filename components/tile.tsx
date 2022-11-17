import Image from "next/image";
import React from "react";
import { useState } from "react";
import styles from "../styles/tile.module.css";

export interface tileprops {
  card_index: number;
  image_index: number;
  hidden: boolean;
  collected: boolean;
  onClick: (key: number, id: number) => void;
}

export default function Tile(props: tileprops) {
  let style;
  if (props.collected) {
    style = styles.collected;
  } else if (props.hidden) {
    style = styles.item_hidden;
  } else {
    style = styles.item_show;
  }

  return (
    <div
      className={style}
      style={{ width: "100%", height: "100%", position: "relative" }}
      onClick={() => {
        if (!props.collected) {
          props.onClick(props.card_index, props.image_index);
        }
      }}
    >
      {!props.hidden && (
        <Image
          alt="A aicture of a cat"
          src={`/${props.image_index}.png`}
          fill
          sizes="100% 100%"
          className="image"
        />
      )}
    </div>
  );
}
