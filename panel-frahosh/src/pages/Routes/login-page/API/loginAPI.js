import axios from "axios"
import { serverApi } from "../../../../confing/confing"

const loginAPI = async () => {

    const {data } = await axios.get(`${serverApi}v1/user-auth/user-login`,{  })
  return (
    <div>loginAPI</div>
  )
}
export default loginAPI;