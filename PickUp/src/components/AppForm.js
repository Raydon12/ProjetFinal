import { Formik } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';
import ErrorMessage from './ErrorMessage';

function AppForm({initialValues,onSubmit,children,validationSchema}) {
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}  >
            { () =>(
                <>
                {children}
                </>
            )}
        </Formik>
    );
}


export default AppForm;