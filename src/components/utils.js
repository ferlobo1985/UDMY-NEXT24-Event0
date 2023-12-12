
export const errorHelper = (formik,value) => ({
    isInvalid:formik.errors[value] && formik.touched[value] ? true:false,
    errorMessage: formik.errors[value] && formik.touched[value] ? formik.errors[value]:null
})