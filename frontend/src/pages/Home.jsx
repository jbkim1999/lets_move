import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme, styled } from '@mui/material/styles';
import { tokens } from "../theme"
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import { JsonRpcProvider, testnetConnection } from '@mysten/sui.js';
import axios from 'axios';

import image_1 from "../assets/1.png";
import image_2 from "../assets/2.png";
import image_3 from "../assets/3.png";
import image_4 from "../assets/4.png";
import image_5 from "../assets/5.png";

const Home = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [moneyLeft, setMoneyLeft] = useState("Loading..."); // Initialize money left
    const [ownerObjects, setOwnerObjects] = useState([]);
    const [playerObjects, setPlayerObjects] = useState([]);
    // const provider = new JsonRpcProvider(testnetConnection);
    const testnetEndpoint = "https://sui-testnet.nodeinfra.com";
    const storeAddress = "";
    const playerAddress = "0xc5751e6f92fe2bae9d1f165f31d0bf014c06788c21ad4d079bc8579327ffc593";

    useEffect(() => {
        loadBalance();
    }, []);

    async function loadBalance() {
        const response = await axios.post(testnetEndpoint, {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "suix_getBalance",
            "params": [
              playerAddress
            ]
          }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
        setMoneyLeft(response.data.result.totalBalance);
    }

    async function loadObjects(address, isOwner) {
        const response = await axios.post(testnetEndpoint, {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "suix_getOwnedObjects",
            "params": [
                address,
                {
                "filter": {
                    "MatchAll": [
                    {
                        "StructType": "0x6b45398ec9f219f7020121ef890ade2e658d521bf180a79862d2d5145bd7e762::purchase::Item"
                    },
                    {
                        "AddressOwner": address
                    }
                    ]
                },
                "options": {
                    "showType": true,
                    "showOwner": true,
                    "showPreviousTransaction": false,
                    "showDisplay": false,
                    "showContent": true,
                    "showBcs": false,
                    "showStorageRebate": false
                }
                },
            ]
        });
        // console.log(response);
        const objects = response.data.result.data.map(e => {
            const obj = {id: e.data.content.fields.id.id, e_type: e.data.content.fields.equipment_type};
            return obj;
        });
        console.log(objects);
        if (isOwner) {
            setOwnerObjects(objects);
        } else {
            setPlayerObjects(objects);
        }
    }

    // const handleAddBalance = async () => {
    //     await axios.post('https://faucet.testnet.sui.io/gas', {
    //         FixedAmountRequest: {
    //           recipient: playerAddress
    //         }
    //       }, {
    //         headers: {
    //           'Content-Type': 'application/json'
    //         }
    //       });
    //     await loadBalance();
    // };

    // Initialize hero's equipment with null values
    const [equippedItems, setEquippedItems] = useState({
        head: {
            img: null,
            title: null,
            type: 1
        },
        body: {
            img: null,
            title: null,
            type: 2
        },
        leftArm: {
            img: null,
            title: null,
            type: 3
        },
        rightArm: {
            img: null,
            title: null,
            type: 4
        },
        legs: {
            img: null,
            title: null,
            type: 5
        },
    });

    const handleBuyItem = (id) => { // this function needs to add the item to inventoryData, and remove from shoppingData through API
        console.log(id)
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


    const [shoppingData, setShoppingData] = useState([{}])
    const [inventortData, setInventoryData] = useState([{}])

    const handleAddItems = () => {
        fetch('http://localhost:3000/run-script')
            .then(response => response.text())
            .then(result => {
                console.log('Success:', result);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const ShoppingData = [
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            type: 1
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Burger',
            type: 1
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Camera',
            type: 2
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Coffee',
            type: 2
        },
        {
            img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
            title: 'Hats',
            type: 2
        },
        {
            img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
            title: 'Honey',
            type: 5
        },
        {
            img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
            title: 'Basketball',
            type: 5
        },
        {
            img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
            title: 'Fern',
            type: 3
        },
        {
            img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
            title: 'Mushrooms',
            type: 3
        },
        {
            img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
            title: 'Tomato basil',
            type: 4
        },
        {
            img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
            title: 'Sea star',
            type: 4
        },
    ];

    const InventoryData = [
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
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 400
                        }}>
                        <Button variant="contained" onClick={handleAddItems}>Add Items + </Button>
                        {/* <Button variant="contained" onClick={handleAddBalance}>Add Balance + </Button> */}
                        <Typography variant="h6">Balance: {moneyLeft}</Typography>
                    </Box>

                    <ImageList // shopping list
                        sx={{ width: 400, height: 330 }} cols={3} rowHeight={164}>
                        {ownerObjects.map((obj) => {
                            if (obj.e_type == 1) {
                                return (
                                    <ImageListItem key={obj.id}>
                                        <img src={image_1} onClick={() => handleBuyItem(obj.id)}/>
                                    </ImageListItem>
                                )
                            } else if (obj.e_type == 2) {
                                return (
                                    <ImageListItem key={obj.id}>
                                        <img src={image_2} onClick={() => handleBuyItem(obj.id)}/>
                                    </ImageListItem>
                                )
                            } else if (obj.e_type == 3) {
                                return (
                                    <ImageListItem key={obj.id}>
                                        <img src={image_3} onClick={() => handleBuyItem(obj.id)}/>
                                    </ImageListItem>
                                )
                            } else if (obj.e_type == 4) {
                                return (
                                    <ImageListItem key={obj.id}>
                                        <img src={image_4} onClick={() => handleBuyItem(obj.id)}/>
                                    </ImageListItem>
                                )
                            } else if (obj.e_type == 5) {
                                return (
                                    <ImageListItem key={obj.id}>
                                        <img src={image_5} onClick={() => handleBuyItem(obj.id)}/>
                                    </ImageListItem>
                                )
                            }
                        }
                        )}
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
                        {playerObjects.map((obj) => {
                            if (obj.e_type == 1) {
                                return (
                                    <ImageListItem key={obj.id}>
                                        <img src={image_1} onClick={() => handleBuyItem(obj.id)}
                                        />
                                    </ImageListItem>
                                )
                            } else if (obj.e_type == 2) {
                                return (
                                    <ImageListItem key={obj.id}>
                                        <img src={image_2} onClick={() => handleBuyItem(obj.id)}/>
                                    </ImageListItem>
                                )
                            } else if (obj.e_type == 3) {
                                return (
                                    <ImageListItem key={obj.id}>
                                        <img src={image_3} onClick={() => handleBuyItem(obj.id)}/>
                                    </ImageListItem>
                                )
                            } else if (obj.e_type == 4) {
                                return (
                                    <ImageListItem key={obj.id}>
                                        <img src={image_4} onClick={() => handleBuyItem(obj.id)}/>
                                    </ImageListItem>
                                )
                            } else if (obj.e_type == 5) {
                                return (
                                    <ImageListItem key={obj.id}>
                                        <img src={image_5} onClick={() => handleBuyItem(obj.id)}/>
                                    </ImageListItem>
                                )
                            }
                        }
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Home;
