import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { Sidebar, Searchbar, Newlyjoined, Chatlist } from "./components";
import Auth from "./components/auth/component";
import { Chat } from "./components/chat/component";
import { RootState } from "./reducers";
// import { baseURL } from "src/config/config";

interface IParsedUser {
  data: {
    user: {
      _id: string;
      name: string;
      email: string;
      photo: string;
      _v: number;
    };
    token: string;
  };
}

function App() {
  const [user, setUser] = useState(localStorage.getItem("chatapp"));

  let parsedUser: IParsedUser | undefined;
  if (user) {
    parsedUser = JSON.parse(user);
  }

  let showChatList = useSelector((state: RootState) => state.changeUserTab);

  // console.log(baseURL);

  return (
    <div className="App">
      {parsedUser ? (
        <Grid container>
          <Grid item xs={1}>
            <Sidebar
              token={parsedUser?.data?.token}
              setUser={setUser}
              photo={parsedUser?.data?.user?.photo}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <Searchbar userId={parsedUser?.data?.user?._id} />
            <Newlyjoined userId={parsedUser?.data?.user?._id} />
            {/* <Chatlist /> */}
          </Grid>
          {showChatList._id ? (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              style={{ backgroundColor: "#ffffff", borderRadius: "20px", position: "relative" }}
            >
              <Chat senderId={parsedUser?.data?.user?._id} />
            </Grid>
          ) : null}
        </Grid>
      ) : (
        <Auth />
      )}
    </div>
  );
}

export default App;
