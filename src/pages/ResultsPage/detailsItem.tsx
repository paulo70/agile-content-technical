import { RefObject, forwardRef } from 'react';
import { ItemDetails } from "./style"

export interface PropsDetails {
  title: string;
  description: string;
  image: string;
  url: string;
  className?: string;
  ref?: RefObject<HTMLDivElement>
}

const Details = forwardRef<HTMLDivElement, PropsDetails>(
  ({ title, description, image, url, className }, ref) => {
    return (
      <ItemDetails ref={ref} className={className}>
        <img src={image} alt="Images from animals" />
        <a href="#">{url}</a>
        <h3>{title}</h3>
        <p>{description}</p>
      </ItemDetails>
    );
  }
);

export default Details