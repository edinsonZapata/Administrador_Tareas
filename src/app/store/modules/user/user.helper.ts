import { Users } from "../../../models/interfaces/user";

export function parseJwt(bearerToken: string): Users {

    if (!bearerToken) {
        return { _id: "", login: false };
    }
    const base64Url = bearerToken.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(atob(base64).split("").map(
        (c) => "%" + ("00" + c.charCodeAt(0).toString(16)
    ).slice(-2)).join(""));

    return JSON.parse(jsonPayload);

}
