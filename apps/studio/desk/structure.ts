import { type StructureResolver } from 'sanity/structure'

export const desk: StructureResolver = S =>
	S.list()
		.title('aabeborn App')
		.items([
			S.listItem()
				.title('Pages')
				.child(
					S.list()
						.title('Pages')
						.items([
							S.listItem()
								.title('Home')
								.child(
									S.document()
										.schemaType('home')
										.documentId('home')
								),
							S.listItem()
								.title('About')
								.child(
									S.document()
										.schemaType('about')
										.documentId('about')
								)
						])
				),
			...S.documentTypeListItems().filter(
				listItem => !['home', 'about'].includes(listItem.getId()!)
			)
		])
