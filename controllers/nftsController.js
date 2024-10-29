const fs = require('fs');
const express = require('express');
const nfts = JSON.parse(fs.readFileSync(`${__dirname}/../nft-data/data/nft-simple.json`));

const checkId =(req,res,next,value)=>{
  console.log(`${value}`);
  if((req.params.id * 1 )> nfts.length){
   return res.status(200).json({
      message: "invalid ID",
      success: false,
    });
  }
  next();
};

const checkBody=(req,res,next,value)=>{
  if(!req.body.name || !req.body.price){
    return res.status(200).json({
      message:"missing name and price",
      status: false,
    });
  }
  next();
};

//All nfts
const getAllNfts = async(req,res) =>{
  res.status(200).json({message:"success",nfts});
};

//Single anft
const getSingleNft =(req,res)=>{
  const id = req.params.id * 1;
  const nft = nfts.find(el => el.id === id);
  if(!nft){
  return  res.status(400).json({error:"nft not found"});
  }
    res.status(200).json({message:"success",nft});
};

const createNft = (req,res)=>{
  console.log("working..");
  const newId = nfts[nfts.length - 1].id+1;
  const newNft = Object?.assign({id: newId},req.body);
  console.log(newNft);
  nfts.push(newNft);
    fs.writeFile(`${__dirname}/../nft-data/data/nft-simple.json`,JSON.stringify(nfts),err =>{
      return res.status(400).json({error: "unable to create nft"});
    });
    res.status(200).json({
      message:"nft created!",
      success: true,
      nft:newNft
    });
};

module.exports ={
  getSingleNft,
  getAllNfts,
  createNft,
  checkId,
  checkBody
};