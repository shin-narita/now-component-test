import * as React from 'react';

interface Props {
  children: React.ReactNode
}

const Header: React.FC<Props> = (props: Props) => {
  return (
    <header>
      pages header
      <p>{props.children}</p>
    </header>
  )
}

export default Header;
