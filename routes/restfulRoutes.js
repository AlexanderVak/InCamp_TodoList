
export default function RestfulRoutes(router, controller) {
    var self = { read, write, crud }

    function read(...middleware) {
        router.get('/', middleware, async (req, res) => {
            console.log(req.listId);
            res.json(await controller.find())
        })
        router.get('/:id', middleware, async (req, res) => {
            const currentId = parseInt(req.params.id)
            let result = await controller.findById(currentId)
            if (result) {
                res.json(result)
            } else {
                res.status(404).end()
            }
        })
        return self
    }

    function write(...middleware) {
        router.post('/', middleware, async (req, res) => {
            res.json(await controller.create(req.body))
        })

        router.put('/:id', middleware, async (req, res) => {
            const currentId = parseInt(req.params.id)
            res.json(await controller.replace(currentId, req.body))

        })

        router.patch('/:id', middleware, async (req, res) => {
            const currentId = parseInt(req.params.id)
            res.json(await controller.updateById(currentId, req.body))
        })

        router.delete('/:id', middleware, async (req, res) => {
            const currentId = parseInt(req.params.id)
            controller.removeById(currentId)
            res.status(200).end()
        })

        return self
    }

    function crud(...middleware) {
        return self
            .read(...middleware)
            .write(...middleware)
    }
    return self
}
