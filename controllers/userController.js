import userModel from '../models/User.js'

export const userPost = async (req, res) => {
    try{
        const {email, password} = req.body

        const doc = new userModel({
            email,
            password
        })

        const user = await doc.save()

        res.send(user)
    }catch (err) {
        console.log(err);

        res.status(500).send({message: 'Ջհաջողվեց մուտք գործել', error: err})
    }
}