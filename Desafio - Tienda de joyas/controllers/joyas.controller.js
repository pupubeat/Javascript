

export const getAllJoyas = async (req, res) => {
    try {
        res.send()
    } catch (error) {
        return res.status(500).send('')
    }
}

export const getAllJoyasByCategoria = async (req, res) => {
    try {
        const { categoria } = req.params
    } catch (error) {
        return res.status(500).send('')
    }
}

export const joyasControllers = {
    getAllJoyas,
    getAllJoyasByCategoria
}