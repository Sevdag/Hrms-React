import React from "react";
//import { Container } from "semantic-ui-react";
import Categories from "./Categories";
import { Grid } from 'semantic-ui-react'
//import CandidateList from './../pages/CandidateList';
import JobPosition from './../pages/JobPosition';
import { Route } from "react-router-dom";



export default function Dashboard() {
  return (
    <div>
      <Grid> 
        <Grid.Row>
          <Grid.Column width={4}>
          <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
           
          {/*<CandidateList/> */}
         <Route exact path="/" component={JobPosition}/>
         <Route path="/jobPositions" component={JobPosition}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        
    </div>
  );
}
