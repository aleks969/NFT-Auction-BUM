import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";

// import Header from "../../src/components/header/Header";
// import Avatar from "../../src/components/avatar/Avatar";
import Card from "../../src/components/card/Card";
import User from "../../src/components/user/User";
import Card2 from "../../src/components/card2/Card";
import Footer from "../../src/components/footer/Footer";

const cardProps = {
  name: "Clock",
  likes: 3500,
  mediaUrl: "/images/nft.jpg",
  user: {
    avatarUrl: "/images/avatar.png",
    verified: true,
  },
  price: "11.9",
  currency: "ETH",
};

const userProps = {
  name: "terika77",
  info: "134 Items",
  avatar: "/images/avatar.png",
  verified: true,
  size: 55,
};

export default function About() {
  return (
    <>
      <User
        name={userProps.name}
        info={userProps.info}
        avatar={userProps.avatar}
        verified={userProps.verified}
        size={userProps.size}
      />
      <Card
        name={cardProps.name}
        likes={cardProps.likes}
        mediaUrl={cardProps.mediaUrl}
        user={cardProps.user}
        price={cardProps.price}
        currency={cardProps.currency}
      />
      <Card2
        name={cardProps.name}
        likes={cardProps.likes}
        mediaUrl={cardProps.mediaUrl}
        user={cardProps.user}
        price={cardProps.price}
        currency={cardProps.currency}
      />
      <Container maxWidth="sm">
        <Grid container justifyContent="center">
          <Grid item>
            <Button variant="contained" component={Link} noLinkStyle href="/">
              🏠 Home
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer muted={"muted"} />
    </>
  );
}
