import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "../../src/components/link/Link";

import Card from "../../src/components/card/Card";
import Footer from "../../src/components/footer/Footer";
import User from "../../src/components/user/User";
import Trending from "../../src/components/trending/Trending";
import Header from "../../src/components/header/Header";
import Auctions from "../../src/components/auctions/Auctions";
import TopCollectors from "../../src/components/collectors/TopCollectors";

const auctionProps = {
  cards: [
    {
      name: "Clock",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 200,
      currency: "BTC",
      timeLeft: 3.6e6,
    },
    {
      name: "DOGE",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 200,
      currency: "BTC",
      timeLeft: 3.6e6,
    },
    {
      name: "BTC",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 100,
      currency: "BTC",
      timeLeft: 3.6e6,
    },
    {
      name: "Litecoin",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 300,
      currency: "BTC",
      timeLeft: 3.6e6,
    },
  ],
};

const userProps = {
  name: "Okay",
  info: "boomer",
  avatar: "/images/avatar.png",
  verified: true,
  size: 55,
};

const cardProps = {
  name: "Clock",
  user: { avatarUrl: "images/avatar.png", verified: true },
  mediaUrl: "images/nft.jpg",
  price: 200,
  currency: "BTC",
  likes: 20,
};

const trendingProps = {
  cards: [
    {
      name: "Clock",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 200,
      currency: "BTC",
    },
    {
      name: "DOGE",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 200,
      currency: "BTC",
    },
    {
      name: "BTC",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 100,
      currency: "BTC",
    },
    {
      name: "Litecoin",
      user: { avatarUrl: "images/avatar.png", verified: true },
      mediaUrl: "images/nft.jpg",
      price: 300,
      currency: "BTC",
    },
  ],
};

const TopCollectorsProps = {
  collectors: [
    {
      name: "Peter",
      nftsCount: 12312,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "John",
      nftsCount: 1111,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Steven",
      nftsCount: 52,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Antonio Banderas",
      nftsCount: 3,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Peter",
      nftsCount: 12312,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "John",
      nftsCount: 1111,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Steven",
      nftsCount: 52,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Antonio Banderas",
      nftsCount: 3,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Antonio Banderas",
      nftsCount: 3,
      avatar: "/images/avatar.png",
      verified: true,
    },
    {
      name: "Donald",
      nftsCount: 12,
      avatar: "/images/avatar.png",
      verified: true,
    },
  ],
};

export default function About() {
  return (
    <>
      <Header />
      <Footer />
      <br />
      <User {...userProps} />
      <br />
      <TopCollectors {...TopCollectorsProps} />
      <br />
      <Auctions cards={auctionProps.cards} />
      <br />
      <Trending cards={trendingProps.cards} />
      <br />
      <Card {...cardProps} />
      <br />
      <Container maxWidth="sm">
        <Grid container justifyContent="center">
          <Grid item>
            <Button variant="contained" component={Link} noLinkStyle href="/">
              🏠 Home
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
