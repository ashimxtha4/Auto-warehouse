import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const keywords = [
    'wind%20screen',
    'flat%20lam',
    'rear%20left%20vent',
    'rear%20right%20vent',
    'back%20left%20side%20door',
    'back%20right%20side%20door',
    'front%20right%20side%20door',
    'front%20left%20side%20door'
  ]

  const keywordUrls: MetadataRoute.Sitemap = keywords.map(keyword => ({
    url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/shop?keyword=${keyword}`,
    priority: 0.8
  }))

  return [
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/`,
      priority: 1
    },
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
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/search?keyword=caddy`,
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/search?keyword=caddy%20van`,
      priority: 0.8
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/shop`,
      priority: 1
    },
    ...keywordUrls,
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
