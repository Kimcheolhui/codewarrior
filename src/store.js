import { atom } from "recoil";

const userInfo = atom({
  key: "userInfo",
  default: {
    userName: "",
    userId: "",
  },
});

const myResult = atom({
  key: "myResult",
  default: {},
});

export { userInfo, myResult };
