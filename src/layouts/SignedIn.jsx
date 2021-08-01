import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";
import SignedOut from './SignedOut';

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://i.pinimg.com/236x/29/4c/19/294c1951a9df85393a4252f75ae3ed25.jpg"/>
        <Dropdown pointing="top left" text="Sevda">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item onClick={signOut}text="Çıkış yap" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
