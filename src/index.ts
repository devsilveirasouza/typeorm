import server from "../server";
import { AppDataSource } from "./config/data-source"

AppDataSource.initialize().then(async () => {

    console.log("Data Source has been initialized!")
    server.listen(3000, () => {
        console.log("Server is running on port 3000")
    });
})
.catch(error => console.log(error));
