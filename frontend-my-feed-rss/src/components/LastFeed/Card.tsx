import { motion } from 'framer-motion'
import { CardStyle } from './styles'

export default function Card() {
  return (
    <CardStyle whileHover={{ borderColor: '#0091FF' }}>
      <div>
        <motion.img src="./s.svg" width="50%" />
      </div>
      <div>
        <h1>sss</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident excepturi
          dolorum, nihil vero libero exercitationem perferendis odit at. Quod facilis
          quidem delectus ullam tempore exercitationem dolorum temporibus amet, placeat
          harum?
        </p>
      </div>
    </CardStyle>
  )
}
