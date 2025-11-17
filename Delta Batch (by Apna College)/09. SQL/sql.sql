CREATE DATABASE college;

CREATE DATABASE xyz;
DROP DATABASE xyz;

USE college;

CREATE TABLE student(
roll_no INT, 
name VARCHAR(30),
age INT
);

INSERT INTO student VALUES 
(1,"rover",21),
(2,"aman",23),
(4,"rajeev",33);

SELECT*FROM student;

-- -- --  Database queries 
-- On mentioning (IF/IF NOT), we get a warning instead of error
CREATE DATABASE IF NOT EXISTS college;
CREATE DATABASE IF NOT EXISTS instagram;

DROP DATABASE instagram;
DROP DATABASE IF EXISTS youtube;



SHOW DATABASES;
SHOW TABLES;

USE instagram;
 -- -- -- -- Table Queries
 -- -- --   Create 
 
-- This table contains foreign key
 CREATE TABLE user(
Id INT, 
Name Varchar(30) NOT NULL,
Age INT,
Email Varchar(30) UNIQUE ,
Followers INT DEFAULT 0,
Following INT,
CONSTRAINT age_check CHECK(Age>=18), -- age_check is optional here
-- 2 ways for writing Primary Key
-- 1st :Id INT PRIMARY KEY
-- 2nd :
-- -- Id INT,
-- -- PRIMARY KEY (Id) 
PRIMARY KEY (Id)
);

-- This table contains primary key
 CREATE TABLE Posts(
 Id INT PRIMARY KEY,
 content VARCHAR(30),
 user_id INT,
 FOREIGN KEY (user_id) references user(Id)
 );
 

 
 -- -- -- Insert
	 INSERT INTO user 
	 (Id,Age,Name,Email,Followers, Following)
	 VALUES
	 (1,34,"Adam","adam123@yahoo.com",111,122),
	 (2,27,"Raghab","raghab55@yahoo.com",12000,12),
	 (3,24,"Erwin","erwin123@yahoo.com",11,66);



 
 SELECT * FROM user;
 SELECT DISTINCT age FROM user;
 
 
 
 
 
 -- -- -- -- Aggregate Functions
  -- performs calculations on set of values and returns a single value
 
 SELECT count(age)
 FROM user
 WHERE AGE>25;
 
 SELECT max(age) 
 FROM user;
  
  SELECT min(age)
  FROM user;
  
  SELECT sum(followers)
  FROM user;
  
  SELECT avg(age)
  FROM user;
  
 
 
 -- -- -- -- Clauses
 -- -- --Where Clause
 SELECT *
 FROM user 
 -- --Arithmetic
 -- WHERE age+1 = 28 ;
 -- -- Comparison
 -- WHERE followers>=100;
 -- -- Logical
 -- WHERE (age>25 AND followers >200);
 -- WHERE Age BETWEEN 20 AND 30;
 --  WHERE email IN ("raghab55@yahoo.com" ,"adam123@yahoo.com");
   WHERE email NOT IN ("raghab55@yahoo.com" ,"adam123@yahoo.com");
 -- -- Bitwise 
 
 
 -- -- -- Limit Clause
 -- sets an upper limit 
 SELECT name ,age ,email 
 FROM user
 LIMIT 2;
  
  -- -- -- Offset Clause
  -- Pair with limit clause
  SELECT name ,age ,email 
 FROM user
 LIMIT 2
 OFFSET 1;
  -- -- -- Order By Clause
  SELECT *
  FROM user
  ORDER BY age DESC; -- -- Default sorting is done in ascending order
  
  -- -- -- GROUP BY Clause
  -- Generally we group on the basis of aggregate function
  
  -- Grouping on the basis of age
  SELECT age, count(Id)
  FROM user
  GROUP BY age;
  
   SELECT age, max(followers) --  we cant write name here as name cannot be grouped
   -- The bottomline is that we have to mention columns that can be grouped before aggregate functions
  FROM user
  GROUP BY age;
  
  select *FROM user;
  -- -- HAVING CLAUSE
  -- similar to WHERE but, used when we want to apply some condition after grouping
  -- use only after grouping
  SELECT age, min(following), max(followers) -- age just got confused between which followers to choose from the options, we have to explicitly mention using aggregate function Eg(Not mentioned so doesnt work): SELECT age, min, max(followers) 
  FROM user
  GROUP BY age
  HAVING max(followers)>1500 -- condition applied over group instead of entire table
  ORDER BY age desc;


  
-- -- -- -- Table Queries (Continued)

-- -- --  Update(to update existing rows)
 -- This wont work normally
 -- To use this, we first have to turn off safe mode
 -- -- Turning safe mode off
 SET SQL_SAFE_UPDATES=0;
 -- Now updating
 UPDATE user 
 SET followers = 999
 WHERE age=39;
 
 
 -- -- --  Delete
 -- deletes existing rows
 -- If rows not mentioned explicitly using WHERE, all rows will be deleted
 DELETE FROM user
 WHERE age=90;
 
 
 -- -- -- Alter
 -- Changes schema 
 -- Eg for column , we can change: name, DataType, constraints, add/delete columns
 
 -- -- ADD Column
 ALTER TABLE user
 ADD COLUMN city VARCHAR(25) DEFAULT "Delhi";
 
 -- -- DROP Column (Deletes a column)
 ALTER TABLE user
 DROP COLUMN school;
 
 -- -- RENAME Table
 ALTER TABLE posts
 RENAME TO Uploads;
 
 
 -- -- CHANGE Column(rename)
 ALTER TABLE user
 CHANGE COLUMN city location varchar(30) DEFAULT 'Delhi';
 
 -- -- MODIFY Column(modify datatype/constraint)
 -- This wont change existing values, so we have to insert new value and changes will be reflected there
 ALTER TABLE user
 MODIFY location varchar(50) DEFAULT 'Pune';
 -- Inserting new values
 INSERT INTO user
 (Id,Name,Age,Email,Followers,Following)
 VALUES
 (10,"Omen",27, "omengaming@gmail.com",333,2090);

 
 -- -- -- Truncate (To delete table's data)
 -- Lets create dummy table
 CREATE TABLE Dummy(
roll_no INT, 
name VARCHAR(30),
age INT
);
INSERT INTO Dummy 
Values
(26,"Karnan",23);
 -- Now truncating it
 -- We cannot truncate a table with Foreign Key(FK) if it is connected to other table
 -- To Break connection: we have to either remove FK constraint or Truncate the table with FK to break connection
 TRUNCATE TABLE Dummy;
 
 SELECT *from Dummy;




-- -- -- -- -- -- -- -- -- Pracice Question 1
CREATE DATABASE College;

USE College;


CREATE TABLE Teacher(
Id INT PRIMARY KEY,
Name Varchar(30) ,
Subject Varchar(30) ,
Salary INT 
);


INSERT INTO Teacher 
(Id,Name,Subject,Salary)
VALUES
(23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);


SELECT *FROM Teacher;


SELECT *from Teacher 
where salary>55000;

ALTER TABLE Teacher
CHANGE COLUMN Salary ctc INT ;

UPDATE Teacher
Set ctc=ctc*1.25;

ALTER TABLE Teacher
ADD COLUMN City VARCHAR(30) Default "Gurgaon";

ALTER TABLE Teacher
DROP COLUMN ctc;


-- -- -- -- -- -- -- -- -- Pracice Question 2
CREATE TABLE Student
(Roll_no INT PRIMARY KEY,
Name VARCHAR(30),
City VARCHAR(30),
Marks INT);

INSERT INTO Student
(Roll_no,Name,City,Marks)
VALUES
(110,"adam","Delhi",76),
(108,"bob","Mumbai",65),
(124,"casey","Pune",94),
(112, "duke","Pune",80);



SELECT *FROM Student
WHERE marks>75;


SELECT DISTINCT City FROM Student;

SELECT City, max(Marks)
FROM Student
GROUP BY City;

SELECT avg(Marks)
FROM Student;

ALTER TABLE Student
ADD COLUMN Grade VARCHAR(2);

UPDATE Student 
SET Grade='O' WHERE Marks>=80;

UPDATE Student 
SET Grade="A" WHERE Marks>=70 AND Marks<80;

UPDATE Student 
SET Grade="B" WHERE Marks>=60 AND Marks<70;

 SELECT *FROM Student;