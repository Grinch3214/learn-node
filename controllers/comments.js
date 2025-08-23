function getCommentsHandler(req, res) {
  res.send('getCommentsHandler');
}

function getSingleCommentHandler(req, res) {
  console.log(req.params);
  res.send(`getSingleCommentHandler ID: ${req.params.commentId}`);
}

function postCommentsHandler(req, res) {
  res.send('postCommentsHandler');
}

function deleteCommentHandler(req, res) {
  res.send(`deleteCommentHandler ID: ${req.params.commentId}`);
}

export {
  getCommentsHandler,
  getSingleCommentHandler,
  postCommentsHandler,
  deleteCommentHandler,
};
