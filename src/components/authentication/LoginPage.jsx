import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import './LoginPage.css'
import {z} from "zod"
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
    name: z.string().min(3),
    email: z.string().email({message: "Please enter a valid email address"}).min(3),
    password: z.string().min(8),
    confirmPassword: z.string(),
    deliveryAddress: z.string().min(15, "Address must be more than 15 characters")
})

function LoginPage() {
 const {register,
     handleSubmit,
    formState: {errors}} 
    = useForm({resolver: zodResolver(schema)})

 const onSubmit = (formData) => {console.log(formData)}
 
  return (
    <section className="align_center form_page">
        <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Login Form</h2>
            <div className="form_inputs">
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    {...register("email")}
                    id="email"
                    className="form_text_input"
                    placeholder="Enter your email address"
                    />
                   {errors.email && 
                   <em className="form_error">
                        {errors.email.message}
                    </em>} 
                {errors.email ==="minLength" && 
                   <em className="form_error">
                    Name should be more than 3 characters
                    </em>} 
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input         
                    type="password" 
                    id="password"
                    {...register("password")}
                    className="form_text_input"
                    placeholder="Enter your password"
                     />
                 {errors.password && 
                   <em className="form_error">
                        {errors.password.message}
                    </em>} 
                </div>
                <button type="submit" className="search_button form_submit">
                Submit </button>
            </div>
        </form>
    </section>
  )
}

export default LoginPage