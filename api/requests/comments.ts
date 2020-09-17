import { AxiosResponse } from "axios";
import { toNumber } from "lodash";
// eslint-disable-next-line import/no-cycle
import { postsTypes } from "../../store/posts";
import instance from "../_instance";

const comments = {
  createComment(
    id: string | string[],
    body: string
  ): Promise<postsTypes.resComment> {
    const postId = toNumber(id);
    return instance
      .post<any, AxiosResponse<postsTypes.resComment>>("comments", {
        postId,
        body,
      })
      .then((res) => res.data);
  },
};

export default comments;
