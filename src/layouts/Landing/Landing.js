import React from "react";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/components/grid.css";

function Landing() {
  return (
    <Grid celled>
      <Grid.Row>
        <Grid.Column width={16}>
          <div style={{ backgroundColor: "red" }}>TOP TOP TEXT</div>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={{height: "100vh"}}>
        <Grid.Column width={4}>
          <div style={{ backgroundColor: "orange", height: "100%", }}>LEFT TEXT</div>
        </Grid.Column>
        <Grid.Column width={8}>
          <Grid.Row style={{height: "20%"}}>
            <div style={{ backgroundColor: "purple", height: "100%"}}>LEFT TEXT</div>
          </Grid.Row>
          <Grid.Row style={{height: "80%",}}>
            <div style={{ backgroundColor: "deepskyblue", height: "100%"}}>LEFT TEXT</div>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column width={3}>
          <div style={{ backgroundColor: "green", height: "100%", }}>RIGHT TEXT</div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Landing;
