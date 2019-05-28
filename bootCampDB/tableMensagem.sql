CREATE TABLE `mensagem` (
  `hora_envio` time NOT NULL,
  `data_envio` date NOT NULL,
  `usuario_id_usuario` int(11) DEFAULT NULL,
  `conteudo` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`hora_envio`,`data_envio`),
  KEY `usuario_id_usuario` (`usuario_id_usuario`),
  CONSTRAINT `mensagem_ibfk_1` FOREIGN KEY (`usuario_id_usuario`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1