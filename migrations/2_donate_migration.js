const Migrations = artifacts.require("Donates");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
