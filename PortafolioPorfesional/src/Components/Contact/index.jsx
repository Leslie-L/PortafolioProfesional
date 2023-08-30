import { contactInfo } from "../../Constants";

function Contact() {
    return(
        <section id="contact" className="mt-20 mb-20 w-full h-auto flex flex-col justify-center items-center ">
            <div  className='w-full md:h-1/5'>
                <h2 className='justify-self-start px-4 font-beba font-bold text-xl text-orange'>{contactInfo.TITLE}</h2>
            </div>
            <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-8">
                <p className="font-montserrat text-md ml-4 lg:pt-20 lg:w-96 lg:self-start lg:text-xl">{contactInfo.Paragraph}</p>
                <form className="w-[310px] h-[480px] flex flex-col justify-center shadow-xl rounded-lg p-3">
                    <label htmlFor="name" >
                        <span className="font-beba font-semibold text-blue">{contactInfo.FORM[0]}</span>
                        <input className="w-full shadow-lg h-8 rounded-md" type="text" name="name" id="name" />
                    </label>
                    <label htmlFor="subject" >
                        <span className="font-beba font-semibold text-blue">{contactInfo.FORM[1]}</span>
                        <input className="w-full shadow-lg h-8 rounded-md" type="text" name="subject" id="subject" />
                    </label>
                    <label htmlFor="email" >
                        <span className="font-beba font-semibold text-blue">{contactInfo.FORM[2]}</span>
                        <input className="w-full shadow-lg h-8 rounded-md" type="email" name="email" id="email" />
                    </label>
                    <label htmlFor="">
                        <span className="font-beba font-semibold text-blue">{contactInfo.FORM[3]}</span>
                        <textarea className="w-full shadow-lg  rounded-md"  name="" id="" cols="30" rows="8"></textarea>
                    </label>
                    <button className="w-full h-8 rounded-md bg-orange font-bebas text-lg text-bold text-white hover:bg-pink">{contactInfo.BUTTON}</button>
                </form>
            </div>
            
        </section>
    )
}
export default Contact;