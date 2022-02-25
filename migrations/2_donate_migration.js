const Donates = artifacts.require("Donates");

module.exports = function (deployer) {
  deployer.deploy(Donates);
};
