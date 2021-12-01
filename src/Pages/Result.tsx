import { List, ListItem, ListItemIcon, ListItemText, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@material-ui/core";
import { InsertDriveFile } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import { StyledStepContainer } from "../Components/Benchmarks/BenchmarksStyled";
import { useData } from "../Utils/DataContext";
import { PrimaryButton } from "./Components/PrimaryButton/PrimaryButton";


interface IFile {
    name: string;
    size: string;

}
interface IFiles {
    files: IFile[];
}
  
const useStyles = makeStyles({
    root: {
        marginBottom: "30px"
    },
    table: {
        marginBottom: '30px'
    }

})

const Result = () => {
    const { data } = useData();
    const entries = Object.entries(data).filter((entry) => entry[0] !== 'files');
    const { files }: IFiles = data;
    const styles = useStyles();
    
    // const onSubmit = async () => {
    //     // const formData = new FormData();

    //     // if (data.files) {
    //     //     data.files.forEach(file => {
    //     //         formData.append('files', file, file.name)
    //     //     })
    //     // }

    //     // entries.forEach(entry => {
    //     //     formData.append(entry[0], String(entry[1]))
    //     // })

    //     // const res = await fetch('', {
    //     //     method: "POST",
    //     //     body: formData,
    //     // })
    // }
    

    return (
        
        <StyledStepContainer maxWidth="xs">
            <Typography variant="h5" paragraph align='center' >Form Challenge for Masha</Typography>
            <Typography component="h3" variant='button' paragraph align='center' color="primary">Results</Typography>
            <Typography component="h3" variant='h6' paragraph >Form Values</Typography>
            <TableContainer component={Paper} className={ styles.root}>
                <Table className={ styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Field</TableCell>
                            <TableCell align="right">Value</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {entries.map((entry) => (
                            <TableRow key={entry[0]}>
                               <TableCell>{entry[0]}</TableCell>
                                <TableCell align="right">{String(entry[1])}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            {files && (
                <>
                    <Typography component="h3" variant='h6' paragraph >Files</Typography>
                    <List>
                        {
                            files.map((file, index) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <InsertDriveFile/>
                                    </ListItemIcon>
                                    <ListItemText primary={file.name} secondary={ file.size}/>
                                </ListItem>
                            ))
                        }
                    </List>
                </>
            )}
            <PrimaryButton>Submit</PrimaryButton>
                <Link to="/step1"><Typography component="h3" variant='body1' paragraph align='center' color="primary">start over</Typography></Link>
                </StyledStepContainer>
            
    );
}

export default Result;