import { formatIsoTimestamp } from '@/utils'
import Link from 'next/link'
import { mock_video_data } from '../../mockData'

import { MOCK_DB_URL } from '@/constants'
import { GoogleAuth } from 'google-auth-library'

// const DB_URL = MOCK_DB_URL
// const auth = new GoogleAuth() // uses GOOGLE_APPLICATION_CREDENTIALS env var for auth
// const authClient = await auth.getIdTokenClient(DB_URL)

// const res = await authClient.request({
//   url: `${DB_URL}/remotion_video?user_id=development`,
//   method: 'GET',
// })

export default function Videos() {
  return (
    <div className='min-h-screen'>
      <ul role='list' className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8'>
        {mock_video_data.map((file) => (
          <li key={file.id} className='relative'>
            <Link
              href={`/videos/${file.id}`}
              className='group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'
            >
              <img
                src={file.thumbnail_url}
                alt=''
                className='pointer-events-none object-cover group-hover:opacity-75'
              />
              <button type='button' className='absolute inset-0 focus:outline-none'>
                <span className='sr-only'>View details for {file.title}</span>
              </button>
            </Link>
            <p className='pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900'>{file.title}</p>
            <p className='pointer-events-none block text-sm font-medium text-gray-500'>
              {formatIsoTimestamp(file.finished_at)}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
