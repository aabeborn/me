import { defineQuery, SanityDocument } from 'next-sanity'
import { client } from '../sanity'

export const HOME_QUERY = defineQuery(`
  *[_type == "home"][0] {
    title,
    profile {
      asset->{
        url
      }
    },
    text,
    currentWork->{
      company,
      role,
      logo {
        asset->{
          url
        }
      },
      url
    },
    caption,
    socials[]->{
      url,
      name,
      icon
    }
  }
`)

interface HomeData extends SanityDocument {
	title: string
	profile: {
		asset: {
			url: string
		}
	}
	text: string
	currentWork: {
		company: string
		role: string
		logo: {
			asset: {
				url: string
			}
		}
		url: string
	}
	caption: string
	socials: {
		url: string
		name: string
		icon: {
			metadata: {
				iconName: string
			}
		}
	}[]
}

export const getHomeData = async () => {
	'use cache'
	const data = await client.fetch<HomeData>(HOME_QUERY)
	return data
}
