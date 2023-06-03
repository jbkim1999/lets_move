import { useState, useEffect } from 'react';
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

    // Initialize hero's equipment with null values
    const [equippedItems, setEquippedItems] = useState({
        head: {
            img: null,
            title: null,
            type: "head"
        },
        body: {
            img: null,
            title: null,
            type: "body"
        },
        leftArm: {
            img: null,
            title: null,
            type: "leftArm"
        },
        rightArm: {
            img: null,
            title: null,
            type: "rightArm"
        },
        legs: {
            img: null,
            title: null,
            type: "ledgs"
        },
    });

    const handleBuyItem = (item) => { // this function needs to add the item to inventoryData, and remove from shoppingData through API
        console.log(item)
    }

    const handleEquipItem = (item) => {
        // Equip item to the corresponding slot in the hero's equipment
        setEquippedItems((prevEquippedItems) => ({
            ...prevEquippedItems,
            [item.type]: item,
        }));
        console.log(equippedItems)
    };

    useEffect(() => {
        console.log(equippedItems);
    }, [equippedItems]);

    const handleAddItems = () => {
        console.log("Something to be done with api")
    };

    const handleAddBalance = () => {
        console.log("Something to be done with api")
    };

    const shoppingData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            type: "head"
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            type: "head"
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            type: "body"
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            type: "body"
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            type: "body"
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            type: "legs"
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            type: "legs"
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            type: "leftArm"
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            type: "leftArm"
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            type: "rightArm"
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            type: "rightArm"
        },
    ];

    const inventoryData = [
        {
            img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
            title: 'Bike',
            type: "head"
        },
    ]

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
                    <h3>Hero</h3>
                    {
                        equippedItems.head.img == null ?
                            <Box sx={{ // head
                                bgcolor: "white", height: "50px", width: "50px"
                            }} >
                            </Box>
                            :
                            <Box sx={{ // head
                                bgcolor: "white", height: "50px", width: "50px"
                            }} >
                                <img src={equippedItems.head.img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                            </Box>
                    }
                    <Box sx={{
                        height: "100px",
                        width: "175px",
                        marginTop: 2,
                        display: "flex",
                        justifyContent: 'center',
                        alignItems: "flex-end"
                    }}>
                        {
                            equippedItems.leftArm.img == null ?
                                <Box sx={{ // left-arm
                                    bgcolor: "white", height: "100px", width: "25px"
                                }} >
                                </Box>
                                :
                                <Box sx={{ // left-arm
                                    bgcolor: "white", height: "100px", width: "25px"
                                }} >
                                    <img src={equippedItems.leftArm.img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                                </Box>
                        }
                        {
                            equippedItems.body.img == null ?
                                <Box sx={{ // body
                                    bgcolor: "white", height: "100px", width: "100px", marginLeft: 1, marginRight: 1
                                }} >
                                </Box>
                                :
                                <Box sx={{ // body
                                    bgcolor: "white", height: "100px", width: "100px", marginLeft: 1, marginRight: 1
                                }} >
                                    <img src={equippedItems.body.img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                                </Box>
                        }
                        {
                            equippedItems.leftArm.img == null ?
                                <Box sx={{ // right-arm
                                    bgcolor: "white", height: "100px", width: "25px"
                                }} >
                                </Box>
                                :
                                <Box sx={{ // right-arm
                                    bgcolor: "white", height: "100px", width: "25px"
                                }} >
                                    <img src={equippedItems.rightArm.img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                                </Box>
                        }
                    </Box>
                    {
                        equippedItems.legs.img == null ?
                            <Box sx={{ // legs
                                backgroundColor: "white",
                                height: "150px",
                                width: "100px",
                                marginTop: 2,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: "flex-end"
                            }}>
                                <Box sx={{
                                    backgroundColor: colors.primary[400],
                                    width: "10px",
                                    height: "150px"
                                }}></Box>
                            </Box>
                            :
                            <Box sx={{ // legs
                                backgroundColor: "white",
                                height: "175px",
                                width: "100px",
                                marginTop: 2,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: "flex-end"
                            }}>
                                <img src={equippedItems.legs.img} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                            </Box>
                    }

                    <h3>Move command line: </h3>
                    <Box sx={{
                        bgcolor: "black",
                        width: "500px",
                        height: "225px",
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
                    <h3>Shopping List</h3>
                    <Box // add item button and a money display
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: 400
                        }}>
                        <Button variant="contained" onClick={handleAddItems}>Add Items + </Button>
                        <Button variant="contained" onClick={handleAddBalance}>Add Balance + </Button>
                        <Typography variant="h6">Balance: {moneyLeft}</Typography>
                    </Box>

                    <ImageList // shopping list
                        sx={{ width: 400, height: 330 }} cols={3} rowHeight={164}>
                        {shoppingData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                    onClick={() => handleBuyItem(item)}
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>

                    <h3>Inventory List</h3>
                    <Box // inventory list
                        sx={{
                            display: 'flex',
                            overflowX: 'auto',
                            flexDirection: 'row',
                            width: 400,
                            height: 150,
                        }}
                    >
                        {inventoryData.map((item) => (
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
                                    onClick={() => handleEquipItem(item)}
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
