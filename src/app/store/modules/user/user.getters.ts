import { GetterTree } from "vuex";
import { RootState } from "../../root.models";
import { UsersState } from "./user.models";

export const userGettersTypes = {
    isLoggedIn: "isLoggedIn",
} as const;

const getters: GetterTree<UsersState, RootState> = {
    [userGettersTypes.isLoggedIn]: state => !!(state.user && state.user._id && state.user.login)
};

export default getters;