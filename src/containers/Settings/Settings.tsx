import React from "react";
import Box from "shared/Box";
import GameTitle from "shared/GameTitle";
import Page from "shared/Page";
import { NavLink } from "react-router-dom";
import Button from "shared/Button";
import Select from "shared/Select";
import Toggle from "shared/Toggle";
import SettingItem from "./components/SettingItem";
import { musicSelector } from "containers/Main/store/selectors";
import { actions } from "containers/Main/store/duck";
import { useDispatch, useSelector } from "react-redux";

import { difficultList } from "./helpers";

export interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
  const dispatch = useDispatch();
  const getMusic = useSelector(musicSelector);

  return (
    <Page>
      <GameTitle />
      <Box title="Settings">
        <SettingItem title="Difficult">
          <Select options={difficultList} />
        </SettingItem>
        <SettingItem title="Music">
          <Toggle
            onChange={(value) => dispatch(actions.toggleMusic(value))}
            isActive={getMusic}
          />
        </SettingItem>
        <NavLink to="/">
          <Button text="Back" />
        </NavLink>
      </Box>
    </Page>
  );
};

export default Settings;
