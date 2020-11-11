import React from "react";
import { Grid } from "semantic-ui-react";
import "semantic-ui-css/components/grid.css";
import Button from "../../components/Button";
import UserProfile from "../../views/UserProfile";
import BuySection from "../../views/BuySection";
import SellSection from "../../views/SellSection";
import "./Landing.scss"

function Landing({onLogout}) {
  return (
      <div className="LandingPage">
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
              <Grid.Row style={{height: "100%",}}>
                <div className="BuySellSection">
                  <BuySection />
                  <SellSection />
                </div>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column className="RightSideProfile" width={3}>
              <UserProfile />
              <Button
                  onClick={() => {
                    onLogout()
                  }}
              >
                Logout
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>

  );
}

export default Landing;
