import React, { useEffect } from 'react';
import { View, StyleSheet,Button,TextInput } from 'react-native';
import { Formik, useFormikContext } from 'formik';
import {ErrorMessage} from '../ErrorMessage'
import AppTextInput from './AppTextInput';
import colors from '../../config/colors';
import AppButton from '../AppButton';
import AppFormField from './AppFormField';
import AppFormValidationButton from './AppFormValidationButton';
import AppForm from '../AppForm';
import * as yup from 'yup'



function LoginForm({onSubmit}) {
    const validationSchema = yup.object().shape({
        email: yup
        .string()
        .email()
        .required(" a"),
    
        password : yup
        .string()
        .min(5)
        .required("a")
        
    })
    const {errors}= useFormikContext()
    useEffect(()=>{
        console.log(errors,'jel')
    })
    return (
        <AppForm
        initialValues={{ email: '' , password: ''}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
                   <AppFormField
         icon='email'
         name = 'email'
         placeholder = "Email"
         />
         {console.log(errors,'voipa')}
         <ErrorMessage errors={errors.email}>{console.log(errors,'errors')}</ErrorMessage>
         <AppFormField
         icon='vpn-key'
         name = 'password'
         placeholder="Password"
         secureTextEntry
         textContentType ='password'
         />
         <AppFormValidationButton title={"Connexion"} />
      </AppForm>
    );
}

const styles = StyleSheet.create({
    container: {
        
    },
})

export default LoginForm;

