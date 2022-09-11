 Install the Package using : `npm i anime-cards`

```js
const getcard=require('anime-cards')
async function main(){
    var x=await getcard
    return x //returns the json data of the object
}
main() //call the function
```
Example `main().then(d=>console.log(d.data))` gives you
```js
{
  id: '66003',
  type: 'characters',
  links: { self: 'https://kitsu.io/api/edge/characters/66003' },
  attributes: {
    createdAt: '2017-01-22T08:50:15.024Z',
    updatedAt: '2021-09-27T07:04:01.010Z',
    slug: 'nagi-aa90c953-00f0-41c6-90e7-b7d7b44c42fe',
    names: { en: 'Nagi', ja_jp: 'ナギ' },
    canonicalName: 'Nagi',
    otherNames: [],
    name: 'Nagi',
    malId: 106563,
    description: "Moji's friend who suffers from a heart disease.",
    image: {
      tiny: 'https://media.kitsu.io/character/66003/image/tiny-07777e90fa7446b5dbb6970b607ef72c.jpeg',
      large: 'https://media.kitsu.io/character/66003/image/large-d185a88e1275269a6fdeec64b63de5b0.jpeg',
      small: 'https://media.kitsu.io/character/66003/image/small-5deae2c99ce88ac5fef5531d5b0faf7d.jpeg',
      medium: 'https://media.kitsu.io/character/66003/image/medium-a98875217c93026fe85df9197cd614e5.jpeg',
      original: 'https://media.kitsu.io/characters/images/66003/original.jpg',
      meta: [Object]
    }
  },
  relationships: {
    primaryMedia: { links: [Object] },
    castings: { links: [Object] },
    mediaCharacters: { links: [Object] },
    quotes: { links: [Object] }
  }
}
```
> use `.then` to resolve the promises


