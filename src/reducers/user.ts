import { ActionTypes } from "src/constants/actionTypes";

interface IActionType {
  type: string;
  payload: {
    _id: string;
    name: string;
    email: string;
    photo: string;
    _v: number;
    search: string;
  };
}

interface ITypeUsers {
  bio: string;
  createdAt: string;
  email: string;
  name: string;
  photo: string;
  _id: string;
}

let cacheUser: any;

const users = (users: ITypeUsers[] = [], action: IActionType) => {
  switch (action.type) {
    case ActionTypes.FETCH_ALL_USER:
      cacheUser = action.payload;
      return action.payload;
    case ActionTypes.SEARCH_USER:
      let user = users.filter((user) => user.name.startsWith(action?.payload?.search));
      return user.length === 0 ? [{ name: "user not found", notFound: true }] : user;
    case ActionTypes.CACHE_USER:
      return cacheUser;
    default:
      return users;
  }
};

export default users;
