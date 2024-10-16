import React, { ReactNode } from 'react'
import AccordionLayout from '../AccordionLayout';

interface LoginInfoProps {
  children?: ReactNode;
}

const LoginInfo05: React.FC<LoginInfoProps> = ({ children }) => {
  const targetName = "일반 계정 [4]";

  const data = {
    id: "user1213",
    password: "userpassword",
    nickname: "User4",
  }

  return (
    <AccordionLayout name={targetName} data={data}>
      {children}
    </AccordionLayout>
  )
}

export default LoginInfo05;