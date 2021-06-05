import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledDiv = styled(motion.div)`
  width: 30%;
  margin: 1rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 1px 1px 20px lightgray;
  border-radius: 8px;
  background: rgb(255, 152, 0);
  background: linear-gradient(
    234deg,
    rgba(255, 152, 0, 0.1741071428571429) 6%,
    rgba(255, 152, 0, 0.5326505602240896) 35%,
    rgba(0, 145, 255, 1) 96%
  );
`
// export const DivStule = styled.div`
//   border-bottom: 100px solid #c1c1c1;
//   border-left: 3px solid transparent;
//   border-right: 15px solid transparent;
//   height: 500px;
//   width: 120px;
// `
