import React, { ReactNode } from 'react'
import AccordionLayout from '../AccordionLayout';

interface LoginInfoProps {
  children?: ReactNode;
}

const LoginInfo03: React.FC<LoginInfoProps> = ({ children }) => {
  const targetName = "일반 계정 [2]";

  const data = {
    id: "user5678",
    password: "userpassword",
    nickname: "User2",
  }

  return (
    <AccordionLayout name={targetName} data={data}>
      {children}
    </AccordionLayout>
  )
}

export default LoginInfo03;