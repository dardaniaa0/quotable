import { Router } from 'express'
import createError from 'http-errors'
import listQuotes from './controllers/quotes/listQuotes.js'
import getQuoteById from './controllers/quotes/getQuoteById.js'
import searchQuotes from './controllers/search/searchQuotes.js'
import singleRandomQuote from './controllers/quotes/singleRandomQuote.js'
import randomQuotes from './controllers/quotes/randomQuotes.js'
import getDocumentCount from './controllers/info/getDocumentCount.js'

const router = Router()
// @private (for debugging purposes)
router.get('/internal/uip', (request, response) => response.send(request.ip))

router.get('/info/count', getDocumentCount)

/**------------------------------------------------
 ** Quotes
 **-----------------------------------------------*/
router.get('/quotes/random', randomQuotes)
router.get('/random', singleRandomQuote)

router.get('/quotes', listQuotes)
router.get('/quotes/:id', getQuoteById)

/**------------------------------------------------
 ** Search
 **-----------------------------------------------*/
router.get('/search/quotes', searchQuotes)

export default router
