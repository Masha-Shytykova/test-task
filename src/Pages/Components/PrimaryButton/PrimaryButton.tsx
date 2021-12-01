import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 0, 2),
    },
}));

interface Props {
    children?: string;
    props?: string[];
}
export const PrimaryButton = ({ children, props }: Props) => {
    const styles = useStyles();

    return (
        <Button type="submit" fullWidth variant="contained" color="primary" className={styles.root} {...props}>{ children}</Button>
    );
}
