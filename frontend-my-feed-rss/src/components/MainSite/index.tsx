import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import CardSite from '../CardsSite'
import MinorCards from '../MinorCards'
import Footer from '../SiteFooter'
import { RightDiv, StyledButton, StyledDiv, StyledSpan, StyledText } from './styles'

export default function Main() {
  const [cards, setCards] = useState([false, false, false])
  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll())
  }, [])

  function handleScroll() {
    if (window) {
      setCards((prev) => [
        prev[0] || window.scrollY > 10,
        prev[1] || window.scrollY > 700,
        prev[2] || window.scrollY > 1000
      ])
    }
  }
  return (
    <>
      <StyledDiv>
        <RightDiv>
          <div>
            <StyledText>
              MyFeedRss é seu <StyledSpan>principal local </StyledSpan>para leitura de
              seus
              <StyledSpan> conteúdos favorítos</StyledSpan> de diversos sites
            </StyledText>
            <StyledButton
              initial={{ y: 900, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                duration: 0.5
              }}
              whileHover={{ scale: 1.08, boxShadow: '3px 3px 39px #0066B3' }}
            >
              Se registre agora
            </StyledButton>
          </div>

          <img height="420" src="./character 1.svg" alt="" />
          <img height="420" src="./character 2.svg" alt="" />
        </RightDiv>
        <motion.img
          initial={{ y: 10, scale: 1 }}
          animate={{ y: 0, scale: 1.5 }}
          transition={{
            duration: 1
            //   repeatType: 'reverse',
            //   repeat: Infinity
          }}
          src="./s.svg"
          height="500px"
          style={{
            position: 'absolute',
            bottom: '5rem',
            left: '0',
            opacity: 0.8,
            zIndex: -1
          }}
        />
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2
            //   repeatType: 'reverse',
            //   repeat: Infinity
          }}
          src="./s.svg"
          height="400px"
          style={{
            //   transform: 'rotate(280deg)',
            position: 'absolute',
            bottom: '10rem',
            right: '10rem',
            opacity: 0.8,
            zIndex: -2
          }}
        />
      </StyledDiv>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          background: '#FF980022',
          minHeight: '60rem'
        }}
      >
        {cards[0] && <CardSite />}
        {cards[1] && <CardSite />}
        {cards[2] && <CardSite />}
        {/* <CardSite />
        <CardSite /> */}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          background: '#FF980022'
        }}
      >
        <MinorCards />
        <MinorCards />
        <MinorCards />
      </div>
      <Footer />
    </>
  )
}
