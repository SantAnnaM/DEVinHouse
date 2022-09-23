import React from 'react';
import { LinkArea, LinkIcon} from './styled';

export default ({icon, link, title}) => {

  const handleLinkClick = (e) => {
    
  }

  return (
    <LinkArea data-tip={title} data-for="tip-right" href={link} >
      <LinkIcon src={icon}/>
    </LinkArea>

  )
}