const { finalization } = require("node:process");
const Listing = require("../models/listing");
//Creation of one list entry into the database 
async function createonelist(req,res){
    const listing = req.body;
    if (!listing){
        return res.status(400).json({
            message : "request cannot be empty"
        });
    }
    try{
        const listdb = await Listing.create(listing);
        res.status(201).json({
            message : "Listing was created successfully",
            data : listdb
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message : "error in the data retrieving"
        });
    }
};
// Getting all the listings from the database
async function getalllist(req,res) {
    const alllists = await Listing.find();
    if (!alllists){
        return res.status(404).json({
            message : "Listings were not found"
        });
    }
    try{
        res.status(200).json({
            message : "All the listings were retrieved",
            data : alllists
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message : "error in data retrieving"
        });
    }
}
// Get single list from the database 
async function getsinglelist(req,res){
    const listid = req.params.id;
    if (!listid){
        return res.status(400).json({
            message : "request cannot be empty"
        });
    }
    try {
        const singlelist = await Listing.findById(listid);
        if (!singlelist){
            return res.status(404).json({
                message : "list was not found"
            })
        }
        res.status(200).json({
            message : "List was retrieved",
            data : singlelist
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message : "error in data retrieving"
        });
    }
}
// update list 
async function updatelist(req,res){
    try{
        const newlist = await Listing.findByIdAndUpdate(req.params.id,req.body,{
            new : true ,
            runValidators : true
        });
        if (!newlist){
            return res.status(400).json({
                message : "The list was not found"
            });
        }
        res.status(200).json({
            message : "List was updated",
            new_data : newlist
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message : "Error in the database"
        });
    }
}
//delete a list 
async function deletelist(req,res) {
    try{
        const list = await Listing.findByIdAndDelete(req.params.id);
        if (!list){
            return res.status(400).json({
                message : "list was not found"
            });
        }
        res.status(200).json({
            message : "List was deleted successfully"
        });
    }catch(error){
        console.log(error);
        res.status(500).json({
            message : "error in the database"
        });
    }
}
module.exports={createonelist,getalllist,getsinglelist,updatelist,deletelist};