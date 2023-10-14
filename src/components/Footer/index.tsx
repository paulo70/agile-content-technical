import { Footer } from "./style"
import {AiOutlineCopyright} from "react-icons/ai";

const MainFooter = () => {
  return (
    <Footer>
      <h5><AiOutlineCopyright size={10} /> Google 2021</h5>
      <h6>version 0.1.0</h6>
    </Footer>
  )
}

export default MainFooter