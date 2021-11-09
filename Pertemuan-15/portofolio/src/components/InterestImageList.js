import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function InterestImageList() {
  return (
    <ImageList sx={{ width: 800, height: 450 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=400&fit=crop&auto=format`}
            srcSet={`${item.img}?w=400&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar title={item.title} position="below" />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://image.freepik.com/free-photo/gaming-room-no-people-equiped-with-rgb-powerful-personal-computer-online-videogames-tournament-gaming-chair-first-person-shooter-game-screen-cozy-room-with-neon-light_482257-12428.jpg",
    title: "Gaming",
  },
  {
    img: "https://image.freepik.com/free-photo/coding-man_1098-18084.jpg",
    title: "FrontEnd Development",
  },
  {
    img: "https://image.freepik.com/free-photo/badminton-racket-shuttlecock-top-view_23-2148849186.jpg",
    title: "Badminton",
  },
  {
    img: "https://image.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg",
    title: "Music",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Cycling",
  },
];
