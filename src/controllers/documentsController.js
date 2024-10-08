import { prisma } from '../prisma.js'

export const getAllDocuments = async (req, res) => {
  const documents = await prisma.document.findMany()

  return res.json(documents)
}

export const createDocument = async (req, res) => {
  const { name, status, userId } = req.body

  await prisma.document.create({
    data: {
      name,
      status,
      userId
    }
  })

  return res.status(201).json({ message: 'Document created' })
}

export const updateDocument = async (req, res) => {
  const { id } = req.params
  const { name, status } = req.body

  await prisma.document.update({
    where: {
      id: id
    },
    data: {
      name,
      status
    }
  })

  return res.status(204).end()
}

export const deleteDocument = async (req, res) => {
  const { id } = req.params

  await prisma.document.delete({
    where: {
      id: id
    }
  })

  return res.status(204).end()
}