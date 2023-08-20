import * as caravan from "../caravan-rs/pkg";

let network = caravan.Network.from_str("bitcoin");
let external_descriptor = caravan.ExtendedDescriptor.from_str("sh(sortedmulti(2,[f57ec65d/45'/0'/100']xpub6CCHViYn5VzPfSR7baop9FtGcbm3UnqHwa54Z2eNvJnRFCJCdo9HtCYoLJKZCoATMLUowDDA1BMGfQGauY3fDYU3HyMzX4NDkoLYCSkLpbH/0/*,[efa5d916/45'/0'/100']xpub6Ca5CwTgRASgkXbXE5TeddTP9mPCbYHreCpmGt9dhz9y6femstHGCoFESHHKKRcm414xMKnuLjP9LDS7TwaJC9n5gxua6XB1rwPcC6hqDub/0/*))#uxj9xxul");
let internal_descriptor = caravan.ExtendedDescriptor.from_str("sh(sortedmulti(2,[f57ec65d/45'/0'/100']xpub6CCHViYn5VzPfSR7baop9FtGcbm3UnqHwa54Z2eNvJnRFCJCdo9HtCYoLJKZCoATMLUowDDA1BMGfQGauY3fDYU3HyMzX4NDkoLYCSkLpbH/1/*,[efa5d916/45'/0'/100']xpub6Ca5CwTgRASgkXbXE5TeddTP9mPCbYHreCpmGt9dhz9y6femstHGCoFESHHKKRcm414xMKnuLjP9LDS7TwaJC9n5gxua6XB1rwPcC6hqDub/1/*))#3hxf9z66");
let config = caravan.CaravanConfig.new(network, external_descriptor, internal_descriptor, "test1","public");

let name = config.name();
const name_text = document.querySelector("#name");
name_text.textContent = `Name: ${name}`;

let address_type = config.address_type();
const address_type_text = document.querySelector("#address_type");
address_type_text.textContent = `Address Type: ${address_type}`;

let ext_address_0 = config.external_address(0);
const ext_address_text = document.querySelector("#ext_address");
ext_address_text.textContent = `External Address: ${ext_address_0}`;
