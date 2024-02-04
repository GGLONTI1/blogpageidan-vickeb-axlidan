import { register } from '@/lib/action'
import React from 'react'
import styles from "./registerForm.module.css"
import RegisterForm from '@/components/registerForm/registerForm'



const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage