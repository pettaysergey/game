import React from "react";
import Page from "shared/Page";
import GameTitle from "shared/GameTitle";
import Box from "shared/Box";
import Menu from "./components/Menu";

export interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <Page>
      <GameTitle />
      <Box title="Main menu">
        <Menu />
      </Box>
    </Page>
  );
};

export default Main;
