import React, { ReactNode } from 'react'
import AccordionLayout from '../AccordionLayout';

interface LoginInfoProps {
  children?: ReactNode;
}

const LoginInfo06: React.FC<LoginInfoProps> = ({ children }) => {
  const targetName = "일반 계정 [5]";

  const data = {
    id: "user1415",
    password: "userpassword",
    nickname: "User5",
  }

  return (
    <AccordionLayout name={targetName} data={data}>
      {children}
    </AccordionLayout>
  )
}

export default LoginInfo06;