import { List, ListItem, ListItemIcon, ListItemText, Paper, Typography } from "@material-ui/core";
import { CloudUpload, InsertDriveFile } from "@material-ui/icons";
import React from "react";
import Dropzone from "react-dropzone";
import { Controller, useForm } from "react-hook-form";
import { StyledStepContainer } from "../Components/Benchmarks/BenchmarksStyled";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { PrimaryButton } from "./Components/PrimaryButton/PrimaryButton";
import { useHistory } from "react-router";
import { useData } from "../Utils/DataContext";

interface IFile {
    name: string;
    size: string;

}
interface IFormInputs {
    files: IFile[];
  }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
      root: {
          backgroundColor: '#eee',
          textAlign: 'center',
          cursor: 'pointer',
          color: '#333',
          padding: '10px',
          marginTop: '20px',
    },
      icon: {
          marginTop: '16px',
          color: '#888',
          fontSize: '42px',
    },
    
  })
);

export default function Step3 () {
    const history = useHistory();
    const { data, setValues } = useData();
    const { control, handleSubmit } = useForm<IFormInputs>({
        defaultValues: { files: data.files },
    });
    const styles = useStyles();

    const onSubmit = (data: IFormInputs  ) => {
        history.push('/result');
        setValues(data);
    }

    return (
        <StyledStepContainer maxWidth="xs">
            <Typography variant="h5" paragraph align='center' >Form Challenge for Masha</Typography>
            <Typography component="h3" variant='button' paragraph align='center' color="primary">Step 3</Typography>
            <form noValidate onSubmit={ handleSubmit(onSubmit)}>
                <Controller
                    control={control}
                    name="files"
                    defaultValue={[]}
                     render={({ field }) => (
                        <>
                            <Dropzone onDrop={field.onChange}>
                                {({ getRootProps, getInputProps }) => (
                                     <Paper className={styles.root } variant="outlined" {...getRootProps()}>
                                        <CloudUpload className={styles.icon } />
                                        <input {...getInputProps()} name="files" onBlur={field.onBlur} />
                                        <p>Drag 'n' drop files here or click to select files </p>

                                    </Paper>
                                ) }
                             </Dropzone>
                             <List>
                                 {field.value.map((file, index) => (
                                     <ListItem key={index}>
                                         <ListItemIcon><InsertDriveFile /></ListItemIcon>
                                         <ListItemText primary={file.name} secondary={ file.size}/>
                                         </ListItem>
                                 ))}
                             </List>
                        </>
                    )}
                />
                <PrimaryButton>Next</PrimaryButton>
               
            </form>
        </StyledStepContainer>
        
    );
}

