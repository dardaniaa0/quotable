import mongoose from 'mongoose'
import shortid from 'shortid'

const { Schema, model } = mongoose

const QuoteSchema = new Schema({
  // @internal
  id: { type: String, default: shortid.generate },
  // The quotation text
  name: { type: String, required: true },
  // The author `slug` is a unique ID derived from the author's name.
  gender: { type: String, required: true },
})

// To support full text search
// QuoteSchema.index({ content: 'text', author: 'text' }, { name: 'textIndex' })
QuoteSchema.index({ name: 'text' })

export default model('Quote', QuoteSchema)
