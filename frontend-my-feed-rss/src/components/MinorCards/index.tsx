import React from 'react'
import { StyledDiv } from './style'
import Image from 'next/image'
export default function MinorCards() {
  return (
    <StyledDiv
      animate={{ scale: 1.05 }}
      transition={{
        repeatType: 'reverse',
        repeat: Infinity,
        duration: 2,
        delay: Math.random() * 3
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Image src="/character 14.svg" height="180px" width="200px" />
        <h3
          style={{
            fontSize: '32px',
            width: '180px',
            overflow: 'hidden',
            minHeight: '2rem',
            color: 'orange',
            fontWeight: 600
          }}
        >
          Titulo
        </h3>
      </div>

      <p
        style={{ fontSize: '22px', textAlign: 'center', padding: '2rem', color: '#fff' }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis
        ratione sint voluptatem distinctio a voluptate! Cum enim iusto, autem illo ullam
      </p>
    </StyledDiv>
  )
}
