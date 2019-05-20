import axios from "@/utils/require"
const user = {
  userInfo() {
    return axios.post("/appapi.php?a=getPortalList&catid=20", {}).then(res => res.result)
  }
}
export default user