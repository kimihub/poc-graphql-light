const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')
const node = new IPFS({
  repo: './ipfs',
  EXPERIMENTAL: { pubsub: true }
})

node.once('ready', async () => {
  const orbitdb = new OrbitDB(node)
  const db = await orbitdb.eventlog(process.env.DB_ADDRESS, {
    write: process.env.PUBLIC_KEYS.split(',')
  })
  await db.load()
})
