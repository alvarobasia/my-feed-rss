import { Content, ImageDiv, StyledDiv, TextDiv } from './styles'
import Image from 'next/image'
import React from 'react'
export default function CardSite() {
  return (
    <StyledDiv
      initial={{ x: -800 }}
      animate={{ x: 0 }}
      transition={{
        duration: 1.8,
        type: 'spring',
        stiffness: 30
      }}
      whileHover={{ boxShadow: '10px 10px 30px lightgray' }}
    >
      <TextDiv>
        <h3>O MyFeedRss é totalmente gratúito e com uso ilimitado</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nemo aut
          laudantium magnam facere voluptatem, magni iusto vero quia. Iure, doloremque
          possimus quia veniam impedit incidunt perferendis ut aperiam quaerat.
        </p>
      </TextDiv>
      <ImageDiv>
        <Content whileHover={{ boxShadow: '10px 10px 30px lightgray' }}></Content>
        <div style={{ zIndex: 50, marginTop: '2rem' }}>
          <Image src="/character 16.svg" height="200px" width="350px" />
        </div>
      </ImageDiv>
    </StyledDiv>
  )
}
