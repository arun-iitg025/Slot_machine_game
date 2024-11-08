import React, { useState } from 'react';
import './App.css';

// Define the paths to images in the Image folder
const slot1Items = [
  {image:"/src/images/minibus.png", type: "Vehicle",  name: "MiniBus", rarity:"Epic", health: "112km/h", count: 1 },
  {image:"/src/images/brdm2.png", type: "Vehicle",  name: "BRDM-2", rarity:"Rare", health: "102km/h", count: 1 },
  {image:"/src/images/atv.png", type: "Vehicle",  name: "Quad", rarity:"Epic", health: "110km/h", count: 1 },
  {image:"/src/images/motorbike.png", type: "Vehicle",  name: "MotorBike", rarity:"Epic", health: "141km/h", count: 1 },
  {image:"/src/images/buggy.png", type: "Vehicle",  name: "Buggy", rarity:"Common", health: "141km/h", count: 1 },
  {image:"/src/images/dacia.png", type: "Vehicle",  name: "Dacia", rarity:"Epic", health: "130km/h", count: 1 },
  {image:"/src/images/coupe_rb.png", type: "Vehicle",  name: "CoupeRB", rarity:"Common", health: "140km/h", count: 1 },
  {image:"/src/images/pico_bus.png", type: "Vehicle",  name: "Pico-Bus", rarity: "Epic", health: "132km/h", count: 1 },
  {image:"/src/images/pillar.png", type: "Vehicle",  name: "Security", rarity: "Legendary", health: "180km/h", count: 1 },
  {image:"/src/images/pickup_truck.png", type: "Vehicle",  name: "Pickup", rarity:"Epic", health: "112km/h", count: 1 },
  {image:"/src/images/snowmobile.png", type: "Vehicle",  name: "Snowmobile", rarity:"Common", health: "120km/h", count: 1 },
  {image:"/src/images/uaz.png", type: "Vehicle",  name: "UAG", rarity:"Legendary", health: "107km/h", count: 1 },
  {image:"/src/images/motorglider.png", type: "Vehicle",  name: "Motor Glider", rarity: "Epic", health: "107km/h", count: 1 },
  {image:"/src/images/rony.png", type: "Vehicle",  name: "Rony", rarity: "Legendary", health: "120km/h", count: 1 },
  {image:"/src/images/jetski.png", type: "Vehicle",  name: "Aquarail", rarity:"Epic", health: "107km/h", count: 1 },
  {image:"/src/images/boat.png", type: "Vehicle",  name: "Boat", rarity:"Common", health: "117km/h", count: 1 },

];
const slot2Items = [
    // gun
  
  {image:"/src/images/scar.png", type: "Weapon",   name: "SCAR-L", rarity: "Legendary", health: "H : 500", count: 3 },
  {image:"/src/images/m4.png", type: "Weapon",   name: "M416", rarity: "Legendary", health: "H : 900", count: 4 },
  {image:"/src/images/akm.png", type: "Weapon",   name: "AKM", rarity: "Rare", health: "H : 300", count: 1 },
  {image:"/src/images/aug_a3.png", type: "Weapon",   name: "AUG A3", rarity: "Epic", health: "H : 400", count: 3 },
  {image:"/src/images/groza.png", type: "Weapon",   name: "Groza", rarity: "Epic", health: "H : 200", count: 2 },
  {image:"/src/images/ace32.png", type: "Weapon",   name: "ACE-32", rarity: "Legendary", health: "H : 500", count: 5 },
  {image:"/src/images/famas_g2.png", type: "Weapon",   name: "FAM-G2", rarity: "Rare", health: "H : 200", count: 2 },
  {image:"/src/images/beryl_m762.png", type: "Weapon",   name: "Beryl", rarity: "Legendary", health: "H : 200", count: 1 },
  {image:"/src/images/g36c.png", type: "Weapon",   name: "G36C", rarity: "Epic", health: "H : 400", count: 4 },
  {image:"/src/images/k2.png", type: "Weapon",   name: "K2", rarity: "Rare", health: "H : 500", count: 3 },
  {image:"/src/images/m16a4.png", type: "Weapon",   name: "M16A4", rarity: "Epic", health: "H : 100", count: 1 },
  {image:"/src/images/mk47_mutant.png", type: "Weapon",   name: "MK47", rarity: "Rare", health: "H : 300", count: 2 },
  {image:"/src/images/p1911.png", type: "Weapon",   name: "P1911", rarity: "Legendary", health: "H : 500", count: 3 },
  {image:"/src/images/qbz95.png", type: "Weapon",   name: "QBZ95", rarity: "Epic", health: "H : 700", count: 2 },

];
const slot3Items = [
  
  {image:"/src/images/bz_grenade.png", type: "Consumable",  name: "BZ-4", rarity: "Common", health: "H : 500", count: 2 },
  {image:"/src/images/c4.png", type: "Consumable",  name: "C4", rarity: "Epic", health: "H : 400", count: 2 },
  {image:"/src/images/crowbar.png", type: "Consumable",  name: "Crowbar", rarity: "Common", health: "H : 200", count: 2 },
  {image:"/src/images/decoy_grenade.png", type: "Consumable",  name: "Decoy", rarity: "Epic", health: "H : 500", count: 5 },
  {image:"/src/images/frag_grenade.png", type: "Consumable",  name: "FRAG", rarity: "Common", health: "H : 200", count: 2 },
  {image:"/src/images/machete.png", type: "Consumable",  name: "Machete", rarity: "Epic", health: "H : 300", count: 4 },
  {image:"/src/images/molotov_cocktail.png", type: "Consumable",  name: "Molotov", rarity: "Epic", health: "H : 500", count: 4 },
  {image:"/src/images/pan.png", type: "Consumable",  name: "PAN", rarity: "Epic", health: "H : 800", count: 3 },
  {image:"/src/images/pickaxe.png", type: "Consumable",  name: "Pickaxe", rarity: "Common", health: "H : 600", count: 2 },
  {image:"/src/images/sickle.png", type: "Consumable",  name: "SICKLE", rarity: "Epic", health: "H : 400", count: 3 },
  {image:"/src/images/skorpion.png", type: "Consumable",  name: "Skorpion", rarity: "Epic", health: "H : 300", count: 2 },
  {image:"/src/images/smoke_grenade.png", type: "Consumable",  name: "Smoke", rarity: "Epic", health: "H : 200", count: 5 },
  {image:"/src/images/sticky_bomb.png", type: "Consumable",  name: "Bomb", rarity: "Common", health: "H : 100", count: 2 },
  {image:"/src/images/stun_grenade.png", type: "Consumable",  name: "Stun", rarity: "Epic", health: "H : 400", count: 4 },
];

const App = () => {
  const [reel1, setReel1] = useState(slot1Items[0]);
  const [reel2, setReel2] = useState(slot2Items[0]);
  const [reel3, setReel3] = useState(slot3Items[0]);
  const [spinning, setSpinning] = useState(false);

  const getRandomItem = (items) => items[Math.floor(Math.random() * items.length)];

  const spinReels = () => {
    setSpinning(true);
    
    // Set the reels to random items after a delay to simulate the spin stopping
    setTimeout(() => {
      setReel1(getRandomItem(slot1Items));
    }, 1000);

    setTimeout(() => {
      setReel2(getRandomItem(slot2Items));
    }, 1300);

    setTimeout(() => {
      setReel3(getRandomItem(slot3Items));
      setSpinning(false); // Stop spinning after the last reel finishes
    }, 1600);
  };

  return (
    <div className="App">
    <div className='topic1'>
      <h1 className="topic">Slot Machine Game</h1>
      <h6>Powered by PUBG</h6>
    </div>
      <div className="reels">
        <Reel currentItem={reel1} spinning={spinning} items={slot1Items} />
        <Reel currentItem={reel2} spinning={spinning} items={slot2Items} />
        <Reel currentItem={reel3} spinning={spinning} items={slot3Items} />
      </div>
      <button onClick={spinReels} disabled={spinning}>
        {spinning ? "Spinning..." : "Spin"}
      </button>
      <div className="result">
        <h2>Rewards</h2>
        <p> Item Type : {reel1.type}, {reel2.type}, {reel3.type}</p>
        <p> Rarity : {reel1.rarity}, {reel2.rarity}, {reel3.rarity}</p>
        <p> Count : {reel1.count + reel2.count + reel3.count}</p>
      </div>
    </div>
  );
};

const Reel = ({ currentItem, spinning, items }) => (
  <div className="reel-container">
    <div className={`reel ${spinning ? "spinning" : ""}`}>
      {spinning ? (
        items.map((item, index) => (
          <div key={index} className="reel-item">
            <img src={item.image} alt={`slot item ${index}`} />
            {/* <h3>{item.type}</h3>
            <p>{item.rarity}</p>
            <p>x{item.count}</p> */}
          </div>
        ))
      ) : (
        <div className="reel-item">
          <img src={currentItem.image} alt="final item" />
          <h5>{currentItem.name}</h5>
          <p>{currentItem.health}</p>
          <p>x{currentItem.count}</p>
        </div>
      )}
    </div>
  </div>
);

export default App;
