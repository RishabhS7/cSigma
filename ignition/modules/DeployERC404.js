const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers } = require("hardhat");

// const JAN_1ST_2030 = 1893456000;
// const ONE_GWEI = 1_000_000_000n;
const _name = "CSigma Token";
const _symbol = "CST";
const _decimals = 18;
const _totalNativeSupply = 1000000;
const _owner = "0x8D5F686e8d3F91678a8E2F3B327eFD8533567146";
const _tokenPrice = ethers.parseEther("0.001");

module.exports = buildModule("LockModule", (m) => {
  const name = m.getParameter("_name", _name);
  const symbol = m.getParameter("_symbol", _symbol);
  const decimals = m.getParameter("_decimals", _decimals);
  const totalNativeSupply = m.getParameter(
    "_totalNativeSupply",
    _totalNativeSupply
  );
  const owner = m.getParameter("_owner", _owner);
  const tokenPrice = m.getParameter("_tokenPrice", _tokenPrice);

  const CSigma = m.contract("CSigmaERC404", [
    name,
    symbol,
    decimals,
    totalNativeSupply,
    owner,
    tokenPrice,
  ]);

  return { CSigma };
});
