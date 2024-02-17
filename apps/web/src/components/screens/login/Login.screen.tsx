import loginscreen from '../../../../public/loginscreen.svg'
import Image from 'next/image';

export default function LoginScreen() {
  return (
    <>
    <div className='p-10'>
        <div className="max-w-60 mb-2">
            <h1 className='text-4xl font-bold'>Welcome to Voice Nest</h1>
        </div>

      <p className='max-w-lg mb-2 text-black text-sm'>
        Here, we believe that building a strong professional network begins with
        your participation. We are delighted to offer a modern and user-friendly
        service to ensure you have the best experience.
      </p>
      <a href="#" className='text-indigo-700 font-bold mb-2'>Join Now!</a>
      <div className="pl-4">
      <Image src={loginscreen} height={200} width={300} alt='login-image'/>

      </div>
    </div>
    </>
  );
}
