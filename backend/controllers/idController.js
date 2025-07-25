module.exports = {
  generateId: (req, res) => {
    const id = "ID-" + Date.now();
    res.json({ id });
  },
};