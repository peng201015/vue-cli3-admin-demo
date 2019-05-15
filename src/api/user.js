import {
  post,
  get
} from "@/utils/require"
const user = {
  userInfo() {
    return get("/appapi.php?a=getPortalList&catid=20", {}).then((res) => {
      console.log(res.result)
    })
  }
}
export default user