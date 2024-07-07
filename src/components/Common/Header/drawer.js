import { useState } from 'react';
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from '@mui/material';

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="link" />
      </IconButton>
      <Drawer anchor={"left"} open={open} onClose={() => setOpen(false)}>
        <div className="logo-box">
          <h1 className="logo">
            TrackCoin<span style={{ color: "var(--blue)" }}>!</span>
          </h1>
        </div>
        <div className="drawer-box">
          <a href="/">
            <p className="link">Главная</p>
          </a>
          <a href="/">
            <p className="link">Сопоставить</p>
          </a>
          <a href="/">
            <p className="link">Наблюдение</p>
          </a>
          <a href="/">
            <p className="link">DashBoard</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
