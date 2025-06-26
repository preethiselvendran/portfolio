import { useState } from 'react';

const Contact = ({ darkmode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Successfully Sent!");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear form
    setName("");
    setEmail("");
    setMessage("");

   
  }

  return (
    <div id='contact' className={`container mx-auto px-5 py-10 scroll-mt-15 ${darkmode ? "bg-black text-white" : "bg-white text-black"} 
    transition-colors duration-500 `}>
      <div className='text-center space-y-4'>
        <h1 className='text-2xl font-bold text-purple-700 mt-40'>Contact Me</h1>
        <h3 className='text-lg font-medium'>(Get In Touch)</h3>
        <p className='font-normal'>I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.</p>
      </div>

      <form onSubmit={handleSubmit} className='mt-10 flex flex-col items-center gap-5'>
        {/* Name and Email side by side */}
        <div className='flex flex-col md:flex-row gap-5 w-full justify-center'>
          <input
            type='text'
            placeholder='Enter Your Name'
            className='border border-stone-500 px-10 py-2 rounded-md focus:outline-none focus:border-purple-700 text-center w-full md:w-1/3'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type='email'
            placeholder='Enter Your Email'
            className='border border-stone-500 px-10 py-2 rounded-md focus:outline-none focus:border-purple-700 text-center w-full md:w-1/3'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Message below */}
        <textarea
     placeholder='Enter Your Message'
     className='border border-stone-500 px-20 py-3 rounded-md focus:outline-none focus:border-purple-700 text-center '
     value={message}
     onChange={(e) => setMessage(e.target.value)}
     required
></textarea>
        {/* Submit button below */}
        <button type='submit' className='bg-purple-700 text-white px-12 py-2 rounded-md hover:bg-purple-900 transition'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact;
