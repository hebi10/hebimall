import React, { ReactNode } from 'react'
import AccordionLayout from '../AccordionLayout';

interface LoginInfoProps {
  children?: ReactNode;
}

const LoginInfo02: React.FC<LoginInfoProps> = ({ children }) => {
  const targetName = "일반 계정 [1]";

  const data = {
    id: "user1234",
    password: "userpassword",
    nickname: "User1",
  }

  return (
    <AccordionLayout name={targetName} data={data}>
      {children}
    </AccordionLayout>
  )
}

export default LoginInfo02;