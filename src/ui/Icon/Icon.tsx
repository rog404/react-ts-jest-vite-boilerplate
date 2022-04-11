import Img from "./Icon.style"

type Props = {
  name: string
}

const getSrc = (imageName: string) => {
  return `/assets/icons/${imageName}.png`
}

export function Icon({ name }:Props) {
  console.log(name)
  return <Img
            // src='/assets/icons/vite-logo.png'
            src={getSrc(name)}
            alt={name}
          />
}