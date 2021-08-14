import React, { useEffect, useState } from 'react'
import CardSite from '../CardsSite'
import Link from 'next/link'
import MinorCards from '../MinorCards'
import Footer from '../SiteFooter'
import {
  RightDiv,
  StyledButton,
  StyledDiv,
  StyledDivMinorCards,
  StyledDivSecond,
  StyledImage,
  StyledImageMinor,
  StyledSpan,
  StyledText
} from './styles'

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
              <Link href="/newuser">Se registre agora</Link>
            </StyledButton>
          </div>

          <img height="420" src="./character 1.svg" alt="" />
          <img height="420" src="./character 2.svg" alt="" />
        </RightDiv>
        <StyledImage
          initial={{ y: 10, scale: 1 }}
          animate={{ y: 0, scale: 1.5 }}
          transition={{
            duration: 1
          }}
          src="./s.svg"
          height="500px"
        />
        <StyledImageMinor
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 2
          }}
          src="./s.svg"
          height="400px"
        />
      </StyledDiv>
      <StyledDivSecond>
        {cards[0] && <CardSite />}
        {cards[1] && <CardSite />}
        {cards[2] && <CardSite />}
      </StyledDivSecond>
      <StyledDivMinorCards>
        <MinorCards />
        <MinorCards />
        <MinorCards />
      </StyledDivMinorCards>
      <Footer />
    </>
  )
}
