import mongoose from 'mongoose'
import shortid from 'shortid'

const { Schema, model } = mongoose

const options = {
  name: 'Info',
  collection: 'info',
}

const InfoSchema = new Schema(
  {
    id: { type: String, default: shortid.generate },
    count: {
      quotes: { type: Number },
    },
    version: { type: String },
  },
  options
)

const Info = model('Info', InfoSchema)

export default Info
