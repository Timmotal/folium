import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import LineGradient from "../components/LineGradient";



const Contact = () => {

    const {
        register,
        trigger,
        formState: {errors}
    } = useForm();

    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

  return (
    <section id="contact" className="py-48">
        {/* HEADINGS */}
        <motion.div
                    className="flex justify-end w-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .5 }}
                    transition={{ duration: .5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >
                    <div>
                    <p className="font-playfair text-semibold text-4xl mb-5 text-red">
                        <span className="text-gumbo">CONTACT ME </span>TO GET STARTED
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="w-1/2"/>
                    </div>
                    <p className="text-end text-xm mb-3">
                        Have some talk that needs wings? <br />
                        Want to see if we can develop awesome stuffs together? <br />
                        You may drop them below<br />
                        I'd love to hear from you. 
                    </p>
                    </div>
                </motion.div>

    {/* FORM & IMAGE SECTION*/}
    <div className="md:flex md:justify-between gap-16 mt-15">
    <motion.div
                    className="basis-1/2 flex justify-center" 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .5 }}
                    transition={{ duration: .5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <img className="rounded-xl" src="../assets/futuristic_typewriter.png" alt="contact" />
                </motion.div>

                <motion.div
                    className="basis-1/2 mt-10 md:mt-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .5 }}
                    transition={{ delay: .2, duration: .5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 }
                    }}
                >
                    <form 
                        action="https://formsubmit.co/db803c71af429f83b1f5d9b08a821186"
                        onSubmit={onSubmit}
                        method="POST"
                        target="_blank"
                    >
                        {/* NAME INPUT */}
                        <input 
                            type="text" 
                            className="w-full bg-red font-semibold placeholder-opaque-black p-3"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })} 
                        />
                        {errors.name && (
                            <p className="text-red mt-1">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name === "maxLength" && "Max Length is 100 Characters"} 
                            </p>
                        )}
                        {/* MESSAGE */}
                        <input 
                            type="text" 
                            className="w-full bg-red font-semibold placeholder-opaque-black p-3 mt-5" 
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="text-red mt-1">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}
                        {/* EMAIL */}
                        <textarea 
                            type="text" 
                            className="w-full bg-red font-semibold placeholder-opaque-black p-3 mt-5" 
                            placeholder="MESSAGE"
                            rows="4"
                            cols="50"
                            {...register("message", {
                                required: true,
                                maxLength: 2000
                            })}
                        />
                        {errors.message && (
                            <p className="text-red mt-1">
                                {errors.message.type === "required" && "This field is required."}
                                {errors.message.type === "maxLength" && "kindly summarize"}
                            </p>
                        )}

                        <button
                            type="submit" 
                            className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500">
                            SEND MESSAGE
                        </button>
                    </form>
                </motion.div>

    </div>
    </section>
  )
}

export default Contact