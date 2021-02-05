var Author = require('../models/author');

// Display list of all Authors
exports.author_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Author list');
}

// Display detail page for a specific auhtor
exports.author_detail = (req,res) => {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display Authro create form on GET
exports.author_create_get = (req,res) => {
    res.send('NOT IMPLEMENTED: Authro create GET');
};

// Handle Author create on POST
exports.author_create_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET
exports.author_delete_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Handle Author delete on POST.
exports.author_delete_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Display Author update form on GET.
exports.author_update_get = (req, res) => {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Handle Author update on POST.
exports.author_update_post = (req, res) => {
    res.send('NOT IMPLEMENTED: Author update POST');
};