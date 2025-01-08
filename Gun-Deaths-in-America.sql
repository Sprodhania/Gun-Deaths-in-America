DROP TABLE IF EXISTS Guns_2006;
CREATE TABLE Guns_2006(
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);
SELECT * FROM Guns_2006;
///////////////////////////

DROP TABLE IF EXISTS Guns_2007;
CREATE TABLE Guns_2007 (
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);

SELECT * FROM Guns_2007;
////////////////////////

CREATE TABLE Guns_2008 (
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);

SELECT * FROM Guns_2008;
///////////////////////////

CREATE TABLE Guns_2009(
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);

SELECT * FROM Guns_2009;
////////////////////////

CREATE TABLE Guns_2010(
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);
SELECT * FROM Guns_2010;
/////////////////////////


CREATE TABLE Guns_2011(
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);
SELECT * FROM Guns_2011;

CREATE TABLE Guns_2012(
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);

SELECT * FROM Guns_2012;
///////////////////////////

CREATE TABLE Guns_2013(
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);
SELECT * FROM Guns_2013;
////////////////////////////


CREATE TABLE Guns_2014(
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);
SELECT * FROM Guns_2014;
///////////////////////////

CREATE TABLE Guns_2015(
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);
SELECT * FROM Guns_2015;
/////////////////////////

CREATE TABLE Guns_2016(
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);
SELECT * FROM Guns_2016;
///////////////////////////

CREATE TABLE Guns_2017(
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);
SELECT * FROM Guns_2017;
///////////////////////////

CREATE TABLE Guns_2018(
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);
SELECT * FROM Guns_2018;
//////////////////////////

CREATE TABLE Guns_2019(
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);
SELECT * FROM Guns_2019;
///////////////////////////

CREATE TABLE Guns_2020(
year Integer,
month Integer,
intent text,
police Integer,
sex text,
age VARCHAR (20) NOT NULL,
race text,
hispanic Integer,
place text,
education text
);
SELECT * FROM Guns_2020;
///////////////////////////

CREATE TABLE combined_guns_data AS
SELECT * FROM Guns_2006
UNION ALL
SELECT * FROM Guns_2007
UNION ALL
SELECT * FROM Guns_2008
UNION ALL
SELECT * FROM Guns_2009
UNION ALL
SELECT * FROM Guns_2010
UNION ALL
SELECT * FROM Guns_2011
UNION ALL
SELECT * FROM Guns_2012
UNION ALL
SELECT * FROM Guns_2013
UNION ALL
SELECT * FROM Guns_2014
UNION ALL
SELECT * FROM Guns_2015
UNION ALL
SELECT * FROM Guns_2016
UNION ALL
SELECT * FROM Guns_2017
UNION ALL
SELECT * FROM Guns_2018
UNION ALL
SELECT * FROM Guns_2019
UNION ALL
SELECT * FROM Guns_2020;

SELECT * FROM combined_guns_data;