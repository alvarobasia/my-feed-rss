import React, { useContext, useState } from 'react'
import { RssInput, RssAdd } from './styles'
import { useMutation } from '@apollo/client'
import { ADD_LINK, DELETE_LINK } from '../../mutations/user'
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/router'
import { FeedContext } from '../../contexts/FeedContext'

export default function RssLink() {
  const { refetch } = useContext(FeedContext)
  const [addLink] = useMutation(ADD_LINK, {
    onError: () => {
      toast.error(`Não foi possível adicionar o link ${name}.`)
    },
    onCompleted: () => {
      toast.success(`Link ${name} adcionado com sucesso!`)
      refetch()
    }
  })

  const [name, setName] = useState('')
  const [link, setLink] = useState('')

  function handleAdd() {
    addLink({
      variables: {
        name,
        link
      }
    })
  }
  return (
    <>
      <RssInput
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <RssInput
        placeholder="Link RSS"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <RssAdd onClick={() => handleAdd()}>Adicionar</RssAdd>
      <ToastContainer autoClose={5000} position={'bottom-center'} />
    </>
  )
}
