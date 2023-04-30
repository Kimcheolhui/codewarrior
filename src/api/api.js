import { axiosApi } from "./customAxios";

export const API = {
  getResult: ({ userInfo, answer }) => {
    const api = axiosApi();
    return api.post(`meta/user/ai`, {
      user_name: userInfo.userName,
      ans_1: answer[1],
      ans_2: answer[2],
      ans_3: answer[3],
      ans_4: answer[4],
      ans_5: answer[5],
      ans_6: answer[6],
      ans_7: answer[7],
    });
  },

  getKeywordList: ({ keyword }) => {
    const api = axiosApi();
    return api.post("meta/user/search", {
      keyword: keyword,
    });
  },

  updateShare: ({ userId }) => {
    const api = axiosApi();
    return api.patch(`meta/user/${userId}`, {
      shared: 1,
    });
  },
};
