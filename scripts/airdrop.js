const dotenv = require("dotenv");
const { ethers } = require("ethers");

dotenv.config();

const CONTRACT_ADDRESS = "0x7cdf2b869d752E2dCD886d494dEe09658aA7ed73";

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
const account = wallet.connect(provider);

const abi = [
  "function create(address recipient, uint256[] calldata ids, uint256[] calldata amounts) external",
  "function safeBatchTransferFrom(address from, address to, uint256[] calldata ids, uint256[] calldata amounts, bytes calldata data) external",
];
const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, account);

const idToRecipients = {
  1: [
    "0xA9992C19E9EB543219b6d52F6BAa983926E8eA70",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  2: [
    "0x1170BADCCf54d1bA15E4e0a4C85A944D6297eb9D",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  3: [
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
    "0xC0225f37F8645d1153b566077F49b109D3156d0B",
    "",
  ],
  4: [
    "0x4Cb34990F51a3c06E5809746E62f290dBA99f09E",
    "0x0a7dDbE4d5637F8E53a271976545904Bf7b4d23F",
    "0x839469C31b854B6E6A0c1e67e6183eBBdaB46456",
    "0x6cdFAF2EFeCfbEAbE2db319D598d7307F855C03a",
    "0x5B16DaA1f7d5c52994F46Cc0Cb2F8fE240cF093B",
  ],
  5: [
    "0x839469C31b854B6E6A0c1e67e6183eBBdaB46456",
    "0x50d7E3e33660682290aC3CE9bE808d3f3CAbc10e",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  6: [
    "0xF8690B1bA8cae43190CAc09eff23B0763bc670fc",
    "0x839469C31b854B6E6A0c1e67e6183eBBdaB46456",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  7: [
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
    "0x50d7E3e33660682290aC3CE9bE808d3f3CAbc10e",
    "0xFd19276756130aAabD95DB2545Ac54c65A09B6C4",
  ],
  8: [
    "0x839469C31b854B6E6A0c1e67e6183eBBdaB46456",
    "0x8c14D46C920c877d296aaf34F5fC65fF6D8C01CF",
    "0x528897fa5321d8158ee6E36c7EFAA06DB378f3d3",
    "0x1b5A5Aa8ca1B3f4d55ccAAb0eADab56C52d0374d",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  9: [
    "0xbb31bfee8815Da9E25172382b7cFF8583412c5c6",
    "0xeAaD53c1D291300bE345B68d0E7a9E5fA7f1aC1a",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  10: [
    "0x839469C31b854B6E6A0c1e67e6183eBBdaB46456",
    "0xb66e39960aA3E1f0e3Ca4A7Fb1214641358e7694",
    "0xAB87Eb50280a340b42F4eaB31db90714B39fe687",
    "0xd99F0782fe35D9fCc87A8ea8b6Fb8cF2a1c335B7",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  11: [
    "0x3266F93f62012b47E2C6E640696D7FcC7aD2Dbb3",
    "0x1F48C3c764B73DaCf08B766cAfB51d1B3BC3e798",
    "0xFd19276756130aAabD95DB2545Ac54c65A09B6C4",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  12: [
    "0x8481CA35C51260A7b1289356855C82349381fC34",
    "0x5B16DaA1f7d5c52994F46Cc0Cb2F8fE240cF093B",
    "0x921eF7ACC7564a0b740E472857002897DFFDE04b",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  13: [
    "0xC93BBD6b37893667bf1e100F7Bd445E3044D72C9",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  14: [
    "0xB2bE2887A26f44555835EEaCC47d65B88b6B42c2",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  15: [
    "0xeAaD53c1D291300bE345B68d0E7a9E5fA7f1aC1a",
    "0x4Cb34990F51a3c06E5809746E62f290dBA99f09E",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  16: [
    "0xeAaD53c1D291300bE345B68d0E7a9E5fA7f1aC1a",
    "0x4Cb34990F51a3c06E5809746E62f290dBA99f09E",
    "0xAe69676087274353e441A49cd02F7eec1edf9Caf",
    "0x813F98977A00Ca98b453E3D963294BEF326C40dD",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  17: [
    "0x17c57bD297175e5711Ee3Daf045252B588f3162F",
    "0x86DBe1f56dC3053b26522de1B38289E39AFCF884",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  18: [
    "0x249b3e131a4e11967402C28BA913cd7061391BAb",
    "0xF7bF1d9bf5e516f0A0FD45D2e17fBC9D0117D485",
    "",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  19: [
    "0x2310abf1eF6BEB30B74BFf98ac1b326B647F4224",
    "0x55ba3Fb20c6611f1d12cb4fC516Caff57EafB372",
    "0x3035A1bBd824041B07f8Ab2297a71A81E00127c5",
    "0x30FDF9E10f7e50CA5bDd8f6Ae10A389495d97c09",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  20: [
    "0xF95555A29E58188147D3A3AcD6e2Ffeb04EA7dd5",
    "0xF7129631fad9C3a52a55EB6Ef96646C84e2161C4",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  21: [
    "0x839469C31b854B6E6A0c1e67e6183eBBdaB46456",
    "0x0aC1C1c174C0177bD7ec4b1067a2fc4563d39854",
    "0x0d950586CB18AB0fD6AeDCE6a93372B3436BD07e",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  22: [
    "0x1f648b364A8c8cdc679D0C77e60fd263Fd1D9da8",
    "0xC8400C204499DcE938ECC6ef009837D937E00109",
    "0x8fc6d73F29d7958b415F22dB1EfE96b5481d3fdF",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  23: [
    "0x672B251834E1616ab8269096bD06840875DEB4CF",
    "0x792F3305f1D006e55596cbe94E4191360CFDa38E",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  24: [
    "0x3C58B5bA272007000853Ab77758E2b3CB74756bE",
    "0xAbA775AcF88723E05dB5546BaE58f10C20a9F061",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  25: [
    "0x8C6ee8f98282210dfFb57ed29606b11dF5304fbA",
    "0x42F9Ca5c15Af094B9EEE30DcD16d14C3883Aa9f7",
    "0x76287CFD5bafc6F4cf1D13Cf98e5Df12AAD08D7B",
    "0xdecade94372b9b7F11091E75c769a9a98fA42b69",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
  ],
  26: [
    "0xf7decdd4fA3941B9Ae84efDC9e60EC9Cb3870590",
    "0x4F9f7e5cE597899B6249Ee527842c7B7CA760775",
    "",
  ],
};

const mint = async () => {
  const ids = [];
  const amounts = [];

  for (const [id, recipients] of Object.entries(idToRecipients)) {
    ids.push(id);
    amounts.push(recipients.length + 2); // extra for designer & mod
  }

  console.log(
    `Minting tokens ${ids.join(",")} with amounts ${amounts.join(",")}`
  );
  const tx = await contract.create(wallet.address, ids, amounts);
  await tx.wait();
};

const batchTransfer = async () => {
  const recipientsToIDs = {
    "0x7C891c0B8996195a50c178A22DA195c632914b2e": Object.keys(
      idToRecipients
    ).filter((id) => id !== "26"), // designer
    "0x45588d2AedD9a5075dfAF39EC3ceC63768865b2c": Object.keys(idToRecipients), // mod
  };

  for (const [id, recipients] of Object.entries(idToRecipients)) {
    for (const recipient of recipients) {
      if (recipient === "") continue; // address not provided
      const ids = recipientsToIDs[recipient] || [];
      ids.push(id);
      recipientsToIDs[recipient] = ids;
    }
  }

  for (const [recipient, ids] of Object.entries(recipientsToIDs)) {
    const amounts = Array(ids.length).fill(1);

    console.log(
      `Transferring tokens ${ids.join(",")} with amounts ${amounts.join(
        ","
      )} to ${recipient}`
    );

    const tx = await contract.safeBatchTransferFrom(
      wallet.address,
      recipient,
      ids,
      amounts,
      "0x"
    );
    await tx.wait();
  }
};

const airdrop = async () => {
  await mint();
  await batchTransfer();
};

airdrop();
