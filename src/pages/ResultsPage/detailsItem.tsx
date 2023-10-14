import { ItemDetails } from "./style"

export interface PropsDetails {
  title: string;
  description: string;
  image: string;
  url: string;
  className?: string;
}

const Details = ({title, description, image, url, className}: PropsDetails) => {
  return (
    <ItemDetails className={className}>
      <img src={image} alt="Images from animals" />
      <a href="#">{url}</a>
      <h3>{title}</h3>
      <p>{description}</p>
    </ItemDetails>
  )
}

export default Details