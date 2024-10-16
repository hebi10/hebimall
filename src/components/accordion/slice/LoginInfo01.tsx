import React, { ReactNode } from 'react'
import AccordionLayout from '../AccordionLayout';

interface LoginInfoProps {
  children?: ReactNode;
}

const LoginInfo01: React.FC<LoginInfoProps> = ({ children }) => {
  const targetName = "어드민 계정";

  const data = {
    id: "admin1234", 
    password: "adminpassword",
    nickname: "Admin",
  }

  return (
    <AccordionLayout name={targetName} data={data}>
      {children}
    </AccordionLayout>
  )
}

export default LoginInfo01;