interface StoreData {
  id: number;
  name: string;
  info: ImageData[];
}

interface ImageData {
  name: string;
  url: string;
  price: number;
}

const storesData: { [key: string]: StoreData } = {
  "McDonald’s": {
    id: 1,
    name: "McDonald’s",
    info: [
      {
        name: "Big Mac",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/BIG_MAC:product-header-desktop?wid=829&hei=455&dpr=off",
        price: 3,
      },
      {
        name: "McChicken",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/Sdwch_McChicken:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.1,
      },
      {
        name: "McDouble",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/202002_0592_McDouble_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.5,
      },
      {
        name: "Quarter Pounder with Cheese Deluxe",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_4282_QuarterPounderCheeseDeluxe_Shredded_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 4,
      },
      {
        name: "Cheeseburger",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0003_Cheeseburger_StraightBun_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.8,
      },
      {
        name: "Double Cheeseburger",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_0004_DoubleCheeseburger_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 4,
      },
      {
        name: "World Famous Fries",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6050_SmallFrenchFries_Standing_832x472:product-header-desktop?wid=830&hei=456&dpr=off",
        price: 3,
      },
      {
        name: "Sausage Burrito",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0334_SausageBurrito_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 1.9,
      },
      {
        name: "Fruit & Maple Oatmeal",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_1500_Oatmeal_Fruit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 1.5,
      },
      {
        name: "Hash Browns",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0035_HashBrowns_Broken_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 3.5,
      },
    ],
  },
  KFC: {
    id: 2,
    name: "KFC",
    info: [
      {
        name: "Bucket duet original",
        url: "https://www.kfc-ukraine.com/admin/files/medium/medium_4093.png",
        price: 3,
      },
      {
        name: "McChicken",
        url: "https://www.kfc-ukraine.com/admin/files/medium/medium_4177.png",
        price: 2.1,
      },
      {
        name: "Cheeseburger",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0003_Cheeseburger_StraightBun_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.8,
      },
      {
        name: "Double Cheeseburger",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_0004_DoubleCheeseburger_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 4,
      },
      {
        name: "McDouble",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/202002_0592_McDouble_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.5,
      },
      {
        name: "Quarter Pounder with Cheese Deluxe",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_4282_QuarterPounderCheeseDeluxe_Shredded_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 4,
      },
      {
        name: "World Famous Fries",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6050_SmallFrenchFries_Standing_832x472:product-header-desktop?wid=830&hei=456&dpr=off",
        price: 3,
      },
      {
        name: "Sausage Burrito",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0334_SausageBurrito_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 1.9,
      },
      {
        name: "Fruit & Maple Oatmeal",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_1500_Oatmeal_Fruit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 1.5,
      },
      {
        name: "Hash Browns",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0035_HashBrowns_Broken_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 3.5,
      },
    ],
  },
  "Burger King": {
    id: 1,
    name: "Burger King",
    info: [
      {
        name: "Sausage Burrito",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0334_SausageBurrito_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 1.9,
      },
      {
        name: "Fruit & Maple Oatmeal",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_1500_Oatmeal_Fruit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 1.5,
      },
      {
        name: "Hash Browns",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0035_HashBrowns_Broken_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 3.5,
      },
      {
        name: "Big Mac",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/BIG_MAC:product-header-desktop?wid=829&hei=455&dpr=off",
        price: 3,
      },
      {
        name: "McChicken",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/Sdwch_McChicken:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.1,
      },
      {
        name: "McDouble",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/202002_0592_McDouble_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.5,
      },
      {
        name: "Quarter Pounder with Cheese Deluxe",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_4282_QuarterPounderCheeseDeluxe_Shredded_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 4,
      },
      {
        name: "Cheeseburger",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0003_Cheeseburger_StraightBun_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.8,
      },
      {
        name: "Double Cheeseburger",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_0004_DoubleCheeseburger_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 4,
      },
      {
        name: "World Famous Fries",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6050_SmallFrenchFries_Standing_832x472:product-header-desktop?wid=830&hei=456&dpr=off",
        price: 3,
      },
    ],
  },
  "Domino’s Pizza": {
    id: 1,
    name: "Domino’s Pizza",
    info: [
      {
        name: "Big Mac",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/BIG_MAC:product-header-desktop?wid=829&hei=455&dpr=off",
        price: 3,
      },
      {
        name: "Sausage Burrito",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0334_SausageBurrito_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 1.9,
      },
      {
        name: "Fruit & Maple Oatmeal",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_1500_Oatmeal_Fruit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 1.5,
      },
      {
        name: "Hash Browns",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0035_HashBrowns_Broken_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 3.5,
      },
      {
        name: "McChicken",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/Sdwch_McChicken:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.1,
      },
      {
        name: "McDouble",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/202002_0592_McDouble_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.5,
      },
      {
        name: "Quarter Pounder with Cheese Deluxe",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_4282_QuarterPounderCheeseDeluxe_Shredded_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 4,
      },
      {
        name: "Cheeseburger",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0003_Cheeseburger_StraightBun_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.8,
      },
      {
        name: "Double Cheeseburger",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_0004_DoubleCheeseburger_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 4,
      },
      {
        name: "World Famous Fries",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6050_SmallFrenchFries_Standing_832x472:product-header-desktop?wid=830&hei=456&dpr=off",
        price: 3,
      },
    ],
  },
  Starbucks: {
    id: 1,
    name: "Starbucks",
    info: [
      {
        name: "Cheeseburger",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202006_0003_Cheeseburger_StraightBun_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.8,
      },
      {
        name: "Double Cheeseburger",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_0004_DoubleCheeseburger_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 4,
      },
      {
        name: "World Famous Fries",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_6050_SmallFrenchFries_Standing_832x472:product-header-desktop?wid=830&hei=456&dpr=off",
        price: 3,
      },
      {
        name: "Big Mac",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/BIG_MAC:product-header-desktop?wid=829&hei=455&dpr=off",
        price: 3,
      },
      {
        name: "McChicken",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/Sdwch_McChicken:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.1,
      },
      {
        name: "McDouble",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/202002_0592_McDouble_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 2.5,
      },
      {
        name: "Quarter Pounder with Cheese Deluxe",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202201_4282_QuarterPounderCheeseDeluxe_Shredded_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 4,
      },
      {
        name: "Sausage Burrito",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0334_SausageBurrito_Alt_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 1.9,
      },
      {
        name: "Fruit & Maple Oatmeal",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202002_1500_Oatmeal_Fruit_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 1.5,
      },
      {
        name: "Hash Browns",
        url: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202004_0035_HashBrowns_Broken_832x472:product-header-desktop?wid=830&hei=458&dpr=off",
        price: 3.5,
      },
    ],
  },
};

export default storesData;
