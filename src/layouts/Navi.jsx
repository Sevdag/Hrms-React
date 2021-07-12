import React from "react";
import { Menu } from "semantic-ui-react";
export default function Navi() {
  return (
    <div>
      <Menu inverted>
        <Menu.Item header>Our Company</Menu.Item>
        <Menu.Item name="aboutUs" />
        <Menu.Item name="jobs" />
        <Menu.Item name="locations" />
        <Menu.Item position={"right"}>
          <button>Giris</button>
        </Menu.Item>
        <Menu.Item position={"right"}>
          <button>Çıkış Yap</button>
        </Menu.Item>
      </Menu>
    </div>
  );
}
