import {asyncHandler} from '../utils/asyncHandler';

const registerUser = asyncHandler(async (req,res) => {
    // code to register user
    res.status(200).json({
        success: true,
        message: 'User registered successfully'
    })
})

export {registerUser}