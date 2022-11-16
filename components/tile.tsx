import Image from "next/image";
import styles from "../styles/tile.module.css";

interface tileprops {
  image_index: number;
}
export default function Tile(props: tileprops) {
  return (
    <div
      className={styles.item}
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <Image alt="A aicture of a cat" src={`/${props.image_index}.png`} fill />
    </div>
  );
}
