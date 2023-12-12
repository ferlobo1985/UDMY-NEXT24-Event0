import bcrypt from 'bcryptjs';


export const errorHelper = (formik,value) => ({
    isInvalid:formik.errors[value] && formik.touched[value] ? true:false,
    errorMessage: formik.errors[value] && formik.touched[value] ? formik.errors[value]:null
})

export const passwordHash = async(password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt)
    return hash;
}