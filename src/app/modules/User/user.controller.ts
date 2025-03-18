import { asyncHandler } from "../../../utils/global/asyncHandler";
import { sendResponse } from "../../../utils/sendResponse";
import { UserServices } from "./user.service";

const loginAdminController = asyncHandler(async (req, res) => {
    const loginAdminPayload = req.body;
    const loginResult = await UserServices.loginAdmin(loginAdminPayload);

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: 'Admin login successfully',
        data: loginResult,
    });
});

export const UserControllers = {
    loginAdminController,
}