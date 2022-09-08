const { google } = require('googleapis')
import services from '../../../services.json' // This is the Service Account JSON you downloaded 

const handler = async (req, res) => {
  if (req.method !== 'POST') return res.end()
  const { data } = req.body

  try {
    // Create new auth object, pass it the client email, private key, and ask for permission to use the indexing service.

    const auth = new google.auth.JWT(
		  services.client_email,
      null,
      services.private_key,
      ['https://www.googleapis.com/auth/indexing'],
      null,
    )

    const indexer = google.indexing({
      version: 'v3',
      auth: auth,
    })

    const indexRequest = await indexer.urlNotifications.publish({
      requestBody: {
        type: 'URL_UPDATED',
        url: `https://blog.learnbay.co/${data.slug}`,
      },
    })

    res.status(200).send(indexRequest.data)
  } catch (error) {
    console.log('error :>> ', error)
    res.status(400).send(error)
  }
}

export default handler