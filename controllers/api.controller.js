const product = require('../models/api.model').product;

exports.product_details_id = function (req, res) {
    product.findById(req.params.id, function (err, product) {
        if (err) return err;
        res.send(product);
    })
};

exports.product_details_id_delete = function (req, res) {
    product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return err;
        res.send('Product Deleted successfully');
    })
};

exports.find_product_details = function (req, res) {
    product.find(req.body, function (err, product) {
        if (err) return err;
        res.send(product);
    })
};

exports.delete_product_details = function (req, res) {
    product.deleteMany(req.body, function (err, product) {
        if (err) return err;
        res.send('All Products Deleted successfully');
    })
};

exports.product_create = function (req, res) {
    console.log(req.body);
    let new_product = new product(
        {
            "id": req.body.id,
            "type": req.body.type,
            "userId": req.body.userId,
            "userName": req.body.userName,
            "symbol": req.body.symbol,
            "shares": req.body.shares,
            "price": req.body.price
             //"timestamp": new Date()
        }
    );

    new_product.save(function (err) {
        if (err) {
            console.log("error", err);
            res.send(err);
            return err;
        }
        res.send('Product Created successfully')
    })
};