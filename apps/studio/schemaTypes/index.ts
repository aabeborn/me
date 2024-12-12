import * as postType from './post'
import * as socialsType from './social'
import * as aboutTypes from './about'
import * as homeTypes from './home'

export const schemaTypes = [
	...Object.values(postType).map(type => type),
	...Object.values(socialsType).map(type => type),
	...Object.values(homeTypes).map(type => type),
	...Object.values(aboutTypes).map(type => type)
]
