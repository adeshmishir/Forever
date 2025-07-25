import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'
// placing orders using COD method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body
    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found"
      });
    }
    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: 'COD',
      payment: false,
      date: Date.now()
    }
    const newOrder = new orderModel(orderData)
    await newOrder.save()

    await userModel.findByIdAndUpdate(userId, { cartData: {} })
    res.json({
      success: true,
      message: "Order Placed"
    })

  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    })

  }
}


// placing order Using stripe method
const placeOrderStripe = async (req, res) => {

}




// placing order Using Raszorpay method
const placeOrderRazorpay = async (req, res) => {

}



// All orders data for admin panel
const allOrders = async (req, res) => {
 try {
  const orders = await orderModel.find({})
  res.json({
    success:true,
    orders
  })


 } catch (error) {
  console.log(error);
  res.json({
    success: false,
    message: error.message
  })
  
 }


}

// useer Order data for frontend
const userOrders = async (req, res) => {
  try {
   const {userId} = req.body
   const orders = await orderModel.find({userId})
   res.json({
    success:true,
    orders
   })

    
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    })
    
  }

}


// update order Status from admin panel
const updateStatus = async (req, res) => {
  try {
    const {orderId,status} = req.body
    await orderModel.findByIdAndUpdate( orderId ,{ status })
    res.json({
      success:true,
      message:'Status Updated'
    })


  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message
    })
    
  }

}

export { placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus }