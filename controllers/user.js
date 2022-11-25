const User = require('../models/User');

module.exports = {
  index: async (req, res) => {
    try{
      const users = await User.find();
      if(users.length > 0) {
        res.status(200).json({
          status: true,
          data: users,
          method: req.method,
          url: req.url
        });
      }else {
        res.status(200).json({
          status: true,
          message: 'Data masih kosong'
        });
      }
    } catch (err) {
      res.status(400).json({ status: false });
    }
  },
  show: async (req, res) => {
    try{
      const user = await User.findById(req.params.id);
      res.status(200).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: 'Data berhasil didapat'
      });
    } catch (err) {
      res.status(400).json({ status: false });
    }
  },
  store: async (req, res) => {
    try{
      const user = await User.create(req.body);
      res.status(200).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: 'Data berhasil ditambahkan'
      });
    } catch (err) {
      res.status(400).json({ status: false });
    }
  },
  update: async (req, res) => {
    try{
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      res.status(200).json({
        status: true,
        data: user,
        method: req.method,
        url: req.url,
        message: 'Data berhasil diubah'
      });
    } catch (err) {
      res.status(400).json({ status: false });
    }
  },
  delete: async (req, res) => {
    try{
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: true,
        method: req.method,
        url: req.url,
        message: 'Data berhasil dihapus'
      });
    } catch (err) {
      res.status(400).json({ status: false });
    }
  }
};