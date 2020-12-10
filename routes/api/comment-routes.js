const router = require('express').Router()
const { addComment, removeComment } = require('../../controllers/comment-controller')
    // /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment)

// /api/comments/<pizzaId>/<commentId>
// two parameters needed to link comment to pizza
router.route('/:pizzaId/:commentId').delete(removeComment)

module.exports = router