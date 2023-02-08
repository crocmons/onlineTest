import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Feed = () => {
  return (
    <>
    <div className='flex bg-blue-400 font-semibold m-0  text-white border justify-between'>
 <h3 className='flex bg-blue-400 font-semibold  m-2 text-white p-1'>Q.No:1</h3> 
 <label for="pet-select">View in:

<select className='m-2 text-black bg-white'>
    <option value="">English</option>
    <option value="physics">Physics</option>
    <option value="math">Math</option>
    <option value="chemistry">Chemistry</option>
    
</select>
</label>
</div>
  <feed className="flex justify-between">
<div className='flex px-2 m-2 border border-gray-500'>
    <div className='flex flex-row text-xl '>
        <h1 className='flex px-1 p-2 m-2 text-blue-700'>Question Instruction:</h1>
    
        <p className='px-2 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas natus culpa ratione iste magnam veritatis dolores in dignissimos quod ad nihil totam assumenda temporibus, sed amet
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error autem, possimus voluptatum laudantium velit, quaerat dolores non corrupti necessitatibus temporibus laboriosam porro saepe ipsum fugit maxime laborum et deserunt?
        </p>
    <div className='px-2 text-xl'>
        <h1 className='text-blue-700'>Question</h1>
        <p className=' px-2 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptas natus culpa ratione iste magnam veritatis dolores 
        
        <math className='flex flex-row text-3xl p-2 m-2'>
    <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow>
        <mrow><mo>+</mo><mn>∞</mn></mrow>
      </munderover>
      <mfrac>
        <mn>1</mn>
        <msup><mi>n</mi><mn>2</mn></msup>
      </mfrac>
    </mrow>
    <mo>=</mo>
    <mfrac>
      <msup><mi>π</mi><mn>2</mn></msup>
      <mn>6</mn>
    </mfrac>
  </math>
  <p>
  The infinite sum
  <math display="block">
    <mrow>
      <munderover>
        <mo>∑</mo>
        <mrow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mrow>
        <mrow>
          <mo>+</mo>
          <mn>∞</mn>
        </mrow>
      </munderover>
      <mfrac>
        <mn>1</mn>
        <msup>
          <mi>n</mi>
          <mn>2</mn>
        </msup>
      </mfrac>
    </mrow>
  </math>
  is equal to the real number
  <math display="inline">
    <mfrac>
      <msup>
        <mi>π</mi>
        <mn>2</mn>
      </msup>
      <mn>6</mn>
    </mfrac>
  </math>.
</p>
    
        
        </p>
    </div>
    </div>
    </div>
<div className='flex-grow flex-wrap gap-2 border border-gray-500 bg-sky-100'>
  <div className='flex flex-row justify-center space-x-2 flex-grow border px-7 m-2'>
    <Image 
    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
    width={100}
    height={100}
    objectFit="contain"
    className='flex rounded-md mx-5 cursor-pointer'
    />
    <div className='flex justify-center gap-2 m-3 p-5'>
    <p className='text-sm'>Time Left - 02:30:51</p>
    <p >Rose Ferdonaz</p>
    </div>
    </div>
  <div className='bg-blue-400 p-1 rounded-sm text-start text-white'>
    <h2>Question Pallet</h2>
  </div>
    
  <div className='flex flex-col p-2 gap-1 text-start'>
    <Link href="https://byjus.com/jee/entrance-exams/">
  <button className=' bg-green-500 px-5'>1</button>
    <button className='bg-red-500 px-5'>2</button>
    <button className='bg-green-500 px-5 '>3</button>
    <button className='bg-green-500 px-5 '>4</button>
    <button className='bg-red-500 px-5 '>5</button>
    </Link>
    <Link href="https://byjus.com/jee/entrance-exams/" >
    <button className='bg-yellow-400 px-5 '>6</button>
    <button className='bg-green-500 px-5 '>7</button>
    <button className='bg-white px-5 '>8</button>
    <button className='bg-violet-500 px-5 '>9</button>
    <button className='bg-gray-400 px-5 '>10</button>
    </Link>
</div>
    <h2 className='bg-blue-400 p-1 mt-1 rounded-sm text-start text-white'>Legend (Click to View)</h2>
    <div className='flex flex-col p-3 m-2 gap-2'>
      <Link href="https://byjus.com/jee/entrance-exams/" className='inline-block'>
    <button className='bg-green-500 pr-5 m-2 p-1'>4 answers</button>
    <button className='bg-red-500 pr-5 m-2 p-1'>2 answers</button>
    </Link>
    <Link href="https://byjus.com/jee/entrance-exams/" className='inline-block'>

    <button className='bg-violet-500 pr-5 m-2 p-1'>1 answers</button>
    <button className='bg-yellow-500 pr-5 m-2 p-1'>1 answers</button>
    </Link>
    <Link href="https://byjus.com/jee/entrance-exams/" className='inline-block'>

    <button className='bg-gray-400 pr-5 m-2 p-1'>1 answers</button>
    <button className='bg-white pr-5 m-2 p-1'>1 answers</button>
    </Link>
    <div>
    <h2 className='bg-blue-500 p-1 mt-1 rounded-sm text-center text-white'>10 All Questions</h2>
    </div>
    <div className='mt-4 p-3 flex gap-1 flex-wrap text-start'>
    <Link href="https://byjus.com/jee/entrance-exams/">

<button className='bg-blue-500 rounded-md text-white m-2 px-4 p-2'>Profile</button>
<button className='bg-blue-500 rounded-md text-white m-2 px-4 p-2'>Instr</button>
</Link>
<Link href="https://byjus.com/jee/entrance-exams/" >

<button className='bg-blue-500 rounded-md text-white m-2 px-4 p-2'>Questions</button>
<button className='bg-blue-500 rounded-md text-white m-2 px-4 p-2'>Submit</button>
</Link>
    </div>
  </div>
    </div>
    </feed>
    </>
  )
}

export default Feed