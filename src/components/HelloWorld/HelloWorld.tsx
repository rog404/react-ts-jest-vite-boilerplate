import { Icon } from "../../ui/Icon/Icon";
import Container from "./HelloWorld.style";

export function HelloWorld() {
  return (
    <Container>
      <h1>Hello World</h1>
      <p>This is a Boilerplate for Vite<Icon name='vite-logo'/>, React<Icon name='react-logo'/>, Styled-Components<Icon name='styled-components-logo'/> & Jest<Icon name='jest-logo'/>!</p>
    </Container>
  )
}