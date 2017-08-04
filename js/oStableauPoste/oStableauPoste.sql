=============
/**
 * oStableauPoste
 */
SET FOREIGN_KEY_CHECKS=0;
 
-- ----------------------------
-- Table structure for `oStableauPoste`
-- ----------------------------
DROP TABLE IF EXISTS `oStableauPoste`;
CREATE TABLE `oStableauPoste` (
  `Id` INT ,
  `StableauName` char(255) NOT NULL COMMENT 'oStableauPoste code',
  `StbleauLongName` varchar(255) DEFAULT NULL
  
  PRIMARY KEY (`TableauName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;
 
-- ----------------------------
-- Records of Tableau
-- ----------------------------

INSERT  INTO oStableauPoste
        (Id ,StableauName, StbleauLongName)
 --INSERT INTO `oStableauPoste` VALUES  (13100,'tblBilanActif','Bilan Actif');       
INSERT INTO `oStableauPoste` VALUES  (13100, tblBilanActif,Bilan Actif);
INSERT INTO `oStableauPoste` VALUES  (13200,'tblAmortImmo','Amortissements');
INSERT INTO `oStableauPoste` VALUES  (13300,'tblProvision','Provisions');
INSERT INTO `oStableauPoste` VALUES  (14100,'tblResultChrges','Résultat Charges');
INSERT INTO `oStableauPoste` VALUES  (12100,'tblBilanPassif','Bilan Passif');
INSERT INTO `oStableauPoste` VALUES  (15100,'tblResultPrdts','Résultat Produits');
INSERT INTO `oStableauPoste` VALUES  (50100,'tblResultat','Résultat');
INSERT INTO `oStableauPoste` VALUES  (60100,'tblChifAffair','Chiffre d'Affair');


