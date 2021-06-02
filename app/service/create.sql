create table users(
  id INT NOT NULL AUTO_INCREMENT,
  age INT,
  count INT,
  name VARCHAR(40),
  gender VARCHAR(3),
  phone VARCHAR(13),
  register_date DATE,
  PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;