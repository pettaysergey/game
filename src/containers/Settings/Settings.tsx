import React from "react";
import Box from "shared/Box";
import GameTitle from "shared/GameTitle";
import Page from "shared/Page";
import { NavLink } from "react-router-dom";
import Button from "shared/Button";
import Select from "shared/Select";
import SettingItem from "./components/SettingItem";

import { difficultList } from "./helpers";

export interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
  return (
    <Page>
      <GameTitle />
      <Box title="Settings">
        <SettingItem title="Difficult">
          <Select options={difficultList} />
        </SettingItem>
        <NavLink to="/">
          <Button text="Back" />
        </NavLink>
      </Box>
    </Page>
  );
};

export default Settings;
