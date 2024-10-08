import { Router } from 'express'
import { getAllUsers, createUser, updateUser, deleteUser } from './controllers/usersController.js'
import { getAllDocuments, createDocument, updateDocument, deleteDocument } from './controllers/documentsController.js'

const router = Router()

router.get('/users', getAllUsers)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

router.get('/documents', getAllDocuments)
router.post('/documents', createDocument)
router.put('/documents/:id', updateDocument)
router.delete('/documents/:id', deleteDocument)

export default router