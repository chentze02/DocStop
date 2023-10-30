'use client'

import Container from '@/components/Container'

/*
  {
    "script_content": "",
    "voice_model_id": "",
    "image_style": "",
    "subtitles": {
      "font": "",
      "color_hex_code": "",
    }
  }
*/

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  alert('todo: implement submit logic')
}

export default function NewVideo() {
  return (
    <div className='min-h-screen'>
      <form onSubmit={handleSubmit}>
        {/* Script */}
        <div>
          <label
            htmlFor='script_content'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Script
          </label>
          <p className='mt-3 text-sm leading-6 text-gray-600'>
            Write the script for the video speaker below.
          </p>
          <div className='mt-2'>
            <textarea
              id='script_content'
              name='script_content'
              rows={3}
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              defaultValue={''}
            />
          </div>
          <p className='mt-3 text-sm leading-6 text-gray-600'>
            Character count: {0}
          </p>
        </div>

        {/* Image Style */}
        <div className='sm:col-span-3 mt-5'>
          <label
            htmlFor='image_style'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Image Style
          </label>
          <div className='mt-2'>
            <select
              id='image_style'
              name='image_style'
              // autoComplete='country-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
            >
              <option>Anime</option>
              <option>GTA</option>
              <option>Steampunk</option>
            </select>
          </div>
        </div>

        {/* Voice Model */}
        <div className='sm:col-span-3 mt-5'>
          <label
            htmlFor='voice_model'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Voice Model
          </label>
          <div className='mt-2'>
            <select
              id='voice_model'
              name='voice_model'
              // autoComplete='country-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
            >
              <option>Gigachad</option>
              <option>British Dude</option>
              <option>Bruh</option>
            </select>
          </div>
        </div>

        {/* Subtitles */}
        <div className='sm:col-span-3 mt-5'>
          <label
            htmlFor='subtitle_style'
            className='block text-sm font-medium leading-6 text-gray-900'
          >
            Subtitle Style
          </label>
          <div className='mt-2'>
            <select
              id='subtitle_style'
              name='subtitle_style'
              // autoComplete='country-name'
              className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
            >
              <option>Comic Book</option>
              <option>Dramatic</option>
              <option>Impact</option>
            </select>
          </div>
        </div>

        {/* TODO: Subtitle Color */}

        {/* Submit */}
        <div className='mt-6 flex items-center justify-start gap-x-6'>
          <button
            type='submit'
            className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Create Video!
          </button>
        </div>
      </form>
    </div>
  )
}
