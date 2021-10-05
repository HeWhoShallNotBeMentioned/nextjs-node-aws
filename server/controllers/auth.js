exports.register = (req, res) => {
  console.log('Register controller backend from front end route', req.body);
  res.status(200).json({ message: 'Data successfully received' });
};
