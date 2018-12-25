const dotenv = require('dotenv')
const path = require('path')
const config = require('./templates/firebase.json')
const fs = require('fs')

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })


const signedExchangeConfig = {
  source: '**/*.sxg.dummy',
  headers: [
    {
      key: 'Content-Type',
      value: 'application/signed-exchange;v=b2',
    },
    {
      key: 'Origin-Trial',
      value: process.env.ORIGIN_TRIAL,
    },
  ],
}

config.hosting.headers.push(signedExchangeConfig)

fs.writeFileSync('firebase.json', JSON.stringify(config, null, 2))
