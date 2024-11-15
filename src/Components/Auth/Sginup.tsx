import { Link } from "react-router-dom";
import Auth from "./Auth"
import {Link as MUILink} from "@mui/material"
import { useCreateUser } from "../../hooks/useCreatUser";

const Sginup = () => {

    const [createUser] = useCreateUser() 

    return (
        <Auth submitLabel="SginUp" onSubmit={ async ({ email, password }) => {
            await createUser({
                variables : {
                    createUserInput : {
                        email,
                        password
                    }
                }
            })
        } }>
            <Link to={'/login'} >
            <MUILink>
                Login
            </MUILink>
            </Link>
                
        </Auth>

    )
}

export default Sginup;