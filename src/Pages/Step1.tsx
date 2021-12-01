import { TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import { StyledStepContainer } from '../Components/Benchmarks/BenchmarksStyled';
import { useData } from '../Utils/DataContext';
import { PrimaryButton } from './Components/PrimaryButton/PrimaryButton';

 interface IData {
    firstName: string;
    lastName: string;
    age: number;
}
    
type FormValues = {
    firstName: string;
    lastName: string;
    age: number;
}

const Step1 = () => {
    const history = useHistory();
    const { data, setValues } = useData();
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
        defaultValues: {firstName: data.firstName, lastName:data.lastName, age:data.age,},
        mode: 'onBlur',
    });


    const onSubmit = (data: IData) => { history.push('/step2'); setValues(data)}

    return (
         
            < StyledStepContainer maxWidth = "xs" >
            <Typography variant="h5" paragraph align='center' >Form Challenge for Masha</Typography>
            <Typography component="h3" variant='button' paragraph align='center' color="primary">Step 1</Typography> 
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    {...register("firstName", {
                        required: "This is required",
                        minLength: { value: 2, message: "min length is 2" },
                        maxLength: { value: 8, message: "You exceeded the max length" },
                        pattern: { value: /^[A-Za-z]+$/i, message: "Only letters" }
                    })}
                    id="firstName"
                    type="text"
                    label="First Name"
                    error={ !! errors.firstName}
                    helperText={errors?.firstName?.message}  
                />
                 
                <TextField 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    {...register("lastName", { required: "This is required" })}
                    id="lastName"
                    type="text"
                    label="Last Name"
                    error={!!errors.lastName}
                    helperText={ errors?.lastName?.message}           
                />
                
                <TextField 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    {...register("age" , { required: "This is required", valueAsNumber: true, min: {value:18, message: "min age is 18"}, max: {value:99, message: "max age is 99"} })}
                    id="age"
                    type="number"
                    label="Age"
                    error={ !! errors.age}
                    helperText={errors?.age?.message}
           
        />
               
                <PrimaryButton>Next</PrimaryButton>
            </form>
        </StyledStepContainer>
        
    );
}

export default Step1;