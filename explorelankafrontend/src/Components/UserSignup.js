import { Avatar,Checkbox,FormControlLabel,Grid, Paper, TextField, Typography,Button } from "@mui/material";
import React from "react";
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


const Signup =()=>{
const paperStyle={padding:'30px 20px' ,width:300 ,margin:"20px auto"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:'#1bbd7e'}
const btnstyle={margin:'8px 0'}
    return (
        <Grid>
            <Paper  elevation={20}  style={paperStyle}>
                <Grid align= 'center'>
                    <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="caption" gutterBottom >Please fill this form to create an account!</Typography>
                </Grid>
                <form>
                    <TextField  label ='Fisrt Name'placeholder="Enter First Name"  variant="standard" fullwidth required/>
                    <TextField  label ='Last Name'placeholder="Enter Last Name"  variant="standard" fullwidth required/>
                    <TextField  label ='Email' placeholder="Enter your Email" variant="standard" fullwidth required/>
                    <TextField  label ='Contact Number' placeholder="Enter Contact Number" variant="standard" fullwidth required/>
                    <TextField  label ='Password' placeholder="Enter Password" variant="standard" fullwidth required/>
                    <TextField  label ='Confirm Password' placeholder="Re-Enter Password " variant="standard" fullwidth required/>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="I Accept the Terms and Conditions" />
                    <Button type ='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                  
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup