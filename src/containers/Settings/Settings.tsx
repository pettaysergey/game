import React from "react";
import Box from "shared/Box";
import GameTitle from "shared/GameTitle";
import Page from "shared/Page";
import { NavLink } from "react-router-dom";
import Button from "shared/Button";
import Select from "shared/Select";
import Toggle from "shared/Toggle";
import SettingItem from "./components/SettingItem";
import { getMusic, getDifficult } from "containers/Main/store/selectors";
import { actions } from "containers/Main/store/duck";
import { useDispatch, useSelector } from "react-redux";

import { difficultList } from "./helpers";

export interface SettingsProps {}

const Settings: React.FC<SettingsProps> = () => {
  const dispatch = useDispatch();
  const music = useSelector(getMusic);
  const difficult = useSelector(getDifficult);

  return (
    <Page>
      <GameTitle />
      <Box title="Settings">
        <SettingItem title="Difficult">
          <Select
            onChange={(value) => dispatch(actions.changeDifficult(value))}
            options={difficultList}
            value={difficult}
          />
        </SettingItem>
        <SettingItem title="Music">
          <Toggle
            onChange={(value) => dispatch(actions.toggleMusic(value))}
            isActive={music}
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
