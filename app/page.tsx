import { Button } from "@/components/ui/button"
import Link from "next/link"
const Home = ()=>{
  return(
    <div className="flex min-h-screen justify-center items-center">
      <p>Hello World</p>

      Click <Link className="underline" href={'/documents/123'}><Button>Here</Button> </Link> to go to document id
    </div>
  )
}

export default Home