// Create Product

exports.createProduct = async (req,res)=>{
    try{
        let data = req.body;
        res.status(200).json({status: "Success", data: data})

    } catch (error) {
        res.status(500).json({status: "Error", error: error.toString()});
    }
};

// Read Product
exports.readProduct = async (req,res)=>{
    try{
        let data = {ProductName: "Mobile", Price: 50000 };
        res.status(200).json({status: "Success", data: data})

    } catch (error) {
        res.status(500).json({status: "Error", error: error.toString()});
    }
};

// Update Product
exports.updateProduct = async (req,res)=>{
    try{
        let id = req.params.id;
        let data = req.body;
        res.status(200).json({status: "Success", data: data, id: id})

    } catch (error) {
        res.status(500).json({status: "Error", error: error.toString()});
    }
};

// Delete Product
exports.deleteProduct = async (req,res)=>{
    try{
        let id = req.params.id;
        res.status(200).json({status: "Success", id: id})

    } catch (error) {
        res.status(500).json({status: "Error", error: error.toString()});
    }
};