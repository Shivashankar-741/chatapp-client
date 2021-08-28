import { Grid } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import { Sidebar, Searchbar, Newlyjoined, Chatlist } from "./components";
import Auth from "./components/auth/component";
import { Chat } from "./components/chat/component";

function App() {
  const [user, setUser] = useState(localStorage.getItem("chatapp"));
  // console.log(user);

  let parsedUser;
  if (user) {
    parsedUser = JSON.parse(user);
  }

  // console.log(parsedUser);
  // console.log(parsedUser?.status);

  return (
    <div className="App">
      {parsedUser ? (
        <Grid container>
          <Grid item xs={1}>
            <Sidebar setUser={setUser} photo={parsedUser?.data?.user?.photo} />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Searchbar />
            <Newlyjoined />
            <Chatlist />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={6}
            style={{ backgroundColor: "#ffffff", borderRadius: "20px", position: "relative" }}
          >
            <Chat />
          </Grid>
        </Grid>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
