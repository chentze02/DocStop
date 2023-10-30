'use client'

import { useEffect, useState } from 'react'
import { mock_video_data } from '../../../mockData'
import { formatIsoTimestamp } from '@/utils'
import { PrimaryButton } from '@/components/Button'

export interface VideoMetadata {
  id: string
  video_url: string
  thumbnail_url: string
  title: string
  finished_at: string
  caption: string
}

interface ViewVideoByIdProps {
  params: {
    id: string
  }
}

export default function ViewVideoById({ params }: ViewVideoByIdProps) {
  const { id } = params
  const [video, setVideo] = useState<VideoMetadata | null>(null)
  
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  
  useEffect(() => {
    setLoading(true)
    const video = mock_video_data.find((video) => video.id === id)
    if (!video) {
      setLoading(false)
      return setError(new Error(`Video with id ${id} not found`))
    }
    setLoading(false)
    setVideo(video)
  })

  // TODO: conver to using suspense and error pages
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: Video not found</div>
  }

  if (!video) {
    return <div>Video not found</div>
  }

  return (
    <div>
      {/* Top */}
      <div className='flex justify-between'>
        <div className='border-b border-gray-200 pb-5'>
          <h3 className='text-base font-semibold leading-6 text-gray-900'>
            {video.title}
          </h3>
          <p className='mt-2 max-w-4xl text-sm text-gray-500'>
            {video.caption}
          </p>
        </div>
        <p className='mt-2 max-w-4xl text-sm text-gray-500'>
          {formatIsoTimestamp(video.finished_at)}
        </p>
      </div>

      {/* Video Thumnbail */}
      <div className='mt-8'>
        <div className='aspect-w-16 aspect-h-9'>
          <img
            className='absolute inset-0 w-full h-full'
            src={video.thumbnail_url}
            title={video.title}
          />
        </div>
      </div>

      {/* Download */}
      <div className='mt-8 flex justify-end'>
        <PrimaryButton>
          Download Video
        </PrimaryButton>
      </div>
    </div>
  )
}
