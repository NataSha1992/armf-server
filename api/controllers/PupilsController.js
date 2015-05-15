module.exports = {
    find: function (req, res) {
        Pupils.find().then(function (pupils) {
            if (pupils) {
                res.send(200, ResponsService.success(pupils));
            }
            else {
                res.send(404, ResponsService.error(ResponsService.APIError.PupilsNotFound));
            }
        }).fail(function (err) {
                res.send(500, ResponsService.error(ResponsService.APIError.Server));
            });
    }
}