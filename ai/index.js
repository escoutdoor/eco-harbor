const express = require('express')
const vision = require('@google-cloud/vision')
const { Storage } = require('@google-cloud/storage')
const multer = require('multer')
require('dotenv').config()
const helmet = require('helmet')
const morgan = require('morgan')

const app = express()
const port = 4555

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const projectId = 'ecoharbor-405310'
const storageClient = new Storage({ projectId })

process.env.GOOGLE_APPLICATION_CREDENTIALS

app.use(express.json())

app.post('/upload-image', upload.single('image'), async (req, res) => {
	try {
		const imageBuffer = req.file.buffer

		const base64Image = imageBuffer.toString('base64')

		const visionClient = new vision.ImageAnnotatorClient()
		const visionRequest = {
			image: { content: base64Image },
		}

		const [visionResult] = await visionClient.objectLocalization(visionRequest)
		const objects = visionResult.localizedObjectAnnotations

		const bucketName = 'ecoharborbucket'
		const fileName = `image_${Date.now()}.png`

		await storageClient.bucket(bucketName).file(fileName).save(imageBuffer)
		const objectsNames = objects.map(obj => obj.name)

		res.json({
			objectsNames,
			imageUrl: `https://storage.googleapis.com/${bucketName}/${fileName}`,
		})
	} catch (error) {
		console.error(error)
		res.status(500).send('Internal Server Error')
	}
})

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`)
})
