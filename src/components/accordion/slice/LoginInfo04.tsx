import React, { ReactNode } from 'react'
import AccordionLayout from '../AccordionLayout';

interface LoginInfoProps {
  children?: ReactNode;
}

const LoginInfo04: React.FC<LoginInfoProps> = ({ children }) => {
  const targetName = "일반 계정 [3]";

  const data = {
    id: "user91011",
    password: "userpassword",
    nickname: "User3",
  }

  return (
    <AccordionLayout name={targetName} data={data}>
      {children}
    </AccordionLayout>
  )
}

export default LoginInfo04;