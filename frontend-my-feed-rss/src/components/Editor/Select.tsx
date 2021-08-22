import { SelectStyle } from './styles'
type SelectProps = {
  onChange: (value: string) => void
}
export default function Select({ onChange }: SelectProps) {
  return (
    <SelectStyle onChange={(e) => onChange(e.target.value)}>
      <option value="unstyled"></option>
      <option value="header-one">H1</option>
      <option value="header-two">H2</option>
      <option value="header-three">H3</option>
      <option value="header-four">H4</option>
      <option value="header-five">H5</option>
      <option value="header-six">H6</option>
    </SelectStyle>
  )
}
