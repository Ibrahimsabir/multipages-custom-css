"use client"
import Typewriter from 'typewriter-effect';

export default function NestedContact() {
  return (
    <div className="flex flex-col items-center mt-32">
    {/* <h2 className="title-font sm:text-4xl text-l mb-3 font-small text-blue-600">
    
      </h2> */}
      <h1 className="tracking-widest text-2xl title-font font-medium text-purple-600 mb-1">
        
        <br className="hidden lg:inline-block" />
      
      <Typewriter
           options={{
                       strings: ['This is my Nested Contact Page...'],
                       autoStart: true,
                       loop: true,
                    }}
/>
</h1>  
</div> 
    
  );

}
