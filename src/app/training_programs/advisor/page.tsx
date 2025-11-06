import Image from 'next/image';
import FAQItem from '../../../components/shared/FAQItem';
import { faqItems } from '../../../data/faqData';
import { Button } from '@/components/ui/Button';

const AdvisorPage = () => {
  return (
    <>
      <div className="flex flex-row justify-between gap-[100px] my-15">
        <div className="w-[629px] mx-auto grid justify-end items-end space-y-10 items-end text-white ml-10">
          <div className='flex flex-col gap-12'>
            <h1 className='text-[45px] text-[#003AD4] font-medium'>Speak to an Advisor</h1>
            <p className="text-[20px] text-[#3D3D3D]">
              Have questions about our training programs, partnerships, 
              or custom solutions? Our advisors are ready to provide expert 
              guidance, walk you through your options, and help you choose the 
              best path for your organization or career goals.
            </p>
            <form action="" className="flex flex-col justify-end items-start gap-4 rounded">
              <input 
                type="text" 
                name="Name of Organization" 
                id="Name of Organization" 
                title="Name of Organization"
                placeholder='Name of Organization' 
                className="bg-[#EBEBEB] text-[#727272] h-[43px] w-[631px] rounded-[9px] p-3 placeholder-[#727272] focus:border-red-400 outline-none" 
              />
              <input 
                type="email" 
                name="Email of Organization" 
                title="Email of Organization" 
                placeholder='Email' 
                className="bg-[#EBEBEB] text-[#727272] h-[43px] w-[631px] rounded-[9px] p-3 placeholder-[#727272] focus:border-red-400 outline-none" 
              />
              <textarea 
                name="Message" 
                id="Message" 
                title="Message" 
                rows={5}
                placeholder='Message' 
                className="bg-[#EBEBEB] text-[#727272] w-[631px] rounded-[6px] p-3 placeholder-[#727272] outline-none"
              >

                </textarea>
              <Button 
                variant="primary" 
                size="md"
                className="text-[20px] font-[300]"
              >
                Speak  To An Advisor
              </Button>
            </form>
          </div>
        </div>
        <div className="w-[597px] bg-[#003AD4] px-7 py-10  mx-auto rounded-tl-md  rounded-bl-md">
          <h1 className="text-[40px] text-white font-semibold">FAQ</h1>
          <div className="max-w-xl mx-auto">
            {faqItems.map((item) => (
              <FAQItem 
                key={item.id} 
                question={item.question} 
                answer={item.answer} 
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
};

export default AdvisorPage;
