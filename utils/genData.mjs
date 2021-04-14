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
    desc: faker.lorem.words(25)
  }
}

export {
  generateFakes,
}