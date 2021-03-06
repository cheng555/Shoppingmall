const mongoose = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate');//分页插件
let counter = 1
var ModelSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      unique: true,
      default: () => counter++
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Required']
    },
    pwd: {
      type: String,
      required: [true, 'Required']
    },
    nickname: {
      type: String,
      unique: true,
      required: [true, 'Required']
    },
    /*0保密，1男，2女*/
    sex: {
      type: Number,
      default: () => 1,
      required: [true, 'Required']
    },
    recipient: {
      type: String
    },
    address: {
      type: String
    },
    phone: {
      type: Number,
      required: [true, 'Required']
    },
    headimg: {
      type: String,
      default: () => 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    }
  },
  {
    timestamps: {
      createdAt: 'createtime',
      updatedAt: 'updatetime'
    }
  }
)

// dietSchema.plugin(mongoosePaginate)
const UserModel = mongoose.model('User', ModelSchema)
UserModel.find({ id: { $gt: 0 } })
  .sort({ id: -1 })
  .then(([first, ...others]) => {
    if (first) counter = first.id + 1
  })
module.exports = UserModel
