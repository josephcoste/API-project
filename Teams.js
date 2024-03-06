import mongoose from 'mongoose'

const Schema =  mongoose.Schema

let TeamSchema = new Schema({

       year:{type:String},
        start: {type:String},
        end: {type:String},
        current:{type:Boolean},
        coverage:{
         standings:{type:Boolean},
          players:{type:Boolean},
          top_scorers:{type:Boolean},
          top_assists:{type:Boolean},
          top_cards:{type:Boolean},
          injuries:{type:Boolean},
          predictions:{type:Boolean},
          odds:{type:Boolean}
        }
 })

export default mongoose.model("teams", TeamSchema)