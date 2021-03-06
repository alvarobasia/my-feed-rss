import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button, Header, Buttons } from './styles'

export default function SiteHeadBar() {
  const [isOnTop, setIsOnTop] = useState(false)
  const router = useRouter()
  useEffect(() => {
    window.addEventListener('scroll', () => handleScroll())
  }, [])

  function handleScroll() {
    if (window.scrollY > 100) {
      setIsOnTop(true)
    } else {
      setIsOnTop(false)
    }
  }

  function handleLogin() {
    router.push('/login')
  }

  return (
    <Header isOnTop={isOnTop}>
      <Image height={60} width={160} src="/logo-h.png"></Image>
      <Buttons>
        <Button
          initial={{ y: !isOnTop ? -100 : -100, opacity: !isOnTop ? 1 : 0 }}
          animate={{ y: !isOnTop ? -100 : 0, opacity: !isOnTop ? 0 : 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            duration: 0.5
          }}
          main={true}
          onClick={() => router.push('/newuser')}
        >
          Registrar
        </Button>

        <Button
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 100,
            duration: 0.5
          }}
          whileHover={{ scale: 1.08 }}
          main={false}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Buttons>
    </Header>
  )
}
