export default function remove(req, res){
const response=req.params.id
return res.status(200).send(response)
}

