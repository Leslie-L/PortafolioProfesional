import { useState } from "react";
import { contactInfo } from "../../Constants";
import { useForm } from "react-hook-form";
import Notification from "./Notification";

function Contact() {
    const { register, handleSubmit,reset } = useForm();
    const [showNotification, setShowNotification] = useState(false);
    function handleNotification() {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 2500);
    }

    function onSubmit(data,e){
        e.preventDefault();
        //console.log(data)
        
        const newMess = 'Name: ' + data.name + '<br>'+"Email: "+data.email+ '<br> ' + data.message;
        const messageContent ={
            SecureToken : import.meta.env.VITE_TOKEN,
            To : import.meta.env.VITE_EMAIL,
            From : import.meta.env.VITE_EMAIL,
            Subject : data.subject,
            Body : newMess
        }
        
        if(window.Email.send){
            window.Email.send(messageContent)
                .then( message => {
                    reset()
                    handleNotification() 
                });
        }
        
    }
    return(
        <section id="contact" className=" mb-20 max-h-full min-h-screen flex flex-col justify-center items-center  dark:bg-black">
            {showNotification && <Notification/>}
            <div  className='w-full md:h-1/5'>
                <h2 className='justify-self-start px-4 font-beba font-bold text-xl text-orange'>{contactInfo.TITLE}</h2>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center lg:flex-row lg:space-x-8">
                <p className="font-montserrat text-md ml-4 lg:pt-20 lg:w-96 lg:self-start lg:text-xl dark:text-white">{contactInfo.Paragraph}</p>
                <form 
                    className="w-[310px] h-[480px] flex flex-col justify-center shadow-lg rounded-lg p-3 dark:shadow-white dark:border-2 dark:border-white"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    
                        <span className="font-beba font-semibold text-blue">{contactInfo.FORM[0]}</span>
                        <input className="w-full shadow-lg h-8 rounded-md dark:bg-white" type="text" name="name" id="name" {...register("name", { required: true})} />
                    
                    
                        <span className="font-beba font-semibold text-blue">{contactInfo.FORM[1]}</span>
                        <input className="w-full shadow-lg h-8 rounded-md dark:bg-white" type="text" name="subject" id="subject" {...register("subject", { required: true})} />
                    
                    
                        <span className="font-beba font-semibold text-blue">{contactInfo.FORM[2]}</span>
                        <input className="w-full shadow-lg h-8 rounded-md dark:bg-white" type="email" name="email" id="email" {...register("email", { required: true})} />
                    
                    
                        <span className="font-beba font-semibold text-blue">{contactInfo.FORM[3]}</span>
                        <textarea className="w-full shadow-lg  rounded-md dark:bg-white"  name="" id="" cols="30" rows="8" {...register("message", { required: true})}></textarea>
                    
                    <button 
                        className="w-full h-8 rounded-md mt-2  bg-orange font-bebas text-lg text-bold text-white hover:bg-pink"
                        type="submit"
                    >{contactInfo.BUTTON}</button>
                </form>
            </div>
            
        </section>
    )
}
export default Contact;