import { data } from "autoprefixer"
import { getAllProduct } from "../utils/getAllProduct"

const Recommendation = () => {
  getAllProduct()
  console.log(data)
  
  return (
    <div>Recommendation</div>
  )
}

export default Recommendation