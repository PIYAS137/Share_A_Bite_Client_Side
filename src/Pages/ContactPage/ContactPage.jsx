import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const ContactPage = () => {

    const form = useRef (null);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('default1', 'template_wpuri8h', e.currentTarget, 'R-PIU8JgrSoL-sOGO')
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Piyas Receive Your Response. Let check your email...!",
                    showConfirmButton: false,
                    timer: 2000
                });
            }, (error) => {
                console.log(error.text);
            });
        e.currentTarget.reset()
    }

    return (
        <div className='-mt-16 w-full h-screen flex items-center justify-center '>
            <form ref={form} className='dark:bg-slate-600 bg-green-200 p-5 rounded-xl w-[550px] flex items-center flex-col' onSubmit={sendEmail}>
                <h1 className=' text-2xl mb-4 font-black text-green-600'>Contact With Us</h1>
                <div className=' w-full'>
                    <input className='w-full p-2 rounded-lg' placeholder='Enter Your name' type="text" name="from_name" />
                </div>
                <div className=' w-full mt-2'>
                    <input className='w-full p-2 rounded-lg' placeholder='Enter your email' type="email" name="from_email" />
                </div>
                <div className=' w-full mt-2'>
                    <textarea  className='w-full p-2 rounded-lg' rows={4} placeholder='Enter your message' name="message" />
                </div>
                <div>
                    <input className='border border-green-500 py-2 px-7 rounded-lg bg-white font-bold text-green-600' type="submit" value="Send Message" />
                </div>
            </form>
        </div>
    )
}

export default ContactPage

