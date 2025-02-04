import { vi } from "vitest"
import { PrismaClient } from '@prisma/client'
import { mockDeep } from 'vitest-mock-extended'

// Deep mocking
export const prismaClient = mockDeep<PrismaClient>()

// Another way of simple mocking

// export const prismaClient = {
//     request: {
//         create: vi.fn()
//     }
// }

