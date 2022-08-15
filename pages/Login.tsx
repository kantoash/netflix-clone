import { async } from '@firebase/util';
import Head from 'next/head'
import Image from 'next/image'
import { emit } from 'process';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import useAuth from '../hooks/useAuth';

interface Inputs {
    email: string
    password: string
}

function Login() {
    const [login, setlogin] = useState(false);
    const { signIn, signUp } = useAuth()
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async ({email,password}) => {
        {(login) ? (
            await signIn(email, password)
        ) : (
            await signUp(email, password)
        )}
    };

  return (
    <div className='relative flex flex-col h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent'>
        <Head>
            <title>Home - Netflix</title>
            <link rel='icon' href='/favicon.ico'/>
        </Head>
        <Image
            src="https://rb.gy/p2hphi"
            layout='fill'
            className='-z-10 !hidden opacity-60 sm:!inline'
            objectFit='cover'
        />
        <img src="https://rb.gy/ulxxee" height={150} width={150} className='absolute top-4 left-4 cursor-pointer object-contain md:left-10 md:top-6'/>

        <form onSubmit={handleSubmit(onSubmit)} className='relative mt-24 spcey-8 bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14'>
            <h1 className='pb-3 text-4xl font-semibold'>Sign In</h1>
            <div className='space-y-4'>
                <label className='inline-block w-full'>
                    <input type="email" className='input' placeholder='Email' 
                    {...register('email',{required: true})}
                    />
                     {errors.email && <span className='text-red-500'>Please enter a valid email</span>}
                </label>
                <label className='inline-block w-full'>
                    <input type="password" placeholder='Password' className='input'
                    {...register('password',{required: true})}
                    />
                     {errors.password && <span className='text-red-500'>Your password must contain between 8 and 60 characters.</span>}
                </label>

            </div>
            
            <button onClick={() => setlogin(true)} className='w-full rounded bg-[#e50914] py-4 mt-3 font-semibold'>Sign In</button>

            <div className='mt-4 text-gray-500'>
                New to Netflix?
                <button onClick={() => setlogin(false)} type='submit' className='text-white pl-2 hover:underline'>Sign up now</button>
            </div>
        </form>
    </div>
  )
}

export default Login