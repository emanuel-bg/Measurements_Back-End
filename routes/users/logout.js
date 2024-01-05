import Session from "./sessionModel.js";

export default async function Logout(_req, res) {
    try {
        const userToken = res.locals.token;
        const session = await Session.deleteOne({ token: userToken });

        if (!session.acknowledged) {
            throw new Error();
        }

        return res
            .status(200)
            .json({ message: "Logged out successfully" });
    } catch (error) {
        return res
            .status(200) // TODO this should not be 200 status code.
            .json({ message: "An error occurred while logging out" });
    }
}