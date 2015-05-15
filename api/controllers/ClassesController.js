module.exports = {
    find: function (req, res) {
        Classes.find().then(function (classes) {
            if (classes) {
                res.send(200, ResponsService.success(classes));
            }
            else {
                res.send(404, ResponsService.error(ResponsService.APIError.ClassesNotFound));
            }
        }).fail(function (err) {
                res.send(500, ResponsService.error(ResponsService.APIError.Server));
            });
    }
}