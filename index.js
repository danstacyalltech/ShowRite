const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()
  // ... you will write your Prisma Client queries here

	// Create a new user called `Rich` with a new post
	// await prisma.user.create({
  //   data: {
  //     name: 'Dan2',
  //     email: 'dan2@prisma.com',
	// 		address: {
	// 			street: '123 Main St',
	// 			city: 'San Francisco',
	// 			state: 'CA',
	// 			zip: '94111',
	// 		},
  //     posts: {
  //       create: {
  //         title: 'My second post',
  //         body: 'Lots of really interesting stuff',
  //         slug: 'my-second-post',
  //       },
  //     },
  //   },
  // })

	// Read all users from the database and print them to the console
	const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  console.dir(allUsers, { depth: null })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })