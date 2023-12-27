import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import { Facebook, GitHub, Google, Twitter } from '@mui/icons-material';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import app from '../../Firebase/Firebase.init';
const auth = getAuth(app)

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.



export default function Signup() {
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
    const facebookprovider = new FacebookAuthProvider();
    const twitterprovider = new TwitterAuthProvider();

    const [user, setUser] = useState({});

    const handleGoogleSignin = () => {
        signInWithPopup(auth, googleprovider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
            .catch(error => {
                console.log("Error", error);
            })
    }
    const handleGithubSignin = () => {
        signInWithPopup(auth, githubprovider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
            .catch(error => {
                console.log("Error", error);
            })
    }
    const handleFacebookSignin = () => {
        signInWithPopup(auth, facebookprovider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
            .catch(error => {
                console.log("Error", error);
            })
    }
    const handleTwitterSignin = () => {
        signInWithPopup(auth, twitterprovider)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
            .catch(error => {
                console.log("Error", error);
            })
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const getEmail = (event) => {
        setEmail(event.target.value);

    }
    const getPassword = (event) => {
        setPassword(event.target.value);

    }


    const handleSubmit = event => {

        
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('Error creating user:', error.message);
            });

        event.preventDefault();
    }


    return (

        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                onBlur={getEmail}

                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                onBlur={getPassword}

                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="Remember Me"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container direction="column" alignItems="center">

                        <Grid container direction="column" alignItems="center">
                            <Grid item>
                                Already have an account?
                                <Link to='/userlogin' variant="body2">
                                    Sign in
                                </Link>
                            </Grid>
                            <Grid item>
                                Or Sign With

                            </Grid>
                            <Grid container justifyContent="center" style={{ marginTop: '20px' }}>
                                <Button
                                    variant="contained"
                                    onClick={handleGoogleSignin}
                                    startIcon={<Google />}
                                    fullWidth
                                    sx={{ width: '100%', marginBottom: '7px' }}
                                >
                                    Google
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleGithubSignin}
                                    startIcon={<GitHub />}
                                    fullWidth

                                    sx={{ width: '100%', marginBottom: '7px' }}
                                >
                                    GitHub
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleFacebookSignin}

                                    startIcon={<Facebook />}
                                    fullWidth

                                    sx={{ width: '100%', marginBottom: '7px' }}
                                >
                                    Facebook
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={handleTwitterSignin}

                                    startIcon={<Twitter />}
                                    fullWidth

                                    sx={{ width: '100%', marginBottom: '7px' }}
                                >
                                    Twitter
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 5 }} />
        </Container>

    );
}