import DB_Functions from "../database/db.functions";
import { UpdatePasswordInterface } from "../interface/services.interface";

class ProfileServices {
  private dbFunction = new DB_Functions();

  public updatePassword = async (
    updatePassword: UpdatePasswordInterface
  ): Promise<Boolean> => {
    const user = await this.dbFunction.findUser({ id: updatePassword.id });
    const checkPass = await this.dbFunction.matchPassword(
      user,
      updatePassword.oldPassword
    );
    if (checkPass) {
      user.password = updatePassword.newPassword;
      await user.save({ validateBeforeSave: false });
      return true;
    } else {
      return false;
    }
  };
}

export default ProfileServices;
