"use client"
import React, { FormEvent } from 'react'
import { useState } from 'react'

const isValidAmazonProductURL=(url: string)=>{
  try {
    
    const parsedURL= new URL(url);
    const hostName= parsedURL.hostname;

    if(
      hostName.includes('amazon.com')||
      hostName.includes('amazon.')||
      hostName.endsWith('amazon')
    )
    {
      return true
    }else {return false}
  } catch (error) {
    return false
  }

}
const SearchBar = () => {
  const [searchPrompt, setsearchPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
 
  const handleSubmit=(event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault(); 
    const isValid=isValidAmazonProductURL(searchPrompt)
    alert(isValid?'Valid link':'Invalid link')
    if(!isValid){
      alert('please provide a valid link')
      try {
        setIsLoading(true)
        //scraping code
        
      } catch (error) {
        
      }finally
      {
        setIsLoading(false)

      }
    }

  }
  return (
    <form  className='flex flex-wrap gap-4 mt-12'
    onSubmit={handleSubmit}>
        <input type="text"
        value={searchPrompt}
        onChange={(e)=>setsearchPrompt(e.target.value)}
        placeholder='Enter products link'
        className='searchbar-input' />
        <button type='submit' className='searchbar-btn'
        disabled={searchPrompt=== ''}>
          {
            isLoading?'Searching...':'Search'
          }
        </button>
        


    </form>
  )
}

export default SearchBar
