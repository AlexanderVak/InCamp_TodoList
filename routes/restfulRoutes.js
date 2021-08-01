import express from 'express';


export default function RestfulRoutes(router, controller) {
    var self = { read, write, crud }

    function read(...middleware) {
        router.get('/', middleware, (req, res) => { res.json(controller.find()) })
        router.get('/:id', middleware, (req, res) => {
            const currentId = parseInt(req.params.id)
            res.json(controller.findById(currentId))
        })

        return self
    }

    function write(...middleware) {
        router.post('/', middleware, (req, res) => {
            const model = controller.create(req.body)
            res.status(201).json(model)
        })

        router.put('/:id', middleware, (req, res) => {
            const currentId = parseInt(req.params.id)
            const model = controller.rewrite(currentId, req.body)
            if (model) {
                res.json(model)
            } else {
                res.status(404).json({ error: 'Data not found' })
            }
        })

        router.patch('/:id', middleware, (req, res) => {
            const currentId = parseInt(req.params.id)
            const model = controller.updateById(currentId, req.body)
            if (model) {
                res.json(model)
            } else {
                res.status(404).json({ error: 'Data not found' })
            }
        })

        router.delete('/:id', middleware, (req, res) => {
            const currentId = parseInt(req.params.id)
            const model = controller.removeById(currentId)
            if (model) {
                res.status(204).json('Data removed')
            } else {
                res.status(404).json({ error: 'Data not found' })
            }
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



