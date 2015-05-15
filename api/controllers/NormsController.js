module.exports = {
    find: function (req, res) {
        Norms.find().then(function (norms) {
            if (norms) {
                res.send(200, ResponsService.success(norms));
            }
            else {
                res.send(404, ResponsService.error(ResponsService.APIError.NormsNotFound));
            }
        }).fail(function (err) {
                res.send(500, ResponsService.error(ResponsService.APIError.Server));
            });
    }
}