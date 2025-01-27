import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/about`,
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/product`,
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/search`,
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/shop`,
      priority: 1
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/contact`,
      priority: 1
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/faqs`
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/get-a-quote`
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/privacy-policy`
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/reviews`
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/terms-of-use`
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/login`
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/register`
    }
  ]
}
