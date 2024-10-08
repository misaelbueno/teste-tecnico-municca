import { prisma } from '../prisma.js'

export const getAllUsers = async (req, res) => {
  const users = await prisma.user.findMany({
    include: {
      documents: true
    }
  })

  return res.json(users)
}

export const createUser = async (req, res) => {
  const { name, email } = req.body

  await prisma.user.create({
    data: {
      name,
      email     
    }
  })

  return res.status(201).json({ message: 'User created' })
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body

  await prisma.user.update({
    where: {
      id: id
    },
    data: {
      name,
      email
    }
  })

  return res.status(204).end()
}

export const deleteUser = async (req, res) => {
  const { id } = req.params

  await prisma.user.delete({
    where: {
      id: id
    }
  })

  return res.status(204).end()
}