import mongoose from "mongoose";

const EditoraSchema = new mongoose.Schema(
   {
      id:{type: String},
      nome:{type: String ,required: true},
      sede:{type: String}
     
    },
    {
      versionKey: false
    }
)

const editoras = mongoose.model('editoras', EditoraSchema);

export default editoras;