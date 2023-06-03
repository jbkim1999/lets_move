import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme, styled } from '@mui/material/styles';
import { tokens } from "../theme"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const Home = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [moneyLeft, setMoneyLeft] = useState(1000); // Initialize money left

    const handleAddItems = () => {
        console.log("Something to be done")
    };

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
        },
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
        },
    ];

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            padding: theme.spacing(5),
        }}>
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' },
                gap: theme.spacing(5),
                height: '100%',
                width: '100%',
            }}>
                <Box sx={{ // human block
                    backgroundColor: colors.primary[400],
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '2%',
                    padding: theme.spacing(3),
                }}>
                    <Box sx={{ // head
                        backgroundColor: "white",
                        height: "50px",
                        width: "50px"
                    }}>
                    </Box>
                    <Box sx={{ // body
                        backgroundColor: "white",
                        height: "100px",
                        width: "175px",
                        marginTop: 2,
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "flex-end"
                    }}>
                        <Box sx={{ bgcolor: colors.primary[400], height: "100px", width: "10px", marginRight: 12 }} />
                        <Box sx={{ bgcolor: colors.primary[400], height: "100px", width: "10px" }} />
                    </Box>
                    <Box sx={{ // legs
                        backgroundColor: "white",
                        height: "175px",
                        width: "100px",
                        marginTop: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "flex-end"
                    }}>
                        <Box sx={{
                            backgroundColor: colors.primary[400],
                            width: "10px",
                            height: "175px"
                        }}
                        />
                    </Box>
                    <Box sx={{
                        bgcolor: "black",
                        width: "500px",
                        height: "225px",
                        marginTop: 5,
                        borderRadius: "10px",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center"
                    }}
                    >
                        Move command line to be printed...
                    </Box>
                </Box>


                <Box sx={{ // shopping block and table block
                    backgroundColor: colors.primary[400],
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '2%',
                    padding: theme.spacing(3),
                }}>
                    <Box // add item button and a money display
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: "82%"
                        }}>
                        <Button variant="contained" onClick={handleAddItems}>Add Items + </Button>
                        <Typography variant="h6">Balance: {moneyLeft}</Typography>
                    </Box>

                    <ImageList // shopping list
                        sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>

                    <Box // inventory list
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            flexDirection: 'row',
                            width: 500,
                            height: 150,
                        }}
                    >
                        {itemData.map((item) => (
                            <Box key={item.img} sx={{ marginRight: 0.5 }}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{
                                        height: '100%',
                                        width: 'auto',
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}

export default Home;
