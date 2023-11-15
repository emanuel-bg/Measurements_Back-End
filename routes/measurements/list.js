
import Measurement from '../../db/measurementModel.js';
import instance from '../../db/instance.js';

async function list(_req, res) {
instance.connect()
const response = await Measurement.find();
instance.disconnect()
console.log(response);
  res.status(200).json( response );
}



export default list;
