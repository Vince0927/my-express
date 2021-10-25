const express = require('express');
const morgan = require('morgan');
const { MongoClient } = require('mongodb');

require('dotenv').config();

const PORT = process.env.PORT || 4000;
const { CONFIG_ENV_CONNECTION } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};


express()
  .use(morgan('dev'))
  .use(express.urlencoded({ extended: false }))
  .use(express.json())

  // hello from server
  .get('/hello', (req, res) => {
    res.status(200).json({ greeting: 'hello from heroku and node ' });
  })

  // hello from db
  .get('/greeting', async (req, res) => {
    try {
      // this will connect to mongodb
      const client = await MongoClient(CONFIG_ENV_CONNECTION, options);
      await client.connect();

      const db = client.db('research-stream');
      const { greeting } = await db
        .collection('greetings')
        .findOne({ type: 'hello' });

      client.close();
      res.status(200).json({ greeting });

    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'something went wrong ' });
    }
  })

  .listen(PORT, () => {
    console.info(`🌍 Listening on port ${PORT}`);
  });
