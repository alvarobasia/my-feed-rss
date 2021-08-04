import { useState } from 'react'
import { DivLink, IconRemove, EditIcon, EditInput, EditButton } from './styles'

type LinkInfoProps = {
  link: string
  name: string
}

export default function LinkInfo({ name }: LinkInfoProps) {
  const [editMode, setEditMode] = useState(false)

  function handleEditMode() {
    setEditMode((prev) => !prev)
  }

  return (
    <DivLink editMode={editMode}>
      <div>
        <p>{name}</p>
        <div>
          <EditIcon onClick={handleEditMode} />
          <IconRemove />
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
