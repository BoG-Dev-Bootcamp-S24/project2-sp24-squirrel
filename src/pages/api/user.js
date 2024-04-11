import createUser from "../../../server/mongodb/actions/createUsers";
import deleteUser from "../../../server/mongodb/actions/deleteUsers";

export default async function handler(req, res) {
    console.log(req.body);
    if (req.method == 'POST') {
        try {
            await createUser(req.body);
            return res.status(200).send("Success");
        } catch (e) {
            if (e.name === "ValidationError") {
                return res.status(400).send(e.message);
            }
            return res.status(500).send(e.message);
        }
    } else if (req.method == 'DELETE') {
        try {
            await deleteUser(req.body);
            return res.status(200).send("Success");
        } catch (e) {
            if (e.name === "InvalidParametersError" || e.name === "UserNotFoundError") {
                return res.status(400).send(e.message);
            }
            return res.status(500).send(e.message);
        }
    }
}