import { PrismaClient } from '@prisma/client'

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

let prisma: PrismaClient

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  // @ts-ignore
  if (!global.__prisma__) {
    // @ts-ignore
    global.__prisma__ = new PrismaClient()
  }
  // @ts-ignore
  prisma = global.__prisma__
}

export default prisma