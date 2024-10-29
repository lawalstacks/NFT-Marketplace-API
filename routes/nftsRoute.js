const express = require('express');
const router = express.Router();
const nftsController = require('./../controllers/nftsController');

router.param("id",nftsController.checkId);
router.get('/',nftsController.getAllNfts);
router.get('/:id',nftsController.getSingleNft);
router.post('/',nftsController.checkBody,nftsController.createNft);
module.exports = router;