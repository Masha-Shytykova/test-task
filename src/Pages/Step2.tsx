import { Checkbox, FormControlLabel, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { StyledStepContainer } from '../Components/Benchmarks/BenchmarksStyled';
import { PrimaryButton } from './Components/PrimaryButton/PrimaryButton';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import parsePhoneNumberFromString from 'libphonenumber-js';
import { useData } from '../Utils/DataContext';

type FormValues = {
    email: string;
    hasPhone?: boolean;
    phoneNumber?: string;
}

interface IData {
    email: string;
    hasPhone?: boolean;
    phoneNumber?: string;
}

const schema = yup.object().shape({
    email: yup.string().email('Email should have correct format').required('Email is a required field')
})

const normalizePhoneNumber = (value: string) => {
    const phoneNumber = parsePhoneNumberFromString(value);
    if (!phoneNumber) { return value }
    return (phoneNumber.formatInternational())
 }

export default function Step2() {
    const history = useHistory();
    const { data, setValues } = useData();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>({
        defaultValues: {email: data.email, hasPhone: data.hasPhone, phoneNumber: data.phoneNumber,},
        mode: 'onBlur',
        resolver: yupResolver(schema),
    });

    const hasPhone = watch('hasPhone');

    const onSubmit = (data: IData) => { history.push('/step3'); setValues(data)}

    return (
        <StyledStepContainer maxWidth="xs">
            <Typography variant="h5" paragraph align='center' >Form Challenge for Masha</Typography>
            <Typography component="h3" variant='button' paragraph align='center' color="primary">Step 2</Typography>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <TextField
                    id="email"
                    type="email"
                    label="Email"
                    {...register("email")}
                    required
                    fullWidth
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    style={{ marginBottom: '15px' }}

                />

                <FormControlLabel
                    control={<Checkbox
                        defaultValue={data.hasPhone}
                        defaultChecked={data.hasPhone}
                        {...register("hasPhone")}
                        color="primary" />}
                    label="Do you have a phone"
                    style={{ marginBottom: '15px' }}
                />

                {hasPhone && (<TextField
                    id="phoneNumber"
                    type="tel"
                    label="Phone number"
                    {...register("phoneNumber")}
                    fullWidth
                    error={!!errors.phoneNumber}
                    helperText={errors?.phoneNumber?.message}
                    onChange={(event) => { event.target.value = normalizePhoneNumber(event.target.value) }}
                    style={{ marginBottom: '15px' }}
                />)}

                <PrimaryButton>Next</PrimaryButton>
            </form>
        </StyledStepContainer>

    );
}

