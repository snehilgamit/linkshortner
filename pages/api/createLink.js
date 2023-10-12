import ConnectDB from "@/helper/mongoDB";
import shortner from "@/models/shortner";

export default async function handler(req, res) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const {link} = req.body;
    await ConnectDB();

    function generateString(length) {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
    let Shortlink = generateString(8);
    let findDublicate = await shortner.find({Shortlink});

    while(!findDublicate){
        Shortlink = generateString(8);
        findDublicate = await shortner.find({Shortlink});
    }
    const upload = await shortner.create({link,Shortlink});
    res.json({Shortlink});
}