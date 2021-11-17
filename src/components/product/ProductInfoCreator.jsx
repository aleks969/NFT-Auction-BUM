import { Card, Container, Typography } from "@mui/material";
import User from "../../components/user/User";
import classNames from "classnames";
import styles from "./ProductInfoCreator.module.scss";

// const props = {
//   name: "George",
//   avatar:
//     "https://nft-auction.herokuapp.com/uploads/0xa6dbe6b4f8e2905c26e123ec6fd08a8f7200dbc1_64120a76f4.jpg",
//   verified: true,
// };

export default function ProductInfoCreator({ name, avatar, verified = false }) {
  return (
    <div className={styles["product-info-creator"]}>
      <p className={classNames(styles.title)}>Creator</p>
      <div className={styles["user-container"]}>
        <User name={name} size={39} avatar={avatar} verified={verified} />
      </div>
    </div>
  );
}
