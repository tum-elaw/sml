import { ComponentProps } from 'react'

type Props = ComponentProps<'svg'>
export function HfPHeader(props: Props) {
  return (
    <img src='./assets/images/sml/headersml.jpg' height="500" alt="Like"></img>
    // SML TODO
    // height should be relative to window/display size. How would that be implemented
    // match size to parent div so there are no borders?
  )
}