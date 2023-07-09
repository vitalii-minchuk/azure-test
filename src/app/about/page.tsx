import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"

async function  page() {
    const session = await getServerSession(authOptions)
  return (
    <div className="text-center">About page</div>
  )
}

export default page