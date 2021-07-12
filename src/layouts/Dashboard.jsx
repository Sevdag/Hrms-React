import React from "react";
import { Container } from "semantic-ui-react";
import Categories from "./Categories";
import Navi from "./Navi";

export default function Dashboard() {
  return (
    <div>
           <Navi />
        <Container>
        <Categories/>
        </Container>
    </div>
  );
}
