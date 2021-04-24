import faker from 'faker'

function generateFakes(type, num = 5) {
  switch(type) {
    case 'art_piece':
      return new Array(num).fill({}).map(generateArtPiece)
    default:
      throw new Error(`cannot create ${type}`)
  }
}

function generateArtPiece() {
  return {
    id: faker.datatype.uuid(),
    title: faker.lorem.words(2),
    desc: faker.lorem.words(50),
    excerpt: faker.lorem.words(10),
    image: 'https://placeimg.com/640/480/animals',
    altImage: 'https://placeimg.com/640/480/city',
    likes: faker.datatype.number(15)
  }
}

export {
  generateFakes,
}