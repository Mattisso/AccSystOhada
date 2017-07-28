/**
 * oStblArea 
 */
SET FOREIGN_KEY_CHECKS=0;
 
-- ----------------------------	

-- Table structure for `oStblArea`
-- ----------------------------
DROP TABLE IF EXISTS `oStblArea`;
CREATE TABLE `oStblArea` (
`Id` int not nul,
  `AreaShortName` char(255) NOT NULL COMMENT 'Continent code',
  `AreaLongName` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;
 
-- ----------------------------
-- Records of oStblArea
-- ----------------------------

INSERT INTO `oStblArea` VALUES  (134000,'ActifCircul','');
INSERT INTO `oStblArea` VALUES  (134010,'AmortImmo','');
INSERT INTO `oStblArea` VALUES  (134020,'AvanceAcpteImmo','');
INSERT INTO `oStblArea` VALUES  (134030,'ChargesImmo','');
INSERT INTO `oStblArea` VALUES  (134040,'CreancEmploi','');
INSERT INTO `oStblArea` VALUES  (134050,'EcartConvActif','');
INSERT INTO `oStblArea` VALUES  (134060,'ImmoCorpo','');
INSERT INTO `oStblArea` VALUES  (134070,'ImmoFinan','');
INSERT INTO `oStblArea` VALUES  (134080,'ImmoIncorp','');
INSERT INTO `oStblArea` VALUES  (134090,'Provis','');
INSERT INTO `oStblArea` VALUES  (134100,'Stocks','');
INSERT INTO `oStblArea` VALUES  (134110,'TresorActif','');
INSERT INTO `oStblArea` VALUES  (144000,'ChrgeFinanc','');
INSERT INTO `oStblArea` VALUES  (144010,'ChrgePerso','');
INSERT INTO `oStblArea` VALUES  (144020,'ChrgesHAO','');
INSERT INTO `oStblArea` VALUES  (144030,'ChrgesMBrutMarch','');
INSERT INTO `oStblArea` VALUES  (144040,'ChrgesMBrutMatier','');
INSERT INTO `oStblArea` VALUES  (144050,'ChrgesValAjout','');
INSERT INTO `oStblArea` VALUES  (144060,'DotatAmortProv','');
INSERT INTO `oStblArea` VALUES  (144070,'ParticImpot','');
INSERT INTO `oStblArea` VALUES  (154000,'ProdMBrutMarch','');
INSERT INTO `oStblArea` VALUES  (154010,'ProdMBrutMatier','');
INSERT INTO `oStblArea` VALUES  (154040,'ProdValAjout','');
INSERT INTO `oStblArea` VALUES  (124000,'AutrCapiPro','');
INSERT INTO `oStblArea` VALUES  (124010,'Capital','');
INSERT INTO `oStblArea` VALUES  (124020,'DetteFin','');
INSERT INTO `oStblArea` VALUES  (124030,'EcartConvPassif','');
INSERT INTO `oStblArea` VALUES  (124040,'PassiCircul','');
INSERT INTO `oStblArea` VALUES  (124050,'PrimeReserv','');
INSERT INTO `oStblArea` VALUES  (124060,'ProviFin_Prov','');
INSERT INTO `oStblArea` VALUES  (124070,'ResultExerc','');
INSERT INTO `oStblArea` VALUES  (124080,'TresorPassi','');
INSERT INTO `oStblArea` VALUES  (154020,'ProdtFinanc','');
INSERT INTO `oStblArea` VALUES  (154030,'ProdtHAO','');
INSERT INTO `oStblArea` VALUES  (154050,'RepriProv','');
INSERT INTO `oStblArea` VALUES  (154060,'TransfChrge','');
INSERT INTO `oStblArea` VALUES  (504000,'tblResultActOrd','');
INSERT INTO `oStblArea` VALUES  (504010,'tblResultExBruExpl','');
INSERT INTO `oStblArea` VALUES  (504020,'tblResultExpl','');
INSERT INTO `oStblArea` VALUES  (504030,'tblResultFinanc ','');
INSERT INTO `oStblArea` VALUES  (504040,'tblResultHOA','');
INSERT INTO `oStblArea` VALUES  (504050,'tblResultMBrutMarch','');
INSERT INTO `oStblArea` VALUES  (504060,'tblResultMBrutMatier','');
INSERT INTO `oStblArea` VALUES  (504070,'tblResultNet','');
INSERT INTO `oStblArea` VALUES  (504080,'tblResultValAjout','');
