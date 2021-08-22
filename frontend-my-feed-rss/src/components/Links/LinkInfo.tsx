// import { useState } from 'react'
import { DivLink, IconRemove, EditInput, EditButton } from './styles'

type LinkInfoProps = {
  link: string
  name: string
  callBackOnRemove: (link: string) => void
}

export default function LinkInfo({ name, link, callBackOnRemove }: LinkInfoProps) {
  // const [editMode, setEditMode] = useState(false)

  // function handleEditMode() {
  //   setEditMode((prev) => !prev)
  // }

  function handleDelete(linkReceive: string) {
    callBackOnRemove(linkReceive)
  }

  return (
    <DivLink editMode={false}>
      <div>
        <p>{name}</p>
        <div>
          {/* <EditIcon onClick={handleEditMode} /> */}
          <IconRemove onClick={() => handleDelete(link)} />
        </div>
      </div>
      <div>
        <EditInput placeholder="Novo nome" />
        <EditInput placeholder="Novo link" />
        <EditButton>Comfirmar</EditButton>
      </div>
    </DivLink>
  )
}
